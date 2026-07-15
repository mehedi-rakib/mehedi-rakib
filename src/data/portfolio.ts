export interface Project {
  id: string;
  name: string;
  type: string;
  summary: string;
  tags: string[];
  tone: string;
  image?: string;
  role: string;
  status: string;
  highlights: string[];
  links: Array<{ label: string; href: string }>;
  problem?: string;
  solution?: string;
  impact?: string;
  caseStudySlug?: string;
}

export interface Skill {
  label: string;
  items: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  issued: string;
  image: string;
  verificationUrl: string;
}

export const projects: Project[] = [
  {
    id: '01',
    name: 'Azan Wholesale Android',
    type: 'Mobile commerce & dropshipping',
    summary: 'A reseller-focused Android product that brings product discovery, order creation, customer management and sales operations into one mobile workflow.',
    tags: ['React Native', 'Android', 'Ecommerce'],
    tone: 'pink',
    image: '/images/azan-android-app.png',
    role: 'Product engineering · Mobile UX · Play Store delivery',
    status: 'Published on Google Play',
    highlights: ['Mobile product catalogue with search and filters', 'Order, payment and customer management workflows', 'Sales dashboard and reseller-focused operations'],
    links: [{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.azanwholesale&hl=en' }],
    problem: 'Resellers managed orders, customers and product catalogues on desktop only—no mobile workflow meant missed sales and slower field operations.',
    solution: 'Built a full React Native Android app with mobile-first product discovery, order creation, customer management and a real-time sales dashboard.',
    impact: 'Published on Google Play Store. Resellers now operate entirely from mobile, reducing desktop dependency and accelerating order turnaround.',
    caseStudySlug: 'azan-wholesale-android',
  },
  {
    id: '02',
    name: 'Azan Wholesale for Shopify',
    type: 'Public Shopify app',
    summary: 'A dropshipping application for cosmetic merchants that connects Shopify stores to Azan Wholesale products and fulfillment operations.',
    tags: ['Shopify', 'GraphQL', 'Automation'],
    tone: 'lime',
    image: '/images/azan-shopify.png',
    role: 'App architecture · Shopify integration · Product delivery',
    status: 'Shopify App Store · Launched Nov 2025',
    highlights: ['One-click cosmetic product importing', 'Real-time inventory and price synchronization', 'Automated order fulfillment with reduced manual handling'],
    links: [{ label: 'Shopify App Store', href: 'https://apps.shopify.com/azan-wholesales' }],
    problem: 'Cosmetic merchants spent hours manually importing Azan products and processing fulfilment—a workflow that couldn\'t scale with demand.',
    solution: 'Designed and shipped a public Shopify app with one-click product import, real-time inventory synchronisation and automated order fulfilment.',
    impact: 'Live on the Shopify App Store. Dramatically reduces merchant fulfilment time and opens a scalable B2B acquisition channel.',
    caseStudySlug: 'azan-wholesale-shopify-app',
  },
  {
    id: '03',
    name: 'Azan Wholesale Web',
    type: 'B2B cosmetic commerce platform',
    summary: 'The core wholesale storefront and operational platform serving cosmetic resellers with authentic products, competitive pricing and connected ordering.',
    tags: ['Next.js', 'B2B', 'Commerce'],
    tone: 'rose',
    image: '/images/azan-site.png',
    role: 'Frontend engineering · Ecommerce UX · Platform integration',
    status: 'Live production platform',
    highlights: ['Wholesale product discovery and ordering', 'Connected foundation for Shopify and Android channels', 'Reseller-first experience with fulfillment support'],
    links: [{ label: 'Live website', href: 'https://azanwholesale.com/' }],
    problem: 'A growing wholesale cosmetics business needed a digital hub that could anchor a multi-channel operation across web, mobile and Shopify.',
    solution: 'Built the core Next.js wholesale platform for B2B product discovery and ordering, structured from day one to serve as the shared data foundation for the Android app and Shopify integration.',
    impact: 'The operational hub of the entire Azan business. Directly powers and connects both published applications.',
  },
  {
    id: '04',
    name: 'Japan Ambition',
    type: 'Multilingual education platform',
    summary: 'A complete digital platform for a Dhaka-based Japanese language academy, connecting course discovery, admissions, student services and study-abroad guidance.',
    tags: ['Multilingual', 'Education', 'Laravel'],
    tone: 'orange',
    image: '/images/japan_banner.png',
    role: 'Product engineering · UX · CMS and platform delivery',
    status: 'Live · English, Bangla and Japanese',
    highlights: ['JLPT N5–N1, conversation and corporate course discovery', 'Student applications, ID verification and online JLPT tests', 'Notices, news, galleries and counseling lead capture'],
    links: [{ label: 'Live website', href: 'https://japanambition.com/' }],
    problem: 'A Dhaka language academy managed admissions, course discovery and student communications across scattered tools with no unified digital presence.',
    solution: 'Delivered a complete trilingual platform (EN/BN/JP) covering course discovery, student applications, ID verification, online JLPT testing and a content CMS.',
    impact: 'All academy operations run through the platform. Online JLPT testing generates revenue without physical space constraints.',
  },
  {
    id: '05',
    name: 'Custom Print Supplies',
    type: 'USA Shopify commerce',
    summary: 'A scalable custom-print storefront for a New York client, designed around complex personalized products and a clearer path from configuration to checkout.',
    tags: ['Shopify', 'UI / UX', 'Ecommerce'],
    tone: 'blue',
    image: '/images/custom_print.png',
    role: 'Shopify development · UX optimization · Store delivery',
    status: 'Live client project · United States',
    highlights: ['Custom products spanning banners, wristbands, IDs and event materials', 'Product options, quantity pricing and personalization workflows', 'Responsive catalogue, collections and conversion-focused checkout journey'],
    links: [{ label: 'Live store', href: 'https://customprintsupplies.com/' }],
    problem: 'A New York print business with complex, highly customisable products had confusing option flows and a conversion rate that didn\'t reflect product quality.',
    solution: 'Rebuilt the Shopify store with clear product configuration UX, quantity pricing logic and a conversion-focused checkout journey.',
    impact: 'Cleaner path from product configuration to completed order. Directly serving the US custom print market.',
  },
  /* Receipt Generator — temporarily commented out
  {
    id: '06',
    name: 'Receipt Generator',
    type: 'Document generation SaaS',
    summary: 'A browser-based receipt maker that turns customizable templates into polished, print-ready PDF documents for personal and business workflows.',
    tags: ['SaaS', 'PDF', 'Product UX'],
    tone: 'violet',
    image: '/images/receipt_generator.io.png',
    role: 'Product engineering · Template UX · Performance',
    status: 'Live SaaS product',
    highlights: ['200+ templates across retail, travel, restaurant and service categories', 'Real-time editing and preview with custom business branding', 'Mobile-friendly workflow and instant print-ready PDF export'],
    links: [{ label: 'Live product', href: 'https://receiptgenerator.io/' }],
    problem: 'Small businesses and freelancers needed professional receipts but existing tools were expensive, overbuilt or produced poor output on mobile.',
    solution: 'Built a browser-based SaaS with 200+ customisable templates, real-time editing, custom branding and instant print-ready PDF export—fully mobile-friendly.',
    impact: 'Live SaaS product serving retail, travel, restaurant and service verticals. Operates as a self-sustaining revenue-generating product.',
  },
  */
  {
    id: '07',
    name: 'Eurasia Supplies',
    type: 'Ecommerce product evolution',
    summary: 'A search-led ecommerce experience with stronger technical SEO, performance improvements and an AI-powered virtual try-on journey.',
    tags: ['AI / ML', 'UX', 'SEO'],
    tone: 'mint',
    image: '/images/eurasia-supplies.png',
    role: 'Product engineering · AI experience · SEO',
    status: 'Live production platform',
    highlights: ['Advanced product discovery and search experience', 'AI virtual try-on exploration for beauty products', 'SEO, performance and conversion-focused improvements'],
    links: [{ label: 'Live website', href: 'https://eurasiasupplies.com/' }],
    problem: 'A beauty ecommerce platform had weak product discovery, slow performance and no differentiated experience in an increasingly AI-powered market.',
    solution: 'Overhauled product search and discovery, applied technical SEO improvements, boosted site performance and integrated an AI virtual try-on experience for beauty products.',
    impact: 'Stronger organic product discovery and a market-differentiating AI try-on feature that no competitors in the local market offer.',
  },
];

export const skills: Skill[] = [
  { label: 'Frontend', items: 'Next.js · React · TypeScript · Tailwind · Redux' },
  { label: 'Mobile', items: 'React Native · Expo · Android publishing' },
  { label: 'Backend', items: 'Laravel · Node.js · REST APIs' },
  { label: 'Commerce', items: 'Shopify · GraphQL · Ecommerce systems' },
  { label: 'Delivery', items: 'Docker · Ubuntu · GitHub Actions · CI/CD' }
];

export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mehedirakib' },
  { label: 'GitHub', href: 'https://github.com/mehedi-rakib' },
  { label: 'X', href: 'https://twitter.com/mehedirakib' }
];

export const certificates: Certificate[] = [
  {
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    issued: 'November 2025',
    image: '/images/certificate/Frontend Developer.png',
    verificationUrl: 'https://www.hackerrank.com/certificates/ade2960a72ed',
  },
  {
    title: 'Google Play Store Listing',
    issuer: 'Google Play Academy',
    issued: 'June 2026',
    image: '/images/certificate/google_play.jpeg',
    verificationUrl: 'https://www.credential.net/2d8feead-fc9a-462f-b4e0-9af2a414a801#acc.2VHmkbKQ',
  },
  {
    title: 'React (Basic)',
    issuer: 'HackerRank',
    issued: 'April 2026',
    image: '/images/certificate/react.png',
    verificationUrl: 'https://www.hackerrank.com/certificates/ee3065812715',
  },
];
