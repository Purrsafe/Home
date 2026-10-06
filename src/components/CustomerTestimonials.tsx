import React, { useState } from 'react';
import { Star, CheckCircle, Heart, MessageSquarePlus, ThumbsUp, Send, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Import bundled customer images directly so Vite bundles and resolves them with guaranteed valid URLs
import customer1 from '../assets/images/vietnamese_customer_1_1790845839947.jpg';
import customer2 from '../assets/images/vietnamese_customer_2_1790845858178.jpg';
import customer3 from '../assets/images/vietnamese_customer_3_1790845874649.jpg';
import customer4 from '../assets/images/vietnamese_customer_4_1790845895907.jpg';

const customerAvatarMap: Record<string, string> = {
  'owner-1': customer1,
  'owner-2': customer2,
  'owner-3': customer3,
  'owner-4': customer4,
  'owner-5': customer1,
  'owner-6': customer2,
  'owner-7': customer3,
  'owner-8': customer4,
  '/images/avatar1.jpg': customer1,
  '/images/avatar2.jpg': customer2,
  '/images/avatar3.jpg': customer3,
  '/images/avatar4.jpg': customer4,
};

const customerAvatarList = [customer1, customer2, customer3, customer4];

interface UserReview {
  id: string;
  author: string;
  role: string;
  location: string;
  avatar: string;
  stars: number;
  content: string;
  date: string;
  category?: 'all' | 'odor' | 'dust' | 'clump' | 'distributor';
  likes?: number;
  tagLabel?: string;
  isCustom?: boolean;
}

export const CustomerTestimonials: React.FC = () => {
  const { t } = useLanguage();
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customReviews, setCustomReviews] = useState<UserReview[]>([]);
  
  const [likes, setLikes] = useState<Record<string, number>>({
    'owner-1': 56,
    'owner-2': 42,
    'owner-3': 49,
    'owner-4': 63,
    'owner-5': 78,
    'owner-6': 51,
    'owner-7': 88,
    'owner-8': 39,
  });

  // Modal Form state
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newStars, setNewStars] = useState(5);
  const [newCategory, setNewCategory] = useState<'odor' | 'dust' | 'clump' | 'distributor'>('odor');
  const [newContent, setNewContent] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Quick inline comment state
  const [quickName, setQuickName] = useState('');
  const [quickComment, setQuickComment] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const filterTabs = [
    { id: 'all', label: t.reviews.filterAll },
    { id: 'odor', label: t.reviews.filterOdor },
    { id: 'dust', label: t.reviews.filterDust },
    { id: 'clump', label: t.reviews.filterClump },
    { id: 'distributor', label: t.reviews.filterDistributor || 'Đại Lý & Pet Shop' },
  ];

  const handleLike = (id: string) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newContent.trim()) return;

    const newRev: UserReview = {
      id: `custom-${Date.now()}`,
      author: newAuthor.trim(),
      role: newRole.trim() || 'Người nuôi mèo',
      location: 'Việt Nam',
      avatar: customerAvatarList[Math.floor(Math.random() * customerAvatarList.length)],
      stars: newStars,
      content: newContent.trim(),
      date: 'Vừa xong',
      category: newCategory,
      likes: 1,
      tagLabel:
        newCategory === 'odor'
          ? '#KhửMùiPhòngKín'
          : newCategory === 'dust'
          ? '#KhôngBụiHôHấp'
          : newCategory === 'clump'
          ? '#VónChặtKhôngDínhĐáy'
          : '#ĐạiLýPetShop',
      isCustom: true,
    };

    setCustomReviews((prev) => [newRev, ...prev]);
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setNewAuthor('');
      setNewRole('');
      setNewContent('');
      setNewStars(5);
    }, 1800);
  };

  const handleQuickComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName.trim() || !quickComment.trim()) return;

    const newRev: UserReview = {
      id: `quick-${Date.now()}`,
      author: quickName.trim(),
      role: 'Bình luận trực tiếp từ khách hàng',
      location: 'Cộng đồng PurrSafe',
      avatar: customerAvatarList[customReviews.length % customerAvatarList.length],
      stars: 5,
      content: quickComment.trim(),
      date: 'Vừa xong',
      category: 'odor',
      likes: 1,
      tagLabel: '#KháchHàngBìnhLuận',
      isCustom: true,
    };

    setCustomReviews((prev) => [newRev, ...prev]);
    setQuickSubmitted(true);
    setQuickName('');
    setQuickComment('');

    setTimeout(() => {
      setQuickSubmitted(false);
    }, 3000);
  };

  // Combine standard translations reviews with any user-posted comments
  const allReviews: UserReview[] = [
    ...customReviews,
    ...t.reviews.items.map((it) => ({
      ...it,
      category: it.category || 'all',
      likes: likes[it.id] ?? it.likes ?? 30,
    })),
  ];

  const displayedReviews = allReviews.filter((item) => {
    if (selectedTag === 'all') return true;
    return item.category === selectedTag;
  });

  const getAvatarSrc = (item: UserReview, idx: number) => {
    if (item.avatar && item.avatar.startsWith('data:')) return item.avatar;
    if (customerAvatarMap[item.id]) return customerAvatarMap[item.id];
    if (item.avatar && customerAvatarMap[item.avatar]) return customerAvatarMap[item.avatar];
    return customerAvatarList[idx % customerAvatarList.length];
  };

  return (
    <section id="danh-gia" className="py-16 sm:py-24 bg-transparent border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-amber-800 bg-amber-100/80 px-3 py-1 rounded-md border border-amber-300 mb-3">
              <Heart className="w-3.5 h-3.5 fill-amber-700 text-amber-700" /> {t.reviews.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 leading-snug">
              {t.reviews.title1} <span className="text-amber-700">{t.reviews.titleHighlight}</span>?
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-2 max-w-2xl">
              {t.reviews.desc}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4 text-amber-200" />
              <span>{t.reviews.writeReviewBtn}</span>
            </button>
          </div>
        </div>

        {/* Aggregate Score Bar */}
        <div className="bg-white/85 backdrop-blur-xs rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-xs mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="text-4xl sm:text-5xl font-black text-stone-900">
              4.9<span className="text-xl text-stone-400 font-normal">/5</span>
            </div>
            <div>
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs sm:text-sm text-stone-600 font-medium mt-1">
                {t.reviews.basedOn} ({allReviews.length} bình luận & đánh giá)
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 divide-x divide-stone-200 text-center">
            {t.reviews.metrics.map((m, idx) => (
              <div key={idx} className="px-2">
                <span className="text-xs text-stone-500 block">{m.label}</span>
                <strong className="text-sm sm:text-base font-extrabold text-amber-800">{m.value}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Controls with Active Category Counter */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filterTabs.map((tab) => {
            const count =
              tab.id === 'all'
                ? allReviews.length
                : allReviews.filter((r) => r.category === tab.id).length;
            const isSelected = selectedTag === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTag(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? 'bg-amber-950/40 text-amber-100' : 'bg-stone-100 text-stone-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {displayedReviews.map((review, idx) => {
            const avatarSrc = getAvatarSrc(review, idx);
            const currentLikes = likes[review.id] ?? review.likes ?? 35;

            return (
              <div
                key={review.id}
                className="bg-white/85 backdrop-blur-xs rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                <div>
                  {/* Tag and Custom badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-extrabold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/80">
                      {review.tagLabel || '#PurrSafeReview'}
                    </span>
                    {review.isCustom && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-300 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Mới đăng
                      </span>
                    )}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="relative shrink-0">
                      <img
                        src={avatarSrc}
                        alt={review.author}
                        onError={(e) => {
                          // Guaranteed fallback so images never break or error out
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src = customerAvatarList[idx % customerAvatarList.length];
                        }}
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-200 shadow-xs group-hover:scale-105 transition-transform"
                      />
                      <span className="absolute -bottom-1 -right-1 bg-amber-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black border border-white shadow-2xs">
                        🐾
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-stone-900 text-base">
                          {review.author}
                        </span>
                        <span title={t.reviews.verifiedBuyer}>
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 inline" />
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 truncate">{review.role}</p>
                      {review.location && (
                        <p className="text-[11px] text-amber-800 font-medium">📍 {review.location}</p>
                      )}
                    </div>
                  </div>

                  {/* Stars and Date */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-amber-400">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-stone-400">{review.date}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-stone-700 text-sm leading-relaxed mb-4 italic">
                    "{review.content}"
                  </p>
                </div>

                {/* Bottom Helpful Counter */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="text-[11px] text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md">
                    {t.reviews.verifiedBuyer}
                  </span>

                  <button
                    onClick={() => handleLike(review.id)}
                    className="flex items-center gap-1.5 hover:text-amber-800 transition-colors py-1 px-2.5 rounded-lg hover:bg-stone-50 cursor-pointer"
                  >
                    <ThumbsUp className="w-3.5 h-3.5 text-stone-500" />
                    <span>{t.reviews.helpful} ({currentLikes})</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inline Quick Comment Bar */}
        <div className="bg-white/85 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm mb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100/60 px-2.5 py-0.5 rounded-md mb-1.5">
                <span>💬</span> Bình luận & Thảo luận nhanh
              </div>
              <h3 className="text-lg sm:text-xl font-black text-stone-900">
                Bạn đã trải nghiệm Cát Mèo PurrSafe? Để lại nhận xét của bạn!
              </h3>
            </div>
            <span className="text-xs text-stone-500">
              Ý kiến của bạn sẽ hiển thị ngay lập tức trên website
            </span>
          </div>

          {quickSubmitted ? (
            <div className="p-4 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-200 font-bold text-sm text-center flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Cảm ơn bạn! Bình luận của bạn đã được đăng thành công lên danh sách đánh giá.</span>
            </div>
          ) : (
            <form onSubmit={handleQuickComment} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                required
                placeholder="Tên của bạn (VD: Sen nuôi mèo Mướp)..."
                value={quickName}
                onChange={(e) => setQuickName(e.target.value)}
                className="w-full sm:w-1/3 px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50/50"
              />
              <input
                type="text"
                required
                placeholder="Nhận xét của bạn về độ vón, khử mùi, không dính đáy khay..."
                value={quickComment}
                onChange={(e) => setQuickComment(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50/50"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Gửi bình luận</span>
              </button>
            </form>
          )}
        </div>

        {/* Modal: Write a detailed review */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-stone-900">
                  {t.reviews.modalTitle}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {formSubmitted ? (
                <div className="p-6 text-center space-y-2 bg-emerald-50 rounded-2xl border border-emerald-200">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <div className="text-base font-bold text-emerald-900">
                    {t.reviews.modalSubmittedTitle}
                  </div>
                  <p className="text-xs text-emerald-700">
                    {t.reviews.modalSubmittedDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {t.reviews.formName}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="VD: Chị Minh Anh (Nuôi 2 bé Mèo Ba Tư)"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {t.reviews.formLocation}
                      </label>
                      <input
                        type="text"
                        placeholder="VD: Quận 7, TP. HCM"
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Chủ đề đánh giá
                      </label>
                      <select
                        value={newCategory}
                        onChange={(e) =>
                          setNewCategory(e.target.value as 'odor' | 'dust' | 'clump' | 'distributor')
                        }
                        className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                      >
                        <option value="odor">Khử mùi than hoạt tính</option>
                        <option value="clump">Vón cục & không dính đáy</option>
                        <option value="dust">Không bụi hô hấp</option>
                        <option value="distributor">Đại lý & Pet Shop</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {t.reviews.formRating}
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewStars(star)}
                          className="p-1 text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= newStars ? 'fill-amber-400 text-amber-400' : 'text-stone-300'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-stone-600 ml-2">
                        {newStars} / 5 Sao
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {t.reviews.formContent}
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Chia sẻ trải nghiệm thực tế của bạn khi sử dụng Cát Mèo PurrSafe..."
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-stone-600 hover:bg-stone-100 text-sm font-medium cursor-pointer"
                    >
                      {t.reviews.formCancel}
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-sm font-bold shadow-md cursor-pointer"
                    >
                      {t.reviews.formSubmit}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
