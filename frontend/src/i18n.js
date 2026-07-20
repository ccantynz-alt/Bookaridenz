import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export const SUPPORTED_LANGUAGES = [
  { code: 'en', nativeName: 'English', flag: '🇬🇧' },
  { code: 'zh', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ja', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'es', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', nativeName: 'Français', flag: '🇫🇷' },
]

const resources = {
  en: {
    translation: {
      nav: { home: 'Home', services: 'Services', hobbiton: 'Hobbiton', cruise: 'Cruise', about: 'About', contact: 'Contact', bookRide: 'Book a Ride' },
      hero: {
        badge5star: '5-Star Rated Airport Transfers',
        badgeIntl: 'International Bookings Welcome',
        title1: 'Premium Airport',
        title2: 'Transfers',
        subtitle: "Arrive in comfort, style, and safety. Auckland's most trusted transfer service.",
        bookYourRide: 'Book Your Ride',
        viewServices: 'View Services',
        chipInsured: 'Fully Insured',
        chip247: '24/7 Service',
        chipFixed: 'Fixed Prices — No Surge',
        chipFlight: 'Flight Tracking Included',
      },
      quote: {
        title: 'Get an Instant Price',
        subtitle: 'Live pricing — book online in 60 seconds',
        pickup: 'Pickup',
        pickupPh: 'Pickup address or hotel',
        dropoff: 'Drop-off',
        dropoffPh: 'Airport, cruise terminal, anywhere',
        cta: 'Get Instant Price',
        noAccount: 'No account needed',
        secure: 'Secure Stripe checkout',
      },
      stats: { clients: 'Happy Clients', bookTime: 'To Book Online', rated: 'Rated Service', everyday: 'Every Day of the Year' },
    },
  },
  zh: {
    translation: {
      nav: { home: '首页', services: '服务', hobbiton: '霍比特村', cruise: '邮轮接送', about: '关于我们', contact: '联系我们', bookRide: '立即预订' },
      hero: {
        badge5star: '五星级机场接送服务',
        badgeIntl: '欢迎国际预订',
        title1: '尊贵机场',
        title2: '接送服务',
        subtitle: '舒适、优雅、安全抵达。奥克兰最值得信赖的接送服务。',
        bookYourRide: '预订行程',
        viewServices: '查看服务',
        chipInsured: '全面保险',
        chip247: '24/7全天候服务',
        chipFixed: '固定价格 · 无溢价',
        chipFlight: '含航班追踪',
      },
      quote: {
        title: '获取即时报价',
        subtitle: '实时定价 — 60秒在线预订',
        pickup: '上车地点',
        pickupPh: '上车地址或酒店',
        dropoff: '下车地点',
        dropoffPh: '机场、邮轮码头或任何地点',
        cta: '获取即时报价',
        noAccount: '无需注册账户',
        secure: 'Stripe安全支付',
      },
      stats: { clients: '满意客户', bookTime: '在线预订用时', rated: '星级服务', everyday: '全年无休' },
    },
  },
  ja: {
    translation: {
      nav: { home: 'ホーム', services: 'サービス', hobbiton: 'ホビット村', cruise: 'クルーズ送迎', about: '会社概要', contact: 'お問い合わせ', bookRide: '今すぐ予約' },
      hero: {
        badge5star: '五つ星評価の空港送迎',
        badgeIntl: '海外からのご予約歓迎',
        title1: 'プレミアム',
        title2: '空港送迎サービス',
        subtitle: '快適・上質・安全な移動を。オークランドで最も信頼される送迎サービス。',
        bookYourRide: '予約する',
        viewServices: 'サービスを見る',
        chipInsured: '全車保険完備',
        chip247: '24時間365日対応',
        chipFixed: '固定料金・追加料金なし',
        chipFlight: 'フライト追跡付き',
      },
      quote: {
        title: '今すぐ料金を確認',
        subtitle: 'リアルタイム料金 — 60秒でオンライン予約',
        pickup: 'お迎え場所',
        pickupPh: 'お迎え先の住所またはホテル',
        dropoff: 'お届け場所',
        dropoffPh: '空港、クルーズターミナルなど',
        cta: '料金を確認',
        noAccount: 'アカウント登録不要',
        secure: 'Stripeによる安全な決済',
      },
      stats: { clients: '満足いただいたお客様', bookTime: 'オンライン予約時間', rated: 'サービス評価', everyday: '年中無休' },
    },
  },
  ko: {
    translation: {
      nav: { home: '홈', services: '서비스', hobbiton: '호비튼', cruise: '크루즈 픽업', about: '소개', contact: '문의하기', bookRide: '지금 예약' },
      hero: {
        badge5star: '5성급 공항 픽업 서비스',
        badgeIntl: '해외 예약 환영',
        title1: '프리미엄 공항',
        title2: '픽업 서비스',
        subtitle: '편안하고 품격 있게, 안전하게 도착하세요. 오클랜드에서 가장 신뢰받는 픽업 서비스입니다.',
        bookYourRide: '예약하기',
        viewServices: '서비스 보기',
        chipInsured: '완전 보험 가입',
        chip247: '연중무휴 24시간',
        chipFixed: '고정 요금 · 할증 없음',
        chipFlight: '항공편 추적 포함',
      },
      quote: {
        title: '즉시 요금 확인',
        subtitle: '실시간 요금 — 60초 온라인 예약',
        pickup: '픽업 장소',
        pickupPh: '픽업 주소 또는 호텔',
        dropoff: '도착지',
        dropoffPh: '공항, 크루즈 터미널 등 어디든',
        cta: '요금 확인하기',
        noAccount: '회원가입 불필요',
        secure: 'Stripe 안전 결제',
      },
      stats: { clients: '만족 고객', bookTime: '온라인 예약 시간', rated: '서비스 평점', everyday: '연중무휴 운영' },
    },
  },
  es: {
    translation: {
      nav: { home: 'Inicio', services: 'Servicios', hobbiton: 'Hobbiton', cruise: 'Cruceros', about: 'Nosotros', contact: 'Contacto', bookRide: 'Reservar' },
      hero: {
        badge5star: 'Traslados de aeropuerto 5 estrellas',
        badgeIntl: 'Reservas internacionales bienvenidas',
        title1: 'Traslados Premium',
        title2: 'al Aeropuerto',
        subtitle: 'Llegue con comodidad, estilo y seguridad. El servicio de traslados más confiable de Auckland.',
        bookYourRide: 'Reserve su viaje',
        viewServices: 'Ver servicios',
        chipInsured: 'Totalmente asegurado',
        chip247: 'Servicio 24/7',
        chipFixed: 'Precios fijos — sin recargos',
        chipFlight: 'Seguimiento de vuelos incluido',
      },
      quote: {
        title: 'Precio instantáneo',
        subtitle: 'Precios en vivo — reserve en línea en 60 segundos',
        pickup: 'Recogida',
        pickupPh: 'Dirección u hotel de recogida',
        dropoff: 'Destino',
        dropoffPh: 'Aeropuerto, terminal de cruceros, donde sea',
        cta: 'Obtener precio',
        noAccount: 'Sin necesidad de cuenta',
        secure: 'Pago seguro con Stripe',
      },
      stats: { clients: 'Clientes satisfechos', bookTime: 'Para reservar en línea', rated: 'Servicio calificado', everyday: 'Todos los días del año' },
    },
  },
  fr: {
    translation: {
      nav: { home: 'Accueil', services: 'Services', hobbiton: 'Hobbiton', cruise: 'Croisières', about: 'À propos', contact: 'Contact', bookRide: 'Réserver' },
      hero: {
        badge5star: 'Transferts aéroport 5 étoiles',
        badgeIntl: 'Réservations internationales bienvenues',
        title1: 'Transferts Aéroport',
        title2: 'Premium',
        subtitle: "Arrivez avec confort, style et sécurité. Le service de transfert le plus fiable d'Auckland.",
        bookYourRide: 'Réservez votre trajet',
        viewServices: 'Voir les services',
        chipInsured: 'Entièrement assuré',
        chip247: 'Service 24h/24, 7j/7',
        chipFixed: 'Prix fixes — sans majoration',
        chipFlight: 'Suivi des vols inclus',
      },
      quote: {
        title: 'Prix instantané',
        subtitle: 'Tarifs en direct — réservez en ligne en 60 secondes',
        pickup: 'Prise en charge',
        pickupPh: 'Adresse ou hôtel de prise en charge',
        dropoff: 'Destination',
        dropoffPh: 'Aéroport, terminal de croisière, partout',
        cta: 'Obtenir le prix',
        noAccount: 'Aucun compte requis',
        secure: 'Paiement sécurisé Stripe',
      },
      stats: { clients: 'Clients satisfaits', bookTime: 'Pour réserver en ligne', rated: 'Service noté', everyday: 'Tous les jours de l’année' },
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGUAGES.map((l) => l.code),
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  })

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
})

export default i18n
