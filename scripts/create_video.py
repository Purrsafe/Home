import subprocess
import os

os.makedirs('public/videos', exist_ok=True)
output_file = 'public/videos/purrsafe_test_quality.mp4'

# Path to the source frames
img1 = 'src/assets/images/purrsafe_real_outdoor_1790848351015.jpg'
img2 = 'src/assets/images/purrsafe_ingredients_1790844145471.jpg'
img3 = 'src/assets/images/purrsafe_test_liquid_1791197189732.jpg'
img4 = 'src/assets/images/purrsafe_test_clump_1791197205585.jpg'
img5 = 'src/assets/images/purrsafe_test_drop_1791197225852.jpg'

font_file = '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf'

# We will create 5 sub-clips with zoompan and drawtext filter, then concatenate them
clips = [
    (img1, "Cung minh kiem chung chat luong cat PurrSafe nhe!", "01. KIEM CHUNG THUC TE"),
    (img2, "Kha nang tham hut nuoc sieu toc", "02. HAT CAT MIX 70:20:10"),
    (img3, "Thu nghiem do chat long vao khay cat", "03. THU NGHIEM THAM HUT"),
    (img4, "Von cuc nhanh chua day 30s - Khong bam day", "04. VON CUC & KHONG BAM DAY"),
    (img5, "Va dap manh khong lo bi vo vun", "05. DO BEN KHOI VON")
]

clip_files = []
for i, (img, sub, tag) in enumerate(clips):
    out_clip = f'/tmp/clip_{i}.mp4'
    clip_files.append(out_clip)
    
    # filter with scale, zoompan, subtitle box
    vf = (
        f"scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,"
        f"zoompan=z='min(zoom+0.0015,1.25)':d=125:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720,"
        f"drawbox=y=ih-120:color=black@0.7:width=iw:height=100:t=fill,"
        f"drawtext=fontfile='{font_file}':text='{tag}':fontcolor=0xFFB800:fontsize=22:x=60:y=h-105,"
        f"drawtext=fontfile='{font_file}':text='{sub}':fontcolor=white:fontsize=32:x=60:y=h-65"
    )
    
    cmd = [
        'ffmpeg', '-y', '-loop', '1', '-i', img,
        '-t', '5',
        '-vf', vf,
        '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-r', '25',
        out_clip
    ]
    subprocess.run(cmd, check=True)

# Create concat list
concat_list = '/tmp/concat_list.txt'
with open(concat_list, 'w') as f:
    for clip in clip_files:
        f.write(f"file '{clip}'\n")

# Generate pleasant gentle chime/tone audio for 25s
audio_cmd = [
    'ffmpeg', '-y',
    '-f', 'lavfi', '-i', 'sine=frequency=440:duration=25',
    '-af', 'volume=0.03',
    '-c:a', 'aac', '/tmp/bg_tone.aac'
]
subprocess.run(audio_cmd, check=True)

# Concat video and add audio
final_cmd = [
    'ffmpeg', '-y',
    '-f', 'concat', '-safe', '0', '-i', concat_list,
    '-i', '/tmp/bg_tone.aac',
    '-c:v', 'copy',
    '-c:a', 'aac',
    '-shortest',
    '-movflags', '+faststart',
    output_file
]
subprocess.run(final_cmd, check=True)
print("SUCCESS: Video generated at", output_file)
