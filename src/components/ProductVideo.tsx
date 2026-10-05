import React, { useState } from 'react';
import { Play, Pause, Film, Volume2, Sparkles, CheckCircle2, Link as LinkIcon, RotateCcw } from 'lucide-react';
import photoStudio from '../assets/images/purrsafe_studio_exact_1790848511657.jpg';

interface ProductVideoProps {
  initialVideoUrl?: string;
  className?: string;
}

// Helper to parse YouTube URL to embed URL
export function getEmbedUrl(url: string): { type: 'youtube' | 'video' | 'empty'; src: string } {
  if (!url || !url.trim()) {
    return { type: 'empty', src: '' };
  }

  const trimmed = url.trim();

  // YouTube matchers
  const ytMatch = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  if (ytMatch && ytMatch[1]) {
    return {
      type: 'youtube',
      src: `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1`,
    };
  }

  // Direct video file (mp4, webm, ogg, etc.)
  if (trimmed.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i) || trimmed.startsWith('blob:') || trimmed.startsWith('data:video/')) {
    return {
      type: 'video',
      src: trimmed,
    };
  }

  // Generic iframe embed (e.g. cloud drive preview or embed link)
  if (trimmed.includes('drive.google.com/file') && trimmed.includes('/view')) {
    return {
      type: 'youtube', // embed in iframe
      src: trimmed.replace('/view', '/preview'),
    };
  }

  return {
    type: 'youtube',
    src: trimmed,
  };
}

export const ProductVideo: React.FC<ProductVideoProps> = ({
  initialVideoUrl = '',
  className = '',
}) => {
  const [videoUrl, setVideoUrl] = useState<string>(initialVideoUrl);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean>(false);
  const [tempUrl, setTempUrl] = useState<string>(initialVideoUrl);

  const embedInfo = getEmbedUrl(videoUrl);

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    setVideoUrl(tempUrl.trim());
    setIsPlaying(true);
    setShowInput(false);
  };

  return (
    <div className={`mt-5 rounded-2xl bg-white/95 backdrop-blur-xs border border-stone-200/90 shadow-md p-3.5 sm:p-4 text-left ${className}`}>
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
          </span>
          <span className="text-xs sm:text-sm font-extrabold text-stone-900 tracking-tight flex items-center gap-1.5">
            <Film className="w-3.5 h-3.5 text-amber-700" />
            <span>Video Kiểm Nghiệm Thực Tế</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setShowInput(!showInput)}
            className="text-[11px] font-bold text-stone-600 hover:text-amber-800 bg-stone-100 hover:bg-stone-200 px-2 py-1 rounded-lg border border-stone-200 transition-colors flex items-center gap-1 cursor-pointer"
            title="Nhập hoặc đổi link video"
          >
            <LinkIcon className="w-3 h-3 text-stone-500" />
            <span>{videoUrl ? 'Đổi video' : 'Thêm link'}</span>
          </button>
          <span className="hidden sm:inline-block text-[11px] font-bold text-amber-800 bg-amber-100/90 px-2 py-0.5 rounded-full border border-amber-200">
            Vón 3s · Không bụi
          </span>
        </div>
      </div>

      {/* Quick Input Bar if user wants to paste link directly */}
      {showInput && (
        <form onSubmit={handleApplyUrl} className="mb-3 p-2.5 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
          <div className="text-[11px] font-medium text-stone-600">
            Dán đường dẫn video (YouTube, TikTok, Facebook, Drive hoặc link tệp .mp4):
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="VD: https://youtube.com/watch?v=... hoặc link video MP4"
              value={tempUrl}
              onChange={(e) => setTempUrl(e.target.value)}
              className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-600 bg-white"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Áp dụng
            </button>
          </div>
        </form>
      )}

      {/* Video Container Area */}
      <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-stone-900 border border-stone-800 shadow-inner group">
        {isPlaying && embedInfo.type !== 'empty' ? (
          embedInfo.type === 'video' ? (
            <video
              src={embedInfo.src}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <iframe
              src={embedInfo.src}
              title="PurrSafe Product Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )
        ) : (
          /* Video Poster / Standby Cover with Play Button */
          <div
            onClick={() => {
              if (videoUrl) {
                setIsPlaying(true);
              } else {
                setShowInput(true);
              }
            }}
            className="relative w-full h-full cursor-pointer flex items-center justify-center overflow-hidden"
          >
            {/* Background image preview */}
            <img
              src={photoStudio}
              alt="PurrSafe Video Thumbnail"
              className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-stone-950/30" />

            {/* Big Pulsing Play Button */}
            <div className="relative z-10 flex flex-col items-center gap-2 text-center p-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-600/90 hover:bg-amber-500 text-white flex items-center justify-center shadow-xl shadow-amber-950/50 group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
              </div>

              <div className="bg-stone-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white text-[11px] sm:text-xs font-bold shadow-md">
                {videoUrl ? 'Bấm để phát video kiểm nghiệm thực tế' : 'Bấm để thêm & phát video'}
              </div>
            </div>

            {/* Top Badge */}
            <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-bold border border-white/10">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>TEST ĐỘ VÓN 3 GIÂY & ĐỘ BỤI 0%</span>
            </div>

            {/* Bottom Info Ribbon */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between text-[11px] text-white/90">
              <span className="flex items-center gap-1 bg-stone-900/70 px-2 py-0.5 rounded text-[10px] font-medium">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Cát không dính đáy khay
              </span>
              <span className="bg-stone-900/70 px-2 py-0.5 rounded text-[10px] font-bold text-amber-400">
                100% Thực Tế
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Caption Footnote below Video */}
      <div className="mt-2 flex items-center justify-between text-[11px] text-stone-500 px-1">
        <span>🎬 Video quay cận cảnh hạt cát Mix đậu nành & than hoạt tính</span>
        {isPlaying && (
          <button
            type="button"
            onClick={() => setIsPlaying(false)}
            className="text-amber-800 hover:text-amber-900 font-bold cursor-pointer"
          >
            Đóng video
          </button>
        )}
      </div>
    </div>
  );
};
