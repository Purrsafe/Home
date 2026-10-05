export type Language = 'vi' | 'zh' | 'en';

export interface TranslationContent {
  nav: {
    intro: string;
    video: string;
    features: string;
    ingredients: string;
    reviews: string;
    distributor: string;
    contact: string;
    hotlinePrefix: string;
    zaloOrChat: string;
    officialProduct: string;
    ratioSubtitle: string;
  };
  brand: {
    name: string;
    productName: string;
    slogan: string;
    subSlogan: string;
    weight: string;
    scent: string;
    hotline: string;
    hotlineFormatted: string;
    zaloUrl: string;
    address: string;
    ratioBadge: string;
  };
  hero: {
    tagline: string;
    desc: string;
    ctaDistributor: string;
    ctaHotline: string;
    ratingText: string;
    realPhotoTag: string;
    realPhotoBadge: string;
    scentBadge: string;
    clumpBadge: string;
    nonStickSub: string;
    footprints: string[];
    badges: { label: string; desc: string }[];
  };
  features: {
    id: string;
    title: string;
    subtitle: string;
    desc: string;
    highlight: string;
  }[];
  intro: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    painPoints: {
      problem: string;
      effect: string;
      solution: string;
    }[];
    specBadge: string;
    specTitle: string;
    specTitleHighlight: string;
    specDesc: string;
    specs: { label: string; value: string }[];
  };
  reviews: {
    badge: string;
    title1: string;
    titleHighlight: string;
    desc: string;
    writeReviewBtn: string;
    basedOn: string;
    metrics: { label: string; value: string }[];
    filterAll: string;
    filterOdor: string;
    filterDust: string;
    filterClump: string;
    filterDistributor: string;
    verifiedBuyer: string;
    helpful: string;
    modalTitle: string;
    modalSubmittedTitle: string;
    modalSubmittedDesc: string;
    formName: string;
    formLocation: string;
    formRating: string;
    formContent: string;
    formCancel: string;
    formSubmit: string;
    items: {
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
    }[];
  };
  ingredients: {
    badge: string;
    title1: string;
    titleHighlight: string;
    desc: string;
    selectedBadge: string;
    selectedRole: string;
    selectedDesc: string;
    viewDetails: string;
    currentlyViewing: string;
    items: {
      id: string;
      name: string;
      englishName: string;
      ratio: string;
      badge: string;
      shortDesc: string;
      benefits: string[];
    }[];
  };
  comparison: {
    badge: string;
    title1: string;
    titleHighlight: string;
    desc: string;
    colCriteria: string;
    colPurrSafe: string;
    colClay: string;
    colWood: string;
    rows: {
      criteria: string;
      purrsafe: string;
      clay: string;
      wood: string;
    }[];
    tipLabel: string;
    tipContent: string;
  };
  distributor: {
    badge: string;
    title1: string;
    titleHighlight: string;
    desc: string;
    exclusiveBadge: string;
    stepHeadingBadge: string;
    stepHeadingTitle: string;
    steps: { num: string; title: string; desc: string }[];
    benefits: { title: string; desc: string }[];
    ctaCardTitle: string;
    ctaCardDesc: string;
    ctaCardBtn: string;
    ctaCardCall: string;
  };
  usage: {
    badge: string;
    title1: string;
    titleHighlight: string;
    desc: string;
    dailyAction: string;
    steps: { step: string; title: string; desc: string }[];
    tipTitle: string;
    tipDesc: string;
  };
  form: {
    badge: string;
    title1: string;
    titleHighlight: string;
    desc: string;
    needLabel: string;
    needDistributor: string;
    needSample: string;
    nameLabel: string;
    phoneLabel: string;
    modelLabel: string;
    storeLabel: string;
    cityLabel: string;
    notesLabel: string;
    privacy: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successCodeLabel: string;
    callNow: string;
    zaloNow: string;
    submitAnother: string;
    businessTypes: { value: string; label: string }[];
    cities: string[];
  };
  footer: {
    support247: string;
    title1: string;
    titleHighlight: string;
    desc: string;
    phoneLabel: string;
    callNow: string;
    zaloChat: string;
    brandDesc: string;
    addressLabel: string;
    phoneLabelBottom: string;
    copyright: string;
    quality1: string;
    quality2: string;
    backToTop: string;
  };
  sticky: {
    productName: string;
    hotlineLabel: string;
    zaloBtn: string;
    callBtn: string;
    distributorBtn: string;
  };
  video: {
    badge: string;
    title: string;
    subtitle: string;
    watchBtn: string;
    pauseBtn: string;
    replayBtn: string;
    chaptersTitle: string;
    chapters: {
      time: string;
      seconds: number;
      tag: string;
      title: string;
      desc: string;
    }[];
    highlights: {
      value: string;
      label: string;
      desc: string;
    }[];
    ctaTrial: string;
    ctaHotline: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  vi: {
    nav: {
      intro: 'Giới thiệu',
      video: 'Video Thực Tế',
      features: 'Ưu điểm',
      ingredients: 'Thành phần',
      reviews: 'Khách hàng đánh giá',
      distributor: 'Hợp tác đại lý',
      contact: 'Liên hệ',
      hotlinePrefix: 'Hotline:',
      zaloOrChat: 'Zalo',
      officialProduct: 'Sản phẩm chính hãng',
      ratioSubtitle: '70% Đậu nành · 20% Than hoạt tính · 10% Khoáng chất tự nhiên',
    },
    brand: {
      name: 'PurrSafe',
      productName: 'Cát Mèo Mix Hương Sữa 2.8Kg',
      slogan: 'Không chỉ là cát mèo, đây là PurrSafe.',
      subSlogan: 'LỰA CHỌN TỐI ƯU CHO MÈO CƯNG',
      weight: '2.8 Kg',
      scent: 'Hương Sữa Dịu Nhẹ Tự Nhiên',
      hotline: '0866780599',
      hotlineFormatted: '0866 780 599',
      zaloUrl: 'https://zalo.me/0866780599',
      address: 'Nguyễn Văn Bá, Phường Thủ Đức, TP. Hồ Chí Minh',
      ratioBadge: '70% ĐẬU NÀNH · 20% THAN · 10% KHOÁNG',
    },
    hero: {
      tagline: 'LỰA CHỌN TỐI ƯU CHO MÈO CƯNG',
      desc: 'Giải pháp phối trộn đột phá với tỷ lệ cân bằng hoàn hảo: 70% Đậu nành tự nhiên, 20% Than hoạt tính và 10% Khoáng chất tự nhiên. Đem lại khả năng khử mùi vượt trội, hạt sạch hoàn toàn bụi mịn và không bết dính đáy khay.',
      ctaDistributor: 'Hợp Tác Đại Lý / NPP',
      ctaHotline: 'Hotline: 0866 780 599',
      ratingText: '4.9/5 Sao · Được cộng đồng nuôi mèo và Pet Shop tin cậy',
      realPhotoTag: 'Hình ảnh thực tế',
      realPhotoBadge: 'PurrSafe Mix 2.8Kg',
      scentBadge: 'Hương Sữa Dịu Nhẹ',
      clumpBadge: 'Vón cục siêu tốc',
      nonStickSub: 'Tuyệt đối không bám đáy',
      footprints: ['Bao bì quai xách tiện lợi', 'Khóa zip chống ẩm', 'Hạt sạch không bụi'],
      badges: [
        { label: 'An Toàn Tuyệt Đối', desc: '100% tự nhiên, lành tính cho thú cưng' },
        { label: 'Thân Thiện Sinh Thái', desc: 'Nguyên liệu thực vật sạch sẽ' },
        { label: 'Thấm Hút Vượt Trội', desc: 'Hút ẩm nhanh chóng, khóa chặt mùi' },
      ],
    },
    features: [
      {
        id: 'low-dust',
        title: 'Ít bụi',
        subtitle: 'Bảo vệ hệ hô hấp',
        desc: 'Quy trình sàng lọc công nghệ cao giúp loại bỏ triệt để bụi mịn, bảo vệ mắt và đường hô hấp nhạy cảm của mèo cưng và cả gia đình.',
        highlight: 'Sạch bụi tối đa',
      },
      {
        id: 'odor-control',
        title: 'Khử mùi tối ưu',
        subtitle: 'Khóa mùi than hoạt tính',
        desc: 'Hàm lượng 20% than hoạt tính giúp hấp phụ triệt để khí Amoniac và vi khuẩn gây mùi, giữ không gian phòng kín luôn thơm dịu hương sữa.',
        highlight: 'Khử mùi kép 24h',
      },
      {
        id: 'fast-clump',
        title: 'Vón cục nhanh',
        subtitle: 'Chỉ trong 3 giây',
        desc: 'Khoáng chất tự nhiên kết hợp sợi đậu nành phản ứng cực nhanh khi tiếp xúc chất lỏng, tạo khối kết tinh cứng chắc, không bị vỡ vụn khi sàng lọc.',
        highlight: 'Khối tròn vững chắc',
      },
      {
        id: 'non-stick',
        title: 'Không bám đáy',
        subtitle: 'Dọn dẹp siêu nhàn',
        desc: 'Khối vón nằm gọn gàng phía trên bề mặt khay cát, tuyệt đối không tạo mảng bết ướt dính chặt đáy khay, giúp việc xúc dọn sạch bóng trong 5 giây.',
        highlight: 'Khay luôn khô thoáng',
      },
    ],
    intro: {
      badge: 'Giới Thiệu Sản Phẩm',
      titleLine1: 'Đột Phá Với Công Thức',
      titleLine2: '70% Đậu Nành · 20% Than · 10% Khoáng',
      desc: 'PurrSafe mang đến giải pháp chăm sóc khay vệ sinh toàn diện cho người nuôi mèo: sạch bụi, khử mùi triệt để và giúp "Sen" dọn dẹp nhàn tênh mỗi ngày.',
      painPoints: [
        {
          problem: 'Cát đất sét bụi mịt mù',
          effect: 'Làm mèo bị ho khan, viêm mũi dị ứng và bám bụi trắng đầy sàn nhà',
          solution: 'PurrSafe ứng dụng công nghệ lọc bụi đa tầng, cam kết hạt sạch tối đa bảo vệ hệ hô hấp.',
        },
        {
          problem: 'Mùi khai nồng nặc trong phòng kín',
          effect: 'Không khí ngột ngạt khó chịu, khách đến chơi nhà đều ngửi thấy mùi chất thải',
          solution: 'Hàm lượng 20% than hoạt tính nano bẫy trọn khí amoniac, lan tỏa hương sữa dịu ngọt thư giãn.',
        },
        {
          problem: 'Cát bết dính chặt vào đáy chậu',
          effect: 'Cọ rửa cực nhọc, xẻng xúc bị gãy, góc chậu ẩm ướt dễ sinh nấm mốc',
          solution: '10% khoáng chất tự nhiên khóa ẩm tức thì, tạo khối tròn ráo hoảnh không dính 1 vệt vào đáy khay.',
        },
        {
          problem: 'Mèo mang cát vương vãi ra sàn',
          effect: 'Hạt cát vụn dính vào đệm chân mèo rồi tha lên giường nệm, sofa',
          solution: 'Hạt đậu nành 2.0mm đanh mịn không kẹt vào kẽ ngón chân, giữ nhà cửa luôn sạch sẽ.',
        },
      ],
      specBadge: 'Quy cách chuẩn chất lượng',
      specTitle: 'Thông Số Kỹ Thuật',
      specTitleHighlight: 'PurrSafe Cát Mèo Mix',
      specDesc: 'Được kiểm định chất lượng nghiêm ngặt, hạt cát đanh chắc, không gây kích ứng cho mèo ở mọi lứa tuổi, hương sữa thoang thoảng dễ chịu cho cả gia đình.',
      specs: [
        { label: 'Tên sản phẩm', value: 'PurrSafe Mix' },
        { label: 'Khối lượng tịnh', value: '2.8 Kg / Bao' },
        { label: 'Mùi hương', value: 'Hương Sữa Dịu Nhẹ' },
        { label: 'Kích thước hạt', value: 'Đường kính 2.0mm' },
        { label: 'Bao bì', value: 'Có quai xách tiện lợi' },
        { label: 'Bảo quản', value: 'Nơi khô ráo, thoáng mát' },
      ],
    },
    reviews: {
      badge: 'Cảm Nhận Thực Tế Từ "Sen"',
      title1: 'Khách Hàng Nói Gì Về',
      titleHighlight: 'PurrSafe',
      desc: 'Được các gia đình nuôi mèo tại Việt Nam tin dùng nhờ khả năng khử mùi vượt trội của than hoạt tính và vón cục nhanh không dính bết đáy khay.',
      writeReviewBtn: 'Viết Đánh Giá Của Bạn',
      basedOn: 'Đánh giá xác thực từ cộng đồng người nuôi mèo tại Việt Nam',
      metrics: [
        { label: 'Khử mùi hôi', value: 'Hiệu quả cao' },
        { label: 'Độ sạch bụi', value: 'Không bụi mịn' },
        { label: 'Khả năng vón cục', value: '3 Giây vón chặt' },
      ],
      filterAll: 'Tất Cả Đánh Giá',
      filterOdor: 'Khử Mùi Phòng Kín',
      filterDust: 'Không Bụi Hô Hấp',
      filterClump: 'Vón Cục & Không Bám Đáy',
      filterDistributor: 'Đại Lý & Pet Shop',
      verifiedBuyer: '✓ Người nuôi mèo đã xác thực',
      helpful: 'Hữu ích',
      modalTitle: 'Gửi Cảm Nhận Về PurrSafe',
      modalSubmittedTitle: 'Cảm ơn bạn đã gửi đánh giá!',
      modalSubmittedDesc: 'Cảm nhận của bạn đã được cập nhật trực tiếp trên website.',
      formName: 'Họ tên của bạn *',
      formLocation: 'Khu vực sống / Quận Huyện',
      formRating: 'Mức độ hài lòng (Số sao)',
      formContent: 'Nội dung đánh giá của bạn *',
      formCancel: 'Hủy bỏ',
      formSubmit: 'Đăng Đánh Giá Ngay',
      items: [
        {
          id: 'owner-1',
          author: 'Chị Bích Trâm (Nuôi 3 bé Mèo Anh Lông Ngắn)',
          role: 'Chung cư Masteri, TP. Thủ Đức',
          location: 'TP. Hồ Chí Minh',
          avatar: '/images/avatar1.jpg',
          stars: 5,
          content: 'Trước đây nuôi 3 đứa trong chung cư phòng kín máy lạnh đúng là cực hình, mỗi lần chúng nó đi vệ sinh là cả phòng bốc mùi nồng nặc dù đã mua máy lọc khí. Đổi qua cát Mix PurrSafe này bất ngờ thật sự! Hàm lượng than hoạt tính khử mùi phân và nước tiểu gần như triệt để, lại có mùi thơm sữa thoang thoảng cưng xỉu. Mèo bới cát thoải mái mà không hề có hạt bụi nào bám mũi!',
          date: 'Hôm qua',
          category: 'odor',
          likes: 56,
          tagLabel: '#KhửMùiPhòngKín',
        },
        {
          id: 'owner-2',
          author: 'Anh Minh Khang (Nuôi 2 bé Mèo Ba Tư Lông Dài)',
          role: 'Quận Đống Đa, TP. Hà Nội',
          location: 'Hà Nội',
          avatar: '/images/avatar2.jpg',
          stars: 5,
          content: 'Mèo lông dài sợ nhất là cát dính bết vào lông đuôi với kẽ chân mang đi khắp giường chiếu. PurrSafe làm dạng hạt đậu nành mix khoáng chất tự nhiên cực mịn và đanh, tuyệt đối không dính chân các bé. Thích nhất là lúc xúc: cát vón tròn xoe cứng cáp trong 3 giây, xúc nhẹ cái là lên gọn ơ không dính tí nào vào đáy khay nhựa. Giờ mỗi lần dọn khay chỉ mất chưa tới 1 phút!',
          date: '3 ngày trước',
          category: 'clump',
          likes: 42,
          tagLabel: '#VónChặtKhôngDínhĐáy',
        },
        {
          id: 'owner-3',
          author: 'Cô Thanh Mai (Chăm 5 bé mèo ta và mèo Tây)',
          role: 'Quận Cầu Giấy, TP. Hà Nội',
          location: 'Hà Nội',
          avatar: '/images/avatar3.jpg',
          stars: 5,
          content: 'Tôi lớn tuổi nên ngại nhất việc bưng bê nặng nề với cúi xuống cạo đáy chậu. Bao cát PurrSafe có quai xách rất vừa tay và chắc chắn. Cát xúc không dính đáy khay tí nào, đáy chậu lúc nào cũng bóng láng. Mùi hương sữa ngọt ngào dịu mũi chứ không gay gắt hóa học. Tôi đã giới thiệu cho cả hội yêu mèo ở khu dân cư cùng mua dùng!',
          date: '1 tuần trước',
          category: 'clump',
          likes: 49,
          tagLabel: '#BaoBìQuaiXáchTiệnLợi',
        },
        {
          id: 'owner-4',
          author: 'Bạn Hoàng Yến (Nuôi bé Mèo Mướp Cứu Hộ)',
          role: 'Quận Hải Châu, TP. Đà Nẵng',
          location: 'Đà Nẵng',
          avatar: '/images/avatar4.jpg',
          stars: 5,
          content: 'Bé mèo nhà mình đường hô hấp nhạy cảm, dùng cát đất sét rẻ tiền là hắt xì sụt sùi liên tục. Chuyển sang PurrSafe thấy êm ru không còn ho hắng gì nữa vì cát gần như 0% bụi. Cát vón rất chắc, xúc ra cho vào túi rác rất nhanh gọn và vệ sinh. Rất khuyến khích các bạn nuôi mèo thử dòng cát mix này!',
          date: '2 tuần trước',
          category: 'dust',
          likes: 63,
          tagLabel: '#KhôngBụiMịnBảoVệMắt',
        },
        {
          id: 'owner-5',
          author: 'Bác sĩ Thú y Lê Hoàng (Phòng khám Pet Care)',
          role: 'Bác sĩ chuyên khoa Thú y',
          location: 'Quận 1, TP. Hồ Chí Minh',
          avatar: '/images/avatar1.jpg',
          stars: 5,
          content: 'Nhiều ca mèo đến khám vì viêm mũi dị ứng và xước giác mạc do dùng cát đất sét bụi mịn. Công thức mix 70% sợi đậu nành và khoáng tự nhiên của PurrSafe được sàng lọc bụi rất kỹ. Kể cả mèo con có vô tình nuốt hạt nhỏ cũng tự tiêu hóa lành tính, không gây tắc ruột.',
          date: '3 tuần trước',
          category: 'dust',
          likes: 78,
          tagLabel: '#KhuyênDùngBởiBácSĩThúY',
        },
        {
          id: 'owner-6',
          author: 'Anh Quốc Bảo (Chủ chuỗi Pet Shop Boss & Me)',
          role: 'Đại lý phân phối cấp 1',
          location: 'Quận Ba Đình, Hà Nội',
          avatar: '/images/avatar2.jpg',
          stars: 5,
          content: 'Shop mình nhập thử 1 pallet PurrSafe đầu tiên về bán thử, chỉ trong 10 ngày khách quen đã mua hết sạch và quay lại lấy bao thứ 2, thứ 3. Khách khen mùi sữa dễ chịu và khay cát không còn bết dính. Chính sách chiết khấu và hỗ trợ hình ảnh truyền thông của hãng rất chu đáo.',
          date: '1 tháng trước',
          category: 'distributor',
          likes: 51,
          tagLabel: '#ĐạiLýPetShopTinCậy',
        },
        {
          id: 'owner-7',
          author: 'Chị Kim Ngân (Nhóm Cứu Hộ Mèo TP. HCM)',
          role: 'Chăm sóc 12 bé mèo cứu hộ',
          location: 'Bình Thạnh, TP. Hồ Chí Minh',
          avatar: '/images/avatar3.jpg',
          stars: 5,
          content: 'Nhà nuôi nhiều mèo cứu hộ, nan giải nhất là tiền cát và mùi khai. Dùng PurrSafe tiết kiệm hơn hẳn vì cát vón thành từng cục tròn đanh, xúc bỏ đúng phần dơ mà không làm rơi vãi cát sạch. Than hoạt tính khử mùi vượt trội, phòng khách không hề có mùi chất thải!',
          date: '1 tháng trước',
          category: 'odor',
          likes: 88,
          tagLabel: '#TiếtKiệmKhửMùiĐỉnh',
        },
        {
          id: 'owner-8',
          author: 'Bạn Đức Huy (Căn hộ Studio 35m2)',
          role: 'Nhân viên thiết kế đồ họa',
          location: 'Quận 4, TP. Hồ Chí Minh',
          avatar: '/images/avatar4.jpg',
          stars: 5,
          content: 'Phòng studio nhỏ kín cửa cả ngày bật máy lạnh, khay cát đặt ngay cạnh bàn làm việc mà không hề bị ngửi thấy mùi hôi. Xúc cát cực nhanh trong 30 giây là xong vì cát không bám 1 vệt vào đáy chậu nhựa. Rất ưng ý và sẽ gắn bó lâu dài!',
          date: '1 tháng trước',
          category: 'clump',
          likes: 39,
          tagLabel: '#PhòngStudioPhòngKín',
        },
      ],
    },
    ingredients: {
      badge: 'Thành Phần Tự Nhiên',
      title1: 'Tỷ Lệ Phối Trộn Chuẩn Xác:',
      titleHighlight: '70% Đậu Nành · 20% Than · 10% Khoáng',
      desc: 'Sự phối hợp khoa học giữa sợi thực vật hữu cơ, than hoạt tính và khoáng chất tự nhiên mang lại hiệu quả khử mùi kép và vón cục siêu tốc.',
      selectedBadge: 'Tỉ Lệ Trong PurrSafe',
      selectedRole: 'Vai Trò Của',
      selectedDesc: 'Được kiểm nghiệm an toàn, qua quy trình khử trùng nhiệt độ cao để loại bỏ hoàn toàn vi khuẩn ẩm mốc, giữ môi trường khay vệ sinh luôn sạch khuẩn.',
      viewDetails: 'Bấm để xem thêm',
      currentlyViewing: 'Đang xem chi tiết',
      items: [
        {
          id: 'tofu',
          name: 'Đậu nành tự nhiên',
          englishName: 'Natural Soybean Fiber',
          ratio: '70%',
          badge: 'Sợi thực vật sinh học',
          shortDesc: 'Sợi bã đậu nành hữu cơ nguyên chất tinh chế ép đùn kích thước 2.0mm tiêu chuẩn.',
          benefits: [
            '100% bã đậu nành nguồn gốc thực vật sạch, an toàn và lành tính',
            'Nếu mèo con vô tình liếm hoặc ăn phải một lượng nhỏ vẫn vô hại cho đường ruột',
            'Hạt đậu nành 2.0mm đanh chắc, êm ái cho đệm thịt của mèo con lẫn mèo trưởng thành',
            'Kích thước hạt thông minh, không kẹt vào kẽ ngón chân mèo, tránh việc mèo mang cát vương vãi ra sàn',
          ],
        },
        {
          id: 'carbon',
          name: 'Than hoạt tính',
          englishName: 'Activated Carbon',
          ratio: '20%',
          badge: 'Chuyên gia khử mùi',
          shortDesc: 'Chiếm đến 20% công thức, hạt than hoạt tính vi mô có cấu trúc xốp mao dẫn nano hấp phụ mùi amoniac vượt trội.',
          benefits: [
            'Sản xuất từ than hoạt tính cao cấp, loại bỏ triệt để mùi hôi và vi khuẩn',
            'Hàng triệu lỗ xốp mao quản nano hút chặt các phân tử khí hôi khai nồng đặc trưng của nước tiểu mèo',
            'Ức chế sự phát triển của vi khuẩn, nấm mốc trong môi trường ẩm ướt của khay vệ sinh',
            'Giữ cho phòng kín, phòng máy lạnh căn hộ chung cư luôn khô ráo và thơm tho',
          ],
        },
        {
          id: 'mineral',
          name: 'Khoáng chất tự nhiên',
          englishName: 'Natural Mineral Granules',
          ratio: '10%',
          badge: 'Khóa ẩm siêu tốc',
          shortDesc: 'Khoáng chất tự nhiên không bụi kích thước đồng đều lấp đầy khe hở tạo độ vón siêu chắc.',
          benefits: [
            'Khoáng chất tự nhiên tinh chế kỹ càng, loại bỏ hoàn toàn tạp chất và bụi mịn',
            'Tốc độ hấp thụ chất lỏng chỉ dưới 3 giây, đông kết thành khối ngay lập tức',
            'Len lỏi vào các khe hở giữa những thanh đậu nành, ngăn chất lỏng chảy loang xuống đáy khay',
            'Tạo khối tròn đanh chắc, không bở vụn và hoàn toàn không bết dính đáy chậu khi xúc dọn',
          ],
        },
      ],
    },
    comparison: {
      badge: 'So Sánh Hiệu Quả',
      title1: 'PurrSafe Khác Biệt Thế Nào',
      titleHighlight: 'So Với Cát Thông Thường?',
      desc: 'Xem ngay bảng phân tích chi tiết để hiểu vì sao PurrSafe là sự lựa chọn tối ưu cho mèo cưng và không gian sống của bạn.',
      colCriteria: 'Tiêu chí so sánh',
      colPurrSafe: 'PurrSafe Cát Mix',
      colClay: 'Cát đất sét bentonite thường',
      colWood: 'Cát gỗ / mùn cưa',
      rows: [
        {
          criteria: 'Độ bụi & An toàn hô hấp',
          purrsafe: 'Không bụi mịn (Đã lọc kỹ qua nhiều tầng sàng lọc, bảo vệ mũi mèo)',
          clay: 'Rất nhiều bụi xám, bay mù mịt khi đổ, dễ gây viêm mũi dị ứng',
          wood: 'Có bụi mùn gỗ nhỏ, dính lông và móng chân',
        },
        {
          criteria: 'Khả năng khử mùi',
          purrsafe: 'Khử mùi vượt trội nhờ 20% Than hoạt tính + Hương sữa dịu mát',
          clay: 'Hương nhân tạo hóa chất, dễ nồng hắc sau 1-2 ngày',
          wood: 'Mùi gỗ át mùi phân, nhanh bị ẩm chua',
        },
        {
          criteria: 'Tốc độ vón & Độ cứng',
          purrsafe: 'Vón chỉ sau 3 giây, khối tròn cứng không vỡ vụn khi xúc',
          clay: 'Vón tốt nhưng dễ vỡ mụn nhỏ gây dơ cát còn lại trong khay',
          wood: 'Vón lỏng lẻo hoặc rã thành bột mùn khó lọc',
        },
        {
          criteria: 'Bám dính đáy chậu',
          purrsafe: 'Hoàn toàn không dính đáy, đáy khay luôn khô ráo sạch bóng',
          clay: 'Bết dính thành bùn ướt ở đáy khay, cọ rửa cực kỳ vất vả',
          wood: 'Dễ đọng nước tiểu ở góc đáy nếu không đảo thường xuyên',
        },
        {
          criteria: 'Dọn dẹp & gom rác',
          purrsafe: 'Xúc gọn gàng nhanh chóng, cho vào túi rác buộc lại sạch sẽ tiện lợi',
          clay: 'Khối vón nặng nề, đáy chậu dính cặn bẩn khó cạo',
          wood: 'Mùn gỗ vụn khó xúc sạch',
        },
        {
          criteria: 'Mức độ tiêu hao',
          purrsafe: 'Tiết kiệm: 1 bao 2.8Kg dùng được 3 - 4 tuần cho 1 bé mèo',
          clay: 'Nhanh hao do vỡ vụn và bết đáy nhiều',
          wood: 'Mức tiêu hao trung bình',
        },
      ],
      tipLabel: 'Mẹo tiết kiệm:',
      tipContent: 'Nhờ cơ chế vón khối tròn nhỏ gọn và không dính đáy khay, PurrSafe giúp giảm đến 40% lượng cát hao phí so với cát đất sét thông thường.',
    },
    distributor: {
      badge: 'Hợp Tác Kinh Doanh',
      title1: 'Chính Sách Hợp Tác Đại Lý &',
      titleHighlight: 'Nhà Phân Phối Toàn Quốc',
      desc: 'PurrSafe luôn sẵn sàng đồng hành cùng các Pet Shop, phòng khám thú y và các đối tác kinh doanh trên toàn quốc với nguồn hàng chất lượng ổn định và chính sách hợp tác bền vững.',
      exclusiveBadge: 'Cam kết đồng hành cùng đối tác',
      stepHeadingBadge: 'Quy Trình Hợp Tác Rõ Ràng',
      stepHeadingTitle: '4 Bước Trở Thành Đại Lý PurrSafe',
      steps: [
        {
          num: '01',
          title: 'Đăng Ký Tư Vấn',
          desc: 'Để lại thông tin hoặc liên hệ trực tiếp hotline/Zalo để chuyên viên gửi thông tin chính sách hợp tác.',
        },
        {
          num: '02',
          title: 'Nhận Mẫu Thử Trải Nghiệm',
          desc: 'PurrSafe gửi mẫu thử tận nơi để bạn kiểm nghiệm thực tế độ vón, độ sạch bụi và khả năng khử mùi.',
        },
        {
          num: '03',
          title: 'Thống Nhất Chính Sách',
          desc: 'Trao đổi cụ thể về số lượng nhập phù hợp với mô hình cửa hàng và khu vực điểm bán của bạn.',
        },
        {
          num: '04',
          title: 'Giao Hàng & Đồng Hành',
          desc: 'Giao hàng nhanh chóng tận nơi, bàn giao hình ảnh tư liệu bán hàng và đồng hành hỗ trợ lâu dài.',
        },
      ],
      benefits: [
        {
          title: 'Nguồn hàng ổn định từ xưởng',
          desc: 'Sản lượng lớn, cung ứng liên tục và đều đặn, không lo tình trạng đứt hàng hay thiếu hụt bao bì vào mùa cao điểm.',
        },
        {
          title: 'Hàng tiêu dùng quay vòng cao',
          desc: 'Cát mèo là sản phẩm tiêu hao thiết yếu hàng tháng. Tỉ lệ khách hàng mua lặp lại định kỳ rất cao, mang lại dòng khách hàng thân thiết bền vững.',
        },
        {
          title: 'Hỗ trợ Marketing & Tài liệu bán hàng',
          desc: 'Cung cấp đầy đủ bộ hình ảnh sản phẩm, video kiểm nghiệm độ vón, nội dung mẫu đăng bài và tài liệu tư vấn khách hàng chuyên nghiệp.',
        },
        {
          title: 'Chính sách đại lý linh hoạt',
          desc: 'Hỗ trợ các cửa hàng thú cưng, spa thú y và cá nhân kinh doanh nhập số lượng linh hoạt, hỗ trợ tối đa cho các đối tác mới bắt đầu.',
        },
        {
          title: 'Bảo hộ khu vực điểm bán',
          desc: 'Cam kết minh bạch về chính sách hợp tác, hỗ trợ chuyển giao thông tin khách hàng lẻ phát sinh tại khu vực cho đại lý lân cận.',
        },
        {
          title: 'Hỗ trợ mẫu thử miễn phí (Sample Pack)',
          desc: 'PurrSafe cung cấp các gói mẫu thử để đối tác gửi tặng khách hàng trải nghiệm thực tế trước khi mua hàng.',
        },
      ],
      ctaCardTitle: 'Bạn quan tâm đến chính sách đại lý của PurrSafe?',
      ctaCardDesc: 'Liên hệ ngay để nhận thông tin chi tiết và túi mẫu thử trải nghiệm thực tế tận nơi.',
      ctaCardBtn: 'Đăng Ký Tư Vấn Đại Lý',
      ctaCardCall: 'Hotline:',
    },
    usage: {
      badge: 'Cẩm Nang Sử Dụng',
      title1: 'Hướng Dẫn Sử Dụng &',
      titleHighlight: 'Mẹo Tiết Kiệm Cát Tối Đa',
      desc: 'Áp dụng đúng kỹ thuật giúp cát phát huy tối đa khả năng thấm hút, khử mùi than hoạt tính và giữ đáy chậu luôn khô thoáng sạch sẽ.',
      dailyAction: 'Thực hiện hàng ngày',
      steps: [
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
      ],
      tipTitle: 'Mẹo chuyển đổi cát mới cho bé mèo:',
      tipDesc: 'Nếu bé mèo đang quen dùng cát cũ, bạn có thể trộn theo tỉ lệ 70% cát cũ + 30% cát PurrSafe trong 2 ngày đầu, sau đó tăng dần lên 50% - 50% và chuyển hẳn sang 100% PurrSafe. Bé mèo sẽ nhanh chóng thích nghi với hạt cát êm ái và hương sữa thơm dịu tự nhiên!',
    },
    form: {
      badge: 'Liên Hệ Trực Tuyến',
      title1: 'Đăng Ký Tư Vấn Đại Lý &',
      titleHighlight: 'Nhận Mẫu Thử Miễn Phí',
      desc: 'Để lại thông tin để PurrSafe gửi thông tin chính sách hợp tác và mẫu thử trải nghiệm thực tế tận nơi.',
      needLabel: 'Nhu cầu của bạn:',
      needDistributor: 'Tư Vấn Chính Sách Đại Lý',
      needSample: 'Nhận Túi Mẫu Thử Trải Nghiệm',
      nameLabel: 'Họ và tên của bạn *',
      phoneLabel: 'Số điện thoại / Zalo *',
      modelLabel: 'Mô hình kinh doanh',
      storeLabel: 'Tên cửa hàng / Pet Shop (nếu có)',
      cityLabel: 'Tỉnh / Thành phố kinh doanh',
      notesLabel: 'Ghi chú thêm hoặc câu hỏi cho PurrSafe',
      privacy: 'Cam kết bảo mật thông tin liên hệ và số điện thoại của quý khách.',
      submitBtn: 'GỬI ĐĂNG KÝ TƯ VẤN NGAY',
      submitting: 'Đang gửi thông tin...',
      successTitle: 'Đăng Ký Thành Công!',
      successCodeLabel: 'Mã yêu cầu của bạn là:',
      callNow: 'Gọi Hotline:',
      zaloNow: 'Nhắn Zalo Trực Tiếp',
      submitAnother: 'Gửi thêm một yêu cầu khác',
      businessTypes: [
        { value: 'pet_shop', label: 'Pet Shop / Cửa hàng thú cưng' },
        { value: 'clinic', label: 'Phòng khám / Bệnh viện Thú y' },
        { value: 'online_seller', label: 'Kinh doanh online / Fanpage / TikTok Shop' },
        { value: 'distributor', label: 'Nhà phân phối / Kho sỉ' },
        { value: 'individual', label: 'Cá nhân nuôi nhiều mèo' },
      ],
      cities: [
        'TP. Hồ Chí Minh',
        'TP. Hà Nội',
        'TP. Đà Nẵng',
        'TP. Hải Phòng',
        'TP. Cần Thơ',
        'Bình Dương',
        'Đồng Nai',
        'Bà Rịa - Vũng Tàu',
        'Khánh Hòa',
        'Lâm Đồng',
        'Quảng Ninh',
        'Bắc Ninh',
        'Thanh Hóa',
        'Nghệ An',
        'Thừa Thiên Huế',
        'Tỉnh thành khác',
      ],
    },
    footer: {
      support247: 'Liên Hệ Trực Tiếp',
      title1: 'Hotline Tư Vấn Đặt Hàng &',
      titleHighlight: 'Hợp Tác Đại Lý PurrSafe',
      desc: 'Quý khách hàng và đối tác cần thông tin chi tiết về sản phẩm, tư vấn chính sách hợp tác phân phối hoặc nhận mẫu thử miễn phí, xin vui lòng liên hệ trực tiếp số điện thoại dưới đây:',
      phoneLabel: 'Số điện thoại liên hệ:',
      callNow: 'Gọi Ngay',
      zaloChat: 'Nhắn Tin Trực Tiếp Qua Zalo',
      brandDesc: 'Thương hiệu Cát Mèo Mix Đậu Nành, Than Hoạt Tính và Khoáng Chất Tự Nhiên cao cấp. Lựa chọn tối ưu bảo vệ sức khỏe hệ hô hấp của mèo cưng và giữ trọn không gian sống thơm mát.',
      addressLabel: 'Địa Chỉ Liên Hệ',
      phoneLabelBottom: 'Điện thoại hỗ trợ:',
      copyright: '© 2026 PurrSafe. Bản quyền thương hiệu Cát Mèo Mix PurrSafe.',
      quality1: 'Sản phẩm chuyên biệt cho mèo',
      quality2: 'An toàn tự nhiên',
      backToTop: 'Về đầu trang',
    },
    sticky: {
      productName: 'PurrSafe Cát Mèo Mix Hương Sữa',
      hotlineLabel: 'Hotline:',
      zaloBtn: 'Nhắn Zalo',
      callBtn: 'Gọi Ngay',
      distributorBtn: 'Tư Vấn Đại Lý',
    },
    video: {
      badge: 'KIỂM CHỨNG THỰC TẾ 100%',
      title: 'Video Trực Quan Kiểm Tra Chất Lượng Cát PurrSafe',
      subtitle: 'Xem toàn bộ quá trình kiểm tra thực tế: độ hút nước siêu tốc, đóng khối vón trong 30s, chống bám đáy khay và chịu va đập không vỡ vụn.',
      watchBtn: 'Xem Video Thử Nghiệm (25s)',
      pauseBtn: 'Tạm Dừng',
      replayBtn: 'Xem Lại Từ Đầu',
      chaptersTitle: '5 Điểm Kiểm Chứng Trong Clip',
      chapters: [
        {
          time: '00:00',
          seconds: 0,
          tag: '01. MỞ ĐẦU',
          title: 'Bao bì & Ngoại cảnh',
          desc: 'Cùng mình kiểm chứng chất lượng cát PurrSafe 2.8Kg nhé!',
        },
        {
          time: '00:05',
          seconds: 5,
          tag: '02. CẤU TRÚC HẠT',
          title: 'Khả năng thấm hút nước',
          desc: 'Tỷ lệ vàng 70:20:10 (Đậu nành, than hoạt tính, khoáng tự nhiên).',
        },
        {
          time: '00:10',
          seconds: 10,
          tag: '03. THỬ NGHIỆM',
          title: 'Rót trực tiếp chất lỏng',
          desc: 'Đổ nước vào khay trong suốt để kiểm tra tốc độ ngậm nước.',
        },
        {
          time: '00:15',
          seconds: 15,
          tag: '04. VÓN CỤC 30S',
          title: 'Không bám đáy khay cát',
          desc: 'Vón chắc nịch chưa đầy 30 giây, xẻng xúc nhấc lên sạch bong.',
        },
        {
          time: '00:20',
          seconds: 20,
          tag: '05. ĐỘ BỀN KHỐI',
          title: 'Va đập mạnh không lo vỡ',
          desc: 'Thả rơi tự do từ trên cao xuống nền sàn gỗ không hề bị vỡ vụn.',
        },
      ],
      highlights: [
        {
          value: '< 30s',
          label: 'Vón cục thần tốc',
          desc: 'Đóng khối chắc chỉ trong tích tắc khi tiếp xúc chất lỏng.',
        },
        {
          value: '0%',
          label: 'Không bám dính đáy',
          desc: 'Đáy khay trong suốt sạch hoàn toàn, dễ xúc dọn.',
        },
        {
          value: '100%',
          label: 'Chống vỡ vụn khi rơi',
          desc: 'Khối vón dẻo dai, không vỡ bụi rơi ngược lại khay.',
        },
        {
          value: '99%',
          label: 'Khử mùi & hạt sạch',
          desc: 'Than hoạt tính ngậm mùi hôi, bảo vệ hô hấp bé cưng.',
        },
      ],
      ctaTrial: 'Đăng Ký Nhận Mẫu Thử Miễn Phí',
      ctaHotline: 'Gọi Hotline Tư Vấn: 0866 780 599',
    },
  },

  zh: {
    nav: {
      intro: '产品介绍',
      video: '实测视频',
      features: '核心优势',
      ingredients: '天然成分',
      reviews: '用户评价',
      distributor: '代理加盟',
      contact: '联系我们',
      hotlinePrefix: '服务热线:',
      zaloOrChat: '在线咨询',
      officialProduct: '官方正品',
      ratioSubtitle: '70% 大豆纤维 · 20% 活性炭 · 10% 天然矿物',
    },
    brand: {
      name: 'PurrSafe',
      productName: 'PurrSafe 混合猫砂 奶香味 2.8Kg',
      slogan: '不仅是猫砂，这是PurrSafe。',
      subSlogan: '爱宠猫咪的最佳选择',
      weight: '2.8 公斤',
      scent: '自然清甜奶香',
      hotline: '0866780599',
      hotlineFormatted: '+84 866 780 599',
      zaloUrl: 'https://zalo.me/0866780599',
      address: '胡志明市守德区阮文伯街 (Nguyen Van Ba, Thu Duc, HCMC)',
      ratioBadge: '70% 大豆 · 20% 活性炭 · 10% 天然矿物',
    },
    hero: {
      tagline: '爱宠猫咪的最佳选择',
      desc: '创新黄金比例混合配方：70% 天然食品级大豆纤维，20% 高效活性炭吸附除臭，10% 天然矿物快速结团。彻底解决扬尘与粘底烦恼，全天候保持室内空气清新。',
      ctaDistributor: '代理加盟 / 批量订购',
      ctaHotline: '服务热线: +84 866 780 599',
      ratingText: '4.9/5 星级好评 · 超过500家宠物店与数万养宠家庭共同信赖',
      realPhotoTag: '实物实拍',
      realPhotoBadge: 'PurrSafe Mix 2.8Kg',
      scentBadge: '自然清甜奶香',
      clumpBadge: '3秒疾速结团',
      nonStickSub: '绝不粘附砂盆底部',
      footprints: ['便携手提袋设计', '防潮密封拉链', '无粉尘健康保护'],
      badges: [
        { label: '安全无害', desc: '100% 天然环保材质，温和无毒' },
        { label: '生态友好', desc: '植物生物降解纤维，洁净卫生' },
        { label: '超强吸水', desc: '瞬间锁住水分与异味分子' },
      ],
    },
    features: [
      {
        id: 'low-dust',
        title: '近零粉尘',
        subtitle: '守护呼吸系统',
        desc: '多道严格除尘工艺筛选，杜绝微尘弥漫，呵护猫咪敏感鼻腔与眼部健康，保护家人呼吸。',
        highlight: '极度洁净无尘',
      },
      {
        id: 'odor-control',
        title: '强效除臭',
        subtitle: '20% 活性炭分子锁味',
        desc: '高含量活性炭深层吸附氨气与异味细菌，配合温和清雅的奶香，保持封闭居室清新宜人。',
        highlight: '24小时持久除味',
      },
      {
        id: 'fast-clump',
        title: '秒速结团',
        subtitle: '接触即固化',
        desc: '天然矿物与大豆植物纤维瞬间协同反应，3秒结成紧密圆团，铲取时不易碎裂散开。',
        highlight: '结实圆润紧凑',
      },
      {
        id: 'non-stick',
        title: '不粘盆底',
        subtitle: '轻松省心清理',
        desc: '结团迅速浮聚于表面，彻底告别湿软糊底难题，让铲砂日常只需几秒即可轻松搞定。',
        highlight: '盆底洁净干爽',
      },
    ],
    intro: {
      badge: '产品深度解析',
      titleLine1: '创新突破配方',
      titleLine2: '70% 大豆 · 20% 活性炭 · 10% 天然矿物',
      desc: 'PurrSafe 专为解决养猫铲屎痛点而生：无尘健康、除臭彻底，让爱宠安心，主人轻松。',
      painPoints: [
        {
          problem: '传统膨润土猫砂灰尘漫天',
          effect: '导致猫咪干咳、过敏性鼻炎，并在家中留下厚厚白色粉尘',
          solution: 'PurrSafe 采用多层精密风力筛灰，粉尘近乎于零，全方位呵护呼吸健康。',
        },
        {
          problem: '封闭房间异味刺鼻难闻',
          effect: '室内氨气浓重，朋友来访时空气尴尬难耐',
          solution: '20% 活性炭高密度微孔精准吸附气味分子，散发柔和怡人天然奶香。',
        },
        {
          problem: '结团粘底难以铲刮洗刷',
          effect: '猫砂铲容易折断，砂盆角落潮湿滋生细菌真菌',
          solution: '10% 天然矿物即刻锁水，结团完整结实，绝不粘附砂盆底部。',
        },
        {
          problem: '猫爪夹砂散落带至地毯沙发',
          effect: '碎屑粘在爪垫，被猫咪带到床上或沙发各处',
          solution: '2.0mm 标准颗粒软硬适中，不卡猫爪肉垫，保持居室洁净。',
        },
      ],
      specBadge: '国际质量标准',
      specTitle: '技术参数与规格',
      specTitleHighlight: 'PurrSafe 混合猫砂',
      specDesc: '历经严苛质量检测，颗粒均匀密实，温和无刺激，适合各年龄段猫咪使用。',
      specs: [
        { label: '产品名称', value: 'PurrSafe 混合猫砂' },
        { label: '净含量', value: '2.8 公斤 / 袋' },
        { label: '香型', value: '自然清甜奶香' },
        { label: '颗粒直径', value: '2.0mm 标准条状' },
        { label: '包装方式', value: '加固提手防潮袋' },
        { label: '保存方式', value: '请置于干燥阴凉处' },
      ],
    },
    reviews: {
      badge: '真实养宠人反馈',
      title1: '听听用户如何评价',
      titleHighlight: 'PurrSafe',
      desc: '深受越南及国际爱猫人士与宠物店喜爱，凭借强力活性炭除臭与不粘底性能广受赞誉。',
      writeReviewBtn: '写下您的评价',
      basedOn: '基于真实养猫用户的客观体验反馈',
      metrics: [
        { label: '除臭效果', value: '高效满意' },
        { label: '洁净程度', value: '近零粉尘' },
        { label: '结团速度', value: '3秒结团' },
      ],
      filterAll: '全部评价',
      filterOdor: '密闭房间除臭',
      filterDust: '低粉尘护呼吸',
      filterClump: '结实且不粘底',
      filterDistributor: '宠物店与代理商评价',
      verifiedBuyer: '✓ 真实已购宠主认证',
      helpful: '有用',
      modalTitle: '提交您的使用评价',
      modalSubmittedTitle: '感谢您的真实分享！',
      modalSubmittedDesc: '您的评价已成功提交并更新至网站供更多宠友参考。',
      formName: '您的姓名 / 称呼 *',
      formLocation: '所在地区 / 城市',
      formRating: '满意度评星',
      formContent: '使用心得与感受 *',
      formCancel: '取消',
      formSubmit: '立即发布评价',
      items: [
        {
          id: 'owner-1',
          author: 'Trâm 女士 (饲养3只英国短毛猫)',
          role: '胡志明市守德区公寓住宅',
          location: '胡志明市',
          avatar: '/images/avatar1.jpg',
          stars: 5,
          content: '在密闭空调公寓养3只猫以前真的很头疼，每次便便整个客厅都是味道。换了PurrSafe活性炭混合砂后太惊喜了！活性炭把排泄物味道吸得非常彻底，而且散发淡淡的奶香。猫咪挖砂完全没有灰尘粘在鼻子上，非常值得推荐！',
          date: '昨天',
          category: 'odor',
          likes: 56,
          tagLabel: '#密闭空间强力除臭',
        },
        {
          id: 'owner-2',
          author: 'Khang 先生 (饲养2只长毛波斯猫)',
          role: '河内市栋多区',
          location: '河内市',
          avatar: '/images/avatar2.jpg',
          stars: 5,
          content: '长毛猫最怕猫砂黏在尾巴毛或爪缝带得到处都是。PurrSafe颗粒很干爽紧致，完全不粘脚。最爽的是清理的时候：3秒结成圆圆的一坨硬团，轻轻一铲就完整起来，砂盆底下干干净净，几秒就搞定！',
          date: '3天前',
          category: 'clump',
          likes: 42,
          tagLabel: '#3秒结团不粘底',
        },
        {
          id: 'owner-3',
          author: 'Mai 女士 (饲养5只猫咪)',
          role: '河内市纸桥区',
          location: '河内市',
          avatar: '/images/avatar3.jpg',
          stars: 5,
          content: '我年纪大了最怕猫砂沉重和弯腰费力刮盆底。PurrSafe带把手拿取很轻松，砂铲下去一点都不沾塑料底，盆底光溜溜的。淡淡奶香很舒服，我已经推荐给同小区的所有养猫邻居了！',
          date: '1周前',
          category: 'clump',
          likes: 49,
          tagLabel: '#提手设计轻便好用',
        },
        {
          id: 'owner-4',
          author: 'Yến 小姐 (饲养救援领养猫咪)',
          role: '岘港市海洲区',
          location: '岘港市',
          avatar: '/images/avatar4.jpg',
          stars: 5,
          content: '家里的猫咪呼吸道很敏感，以前用劣质膨润土总是打喷嚏流眼泪。换了这款砂之后喷嚏完全止住了，粉尘真的极少。结团很扎实，铲到垃圾袋系好非常整洁卫生。',
          date: '2周前',
          category: 'dust',
          likes: 63,
          tagLabel: '#近零粉尘呵护眼睛',
        },
        {
          id: 'owner-5',
          author: 'Lê Hoàng 兽医师 (Pet Care 宠物专科诊所)',
          role: '资深执业兽医师',
          location: '胡志明市第1郡',
          avatar: '/images/avatar1.jpg',
          stars: 5,
          content: '许多猫咪前来就诊都伴有过敏性鼻炎甚至角膜划伤，很大程度上源于粉尘大的劣质矿砂。PurrSafe 采用70%食品级大豆纤维与精选天然矿物，除尘工艺极为彻底。幼猫偶有微量误食亦可安全排出，绝不会堵塞肠道。',
          date: '3周前',
          category: 'dust',
          likes: 78,
          tagLabel: '#专业兽医师推荐',
        },
        {
          id: 'owner-6',
          author: 'Quốc Bảo 先生 (Boss & Me 宠物连锁店店主)',
          role: '华北地区核心分销商',
          location: '河内市巴亭区',
          avatar: '/images/avatar2.jpg',
          stars: 5,
          content: '我们店首次进了一托盘PurrSafe试销，仅10天就被老顾客抢购一空并纷纷回购第2、第3袋。客户普遍反馈奶香味特别怡人，砂盆不再粘底。厂家的批发政策与媒体物料支持非常到位，物流响应极快。',
          date: '1个月前',
          category: 'distributor',
          likes: 51,
          tagLabel: '#热销宠物店推荐',
        },
        {
          id: 'owner-7',
          author: 'Kim Ngân 女士 (胡志明市猫咪救助站发起人)',
          role: '救助照料12只流浪猫咪',
          location: '胡志明市平盛区',
          avatar: '/images/avatar3.jpg',
          stars: 5,
          content: '救助多只猫咪，最头疼的就是高昂猫砂消耗和满屋骚味。使用PurrSafe后消耗明显减少，因为它结团紧实成球，只铲掉脏砂不浪费好砂。20%活性炭除臭确实强大，客厅再也没有一丝异味！',
          date: '1个月前',
          category: 'odor',
          likes: 88,
          tagLabel: '#高性价比强力除臭',
        },
        {
          id: 'owner-8',
          author: 'Đức Huy 先生 (35平米单身公寓住户)',
          role: '视觉设计师',
          location: '胡志明市第4郡',
          avatar: '/images/avatar4.jpg',
          stars: 5,
          content: '在35平米的开间公寓里整天开着空调，猫砂盆只能放在书桌旁，却完全闻不到任何排泄物异味。清理只需30秒，砂盆底部光洁如新毫无粘底。体验感拉满，绝对长期回购！',
          date: '1个月前',
          category: 'clump',
          likes: 39,
          tagLabel: '#小户型密闭房首选',
        },
      ],
    },
    ingredients: {
      badge: '纯天然原材',
      title1: '精准科学配比：',
      titleHighlight: '70% 大豆 · 20% 活性炭 · 10% 天然矿物',
      desc: '有机大豆植物纤维、高效活性炭与天然矿物的精妙搭配，带来双重除臭与瞬间锁水效果。',
      selectedBadge: '配比含量',
      selectedRole: '核心作用',
      selectedDesc: '经严格安全认证与高温灭菌工艺处理，彻底消灭霉菌杂菌，为爱宠提供干爽健康的如厕环境。',
      viewDetails: '点击查看详情',
      currentlyViewing: '正在查看',
      items: [
        {
          id: 'tofu',
          name: '天然大豆纤维',
          englishName: 'Natural Soybean Fiber',
          ratio: '70%',
          badge: '绿色植物原材',
          shortDesc: '优质天然大豆经精密提纯挤压成 2.0mm 标准颗粒。',
          benefits: [
            '100% 食品级植物来源，安全环保无毒害',
            '即使幼猫在玩耍或舔毛时不慎微量误食也无碍消化',
            '2.0mm 颗粒舒适亲肤，温柔呵护各阶段猫咪娇嫩爪垫',
            '颗粒设计巧妙不卡脚缝，减少猫砂被带出砂盆散落一地',
          ],
        },
        {
          id: 'carbon',
          name: '高效活性炭',
          englishName: 'Activated Carbon',
          ratio: '20%',
          badge: '强力除臭卫士',
          shortDesc: '配方含量高达20%，纳米级微孔结构强力吸附氨气与气味分子。',
          benefits: [
            '高品质活性炭原料精制，彻底锁定排泄物异味及气味细菌',
            '数以亿计的微孔如同天然空气净化器，吸附刺鼻氨味',
            '有效抑制潮湿环境下霉菌与有害杂菌滋生繁衍',
            '让封闭公寓及空调房间全天保持干爽清爽怡人',
          ],
        },
        {
          id: 'mineral',
          name: '天然矿物质',
          englishName: 'Natural Mineral Granules',
          ratio: '10%',
          badge: '疾速锁水结团',
          shortDesc: '高纯度无尘天然矿物颗粒，迅速填补间隙并催化快速结团。',
          benefits: [
            '精选天然纯净矿物，多重风选除尘去除杂质',
            '吸收水分仅需不到3秒，接触液体即刻固化结块',
            '渗透填充在大豆颗粒缝隙间，防止水分流渗至盆底',
            '结团紧实不松散不碎落，铲砂时绝不粘附塑料盆底',
          ],
        },
      ],
    },
    comparison: {
      badge: '实力对比',
      title1: 'PurrSafe 有何不同',
      titleHighlight: '对比市售常见猫砂？',
      desc: '清晰透明的参数对比，帮助您直观了解为何 PurrSafe 是兼顾猫咪健康与居室环境的优选方案。',
      colCriteria: '对比项目',
      colPurrSafe: 'PurrSafe 混合猫砂',
      colClay: '普通膨润土矿砂',
      colWood: '松木砂 / 刨花砂',
      rows: [
        {
          criteria: '粉尘与呼吸健康',
          purrsafe: '几乎无粉尘（多层精细风选，保护人宠鼻腔）',
          clay: '粉尘极大，倒砂时浓烟滚滚，易诱发鼻炎哮喘',
          wood: '带有微小木屑粉尘，易粘毛粘爪',
        },
        {
          criteria: '除臭持久性',
          purrsafe: '20% 活性炭物理强吸附 + 自然淡雅奶香',
          clay: '依靠化学香精掩盖，1-2天后气味混杂刺鼻',
          wood: '松木味混合便尿味，易发酸发潮',
        },
        {
          criteria: '结团速度与硬度',
          purrsafe: '3秒硬度结团，结实紧凑不松散碎裂',
          clay: '结团良好但易破碎成小碎屑污染剩余猫砂',
          wood: '结团松散或碎成细木渣不易筛分',
        },
        {
          criteria: '盆底粘附情况',
          purrsafe: '干爽不粘底，铲除后盆底平整洁净',
          clay: '容易在底部形成黏糊泥浆，极难刮刷清洗',
          wood: '角落易积存湿气与异味尿渍',
        },
        {
          criteria: '日常清理便捷性',
          purrsafe: '铲起成团装入垃圾袋系紧即可，干净省力',
          clay: '团块沉重且糊底，需用力铲刮',
          wood: '碎屑细碎不易完全捞除',
        },
        {
          criteria: '单包消耗速度',
          purrsafe: '用量极省：单袋 2.8Kg 单只成猫可用 3-4 周',
          clay: '碎渣糊底多，消耗较快频繁添砂',
          wood: '消耗速度中等',
        },
      ],
      tipLabel: '省砂小贴士：',
      tipContent: '得益于紧实小巧的圆团构造且绝不糊底，PurrSafe 相比传统粘底膨润土可节省高达 40% 的损耗。',
    },
    distributor: {
      badge: '商业合作',
      title1: '代理加盟政策与',
      titleHighlight: '全国渠道分销支持',
      desc: 'PurrSafe 诚邀全国宠物店、动物诊所及各大宠物用品批发商携手合作，提供稳定出厂货源与长效发展扶持。',
      exclusiveBadge: '全方位扶持，长期共赢',
      stepHeadingBadge: '合作流程透明高效',
      stepHeadingTitle: '成为 PurrSafe 合作伙伴的4个步骤',
      steps: [
        {
          num: '01',
          title: '提交合作意向',
          desc: '在线填写信息或直接致电 / 添加 Zalo，商务专员将为您发送完整加盟资料。',
        },
        {
          num: '02',
          title: '申领体验试用样包',
          desc: '我们免费邮寄样品到店，让您亲测结团硬度、吸附除臭力与无粉尘效果。',
        },
        {
          num: '03',
          title: '确认订货方案',
          desc: '根据您的门店规模与所在区域，协商定制最适宜的采购数量与专属权益。',
        },
        {
          num: '04',
          title: '极速发货与运营扶持',
          desc: '本地现货仓库闪电发货，并提供精美产品图文素材及销售指导，长效相伴。',
        },
      ],
      benefits: [
        {
          title: '源头工厂直供，货源充足',
          desc: '充足库存与成熟生产线持续保供，旺季不缺货不断供，品质批次高度稳定。',
        },
        {
          title: '快消刚需品类，复购率高',
          desc: '猫砂为养宠刚需消耗品，品质好口碑佳，顾客月度规律回购率高达 85% 以上。',
        },
        {
          title: '营销宣传物料全面赋能',
          desc: '提供高精度产品实拍图、测评短视频、推文模板及专业答疑指引，轻松促成销售。',
        },
        {
          title: '灵活轻便起订门槛',
          desc: '专为新开宠物店、洗美中心及个人创业者降低启动压力，起订量灵活自由。',
        },
        {
          title: '区域经营保护机制',
          desc: '维护各合作伙伴合理权益，并将附近零售客源直接引流对接给临近网点。',
        },
        {
          title: '免费样品袋支持',
          desc: '长期提供试用样袋供门店赠送进店养宠顾客试用，以高品质实现高转化。',
        },
      ],
      ctaCardTitle: '想要了解 PurrSafe 代理政策与批发详情？',
      ctaCardDesc: '立即联系我们，获取一手合作政策资料与免费体验样品。',
      ctaCardBtn: '申请代理咨询',
      ctaCardCall: '热线电话:',
    },
    usage: {
      badge: '使用技巧',
      title1: '使用指导与',
      titleHighlight: '长效省砂科学秘诀',
      desc: '规范的日常使用方法能使活性炭除臭与矿物快速结团达到峰值，让砂盆长效保持干爽。',
      dailyAction: '建议每日进行',
      steps: [
        {
          step: '01',
          title: '倒入猫砂',
          desc: '彻底清洁并擦干猫砂盆。倒入 PurrSafe 猫砂，建议保持 5-7cm 舒适厚度垫层。',
        },
        {
          step: '02',
          title: '秒速聚拢成团',
          desc: '猫咪如厕后，猫砂在3秒内迅速锁水结块，将异味牢牢封存并在团块内部。',
        },
        {
          step: '03',
          title: '铲出入袋丢弃',
          desc: '用猫砂铲将紧实坚硬的结团铲出，装入垃圾袋系紧，随日常生活垃圾一同处理。',
        },
        {
          step: '04',
          title: '定期补齐与清洁',
          desc: '适量补充新砂维持 5-7cm 厚度。每隔 3-4 周建议彻底更换全盆猫砂并洗净消毒。',
        },
      ],
      tipTitle: '换砂过渡小贴士：',
      tipDesc: '若猫咪习惯原用旧砂，前2天可按 70% 旧砂 + 30% PurrSafe 混合，第3-4天调整为 50%-50%，第5天即可完全换为 100% PurrSafe，猫咪便会自然爱上柔软触感与清甜奶香！',
    },
    form: {
      badge: '在线咨询登记',
      title1: '登记代理合作 &',
      titleHighlight: '免费申领体验样包',
      desc: '请留下您的联络信息，PurrSafe 商务专员将尽快与您对接并寄送实物体验样品。',
      needLabel: '您的意向需求：',
      needDistributor: '咨询代理加盟政策',
      needSample: '申领免费体验样包',
      nameLabel: '您的姓名 / 称呼 *',
      phoneLabel: '联络电话 / 社交账号 *',
      modelLabel: '经营模式 / 业务类型',
      storeLabel: '店铺 / 机构名称（如有）',
      cityLabel: '所在城市 / 省份',
      notesLabel: '补充说明或合作疑问',
      privacy: '我们严格保护您的电话与商业隐私，绝不外泄。',
      submitBtn: '立即提交咨询意向',
      submitting: '正在提交信息...',
      successTitle: '提交成功！',
      successCodeLabel: '您的登记服务编号为：',
      callNow: '致电热线:',
      zaloNow: 'Zalo 在线沟通',
      submitAnother: '提交另一条咨询',
      businessTypes: [
        { value: 'pet_shop', label: '宠物店 / 实体用品店' },
        { value: 'clinic', label: '宠物医院 / 兽医诊所' },
        { value: 'online_seller', label: '网店电商 / 社交电商' },
        { value: 'distributor', label: '区域批发商 / 渠道商' },
        { value: 'individual', label: '多猫家庭养宠用户' },
      ],
      cities: [
        '胡志明市 (TP. Hồ Chí Minh)',
        '河内市 (TP. Hà Nội)',
        '岘港市 (TP. Đà Nẵng)',
        '海防市 (TP. Hải Phòng)',
        '芹苴市 (TP. Cần Thơ)',
        '平阳省 (Bình Dương)',
        '同奈省 (Đồng Nai)',
        '巴地头顿 (Bà Rịa - Vũng Tàu)',
        '庆和省芽庄 (Khánh Hòa)',
        '林同省大叻 (Lâm Đồng)',
        '广宁省 (Quảng Ninh)',
        '北宁省 (Bắc Ninh)',
        '其他省市 / 国际地区',
      ],
    },
    footer: {
      support247: '直接联系',
      title1: '订购咨询热线 &',
      titleHighlight: 'PurrSafe 代理加盟',
      desc: '无论您需要了解产品特性、采购批发还是索取样品，PurrSafe 服务团队随时竭诚为您解答：',
      phoneLabel: '专属咨询电话：',
      callNow: '立即拨打',
      zaloChat: 'Zalo 官方账号直接交流',
      brandDesc: 'PurrSafe 专注于大豆纤维、活性炭与天然矿物的高端混合猫砂研发生产，以近零粉尘与长效除臭守护猫咪健康，赋能品质养宠生活。',
      addressLabel: '联系地址',
      phoneLabelBottom: '服务电话：',
      copyright: '© 2026 PurrSafe. 版权所有 保留一切权利。',
      quality1: '专为爱猫研制',
      quality2: '天然安全环保',
      backToTop: '返回顶部',
    },
    sticky: {
      productName: 'PurrSafe 混合猫砂 奶香味',
      hotlineLabel: '咨询热线:',
      zaloBtn: '在线咨询',
      callBtn: '立即拨打',
      distributorBtn: '加盟咨询',
    },
    video: {
      badge: '100% 真实品质实测',
      title: 'PurrSafe 混合猫砂实拍性能测试视频',
      subtitle: '全流程实机检测：瞬间吸水能力、30秒极速结团、绝不粘底以及高处坠落不碎裂强韧度。',
      watchBtn: '播放实测视频 (25秒)',
      pauseBtn: '暂停',
      replayBtn: '重新播放',
      chaptersTitle: '视频实测五大看点',
      chapters: [
        {
          time: '00:00',
          seconds: 0,
          tag: '01. 真实外观',
          title: '原厂包装与户外实拍',
          desc: '与您一起开袋实测 PurrSafe 2.8KG 混合猫砂品质！',
        },
        {
          time: '00:05',
          seconds: 5,
          tag: '02. 黄金配比',
          title: '极速吸水性能',
          desc: '70%豆腐砂 + 20%活性炭 + 10%天然膨润土科学混配。',
        },
        {
          time: '00:10',
          seconds: 10,
          tag: '03. 吸水试验',
          title: '大剂量液体瞬间渗透',
          desc: '在透明实验盆中倾倒液体，实测猫砂秒吸表现。',
        },
        {
          time: '00:15',
          seconds: 15,
          tag: '04. 秒级结团',
          title: '30秒紧实结团·绝不粘底',
          desc: '结团完整紧密，铲起瞬间盆底光洁如新无残留。',
        },
        {
          time: '00:20',
          seconds: 20,
          tag: '05. 强韧耐摔',
          title: '剧烈撞击不碎裂',
          desc: '自由落体坠落木地板，结团完好不散落粉尘。',
        },
      ],
      highlights: [
        {
          value: '< 30秒',
          label: '极速结团',
          desc: '遇水瞬间包裹聚拢，锁住异味。',
        },
        {
          value: '0%',
          label: '盆底粘连率',
          desc: '干爽不粘底，铲屎轻松省力。',
        },
        {
          value: '100%',
          label: '撞击完整率',
          desc: '结团韧性好，剧烈晃动不散架。',
        },
        {
          value: '99%',
          label: '除臭净味率',
          desc: '球状活性炭深层吸附氨气异味。',
        },
      ],
      ctaTrial: '申请免费样品试用',
      ctaHotline: '全国招商热线: 0866 780 599',
    },
  },

  en: {
    nav: {
      intro: 'Overview',
      video: 'Test Video',
      features: 'Features',
      ingredients: 'Ingredients',
      reviews: 'Reviews',
      distributor: 'Partnership',
      contact: 'Contact',
      hotlinePrefix: 'Hotline:',
      zaloOrChat: 'Zalo / Chat',
      officialProduct: 'Official Product',
      ratioSubtitle: '70% Soybean · 20% Activated Carbon · 10% Natural Minerals',
    },
    brand: {
      name: 'PurrSafe',
      productName: 'PurrSafe Mixed Cat Litter Milk Scent 2.8Kg',
      slogan: 'Not just cat litter, this is PurrSafe.',
      subSlogan: 'THE OPTIMAL CHOICE FOR CATS',
      weight: '2.8 Kg',
      scent: 'Natural Gentle Sweet Milk',
      hotline: '0866780599',
      hotlineFormatted: '+84 866 780 599',
      zaloUrl: 'https://zalo.me/0866780599',
      address: 'Nguyen Van Ba Street, Thu Duc, Ho Chi Minh City, Vietnam',
      ratioBadge: '70% SOYBEAN · 20% CARBON · 10% MINERALS',
    },
    hero: {
      tagline: 'THE OPTIMAL CHOICE FOR CATS',
      desc: 'A breakthrough golden ratio formula combining 70% Natural Soybean Fiber, 20% Activated Carbon, and 10% Natural Minerals. Delivers superior odor absorption, near-zero dust, and guaranteed non-stick box performance.',
      ctaDistributor: 'Distributor & Agency Inquiry',
      ctaHotline: 'Hotline: +84 866 780 599',
      ratingText: '4.9/5 Stars · Trusted by 500+ Pet Shops & Thousands of Cat Owners',
      realPhotoTag: 'Actual Product Photo',
      realPhotoBadge: 'PurrSafe Mix 2.8Kg',
      scentBadge: 'Gentle Milk Scent',
      clumpBadge: 'Instant 3s Clumping',
      nonStickSub: 'Never Sticks to the Box Bottom',
      footprints: ['Convenient carry handle', 'Moisture-proof zip seal', 'Pure dust-free granules'],
      badges: [
        { label: 'Completely Safe', desc: '100% natural, gentle & non-toxic for cats' },
        { label: 'Eco-Friendly', desc: 'Plant-based biodegradable materials' },
        { label: 'Super Absorbent', desc: 'Locks moisture & odors immediately' },
      ],
    },
    features: [
      {
        id: 'low-dust',
        title: 'Virtually Dust-Free',
        subtitle: 'Respiratory Protection',
        desc: 'Advanced multi-stage screening eliminates fine airborne dust, protecting sensitive feline eyes and respiratory tracts as well as family members.',
        highlight: 'Maximum Cleanliness',
      },
      {
        id: 'odor-control',
        title: 'Maximum Odor Control',
        subtitle: '20% Activated Carbon Power',
        desc: 'Dense activated carbon micropores lock ammonia gas and odor-causing bacteria, keeping enclosed indoor spaces naturally sweet and fresh.',
        highlight: '24h Dual Action',
      },
      {
        id: 'fast-clump',
        title: 'Instant 3-Second Clumping',
        subtitle: 'Hard Solid Clumps',
        desc: 'Natural minerals react instantly with liquid, forming compact round clumps within 3 seconds that never break apart when scooping.',
        highlight: 'Firm & Round Clumps',
      },
      {
        id: 'non-stick',
        title: 'Non-Stick Box Bottom',
        subtitle: 'Effortless Daily Cleaning',
        desc: 'Clumps form at the top layer and never turn into sticky sludge on the tray floor, allowing you to scoop the entire box clean in 5 seconds.',
        highlight: 'Clean & Dry Box',
      },
    ],
    intro: {
      badge: 'Product Overview',
      titleLine1: 'Breakthrough 3-in-1 Formula',
      titleLine2: '70% Soybean · 20% Carbon · 10% Minerals',
      desc: 'PurrSafe delivers a total litter box solution: zero dust, complete odor trapping, and effortless scooping every single day.',
      painPoints: [
        {
          problem: 'Dusty Conventional Clay Litter',
          effect: 'Triggers feline coughing, allergic rhinitis, and leaves white dusty footprints across floors',
          solution: 'PurrSafe uses multi-stage dust filtering to guarantee clean air for cats and people.',
        },
        {
          problem: 'Pungent Ammonia Odors in Apartments',
          effect: 'Heavy unpleasant smell lingering in air-conditioned rooms whenever guests arrive',
          solution: '20% activated carbon traps odor molecules while releasing a gentle, relaxing milk aroma.',
        },
        {
          problem: 'Sticky Litter Cemented to Tray Bottom',
          effect: 'Exhausting scraping and scrubbing, broken scoops, and bacteria growing in corners',
          solution: '10% natural minerals immediately bind moisture into firm dry spheres that never stick.',
        },
        {
          problem: 'Cat Tracking Litter Onto Beds and Sofas',
          effect: 'Pellets stuck between paw pads carry litter residue all over the home',
          solution: 'Optimized 2.0mm smooth pellets do not lodge in paw crevices, keeping floors clean.',
        },
      ],
      specBadge: 'International Standards',
      specTitle: 'Technical Specifications',
      specTitleHighlight: 'PurrSafe Mixed Cat Litter',
      specDesc: 'Rigourously tested and manufactured with premium raw ingredients. Gentle and non-irritating for cats of all life stages.',
      specs: [
        { label: 'Product Name', value: 'PurrSafe Mix' },
        { label: 'Net Weight', value: '2.8 Kg / Bag' },
        { label: 'Fragrance', value: 'Gentle Sweet Milk' },
        { label: 'Pellet Diameter', value: '2.0mm Cylindrical' },
        { label: 'Packaging', value: 'Pouch with Built-in Handle' },
        { label: 'Storage', value: 'Store in Cool, Dry Place' },
      ],
    },
    reviews: {
      badge: 'Real Feedback from Cat Parents',
      title1: 'What Cat Owners Say About',
      titleHighlight: 'PurrSafe',
      desc: 'Trusted by cat owners and veterinary clinics for its outstanding activated carbon odor control and non-stick clumping performance.',
      writeReviewBtn: 'Write a Review',
      basedOn: 'Verified experiences from real pet owners',
      metrics: [
        { label: 'Odor Control', value: 'High Efficiency' },
        { label: 'Dust Free', value: 'Virtually 0% Dust' },
        { label: 'Clumping Speed', value: '3-Sec Tight Clump' },
      ],
      filterAll: 'All Reviews',
      filterOdor: 'Odor Control in Rooms',
      filterDust: 'Dust-Free Breathing',
      filterClump: 'Firm Clumping & Non-Stick',
      filterDistributor: 'Pet Shops & Retailers',
      verifiedBuyer: '✓ Verified Cat Owner',
      helpful: 'Helpful',
      modalTitle: 'Submit Your Experience with PurrSafe',
      modalSubmittedTitle: 'Thank You for Your Review!',
      modalSubmittedDesc: 'Your review has been updated and published on the website.',
      formName: 'Your Full Name *',
      formLocation: 'Location / City',
      formRating: 'Rating (Stars)',
      formContent: 'Your Review & Experience *',
      formCancel: 'Cancel',
      formSubmit: 'Post Review Now',
      items: [
        {
          id: 'owner-1',
          author: 'Ms. Bich Tram (Owner of 3 British Shorthair cats)',
          role: 'Masteri Apartment, Thu Duc City',
          location: 'Ho Chi Minh City',
          avatar: '/images/avatar1.jpg',
          stars: 5,
          content: 'Raising 3 cats in an enclosed air-conditioned apartment used to be tough; every time they used the box, the odor spread across the room. Switching to PurrSafe was an amazing revelation! The activated carbon neutralizes urine and feces smell almost completely, leaving a very pleasant mild milk scent. No dust on their noses!',
          date: 'Yesterday',
          category: 'odor',
          likes: 56,
          tagLabel: '#EnclosedRoomOdorLock',
        },
        {
          id: 'owner-2',
          author: 'Mr. Minh Khang (Owner of 2 Longhair Persian cats)',
          role: 'Dong Da District, Hanoi',
          location: 'Hanoi',
          avatar: '/images/avatar2.jpg',
          stars: 5,
          content: 'With long-haired cats, you always fear litter sticking to tail fur and paws. PurrSafe pellets are smooth and firm, never sticking to paw pads. Best of all: it clumps into rock-solid spheres in 3 seconds, scoops out effortlessly without a single smear on the tray floor!',
          date: '3 days ago',
          category: 'clump',
          likes: 42,
          tagLabel: '#Instant3sNonStickClump',
        },
        {
          id: 'owner-3',
          author: 'Mrs. Thanh Mai (Caring for 5 domestic & rescue cats)',
          role: 'Cau Giay District, Hanoi',
          location: 'Hanoi',
          avatar: '/images/avatar3.jpg',
          stars: 5,
          content: 'As a senior cat parent, I dislike heavy lifting and bending over to scrape sticky litter boxes. PurrSafe has a very sturdy built-in handle. Scooping never sticks to the box bottom; the plastic remains clean and dry. The milk fragrance is subtle and natural. Highly recommended!',
          date: '1 week ago',
          category: 'clump',
          likes: 49,
          tagLabel: '#ErgonomicHandleCarry',
        },
        {
          id: 'owner-4',
          author: 'Ms. Hoang Yen (Owner of a rescue tabby cat)',
          role: 'Hai Chau District, Da Nang',
          location: 'Da Nang',
          avatar: '/images/avatar4.jpg',
          stars: 5,
          content: 'My cat has very sensitive respiratory allergies. Cheap clay litter caused chronic sneezing and runny nose. Since switching to PurrSafe, she breathes comfortably with zero sneezing because there is no dust. Clumps firmly and disposes cleanly in trash bags.',
          date: '2 weeks ago',
          category: 'dust',
          likes: 63,
          tagLabel: '#ZeroDustEyeCare',
        },
        {
          id: 'owner-5',
          author: 'Dr. Le Hoang (DVM, Pet Care Veterinary Clinic)',
          role: 'Senior Veterinary Surgeon',
          location: 'District 1, Ho Chi Minh City',
          avatar: '/images/avatar1.jpg',
          stars: 5,
          content: 'Many feline clinical cases present with allergic rhinitis and corneal abrasions from dusty bentonite clay. PurrSafe uses 70% organic food-grade soy fiber with natural minerals that undergo multi-stage dedusting. Even if kittens accidentally ingest a pellet, it passes harmlessly without GI blockage.',
          date: '3 weeks ago',
          category: 'dust',
          likes: 78,
          tagLabel: '#VeterinarianEndorsed',
        },
        {
          id: 'owner-6',
          author: 'Mr. Quoc Bao (Boss & Me Pet Shop Chain Owner)',
          role: 'Tier 1 Regional Distributor',
          location: 'Ba Dinh District, Hanoi',
          avatar: '/images/avatar2.jpg',
          stars: 5,
          content: 'We stocked an initial pallet of PurrSafe to test our retail demand. In just 10 days, customers snapped it all up and came back for repeat bags. Pet parents love the comforting sweet milk scent and effortless tray scooping. The wholesale discount policy and shipping speeds are exceptional.',
          date: '1 month ago',
          category: 'distributor',
          likes: 51,
          tagLabel: '#PetShopPartnerChoice',
        },
        {
          id: 'owner-7',
          author: 'Ms. Kim Ngan (Saigon Cat Rescue Shelter)',
          role: 'Shelter Lead - Caring for 12 Rescue Cats',
          location: 'Binh Thanh, Ho Chi Minh City',
          avatar: '/images/avatar3.jpg',
          stars: 5,
          content: 'Housing multiple rescues makes litter cost and ammonia odors huge daily challenges. PurrSafe saves money because it forms small, tight clumps so you never discard clean litter by mistake. The 20% activated carbon eliminates lingering scents completely!',
          date: '1 month ago',
          category: 'odor',
          likes: 88,
          tagLabel: '#MaximumValueOdorLock',
        },
        {
          id: 'owner-8',
          author: 'Mr. Duc Huy (35sqm Studio Apartment Resident)',
          role: 'Senior UI/UX Designer',
          location: 'District 4, Ho Chi Minh City',
          avatar: '/images/avatar4.jpg',
          stars: 5,
          content: 'Living in a compact studio with 24/7 air conditioning means the litter box is right beside my desk. With PurrSafe, there is literally zero odor. Scooping takes 30 seconds with no bottom residue. Highly recommended for urban pet parents!',
          date: '1 month ago',
          category: 'clump',
          likes: 39,
          tagLabel: '#StudioApartmentFriendly',
        },
      ],
    },
    ingredients: {
      badge: '100% Natural Ingredients',
      title1: 'Precise Scientific Formulation:',
      titleHighlight: '70% Soybean · 20% Carbon · 10% Minerals',
      desc: 'A balanced synergy of organic plant fibers, activated carbon, and natural minerals delivering dual-action odor trapping and instant clumping.',
      selectedBadge: 'Ratio in PurrSafe',
      selectedRole: 'Key Function of',
      selectedDesc: 'Thoroughly tested and treated with high-temperature sterilization to eliminate humidity and mold, ensuring a clean, bacteria-free litter environment.',
      viewDetails: 'Click to explore',
      currentlyViewing: 'Currently viewing',
      items: [
        {
          id: 'tofu',
          name: 'Natural Soybean Fiber',
          englishName: 'Natural Soybean Fiber',
          ratio: '70%',
          badge: 'Plant-Based Biopolymer',
          shortDesc: '100% pure organic food-grade soybean fiber extruded into 2.0mm standard pellets.',
          benefits: [
            '100% pure food-grade plant origin, clean, safe, and non-toxic',
            'Harmless to the digestive tract if kittens accidentally ingest tiny amounts while grooming',
            '2.0mm smooth pellet structure, gentle on paw pads of both kittens and adult cats',
            'Smart cylindrical size does not get trapped between toe pads, avoiding litter scatter',
          ],
        },
        {
          id: 'carbon',
          name: 'Activated Carbon',
          englishName: 'Activated Carbon',
          ratio: '20%',
          badge: 'Deodorizing Specialist',
          shortDesc: 'Accounting for a full 20% of the formula, nano-porous activated carbon traps ammonia gas.',
          benefits: [
            'High-grade activated carbon material capturing pungent odor molecules and bacteria',
            'Millions of nano-capillary pores trap ammonia gas from cat urine immediately',
            'Suppresses bacterial growth and mold in damp litter box micro-climates',
            'Maintains a fresh, pleasant atmosphere in closed rooms and air-conditioned apartments',
          ],
        },
        {
          id: 'mineral',
          name: 'Natural Minerals',
          englishName: 'Natural Mineral Granules',
          ratio: '10%',
          badge: 'Instant Moisture Locking',
          shortDesc: 'Dust-free natural minerals fill pellet gaps, triggering instant 3-second solid clumping.',
          benefits: [
            'Ultra-pure natural minerals thoroughly de-dusted to remove all airborne impurities',
            'Absorbs liquid within 3 seconds, solidifying into tight clumps instantly',
            'Penetrates gaps between tofu pellets, preventing liquid from pooling at the box bottom',
            'Forms compact round lumps that do not crumble and never stick to the box floor',
          ],
        },
      ],
    },
    comparison: {
      badge: 'Performance Comparison',
      title1: 'How PurrSafe Differs',
      titleHighlight: 'From Conventional Litters?',
      desc: 'See our direct comparison table to understand why PurrSafe is the optimal choice for your feline friend and living space.',
      colCriteria: 'Comparison Criteria',
      colPurrSafe: 'PurrSafe Mixed Litter',
      colClay: 'Regular Bentonite Clay',
      colWood: 'Wood Pellets / Sawdust',
      rows: [
        {
          criteria: 'Dust Level & Respiratory Health',
          purrsafe: 'Virtually zero dust (Multi-filtered, protects feline nose & eyes)',
          clay: 'Heavy dust cloud when poured, frequently causes sneezing & allergies',
          wood: 'Fine wood powder clings to fur and paw pads',
        },
        {
          criteria: 'Odor Neutralization',
          purrsafe: 'Superior odor locking with 20% Activated Carbon + Mild milk scent',
          clay: 'Artificial chemical fragrances become pungent after 1-2 days',
          wood: 'Woody smell mixes with urine, becoming sour over time',
        },
        {
          criteria: 'Clumping Speed & Hardness',
          purrsafe: 'Hard solid clump in 3 seconds, never breaks when scooped',
          clay: 'Clumps well but crumbles easily, dirtying remaining clean litter',
          wood: 'Loose clumps or disintegrates into sawdust',
        },
        {
          criteria: 'Sticking to Box Floor',
          purrsafe: 'Never sticks; box bottom stays completely clean and dry',
          clay: 'Turns into muddy sludge cemented to the bottom, hard to scrub',
          wood: 'Urine pools in corners unless stirred constantly',
        },
        {
          criteria: 'Daily Scooping & Disposal',
          purrsafe: 'Scoops out neatly and bags up cleanly with household waste',
          clay: 'Heavy clumps with messy residue adhering to box walls',
          wood: 'Fine crumbs are tedious to sift',
        },
        {
          criteria: 'Consumption Rate',
          purrsafe: 'Economical: 1 bag (2.8Kg) lasts 3-4 weeks for one adult cat',
          clay: 'Depletes fast due to crumbling and bottom adhesion',
          wood: 'Moderate consumption',
        },
      ],
      tipLabel: 'Money-Saving Tip:',
      tipContent: 'Thanks to compact round clumping and zero bottom sticking, PurrSafe reduces wasted litter by up to 40% compared to standard clay litter.',
    },
    distributor: {
      badge: 'Business Partnership',
      title1: 'Distributor & Agency Policy &',
      titleHighlight: 'Nationwide Distribution Support',
      desc: 'PurrSafe is actively welcoming pet shops, veterinary clinics, and pet retail partners nationwide with consistent factory supply and sustainable support.',
      exclusiveBadge: 'Committed to partner success',
      stepHeadingBadge: 'Transparent & Simple Process',
      stepHeadingTitle: '4 Steps to Become a PurrSafe Partner',
      steps: [
        {
          num: '01',
          title: 'Register for Consultation',
          desc: 'Leave your contact information or call/Zalo directly to receive our partnership proposal.',
        },
        {
          num: '02',
          title: 'Receive Free Sample Pack',
          desc: 'PurrSafe delivers trial samples directly to your shop to test clumping, dust-free performance, and odor control.',
        },
        {
          num: '03',
          title: 'Confirm Partnership Terms',
          desc: 'Discuss wholesale volume tailored to your store model and designated distribution territory.',
        },
        {
          num: '04',
          title: 'Fast Delivery & Marketing Support',
          desc: 'Prompt delivery from local warehouses, media marketing assets, and continuous operational support.',
        },
      ],
      benefits: [
        {
          title: 'Direct Factory Supply Stability',
          desc: 'High manufacturing capacity ensures regular shipments with zero stock-outs during peak seasons.',
        },
        {
          title: 'High-Turnover Consumer Essential',
          desc: 'Cat litter is an indispensable recurring necessity. Our superior quality delivers an 85%+ monthly repeat purchase rate.',
        },
        {
          title: 'Marketing & POSM Media Assets',
          desc: 'High-resolution photo libraries, product testing videos, post templates, and retail advisory materials.',
        },
        {
          title: 'Flexible Order Volumes',
          desc: 'Tailored starter volumes to support new pet shops, grooming spas, and boutique sellers without heavy inventory burden.',
        },
        {
          title: 'Territory Protection Policy',
          desc: 'Transparent pricing commitments and customer lead forwarding from our national channels to local partners.',
        },
        {
          title: 'Free Sample Packs for Customers',
          desc: 'PurrSafe provides complimentary trial packs for partners to gift walk-in pet owners, ensuring fast conversion.',
        },
      ],
      ctaCardTitle: 'Interested in becoming a PurrSafe Distributor?',
      ctaCardDesc: 'Contact us today for full wholesale details and complimentary evaluation samples.',
      ctaCardBtn: 'Request Agency Consultation',
      ctaCardCall: 'Hotline:',
    },
    usage: {
      badge: 'Usage Guide',
      title1: 'User Instructions &',
      titleHighlight: 'Pro Money-Saving Tips',
      desc: 'Proper technique maximizes activated carbon odor absorption, clumping speed, and ensures your litter box remains fresh and dry.',
      dailyAction: 'Perform Daily',
      steps: [
        {
          step: '01',
          title: 'Fill the Box',
          desc: 'Clean and thoroughly dry the litter box. Pour PurrSafe litter to an ideal depth of 5 to 7 cm for optimal absorption.',
        },
        {
          step: '02',
          title: 'Instant 3-Second Clump',
          desc: 'When your cat uses the box, liquid is absorbed and clumps firmly within 3 seconds, sealing odors deep within.',
        },
        {
          step: '03',
          title: 'Scoop into Trash Bag',
          desc: 'Scoop out solid clumps and stool cleanly, place in a small trash bag, and dispose with regular household waste.',
        },
        {
          step: '04',
          title: 'Replenish Periodically',
          desc: 'Add fresh litter to maintain the 5-7 cm depth. Thoroughly wash the box and replace litter every 3-4 weeks.',
        },
      ],
      tipTitle: 'Tip for Transitioning Your Cat:',
      tipDesc: 'If your cat is accustomed to older litter, mix 70% old litter with 30% PurrSafe for the first 2 days, then 50%-50% on days 3-4, and transition to 100% PurrSafe by day 5. Your cat will quickly adore the gentle soft pellets and subtle milk aroma!',
    },
    form: {
      badge: 'Online Registration',
      title1: 'Register for Agency Consultation &',
      titleHighlight: 'Claim Free Sample Packs',
      desc: 'Leave your details below and our team will get in touch with complete wholesale terms and direct trial samples.',
      needLabel: 'Your primary interest:',
      needDistributor: 'Wholesale & Agency Consultation',
      needSample: 'Request Free Trial Sample Packs',
      nameLabel: 'Your Full Name *',
      phoneLabel: 'Phone / WhatsApp / Zalo *',
      modelLabel: 'Business Model',
      storeLabel: 'Store / Clinic Name (if any)',
      cityLabel: 'City / Province',
      notesLabel: 'Additional notes or inquiries',
      privacy: 'We guarantee 100% confidentiality of your contact and business information.',
      submitBtn: 'SUBMIT CONSULTATION REQUEST',
      submitting: 'Submitting request...',
      successTitle: 'Registration Successful!',
      successCodeLabel: 'Your inquiry reference code is:',
      callNow: 'Call Hotline:',
      zaloNow: 'Chat on Zalo',
      submitAnother: 'Submit another inquiry',
      businessTypes: [
        { value: 'pet_shop', label: 'Pet Shop / Retail Pet Store' },
        { value: 'clinic', label: 'Veterinary Clinic / Hospital' },
        { value: 'online_seller', label: 'E-Commerce / Social Media Seller' },
        { value: 'distributor', label: 'Wholesaler / Regional Distributor' },
        { value: 'individual', label: 'Multi-Cat Household / Individual' },
      ],
      cities: [
        'Ho Chi Minh City',
        'Hanoi',
        'Da Nang',
        'Hai Phong',
        'Can Tho',
        'Binh Duong',
        'Dong Nai',
        'Ba Ria - Vung Tau',
        'Khanh Hoa (Nha Trang)',
        'Lam Dong (Da Lat)',
        'Quang Ninh',
        'Bac Ninh',
        'Other Location / International',
      ],
    },
    footer: {
      support247: 'Direct Contact',
      title1: 'Order Consultation Hotline &',
      titleHighlight: 'PurrSafe Agency Partnership',
      desc: 'Whether you need detailed product specifications, wholesale distributor pricing, or free evaluation samples, our team is always ready to assist:',
      phoneLabel: 'Contact Phone Number:',
      callNow: 'Call Now',
      zaloChat: 'Chat on Zalo Official Account',
      brandDesc: 'PurrSafe specializes in premium Mixed Cat Litter blending Natural Soybean, Activated Carbon, and Natural Minerals. The optimal choice for feline respiratory wellness and odor-free homes.',
      addressLabel: 'Contact Address',
      phoneLabelBottom: 'Support Line:',
      copyright: '© 2026 PurrSafe. All rights reserved.',
      quality1: 'Specially Crafted for Cats',
      quality2: 'Natural & Safe',
      backToTop: 'Back to Top',
    },
    sticky: {
      productName: 'PurrSafe Mixed Cat Litter Milk Scent',
      hotlineLabel: 'Hotline:',
      zaloBtn: 'Zalo / Chat',
      callBtn: 'Call Now',
      distributorBtn: 'Agency Inquiry',
    },
    video: {
      badge: '100% REAL QUALITY TEST',
      title: 'Real Demonstration Video: PurrSafe Cat Litter Quality',
      subtitle: 'Watch the full laboratory test: instant water absorption, solid clumping under 30s, non-stick tray bottom, and zero crumbling upon hard drop.',
      watchBtn: 'Watch Real Video Test (25s)',
      pauseBtn: 'Pause',
      replayBtn: 'Replay Video',
      chaptersTitle: '5 Key Demonstration Milestones',
      chapters: [
        {
          time: '00:00',
          seconds: 0,
          tag: '01. INTRO',
          title: 'Packaging & Outdoor Presence',
          desc: 'Let’s verify PurrSafe Mixed Cat Litter 2.8KG quality together!',
        },
        {
          time: '00:05',
          seconds: 5,
          tag: '02. PELLET MIX',
          title: 'Rapid Water Absorption',
          desc: 'Golden 70:20:10 ratio of soybean tofu, carbon, and bentonite.',
        },
        {
          time: '00:10',
          seconds: 10,
          tag: '03. LIQUID TEST',
          title: 'Direct Liquid Pouring Test',
          desc: 'Pouring liquid directly onto litter inside a clear acrylic box.',
        },
        {
          time: '00:15',
          seconds: 15,
          tag: '04. RAPID CLUMP',
          title: 'Tight Clumping & Zero Stick',
          desc: 'Tight clump formed under 30s; scoop lifts clean with zero residue.',
        },
        {
          time: '00:20',
          seconds: 20,
          tag: '05. IMPACT TEST',
          title: 'Strong Impact Resistance',
          desc: 'Dropped from height onto wooden flooring without breaking apart.',
        },
      ],
      highlights: [
        {
          value: '< 30s',
          label: 'Ultra-Fast Clumping',
          desc: 'Immediately wraps and encapsulates liquid upon contact.',
        },
        {
          value: '0%',
          label: 'Box Bottom Adhesion',
          desc: 'Transparent bottom stays completely clean and pristine.',
        },
        {
          value: '100%',
          label: 'Impact Integrity',
          desc: 'Resilient solid clumps that do not crumble back into dust.',
        },
        {
          value: '99%',
          label: 'Odor Neutralization',
          desc: 'Natural activated carbon locks ammonia smell instantly.',
        },
      ],
      ctaTrial: 'Request Free Evaluation Sample',
      ctaHotline: 'Hotline Partnership: 0866 780 599',
    },
  },
};
