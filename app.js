const DATA_BASE = 'https://api-open.data.gov.sg/v2/real-time/api';
const ONEMAP_SEARCH = 'https://www.onemap.gov.sg/api/common/elastic/search';
const COMMONS_API = 'https://commons.wikimedia.org/w/api.php';
const REGIONS = ['north', 'south', 'east', 'west', 'central'];
const REGION_CENTRES = {
  north: { latitude: 1.41803, longitude: 103.82 },
  south: { latitude: 1.29587, longitude: 103.82 },
  east: { latitude: 1.35735, longitude: 103.94 },
  west: { latitude: 1.35735, longitude: 103.7 },
  central: { latitude: 1.35735, longitude: 103.82 }
};
const REGION_NAMES = {
  en: { north: 'North', south: 'South', east: 'East', west: 'West', central: 'Central' },
  zh: { north: '北部', south: '南部', east: '东部', west: '西部', central: '中部' }
};
const COPY = {
  en: {
    languageLabel: 'Choose language',
    loadingTime: 'Fetching latest readings…',
    officialLink: 'NEA haze updates ↗',
    introEyebrow: 'SINGAPORE AIR CHECK',
    heroTitle: 'Haze how liao?',
    introText: "A little haze check before you head out. See what's in the air, find your neighbourhood, and know when to mask up.",
    updatedLabel: 'Updated',
    artCaption: 'Little red dot, big fresh-air energy.',
    latestEyebrow: 'THE LATEST READ',
    airTitle: 'Air check, Singapore',
    liveData: 'NEA LIVE DATA',
    oneHourAverage: '1-hour average',
    twentyFourHourAverage: '24-hour average',
    pmReadingLabel: 'PM2.5',
    psiReadingLabel: 'Pollutant Standards Index',
    highestReading: 'Highest reading',
    dataNote: 'Readings are from Singapore’s open government real-time API. 1-hour PM2.5 and 24-hour PSI are different measures; use PSI for general health guidance.',
    mapEyebrow: 'FIVE REPORTING REGIONS',
    mapTitle: 'Singapore, by region',
    mapSubtitle: 'Live 1-hour PM2.5 and 24-hour PSI readings for five Singapore regions.',
    mapFrameTitle: 'Google Map of Singapore',
    mapCaption: 'PM2.5 values are µg/m³. Markers show approximate NEA reporting-centre readings, not official region boundaries.',
    mapLoading: 'Loading regional readings…',
    mapPm: 'PM2.5 · 1h',
    mapPsi: 'PSI · 24h',
    placeEyebrow: 'YOUR NEXT STOP',
    placeTitle: 'Going somewhere?',
    placeDescription: 'Look up a Singapore place, address or postal code. We’ll match it to the nearest reporting region and give you a quick outdoor-activity check.',
    placeLabel: 'Where in Singapore?',
    placePlaceholder: 'e.g. Gardens by the Bay',
    checkPlace: 'Check place',
    searching: 'Checking…',
    placeHint: 'Singapore only · OneMap verified; nearby photo lookup uses approximate location (Wikimedia Commons)',
    destinationPhotoSearching: 'Looking for a nearby photo…',
    destinationPhotoNone: 'No relevant nearby photo was found.',
    destinationPhotoError: 'Nearby photo search is unavailable; the haze check is still ready.',
    destinationPhotoAlt: 'A nearby photo for {place}',
    destinationPhotoSource: 'View photo and license ↗',
    destinationPhotoCredit: '{artist} · {license}',
    destinationPhotoUnknownArtist: 'Photographer not listed',
    destinationPhotoUnknownLicense: 'License details on source page',
    destinationPhotoNearby: 'Nearby image; it may not depict the exact address.',
    placePlaceholderTitle: 'Your local haze check will show up here.',
    placePlaceholderHint: 'Pick a place to get started',
    familyEyebrow: 'THE HAZE HOW LIAO FAMILY',
    familyTitle: 'Mask up, or can relax?',
    familySubtitle: 'A photo preview that follows the live 1-hour PM2.5 reading.',
    photo1Title: 'Park day, planned.',
    photo1Text: 'Better to check before heading out.',
    photoTag1: '01 / OUT & ABOUT',
    familyPhoto1Alt: 'Two family members at a playground',
    photo2Title: 'Good vibes, clear advice.',
    photo2Text: 'Keep a well-fitting mask handy.',
    photoTag2: '02 / QUICK SELFIE',
    familyPhoto2Alt: 'A father and child taking a selfie',
    photo3Title: 'Play safe, little one.',
    photo3Text: 'Children may be more sensitive to haze.',
    photoTag3: '03 / SUNNY SIDE',
    familyPhoto3Alt: 'A child beside a lake on a sunny day',
    photo4Title: 'Fresh-air daydreams.',
    photo4Text: 'Let the readings set the pace.',
    photoTag4: '04 / LAKESIDE',
    familyPhoto4Alt: 'A father and child beside a lake',
    photoDisclaimer: 'Illustrative mask overlays only — not a medical assessment or a substitute for a properly fitted respirator. Photos are shown as supplied.',
    foodEyebrow: 'A LITTLE NOURISHMENT',
    foodTitle: 'Good food for hazy days',
    foodSubtitle: 'Comforting, balanced choices to keep you nourished and hydrated.',
    foodKind1: 'HYDRATE',
    food1Title: 'Water & warm soup',
    food1Text: 'Keep water on hand and enjoy a warm soup for a comforting, hydrating meal.',
    food1Alt: 'A glass of water beside a bowl of warm soup',
    foodKind2: 'FRESH & COLOURFUL',
    food2Title: 'Leafy greens & fresh produce',
    food2Text: 'Enjoy fresh produce as part of a varied diet; it’s nourishing, but not a haze shield.',
    food2Alt: 'A balanced plate with fruit and vegetables',
    foodKind3: 'BALANCED MEAL',
    food3Title: 'A balanced meal with protein',
    food3Text: 'Pair vegetables with protein and whole grains for a satisfying everyday meal.',
    food3Alt: 'A nourishing meal with vegetables and protein',
    foodDisclaimer: 'No food or drink prevents haze exposure or treats its effects. Reduce time outdoors when air quality is poor and follow NEA health advice.',
    footerTagline: 'Made for checking the air, not worrying about it.',
    footerOfficial: 'Official NEA haze information ↗',
    footerNote: 'Data refreshes automatically. For health advisories and the latest official guidance, always refer to NEA.',
    visitorLabel: 'Page visits on this device',
    visitorUnavailable: 'Unavailable',
    visitorUnavailableDetail: 'The browser could not save this device’s visit count.',
    shareWhatsApp: 'Share on WhatsApp',
    shareWhatsAppLabel: 'Share Haze How Liao? on WhatsApp',
    shareMessage: 'Check the latest Singapore haze readings on Haze How Liao?:',
    normal: 'Normal range',
    pmElevated: 'Elevated — take care outdoors',
    pmHigh: 'High — limit prolonged outdoor activity',
    pmVeryHigh: 'Very high — avoid outdoor exertion',
    good: 'Good',
    moderate: 'Moderate',
    unhealthy: 'Unhealthy',
    veryUnhealthy: 'Very unhealthy',
    hazardous: 'Hazardous',
    maskOn: 'PM2.5 is elevated — masks are shown on the family photos.',
    maskOff: 'PM2.5 is in the normal range — no masks are shown.',
    regionSuffix: 'region',
    pmValueLabel: '1-hour PM2.5',
    psiValueLabel: '24-hour PSI',
    visitGood: 'Air quality looks good for a visit. Usual outdoor plans are okay; keep checking if you’ll be out for a long time.',
    visitModerate: 'Moderate air quality. Most people can go, but consider shorter or less strenuous outdoor activity. Sensitive groups should take extra care.',
    visitUnhealthy: 'Unhealthy air quality. Consider postponing non-essential outdoor plans and avoid prolonged or strenuous activity outside.',
    visitVeryUnhealthy: 'Very unhealthy air quality. It’s better to postpone the visit and stay indoors where possible. Follow the latest NEA health advisory.',
    placeEmpty: 'Enter a Singapore place, address or postal code to check.',
    placeWait: 'Wait for the latest haze readings before checking a place.',
    placeOutside: 'That result is outside Singapore. Try a Singapore address, place name or postal code.',
    placeUnavailable: 'The Singapore place search is unavailable right now. Please try again.',
    placeNotFound: 'No matching Singapore place found. Try a Singapore address, venue name or 6-digit postal code.',
    placeFailed: 'The place could not be checked. Please try again.',
    dataUnavailable: 'Singapore’s live air-quality service could not be reached right now.',
    dataError: 'Singapore’s live air-quality service returned an error.',
    dataMalformed: 'The live response did not include both PM2.5 and PSI readings.',
    dataMissing: 'A live reading is missing for the {region} region.',
    dataRefreshError: 'Live readings are unavailable. Please refresh later or check NEA’s official haze site.',
    dataStaleError: 'Live readings are unavailable. The last successful reading is still shown.',
    dataLoadingError: 'Live readings are currently unavailable.',
    dataUnavailableStatus: 'Unable to load live data'
  },
  zh: {
    languageLabel: '选择语言',
    loadingTime: '正在获取最新读数…',
    officialLink: 'NEA 雾霾资讯 ↗',
    introEyebrow: '新加坡空气状况',
    heroTitle: '现在雾霾情况如何？',
    introText: '出门前先看看雾霾情况。了解空气质量、查看附近区域，并知道何时该戴口罩。',
    updatedLabel: '更新时间',
    artCaption: '小红点，也要呼吸好空气。',
    latestEyebrow: '最新读数',
    airTitle: '新加坡空气检查',
    liveData: 'NEA 实时数据',
    oneHourAverage: '1 小时平均值',
    twentyFourHourAverage: '24 小时平均值',
    pmReadingLabel: 'PM2.5 细颗粒物',
    psiReadingLabel: '污染标准指数',
    highestReading: '最高读数',
    dataNote: '数据来自新加坡政府实时开放数据 API。1 小时 PM2.5 与 24 小时 PSI 是不同指标；一般健康建议请参考 PSI。',
    mapEyebrow: '五个监测区域',
    mapTitle: '新加坡区域空气状况',
    mapSubtitle: '查看新加坡五个区域的实时 1 小时 PM2.5 与 24 小时 PSI 读数。',
    mapFrameTitle: '新加坡 Google 地图',
    mapCaption: 'PM2.5 单位为 µg/m³。标记显示 NEA 监测中心的大致读数，并非官方区域边界。',
    mapLoading: '正在读取各区域数据…',
    mapPm: 'PM2.5 · 1h',
    mapPsi: 'PSI · 24h',
    placeEyebrow: '下一站',
    placeTitle: '准备去哪里？',
    placeDescription: '搜索新加坡地点、地址或邮政编码。我们会匹配最近的监测区域，并提供简短的户外活动建议。',
    placeLabel: '新加坡的哪个地点？',
    placePlaceholder: '例如：滨海湾花园',
    checkPlace: '查询地点',
    searching: '查询中…',
    placeHint: '仅限新加坡地点 · 由 OneMap 验证；Wikimedia Commons 附近照片搜索会使用大致位置',
    destinationPhotoSearching: '正在查找附近照片…',
    destinationPhotoNone: '没有找到相关的附近照片。',
    destinationPhotoError: '暂时无法搜索附近照片；空气状况查询仍可使用。',
    destinationPhotoAlt: '靠近{place}的照片',
    destinationPhotoSource: '查看照片与许可 ↗',
    destinationPhotoCredit: '{artist} · {license}',
    destinationPhotoUnknownArtist: '未注明摄影者',
    destinationPhotoUnknownLicense: '许可信息请见来源页面',
    destinationPhotoNearby: '这是附近的照片，不一定是该确切地址的实景。',
    placePlaceholderTitle: '这里会显示当地雾霾情况。',
    placePlaceholderHint: '输入地点开始查询',
    familyEyebrow: 'Haze How Liao 一家',
    familyTitle: '要戴口罩，还是可以放松？',
    familySubtitle: '照片中的口罩会根据实时 1 小时 PM2.5 读数显示或隐藏。',
    photo1Title: '公园出游，先看空气。',
    photo1Text: '出门前查看最新情况。',
    photoTag1: '01 / 户外时光',
    familyPhoto1Alt: '两位家人在游乐场',
    photo2Title: '开心出门，也要留意空气。',
    photo2Text: '准备一只贴合脸型的口罩。',
    photoTag2: '02 / 自拍时刻',
    familyPhoto2Alt: '一位父亲和孩子自拍',
    photo3Title: '小朋友，记得注意防护。',
    photo3Text: '儿童可能对雾霾更敏感。',
    photoTag3: '03 / 阳光时光',
    familyPhoto3Alt: '一个孩子在湖边享受阳光',
    photo4Title: '期待清新空气。',
    photo4Text: '根据实时读数安排户外活动。',
    photoTag4: '04 / 湖畔时光',
    familyPhoto4Alt: '一位父亲和孩子在湖边',
    photoDisclaimer: '口罩图层仅供示意，并非医疗评估，也不能替代正确佩戴的防护口罩。照片保持原样。',
    foodEyebrow: '饮食小贴士',
    foodTitle: '雾霾天，吃得舒服一点',
    foodSubtitle: '选择均衡、温和的食物，补充营养与水分。',
    foodKind1: '补充水分',
    food1Title: '饮用水与热汤',
    food1Text: '随手准备饮用水，也可以喝一碗热汤，温暖又补水。',
    food1Alt: '一杯饮用水和一碗热汤',
    foodKind2: '新鲜多彩',
    food2Title: '绿叶蔬菜与新鲜食材',
    food2Text: '将新鲜蔬果纳入多样化饮食；它们有营养，但不能抵挡雾霾。',
    food2Alt: '一份包含水果和蔬菜的均衡餐点',
    foodKind3: '均衡饮食',
    food3Title: '含优质蛋白质的均衡餐',
    food3Text: '搭配蔬菜、蛋白质和全谷物，作为日常均衡餐点。',
    food3Alt: '一份含蔬菜和蛋白质的营养餐点',
    foodDisclaimer: '食物或饮料不能防止雾霾暴露，也不能治疗雾霾影响。空气质量较差时减少户外活动，并遵循 NEA 健康建议。',
    footerTagline: '查看空气状况，安心安排出行。',
    footerOfficial: 'NEA 官方雾霾资讯 ↗',
    footerNote: '数据会自动更新。健康建议及最新官方资讯请以 NEA 为准。',
    visitorLabel: '本设备的页面访问次数',
    visitorUnavailable: '无法读取',
    visitorUnavailableDetail: '浏览器无法保存本设备的访问次数。',
    shareWhatsApp: '通过 WhatsApp 分享',
    shareWhatsAppLabel: '通过 WhatsApp 分享 Haze How Liao?',
    shareMessage: '查看新加坡最新雾霾读数：',
    normal: '正常范围',
    pmElevated: '有所升高 — 户外请注意',
    pmHigh: '较高 — 减少长时间户外活动',
    pmVeryHigh: '很高 — 避免户外活动',
    good: '良好',
    moderate: '中等',
    unhealthy: '不健康',
    veryUnhealthy: '非常不健康',
    hazardous: '危险',
    maskOn: 'PM2.5 偏高 — 照片中已显示口罩。',
    maskOff: 'PM2.5 在正常范围 — 照片中不显示口罩。',
    regionSuffix: '区域',
    pmValueLabel: '1 小时 PM2.5',
    psiValueLabel: '24 小时 PSI',
    visitGood: '空气质量良好，适合出行。一般户外活动可以照常进行；长时间在户外时请继续留意读数。',
    visitModerate: '空气质量中等。多数人可以出行，但可考虑缩短户外时间或减少剧烈活动。敏感人群应多加留意。',
    visitUnhealthy: '空气质量不健康。建议考虑推迟非必要的户外行程，并避免长时间或剧烈的户外活动。',
    visitVeryUnhealthy: '空气质量非常不健康。建议推迟行程，并尽量留在室内。请遵循 NEA 最新健康建议。',
    placeEmpty: '请输入新加坡地点、地址或邮政编码。',
    placeWait: '请等待最新雾霾数据后再查询地点。',
    placeOutside: '该结果不在新加坡范围内。请尝试新加坡地址、地点名称或邮政编码。',
    placeUnavailable: '新加坡地点查询暂时无法使用，请稍后再试。',
    placeNotFound: '找不到符合条件的新加坡地点。请尝试新加坡地址、地点名称或六位邮政编码。',
    placeFailed: '无法查询该地点，请重试。',
    dataUnavailable: '暂时无法连接新加坡实时空气质量服务。',
    dataError: '新加坡实时空气质量服务返回错误。',
    dataMalformed: '实时数据中缺少 PM2.5 或 PSI 读数。',
    dataMissing: '{region}区域缺少实时读数。',
    dataRefreshError: '暂时无法取得实时读数。请稍后刷新，或查看 NEA 官方雾霾资讯。',
    dataStaleError: '暂时无法取得实时读数，页面仍显示上一次成功获取的数据。',
    dataLoadingError: '目前无法取得实时读数。',
    dataUnavailableStatus: '无法加载实时数据'
  }
};

const FACE_LANDMARKS = {
  1: {
    width: 1075, height: 1032,
    faces: [
      { eyeLeft: [340.9, 309.1], eyeRight: [526.8, 379.3], nose: [418.9, 420.4], chin: [352.6, 575.3], mouthLeft: [318.5, 439.2], mouthRight: [464.2, 488.3] },
      { eyeLeft: [666.9, 451.2], eyeRight: [774.1, 449.4], nose: [718.5, 488.7], chin: [718, 573.3], mouthLeft: [685.6, 523.1], mouthRight: [752.4, 524.2] }
    ]
  },
  2: {
    width: 1080, height: 880,
    faces: [
      { eyeLeft: [348.9, 262.2], eyeRight: [502.5, 344.8], nose: [390.9, 385.1], chin: [323.4, 492.8], mouthLeft: [312.1, 401.7], mouthRight: [409.4, 449.7] },
      { eyeLeft: [688.7, 535.1], eyeRight: [815.9, 514.4], nose: [765.2, 579.9], chin: [782, 689.9], mouthLeft: [723.5, 623.1], mouthRight: [813.9, 611.1] }
    ]
  },
  3: {
    width: 949, height: 1076,
    faces: [
      { eyeLeft: [557.5, 279.8], eyeRight: [670.4, 285.7], nose: [584.5, 318.5], chin: [583.5, 427.1], mouthLeft: [564.8, 361.5], mouthRight: [633.1, 369.2] }
    ]
  },
  4: {
    width: 1075, height: 859,
    faces: [
      { eyeLeft: [338, 291.9], eyeRight: [488.4, 345.7], nose: [400.3, 390], chin: [347.7, 508.7], mouthLeft: [327, 412.4], mouthRight: [422.3, 443.2] },
      { eyeLeft: [643.2, 585.8], eyeRight: [775.8, 565.6], nose: [707.2, 641.5], chin: [736.1, 738.3], mouthLeft: [686.7, 681.5], mouthRight: [765, 671.9] }
    ]
  }
};

let currentLanguage = 'en';
let currentReadings = null;
let selectedPlace = null;
let selectedPlacePhoto = null;
let selectedPlacePhotoStatus = 'none';
let placePhotoRequest = 0;
let dataErrorKey = null;

function t(key, replacements = {}) {
  let value = COPY[currentLanguage][key] || COPY.en[key] || key;
  Object.entries(replacements).forEach(([name, replacement]) => {
    value = value.replace(`{${name}}`, replacement);
  });
  return value;
}

function regionName(name) {
  return REGION_NAMES[currentLanguage][name];
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.alt = t(element.dataset.i18nAlt);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', t(element.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    element.title = t(element.dataset.i18nTitle);
  });
  document.querySelectorAll('[data-language]').forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.getElementById('data-error').textContent = dataErrorKey ? t(dataErrorKey) : '';
  if (currentReadings) renderDashboard();
  if (selectedPlace) renderPlaceResult(selectedPlace);
  renderVisitorCount(false);
  updateShareLink();
}

function pmCondition(value) {
  if (value <= 55) return { key: 'normal', color: '#78a876', severity: 0 };
  if (value <= 150) return { key: 'pmElevated', color: '#e2a451', severity: 1 };
  if (value <= 250) return { key: 'pmHigh', color: '#d9794f', severity: 2 };
  return { key: 'pmVeryHigh', color: '#b84b48', severity: 3 };
}

function psiCondition(value) {
  if (value <= 50) return { key: 'good', level: 'good', color: '#78a876', severity: 0 };
  if (value <= 100) return { key: 'moderate', level: 'moderate', color: '#e2a451', severity: 1 };
  if (value <= 200) return { key: 'unhealthy', level: 'unhealthy', color: '#d9794f', severity: 2 };
  if (value <= 300) return { key: 'veryUnhealthy', level: 'very-unhealthy', color: '#c34d46', severity: 3 };
  return { key: 'hazardous', level: 'hazardous', color: '#75414c', severity: 4 };
}

function setStatus(elementId, condition, value, maximum, scaleId) {
  document.getElementById(elementId).textContent = t(condition.key);
  const bar = document.getElementById(scaleId);
  bar.style.width = `${Math.min(100, Math.max(4, (value / maximum) * 100))}%`;
  bar.style.backgroundColor = condition.color;
}

function installFaceMasks() {
  document.querySelectorAll('.face-masks[data-photo]').forEach((svg) => {
    const photo = FACE_LANDMARKS[svg.dataset.photo];
    if (!photo) return;
    const photoNumber = svg.dataset.photo;
    svg.setAttribute('viewBox', `0 0 ${photo.width} ${photo.height}`);
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    svg.innerHTML = `
      <defs>
        <linearGradient id="mask-fabric-${photoNumber}" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stop-color="#fbfbf7"></stop>
          <stop offset=".48" stop-color="#e1e5df"></stop>
          <stop offset="1" stop-color="#c9d1c9"></stop>
        </linearGradient>
      </defs>
      ${photo.faces.map((face) => {
        const eyeAngle = Math.atan2(face.eyeRight[1] - face.eyeLeft[1], face.eyeRight[0] - face.eyeLeft[0]) * 180 / Math.PI;
        const noseToChin = Math.hypot(face.chin[0] - face.nose[0], face.chin[1] - face.nose[1]);
        const mouthWidth = Math.hypot(face.mouthRight[0] - face.mouthLeft[0], face.mouthRight[1] - face.mouthLeft[1]);
        const centerX = (face.nose[0] + face.chin[0]) / 2;
        const centerY = face.nose[1] + noseToChin * 0.49;
        const width = mouthWidth * 1.62;
        const height = noseToChin * 1.28;
        const transform = `translate(${centerX.toFixed(1)} ${centerY.toFixed(1)}) rotate(${eyeAngle.toFixed(1)}) scale(${(width / 100).toFixed(2)} ${(height / 100).toFixed(2)}) translate(-50 -50)`;
        return `
          <g class="mask-overlay" transform="${transform}">
            <path class="strap" d="M8 28 C0 24 -8 24 -13 30 C-21 38 -20 56 -12 64 C-7 69 0 70 8 70 M92 28 C100 24 108 24 113 30 C121 38 120 56 112 64 C107 69 100 70 92 70"></path>
            <path class="mask-shell" fill="url(#mask-fabric-${photoNumber})" d="M8 25 C21 13 37 8 50 9 C64 8 80 14 92 26 C86 42 88 60 96 76 C81 87 65 94 50 97 C35 94 19 87 4 76 C12 60 14 42 8 25 Z"></path>
            <path class="mask-side" d="M8 25 C20 15 36 9 50 9 L50 97 C34 93 18 86 4 76 C12 60 14 42 8 25 Z"></path>
            <path class="mask-center" d="M50 9 C47.5 32 48 70 50 97"></path>
            <path class="mask-fold" d="M14 38 C25 43 36 45 48 45 M52 45 C64 45 76 42 87 37 M10 62 C23 68 35 71 49 71 M51 71 C66 71 78 68 91 62"></path>
            <path class="mask-edge" d="M5 76 C20 86 35 93 50 95 C65 93 80 86 95 76"></path>
          </g>
        `;
      }).join('')}
    `;
  });
}

function renderReadings(pmData, psiData) {
  const pmItem = pmData.items && pmData.items[0];
  const psiItem = psiData.items && psiData.items[0];
  const pmValues = pmItem && pmItem.readings && pmItem.readings.pm25_one_hourly;
  const psiValues = psiItem && psiItem.readings && psiItem.readings.psi_twenty_four_hourly;
  if (!pmValues || !psiValues) throw new Error(t('dataMalformed'));

  const regions = REGIONS.map((name) => {
    const pm = Number(pmValues[name]);
    const psi = Number(psiValues[name]);
    if (!Number.isFinite(pm) || !Number.isFinite(psi)) throw new Error(t('dataMissing', { region: regionName(name) }));
    return { name, pm, psi };
  });
  const timestamp = psiItem.updatedTimestamp || pmItem.updatedTimestamp || psiItem.timestamp || pmItem.timestamp;
  currentReadings = { regions, timestamp };
  renderDashboard();
}

function renderDashboard() {
  if (!currentReadings) return;
  const { regions, timestamp } = currentReadings;
  const highestPm = regions.reduce((highest, item) => item.pm > highest.pm ? item : highest);
  const highestPsi = regions.reduce((highest, item) => item.psi > highest.psi ? item : highest);

  document.getElementById('national-pm').textContent = highestPm.pm;
  document.getElementById('pm-location').textContent = regionName(highestPm.name);
  document.getElementById('national-psi').textContent = highestPsi.psi;
  document.getElementById('psi-location').textContent = regionName(highestPsi.name);
  setStatus('pm-status', pmCondition(highestPm.pm), highestPm.pm, 300, 'pm-scale');
  setStatus('psi-status', psiCondition(highestPsi.psi), highestPsi.psi, 300, 'psi-scale');
  renderMapRegions(regions);

  if (timestamp) {
    const date = new Date(timestamp);
    document.getElementById('updated-at').textContent = Number.isNaN(date.valueOf())
      ? timestamp
      : new Intl.DateTimeFormat(currentLanguage === 'zh' ? 'zh-SG' : 'en-SG', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Asia/Singapore'
      }).format(date) + (currentLanguage === 'zh' ? ' 新加坡时间' : ' SGT');
  }
  const isMaskRecommended = highestPm.pm > 55;
  document.body.classList.toggle('masks-on', isMaskRecommended);
  document.getElementById('mask-summary').textContent = t(isMaskRecommended ? 'maskOn' : 'maskOff');
  document.getElementById('data-error').hidden = !dataErrorKey;
  document.getElementById('update-indicator').style.backgroundColor = dataErrorKey ? '#c66a50' : '#7ea878';
}

function renderMapRegions(regions) {
  const list = document.getElementById('map-region-list');
  list.innerHTML = regions.map((region) => {
    const condition = psiCondition(region.psi);
    return `
      <article class="map-region-item" data-region="${region.name}" data-level="${condition.level}" style="--region-color:${condition.color}" aria-label="${regionName(region.name)}. ${t('mapPm')} ${region.pm} µg/m³; ${t('mapPsi')} ${region.psi}.">
        <h3 class="map-region-name"><span class="map-region-dot"></span>${regionName(region.name)}</h3>
        <div class="map-region-values">
          <span class="map-value">${t('mapPm')}<strong>${region.pm}</strong></span>
          <span class="map-value">${t('mapPsi')}<strong>${region.psi}</strong></span>
        </div>
      </article>
    `;
  }).join('');
}

async function fetchLiveReadings() {
  const [pmResponse, psiResponse] = await Promise.all([
    fetch(`${DATA_BASE}/pm25`),
    fetch(`${DATA_BASE}/psi`)
  ]);
  if (!pmResponse.ok || !psiResponse.ok) throw new Error(t('dataUnavailable'));
  const [pmData, psiData] = await Promise.all([pmResponse.json(), psiResponse.json()]);
  if (pmData.code !== 0 || psiData.code !== 0) throw new Error(t('dataError'));
  renderReadings(pmData.data, psiData.data);
  dataErrorKey = null;
  document.getElementById('data-error').hidden = true;
  document.getElementById('update-indicator').style.backgroundColor = '#7ea878';
}

function closestRegion(latitude, longitude) {
  return REGIONS.reduce((nearest, name) => {
    const centre = REGION_CENTRES[name];
    const distance = Math.hypot(latitude - centre.latitude, (longitude - centre.longitude) * Math.cos(latitude * Math.PI / 180));
    return distance < nearest.distance ? { name, distance } : nearest;
  }, { name: REGIONS[0], distance: Infinity }).name;
}

function healthAdvice(region) {
  if (region.psi <= 50) return { tone: '', key: 'visitGood' };
  if (region.psi <= 100) return { tone: 'caution', key: 'visitModerate' };
  if (region.psi <= 200) return { tone: 'avoid', key: 'visitUnhealthy' };
  return { tone: 'avoid', key: 'visitVeryUnhealthy' };
}

function renderPlaceResult(result) {
  const latitude = Number(result.LATITUDE);
  const longitude = Number(result.LONGITUDE);
  const region = currentReadings.regions.find((item) => item.name === closestRegion(latitude, longitude));
  const advice = healthAdvice(region);
  const name = result.SEARCHVAL || result.ADDRESS || 'Selected location';
  const address = result.ADDRESS && result.ADDRESS !== name ? result.ADDRESS : '';
  const photoMarkup = selectedPlacePhoto
    ? `
      <figure class="destination-photo">
        <a class="destination-photo-image-link" href="${escapeHtml(selectedPlacePhoto.pageUrl)}" target="_blank" rel="noreferrer">
          <img id="destination-photo-image" src="${escapeHtml(selectedPlacePhoto.imageUrl)}" alt="${escapeHtml(t('destinationPhotoAlt', { place: name }))}" loading="lazy" referrerpolicy="no-referrer">
        </a>
        <figcaption>
          <span class="destination-photo-credit">${t('destinationPhotoCredit', {
            artist: escapeHtml(selectedPlacePhoto.artist || t('destinationPhotoUnknownArtist')),
            license: escapeHtml(selectedPlacePhoto.license || t('destinationPhotoUnknownLicense'))
          })}</span>
          <a class="destination-photo-source" href="${escapeHtml(selectedPlacePhoto.pageUrl)}" target="_blank" rel="noreferrer">${t('destinationPhotoSource')}</a>
          <span class="destination-photo-note">${t('destinationPhotoNearby')}</span>
        </figcaption>
      </figure>
    `
    : `<p class="destination-photo-status" role="status">${t(`destinationPhoto${selectedPlacePhotoStatus.charAt(0).toUpperCase()}${selectedPlacePhotoStatus.slice(1)}`)}</p>`;
  document.getElementById('place-result').innerHTML = `
    <article class="result-card">
      <div class="result-location-top"><span class="result-region">${regionName(region.name)} ${t('regionSuffix')}</span><span class="result-number">${address ? escapeHtml(address) : 'Singapore'}</span></div>
      <h3 class="result-place-name">${escapeHtml(name)}</h3>
      ${photoMarkup}
      <div class="result-numbers">
        <span class="result-number">${t('pmValueLabel')}<strong>${region.pm} µg/m³</strong></span>
        <span class="result-number">${t('psiValueLabel')}<strong>${region.psi}</strong></span>
      </div>
      <p class="recommendation ${advice.tone}">${t(advice.key)}</p>
    </article>
  `;
  const photoImage = document.getElementById('destination-photo-image');
  if (photoImage) {
    const renderedPhoto = selectedPlacePhoto;
    photoImage.addEventListener('error', () => {
      if (selectedPlace === result && selectedPlacePhoto === renderedPhoto) {
        selectedPlacePhoto = null;
        selectedPlacePhotoStatus = 'error';
        renderPlaceResult(result);
      }
    }, { once: true });
  }
}

function renderVisitorCount(increment) {
  const counter = document.getElementById('visit-count');
  try {
    const savedCount = window.localStorage.getItem('haze-how-liao-page-visits');
    const previousCount = savedCount === null ? 0 : Number(savedCount);
    if (!Number.isSafeInteger(previousCount) || previousCount < 0) {
      throw new Error('The saved visit count is not a valid non-negative integer.');
    }
    const count = previousCount + (increment ? 1 : 0);
    if (increment) window.localStorage.setItem('haze-how-liao-page-visits', String(count));
    counter.textContent = new Intl.NumberFormat(currentLanguage === 'zh' ? 'zh-SG' : 'en-SG').format(count);
    counter.title = t('visitorLabel');
  } catch (error) {
    counter.textContent = t('visitorUnavailable');
    counter.title = error instanceof Error ? error.message : t('visitorUnavailableDetail');
  }
}

function updateShareLink() {
  const shareUrl = window.location.href.split('#')[0];
  const message = `${t('shareMessage')} ${shareUrl}`;
  document.getElementById('whatsapp-share').href = `https://wa.me/?text=${encodeURIComponent(message)}`;
}

function showPlaceResult(result, searchTerm) {
  if (!currentReadings) throw new Error(t('placeWait'));
  const latitude = Number(result.LATITUDE);
  const longitude = Number(result.LONGITUDE);
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude) ||
      latitude < 1.15 || latitude > 1.48 || longitude < 103.58 || longitude > 104.1) {
    throw new Error(t('placeOutside'));
  }
  selectedPlace = result;
  selectedPlacePhoto = null;
  selectedPlacePhotoStatus = 'searching';
  const requestId = ++placePhotoRequest;
  renderPlaceResult(result);
  findDestinationPhoto(result, searchTerm).then((photo) => {
    if (requestId !== placePhotoRequest || selectedPlace !== result) return;
    selectedPlacePhoto = photo;
    selectedPlacePhotoStatus = photo ? 'found' : 'none';
    renderPlaceResult(result);
  }).catch((error) => {
    if (requestId !== placePhotoRequest || selectedPlace !== result) return;
    console.error('Nearby destination photo lookup failed.', error);
    selectedPlacePhoto = null;
    selectedPlacePhotoStatus = 'error';
    renderPlaceResult(result);
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function cleanCommonsMetadata(value) {
  if (!value) return '';
  const parsed = new DOMParser().parseFromString(String(value), 'text/html');
  return (parsed.body.textContent || '').replace(/\s+/g, ' ').trim();
}

function validatedCommonsUrl(value, allowedHosts) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && allowedHosts.includes(url.hostname) ? url.href : '';
  } catch {
    return '';
  }
}

function searchPlacePhotoTerms(value) {
  const ignoredTerms = new Set(['singapore', 'road', 'street', 'avenue', 'drive', 'lane', 'the', 'by', 'at', 'near', 'block', 'blk']);
  return [...new Set((String(value).toLowerCase().match(/[a-z0-9]+/g) || [])
    .filter((term) => term.length > 2 && !/^\d+$/.test(term) && !ignoredTerms.has(term)))];
}

function distanceInMetres(latitudeA, longitudeA, latitudeB, longitudeB) {
  const radians = Math.PI / 180;
  const latitudeDifference = (latitudeB - latitudeA) * radians;
  const longitudeDifference = (longitudeB - longitudeA) * radians;
  const arc = Math.sin(latitudeDifference / 2) ** 2 +
    Math.cos(latitudeA * radians) * Math.cos(latitudeB * radians) *
    Math.sin(longitudeDifference / 2) ** 2;
  return 6371000 * 2 * Math.atan2(Math.sqrt(arc), Math.sqrt(Math.max(0, 1 - arc)));
}

async function findDestinationPhoto(result, searchTerm) {
  const url = new URL(COMMONS_API);
  url.search = new URLSearchParams({
    action: 'query',
    generator: 'geosearch',
    ggscoord: `${result.LATITUDE}|${result.LONGITUDE}`,
    ggsradius: '1500',
    ggsnamespace: '6',
    ggslimit: '25',
    prop: 'coordinates|imageinfo',
    iiprop: 'url|mime|extmetadata',
    iiextmetadatafilter: 'Artist|LicenseShortName',
    iiurlwidth: '800',
    format: 'json',
    origin: '*'
  });
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Wikimedia Commons returned HTTP ${response.status}.`);
  const data = await response.json();
  if (data.error) throw new Error(data.error.info || 'Wikimedia Commons returned an error.');
  const pages = data.query && data.query.pages ? Object.values(data.query.pages) : [];
  const searchTerms = searchPlacePhotoTerms(`${searchTerm} ${result.SEARCHVAL || ''}`);
  const imageHosts = ['thumb.wikimedia.org', 'upload.wikimedia.org'];
  const candidates = pages.map((page) => {
    const coordinates = Array.isArray(page.coordinates) ? page.coordinates[0] : page.coordinates;
    const imageInfo = page.imageinfo && page.imageinfo[0];
    if (!imageInfo || !/^image\/(jpeg|png|webp)$/i.test(imageInfo.mime || '')) return null;
    const hasCoordinates = coordinates && Number.isFinite(Number(coordinates.lat)) && Number.isFinite(Number(coordinates.lon));
    const distance = hasCoordinates
      ? distanceInMetres(
        Number(result.LATITUDE),
        Number(result.LONGITUDE),
        Number(coordinates.lat),
        Number(coordinates.lon)
      )
      : Infinity;
    if (hasCoordinates && (!Number.isFinite(distance) || distance > 1500)) return null;
    const titleTerms = new Set((String(page.title || '').toLowerCase().match(/[a-z0-9]+/g) || []));
    const matchCount = searchTerms.filter((term) => titleTerms.has(term)).length;
    if (matchCount === 0 && (!hasCoordinates || distance > 250)) return null;

    const imageUrl = validatedCommonsUrl(imageInfo.thumburl || imageInfo.url, imageHosts);
    const pageUrl = validatedCommonsUrl(imageInfo.descriptionurl, ['commons.wikimedia.org']);
    if (!imageUrl || !pageUrl) return null;
    const metadata = imageInfo.extmetadata || {};
    return {
      imageUrl,
      pageUrl,
      artist: cleanCommonsMetadata(metadata.Artist && metadata.Artist.value),
      license: cleanCommonsMetadata(metadata.LicenseShortName && metadata.LicenseShortName.value),
      distance,
      matchCount
    };
  }).filter(Boolean);
  candidates.sort((first, second) => second.matchCount - first.matchCount || first.distance - second.distance);
  return candidates[0] || null;
}

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.language));
});
document.getElementById('place-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const input = document.getElementById('place-input');
  const message = document.getElementById('place-message');
  const button = document.getElementById('place-submit');
  const searchValue = input.value.trim();
  message.textContent = '';
  if (!searchValue) {
    message.textContent = t('placeEmpty');
    input.focus();
    return;
  }
  button.disabled = true;
  button.querySelector('span').textContent = t('searching');
  try {
    const url = new URL(ONEMAP_SEARCH);
    url.search = new URLSearchParams({
      searchVal: searchValue,
      returnGeom: 'Y',
      getAddrDetails: 'Y',
      pageNum: '1'
    });
    const response = await fetch(url);
    if (!response.ok) throw new Error(t('placeUnavailable'));
    const data = await response.json();
    const singaporeResults = (data.results || []).filter((result) => {
      const lat = Number(result.LATITUDE);
      const lon = Number(result.LONGITUDE);
      return Number.isFinite(lat) && Number.isFinite(lon) &&
        lat >= 1.15 && lat <= 1.48 && lon >= 103.58 && lon <= 104.1;
    });
    if (singaporeResults.length === 0) throw new Error(t('placeNotFound'));
    showPlaceResult(singaporeResults[0], searchValue);
  } catch (error) {
    message.textContent = error instanceof Error ? error.message : t('placeFailed');
  } finally {
    button.disabled = false;
    button.querySelector('span').textContent = t('checkPlace');
  }
});

installFaceMasks();
applyLanguage('en');
renderVisitorCount(true);
fetchLiveReadings().catch((error) => {
  dataErrorKey = 'dataRefreshError';
  const notice = document.getElementById('data-error');
  notice.textContent = `${t(dataErrorKey)} ${error instanceof Error ? error.message : ''}`.trim();
  notice.hidden = false;
  document.getElementById('map-region-list').innerHTML = `<p class="region-skeleton">${t('dataLoadingError')}</p>`;
  document.getElementById('pm-status').textContent = t('dataUnavailableStatus');
  document.getElementById('psi-status').textContent = t('dataUnavailableStatus');
  document.getElementById('updated-at').textContent = t('dataUnavailableStatus');
  document.getElementById('update-indicator').style.backgroundColor = '#c66a50';
});
window.setInterval(() => {
  fetchLiveReadings().catch((error) => {
    dataErrorKey = 'dataStaleError';
    const notice = document.getElementById('data-error');
    notice.textContent = `${t(dataErrorKey)} ${error instanceof Error ? error.message : ''}`.trim();
    notice.hidden = false;
    document.getElementById('update-indicator').style.backgroundColor = '#c66a50';
  });
}, 5 * 60 * 1000);
