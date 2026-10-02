import { IngredientInfo, ReviewItem } from '../types';

export const BRAND_INFO = {
  name: 'PurrSafe',
  productName: 'Cát Mèo Mix Hương Sữa 2.8Kg',
  fullName: 'PurrSafe Cát Mèo Mix Cao Cấp',
  slogan: 'Không chỉ là cát mèo, đây là PurrSafe.',
  subSlogan: 'LỰA CHỌN TỐI ƯU CHO MÈO CƯNG',
  weight: '2.8 Kg',
  scent: 'Hương Sữa Dịu Nhẹ Tự Nhiên',
  hotline: '0866780599',
  hotlineFormatted: '0866 780 599',
  zaloUrl: 'https://zalo.me/0866780599',
  address: 'Nguyễn Văn Bá, Phường Thủ Đức, TP. Hồ Chí Minh',
};

export const CORE_FEATURES = [
  {
    id: 'low-dust',
    title: 'Ít bụi',
    subtitle: 'Bảo vệ hệ hô hấp',
    desc: 'Quy trình sàng lọc công nghệ cao giúp loại bỏ triệt để bụi mịn, bảo vệ mắt và đường hô hấp nhạy cảm của mèo cưng và cả gia đình.',
    icon: 'Sparkles',
    highlight: 'Sạch bụi tối đa',
  },
  {
    id: 'odor-control',
    title: 'Khử mùi tối ưu',
    subtitle: 'Khóa mùi phân tử than',
    desc: 'Hàm lượng 20% than hoạt tính giúp hấp phụ triệt để khí Amoniac và vi khuẩn gây mùi, giữ không gian phòng kín luôn thơm dịu hương sữa.',
    icon: 'Wind',
    highlight: 'Khử mùi kép 24h',
  },
  {
    id: 'fast-clump',
    title: 'Vón cục nhanh',
    subtitle: 'Chỉ trong 3 giây',
    desc: 'Khoáng chất tự nhiên kết hợp sợi đậu nành phản ứng cực nhanh khi tiếp xúc chất lỏng, tạo khối kết tinh cứng chắc, không bị vỡ vụn khi sàng lọc.',
    icon: 'Layers',
    highlight: 'Khối tròn vững chắc',
  },
  {
    id: 'non-stick',
    title: 'Không bám đáy',
    subtitle: 'Dọn dẹp siêu nhàn',
    desc: 'Khối vón nằm gọn gàng phía trên bề mặt khay cát, tuyệt đối không tạo mảng bết ướt dính chặt đáy khay, giúp việc xúc dọn sạch bóng trong 5 giây.',
    icon: 'ShieldCheck',
    highlight: 'Khay luôn khô thoáng',
  },
];

export const BADGES = [
  { label: 'An toàn', desc: '100% tự nhiên, lành tính cho thú cưng', icon: 'Shield' },
  { label: 'Thân thiện', desc: 'Nguyên liệu sinh thái, sạch sẽ', icon: 'Leaf' },
  { label: 'Thấm hút tốt', desc: 'Hút ẩm nhanh chóng, khóa chặt mùi', icon: 'Droplets' },
];

export const INGREDIENTS: IngredientInfo[] = [
  {
    id: 'tofu',
    name: 'Đậu nành tự nhiên',
    englishName: 'Natural Soybean Fiber',
    ratio: '70%',
    badge: 'Sợi thực vật sinh học',
    shortDesc: 'Sợi bã đậu nành hữu cơ nguyên chất tinh chế ép đùn kích thước 2.0mm tiêu chuẩn.',
    detailedBenefits: [
      '100% bã đậu nành nguồn gốc thực vật sạch, an toàn và lành tính',
      'Nếu mèo con vô tình liếm hoặc ăn phải một lượng nhỏ vẫn vô hại cho đường ruột',
      'Hạt đậu nành 2.0mm đanh chắc, êm ái cho đệm thịt của mèo con lẫn mèo trưởng thành',
      'Kích thước hạt thông minh, không kẹt vào kẽ ngón chân mèo, tránh việc mèo mang cát vương vãi ra sàn',
    ],
    icon: 'Wheat',
    color: 'from-amber-50 to-orange-50 border-amber-200 text-amber-900',
  },
  {
    id: 'carbon',
    name: 'Than hoạt tính',
    englishName: 'Activated Carbon',
    ratio: '20%',
    badge: 'Chuyên gia khử mùi',
    shortDesc: 'Chiếm đến 20% công thức, hạt than hoạt tính vi mô có cấu trúc xốp mao dẫn nano hấp phụ mùi amoniac vượt trội.',
    detailedBenefits: [
      'Sản xuất từ than hoạt tính cao cấp, an toàn tuyệt đối',
      'Hàng triệu lỗ xốp mao quản nano hút chặt các phân tử khí hôi khai nồng đặc trưng của nước tiểu mèo',
      'Ức chế sự phát triển của vi khuẩn, nấm mốc trong môi trường ẩm ướt của khay vệ sinh',
      'Giữ cho phòng kín, phòng máy lạnh căn hộ chung cư luôn khô ráo và thơm tho',
    ],
    icon: 'Flame',
    color: 'from-zinc-900 to-slate-800 border-zinc-700 text-white',
  },
  {
    id: 'mineral',
    name: 'Khoáng chất tự nhiên',
    englishName: 'Natural Mineral Granules',
    ratio: '10%',
    badge: 'Khóa ẩm siêu tốc',
    shortDesc: 'Khoáng chất tự nhiên không bụi kích thước đồng đều lấp đầy khe hở tạo độ vón siêu chắc.',
    detailedBenefits: [
      'Khoáng chất tự nhiên tinh chế kỹ càng, loại bỏ hoàn toàn tạp chất và bụi mịn',
      'Tốc độ hấp thụ chất lỏng chỉ dưới 3 giây, đông kết thành khối ngay lập tức',
      'Len lỏi vào các khe hở giữa những thanh đậu nành, ngăn chất lỏng chảy loang xuống đáy khay',
      'Tạo khối tròn đanh chắc, không bở vụn và hoàn toàn không bết dính đáy chậu khi xúc dọn',
    ],
    icon: 'Gem',
    color: 'from-stone-100 to-amber-100 border-stone-300 text-stone-900',
  },
];

export const COMPARISON_DATA = [
  {
    criteria: 'Độ bụi & An toàn hô hấp',
    purrsafe: 'Không bụi mịn (Đã lọc kỹ qua nhiều tầng sàng lọc, bảo vệ mũi mèo)',
    clayLitter: 'Rất nhiều bụi xám, bay mù mịt khi đổ, dễ gây viêm mũi dị ứng',
    woodLitter: 'Có bụi mùn gỗ nhỏ, dính lông và móng chân',
  },
  {
    criteria: 'Khả năng khử mùi',
    purrsafe: 'Khử mùi vượt trội nhờ 20% Than hoạt tính + Hương sữa dịu mát',
    clayLitter: 'Hương nhân tạo hóa chất, dễ nồng hắc sau 1-2 ngày',
    woodLitter: 'Mùi gỗ át mùi phân, nhanh bị ẩm chua',
  },
  {
    criteria: 'Tốc độ vón & Độ cứng',
    purrsafe: 'Vón chỉ sau 3 giây, khối tròn cứng không vỡ vụn khi xúc',
    clayLitter: 'Vón tốt nhưng dễ vỡ mụn nhỏ gây dơ cát còn lại trong khay',
    woodLitter: 'Vón lỏng lẻo hoặc rã thành bột mùn khó lọc',
  },
  {
    criteria: 'Bám dính đáy chậu',
    purrsafe: 'Hoàn toàn không dính đáy, đáy khay luôn khô ráo sạch bóng',
    clayLitter: 'Bết dính thành bùn ướt ở đáy khay, cọ rửa cực kỳ vất vả',
    woodLitter: 'Dễ đọng nước tiểu ở góc đáy nếu không đảo thường xuyên',
  },
  {
    criteria: 'Dọn dẹp & gom rác',
    purrsafe: 'Xúc gọn gàng nhanh chóng, cho vào túi rác buộc lại sạch sẽ tiện lợi',
    clayLitter: 'Khối vón nặng nề, đáy chậu dính cặn bẩn khó cạo',
    woodLitter: 'Mùn gỗ vụn khó xúc sạch',
  },
  {
    criteria: 'Mức độ tiêu hao',
    purrsafe: 'Tiết kiệm: 1 bao 2.8Kg dùng được 3 - 4 tuần cho 1 bé mèo',
    clayLitter: 'Nhanh hao do vỡ vụn và bết đáy nhiều',
    woodLitter: 'Mức tiêu hao trung bình',
  },
];

export const DISTRIBUTOR_BENEFITS = [
  {
    title: 'Nguồn hàng ổn định từ xưởng',
    desc: 'Sản lượng lớn, cung ứng liên tục và đều đặn, không lo tình trạng đứt hàng hay thiếu hụt bao bì vào mùa cao điểm.',
    icon: 'Truck',
  },
  {
    title: 'Hàng tiêu dùng quay vòng cao',
    desc: 'Cát mèo là sản phẩm tiêu hao thiết yếu hàng tháng. Tỉ lệ khách hàng mua lặp lại định kỳ rất cao, mang lại dòng khách hàng thân thiết bền vững.',
    icon: 'Repeat',
  },
  {
    title: 'Hỗ trợ Marketing & Tài liệu bán hàng',
    desc: 'Cung cấp đầy đủ bộ hình ảnh sản phẩm, video kiểm nghiệm độ vón, nội dung mẫu đăng bài và tài liệu tư vấn khách hàng chuyên nghiệp.',
    icon: 'Award',
  },
  {
    title: 'Chính sách đại lý linh hoạt',
    desc: 'Hỗ trợ các cửa hàng thú cưng, spa thú y và cá nhân kinh doanh nhập số lượng linh hoạt, hỗ trợ tối đa cho các đối tác mới bắt đầu.',
    icon: 'TrendingUp',
  },
  {
    title: 'Bảo hộ khu vực điểm bán',
    desc: 'Cam kết minh bạch về chính sách hợp tác, hỗ trợ chuyển giao thông tin khách hàng lẻ phát sinh tại khu vực cho đại lý lân cận.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Hỗ trợ mẫu thử miễn phí (Sample Pack)',
    desc: 'PurrSafe cung cấp các gói mẫu thử để đối tác gửi tặng khách hàng trải nghiệm thực tế trước khi mua hàng.',
    icon: 'Gift',
  },
];

export const USAGE_STEPS = [
  {
    step: '01',
    title: 'Đổ cát vào khay',
    desc: 'Làm sạch và lau khô khay vệ sinh. Đổ cát PurrSafe với độ dày lý tưởng từ 5 - 7 cm để tạo lớp đệm thấm hút hoàn hảo nhất.',
  },
  {
    step: '02',
    title: 'Chờ vón cục siêu tốc',
    desc: 'Khi mèo đi vệ sinh, cát sẽ thấm hút và vón cục chặt chỉ trong 3 giây, giữ lại toàn bộ mùi hôi bên trong khối vón.',
  },
  {
    step: '03',
    title: 'Xúc bỏ vào túi rác',
    desc: 'Dùng xẻng xúc các viên phân và nước tiểu đã vón tròn đanh chắc, cho vào túi rác buộc kín lại và xử lý cùng rác thải sinh hoạt hàng ngày.',
  },
  {
    step: '04',
    title: 'Bổ sung định kỳ',
    desc: 'Châm thêm cát mới để duy trì độ dày 5 - 7cm trong khay. Định kỳ thay toàn bộ cát và rửa sạch khay sau mỗi 3 - 4 tuần sử dụng.',
  },
];

export const CAT_OWNER_REVIEWS: ReviewItem[] = [
  {
    id: 'owner-1',
    author: 'Chị Bích Trâm (Nuôi 3 bé Mèo Anh Lông Ngắn)',
    role: 'Chung cư Masteri, TP. Thủ Đức',
    location: 'TP. Hồ Chí Minh',
    avatar: '/images/avatar1.jpg',
    stars: 5,
    content: 'Trước đây nuôi 3 đứa trong chung cư phòng kín máy lạnh đúng là cực hình, mỗi lần chúng nó đi vệ sinh là cả phòng bốc mùi nồng nặc dù đã mua máy lọc khí. Đổi qua cát Mix PurrSafe này bất ngờ thật sự! Hàm lượng than hoạt tính khử mùi phân và nước tiểu gần như triệt để, lại có mùi thơm sữa thoang thoảng cưng xỉu. Mèo bới cát thoải mái mà không hề có hạt bụi nào bám mũi!',
    verified: true,
    date: 'Hôm qua',
  },
  {
    id: 'owner-2',
    author: 'Anh Minh Khang (Nuôi 2 bé Mèo Ba Tư Lông Dài)',
    role: 'Quận Đống Đa, TP. Hà Nội',
    location: 'Hà Nội',
    avatar: '/images/avatar2.jpg',
    stars: 5,
    content: 'Mèo lông dài sợ nhất là cát dính bết vào lông đuôi với kẽ chân mang đi khắp giường chiếu. PurrSafe làm dạng hạt đậu nành mix khoáng chất tự nhiên cực mịn và đanh, tuyệt đối không dính chân các bé. Thích nhất là lúc xúc: cát vón tròn xoe cứng cáp trong 3 giây, xúc nhẹ cái là lên gọn ơ không dính tí nào vào đáy khay nhựa. Giờ mỗi lần dọn khay chỉ mất chưa tới 1 phút!',
    verified: true,
    date: '3 ngày trước',
  },
  {
    id: 'owner-3',
    author: 'Cô Thanh Mai (Chăm 5 bé mèo ta và mèo Tây)',
    role: 'Quận Cầu Giấy, TP. Hà Nội',
    location: 'Hà Nội',
    avatar: '/images/avatar3.jpg',
    stars: 5,
    content: 'Tôi lớn tuổi nên ngại nhất việc bưng bê nặng nề với cúi xuống cạo đáy chậu. Bao cát PurrSafe có quai xách rất vừa tay và chắc chắn. Cát xúc không dính đáy khay tí nào, đáy chậu lúc nào cũng bóng láng. Mùi hương sữa ngọt ngào dịu mũi chứ không gay gắt hóa học. Tôi đã giới thiệu cho cả hội yêu mèo ở khu dân cư cùng mua dùng!',
    verified: true,
    date: '1 tuần trước',
  },
  {
    id: 'owner-4',
    author: 'Bạn Hoàng Yến (Nuôi bé Mèo Mướp Cứu Hộ)',
    role: 'Quận Hải Châu, TP. Đà Nẵng',
    location: 'Đà Nẵng',
    avatar: '/images/avatar4.jpg',
    stars: 5,
    content: 'Bé mèo nhà mình đường hô hấp nhạy cảm, dùng cát đất sét rẻ tiền là hắt xì sụt sùi liên tục. Chuyển sang PurrSafe thấy êm ru không còn ho hắng gì nữa vì cát gần như 0% bụi. Cát vón rất chắc, xúc ra cho vào túi rác rất nhanh gọn và vệ sinh. Rất khuyến khích các bạn nuôi mèo thử dòng cát mix này!',
    verified: true,
    date: '2 tuần trước',
    category: 'dust',
  },
  {
    id: 'owner-5',
    author: 'Bác sĩ Thú y Lê Hoàng (Phòng khám Pet Care)',
    role: 'Quận 1, TP. Hồ Chí Minh',
    location: 'TP. Hồ Chí Minh',
    avatar: '/images/avatar1.jpg',
    stars: 5,
    content: 'Nhiều ca mèo đến khám vì viêm xoang, chảy nước mắt do hít phải bụi cát kém chất lượng. PurrSafe làm bằng bã đậu nành hữu cơ 70% và khoáng chất tự nhiên lọc bụi rất sạch, an toàn cho hệ hô hấp của mèo và người. Nếu mèo con có vô tình nuốt hạt nhỏ cũng tự tiêu hóa lành tính.',
    verified: true,
    date: '1 tháng trước',
    category: 'dust',
  },
  {
    id: 'owner-6',
    author: 'Anh Quốc Bảo (Chủ chuỗi Pet Shop Boss & Me)',
    role: 'Quận Ba Đình, Hà Nội',
    location: 'Hà Nội',
    avatar: '/images/avatar2.jpg',
    stars: 5,
    content: 'Shop mình nhập thử 1 pallet PurrSafe đầu tiên về bán thử, chỉ trong 10 ngày khách quen đã mua hết sạch và quay lại mua bao thứ hai. Mùi hương sữa rất nịnh mũi, bao bì quai xách đẹp và chuyên nghiệp. Chính sách đại lý và chiết khấu của hãng rất rõ ràng, giao hàng nhanh.',
    verified: true,
    date: '1 tháng trước',
    category: 'distributor',
  },
  {
    id: 'owner-7',
    author: 'Chị Kim Ngân (Nhóm Cứu Hộ Mèo TP. Hồ Chí Minh)',
    role: 'Bình Thạnh, TP. Hồ Chí Minh',
    location: 'TP. Hồ Chí Minh',
    avatar: '/images/avatar3.jpg',
    stars: 5,
    content: 'Cưu mang gần 10 bé mèo trong nhà, vấn đề nan giải nhất là mùi khai của nước tiểu. Than hoạt tính 20% trong PurrSafe khóa mùi cực đỉnh, cả phòng không còn mùi hôi ám vào rèm cửa hay quần áo nữa. Rất tiết kiệm vì vón cục tròn nhỏ, không hao cát.',
    verified: true,
    date: '1 tháng trước',
    category: 'odor',
  },
  {
    id: 'owner-8',
    author: 'Bạn Đức Huy (Căn hộ Studio nhỏ)',
    role: 'Quận 4, TP. Hồ Chí Minh',
    location: 'TP. Hồ Chí Minh',
    avatar: '/images/avatar4.jpg',
    stars: 5,
    content: 'Mình ở studio 30m2 nên khay cát phải để gần bàn làm việc. PurrSafe vón chỉ sau 3 giây, xúc một phát sạch bóng đáy khay, không dính bết dơ dáy tí nào. Khách đến chơi ai cũng khen phòng thơm tho không hề biết nhà có nuôi mèo!',
    verified: true,
    date: '1 tháng trước',
    category: 'clump',
  },
];
