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
    name: 'Savers Pharma Android',
    type: 'Healthcare mobile commerce',
    summary: 'A pharmacy mobile app connecting patients to affordable medicines. Buy medicines, get real-time prices, and order for home delivery.',
    tags: ['React Native', 'Android', 'Healthcare', 'Firebase'],
    tone: 'blue',
    image: '/images/savers_banner.png',
    role: 'Full-stack mobile · Android launch · User experience',
    status: 'Live on Google Play Store · 2026',
    highlights: ['Search and compare medicine prices in real-time', 'Secure order placement with multiple payment options', 'Track delivery status and order history', 'Push notifications for discounts and reminders'],
    links: [{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=app.saverspharma.com' }],
    problem: 'Finding affordable medicines is hard. Patients waste time calling multiple pharmacies for prices. No easy way to compare or order online.',
    solution: 'Built a React Native app where users search medicines, see prices from nearby pharmacies, and order with one tap. Real-time tracking included.',
    impact: 'Live on Google Play. Thousands of patients now buy affordable medicines from home. Pharmacies reach more customers.',
    caseStudySlug: 'savers-pharma-android',
  },
  {
    id: '02',
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
    problem: 'Resellers managed orders from desktop only. No mobile app meant missed sales opportunities and slower operations.',
    solution: 'Built React Native app with product discovery, instant ordering, customer management, and a real-time sales dashboard.',
    impact: 'Published on Google Play Store. Resellers now work entirely from mobile and close orders 40% faster.',
    caseStudySlug: 'azan-wholesale-android',
  },
  {
    id: '03',
    name: 'Azan Wholesale for Shopify',
    type: 'Public Shopify app',
    summary: 'Shopify app for cosmetic merchants. Import products from Azan, sync inventory in real-time, fulfill orders automatically.',
    tags: ['Shopify', 'GraphQL', 'Automation'],
    tone: 'lime',
    image: '/images/azan-shopify.png',
    role: 'App architecture · Shopify integration · Product delivery',
    status: 'Shopify App Store · Live',
    highlights: ['Import 100+ Azan cosmetics with one click', 'Inventory syncs automatically in real-time', 'Orders fulfill automatically—no manual work'],
    links: [{ label: 'Shopify App Store', href: 'https://apps.shopify.com/azan-wholesales' }],
    problem: 'Cosmetic store owners spent hours manually importing products and processing orders. Inventory went out of sync. Not scalable.',
    solution: 'Built a Shopify app that imports products instantly, keeps inventory updated in real-time, and fulfills orders automatically.',
    impact: 'Live on Shopify App Store. Merchants save 5+ hours per week. No manual work needed.',
    caseStudySlug: 'azan-wholesale-shopify-app',
  },
  {
    id: '04',
    name: 'Azan Wholesale Web',
    type: 'B2B cosmetic commerce platform',
    summary: 'Wholesale cosmetics store for resellers. Browse 5000+ authentic products, competitive pricing, bulk ordering, fast shipping.',
    tags: ['Next.js', 'B2B', 'Commerce'],
    tone: 'rose',
    image: '/images/azan-site.png',
    role: 'Frontend engineering · Ecommerce UX · Platform integration',
    status: 'Live production platform',
    highlights: ['5000+ cosmetic products with real-time pricing', 'Bulk ordering for resellers', 'Powers Shopify app and Android app together'],
    links: [{ label: 'Live website', href: 'https://azanwholesale.com/' }],
    problem: 'Azan needed one website that resellers could order from, and it had to connect with the mobile app and Shopify app.',
    solution: 'Built a Next.js wholesale store with fast product search, bulk ordering, and a backend that powers both the Android and Shopify apps.',
    impact: 'Handles 1000+ reseller orders daily. The central hub for Azan\'s entire e-commerce operation.',
  },
  {
    id: '05',
    name: 'Japan Ambition',
    type: 'Japanese language academy platform',
    summary: 'Online platform for a Dhaka language school. Courses, admissions, student management, and online JLPT testing. Available in English, Bangla, and Japanese.',
    tags: ['Multilingual', 'Education', 'Laravel'],
    tone: 'orange',
    image: '/images/japan_banner.png',
    role: 'Product engineering · UX · CMS and platform delivery',
    status: 'Live · English, Bangla, Japanese',
    highlights: ['JLPT N5–N1 courses and conversation classes', 'Student applications and online testing', 'Course discovery and admissions automation'],
    links: [{ label: 'Live website', href: 'https://japanambition.com/' }],
    problem: 'Language academy used scattered tools for admissions and student management. No unified digital presence. Hard to scale.',
    solution: 'Built one platform in 3 languages. Students apply online, take tests, and manage their courses. Teachers manage everything in one place.',
    impact: 'Academy moved 100% online. Now manages 500+ students without manual paperwork. Online testing is a new revenue stream.',
  },
  {
    id: '06',
    name: 'Custom Print Supplies',
    type: 'Custom printing e-commerce store',
    summary: 'Online store for a New York print company. Custom banners, wristbands, IDs, event materials. Easy configuration and fast checkout.',
    tags: ['Shopify', 'UI / UX', 'Ecommerce'],
    tone: 'blue',
    image: '/images/custom_print.png',
    role: 'Shopify development · UX optimization · Store delivery',
    status: 'Live client project · United States',
    highlights: ['Banners, wristbands, IDs, event materials with custom printing', 'Simple product configuration (no confusion)', 'Bulk pricing and fast checkout'],
    links: [{ label: 'Live store', href: 'https://customprintsupplies.com/' }],
    problem: 'New York print shop had a Shopify store, but customers got confused with product options. Many abandoned orders.',
    solution: 'Redesigned product configuration and checkout. Made the ordering process clear and simple. Added bulk pricing.',
    impact: 'Conversion rate improved 35%. Store now handles 200+ orders/month from USA and Canada.',
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
    type: 'Beauty e-commerce with AI',
    summary: 'Beauty products store. AI-powered virtual try-on. Better search. Faster loading. More customers from Google.',
    tags: ['AI / ML', 'UX', 'SEO'],
    tone: 'mint',
    image: '/images/eurasia-supplies.png',
    role: 'Product engineering · AI experience · SEO',
    status: 'Live production platform',
    highlights: ['AI virtual try-on for makeup and skincare', 'Search optimized for product discovery', 'Fast loading, great on mobile'],
    links: [{ label: 'Live website', href: 'https://eurasiasupplies.com/' }],
    problem: 'Beauty store had weak search. No AI features. Competitors were moving online. Needed to stand out.',
    solution: 'Added AI virtual try-on so customers can try makeup before buying. Improved search. Fixed performance issues.',
    impact: 'Google traffic grew 150%. AI try-on reduced returns by 20%. First beauty store in region with this feature.',
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

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'How to Ship a Mobile App to Google Play Store in 2026',
    slug: 'ship-android-app-google-play',
    date: '2026-01-15',
    category: 'Mobile Development',
    summary: 'Step-by-step guide to publishing your first Android app. What you need, what takes time, and how to avoid rejections.',
    content: `Publishing on Google Play Store is not hard if you know the process. Here's what you need to do.

**Step 1: Set up Google Play Developer account**
- Go to Google Play Console
- Pay $25 one-time fee
- Add billing info

**Step 2: Prepare your app**
- Build a signed APK or AAB
- Test on real Android devices
- Check that all features work
- No crashes. Test everything.

**Step 3: Create an app listing**
- Write a clear title (one sentence, describes what your app does)
- Write description (3-4 sentences, what problem does it solve)
- Add 2-4 screenshots (show real usage, not mockups)
- Add a promo video (optional but recommended)

**Step 4: Submit for review**
- Upload your APK/AAB
- Select target audience (not adults only unless needed)
- Add content rating
- Submit

Google will review in 24-48 hours usually. They check:
- App doesn't crash
- Privacy policy is real
- Permissions match what you use
- No malware

**Common rejections:**
- Crash on startup (test more)
- Permissions not justified (remove unused permissions)
- No privacy policy (add one)
- Unclear what app does (write better description)

**Tips:**
- Don't copy other apps
- Be honest in description
- Test before submitting
- Privacy policy is required
- Icons must be clear
- Use real screenshots

Once approved, your app is live. Updates take 2-4 hours to roll out.

It's simpler than you think. Start today.`,
    tags: ['Android', 'Google Play Store', 'Mobile Development', 'Launch'],
  },
  {
    id: 'b2',
    title: 'Building an AI Feature That Actually Helps Customers',
    slug: 'building-ai-features-users-want',
    date: '2026-01-10',
    category: 'Product Development',
    summary: 'Most AI features are added because they\'re trendy. Here\'s how to build AI features that solve real problems.',
    content: `Every company wants AI now. But most AI features are useless.

I built an AI virtual try-on for a beauty store. Here's what I learned.

**Start with a real problem**
Don't build AI because it's cool. Build it because customers have a problem.

Our problem: Beauty store had high returns. Customers bought products they couldn't test.

Solution: AI virtual try-on. Try makeup on your face using your phone camera before you buy.

**Measure the impact**
We tracked returns before and after. Returns dropped 20%. That's real value.

**Make it simple**
Don't make customers do 5 steps. One tap. That's it.

Our try-on:
- Open app
- Tap try-on
- Point camera at face
- See makeup on you
- Buy if you like it

That's it. Done.

**Start small**
Don't build AI for everything. We started with just eyeshadow. Later we added lipstick.

**Make sure it works**
Poor quality AI is worse than no AI. Test on:
- Different skin tones
- Different lighting
- Glasses or no glasses
- Different phone types

Our mistake: We didn't test on older phones first. Performance was bad. We fixed it.

**Don't over-promise**
Our AI isn't perfect. It doesn't work 100% of the time. We don't pretend it does.

We say: "Try makeup before buying. Results may vary."

**Result**
Customers loved it. Competitors didn't have it. We stood out.

Returns dropped. Revenue went up 18%.

**The lesson**
AI is a tool. Like any tool, it's only good if it solves a real problem for real people.

Don't build AI to say you have AI. Build AI because customers need it.`,
    tags: ['AI/ML', 'Product Strategy', 'User Experience', 'E-commerce'],
  },
  {
    id: 'b3',
    title: 'Why Your Shopify Store is Slow (And How to Fix It)',
    slug: 'shopify-performance-tips',
    date: '2026-01-05',
    category: 'E-commerce',
    summary: 'Slow stores lose customers. We improved load time from 3.2s to 1.1s. Here\'s how.',
    content: `Shopify stores are easy to build. But most are slow.

A 1-second delay loses 7% of sales. Two seconds? Lose 20%.

Here's what we did to make stores fast.

**Problem 1: Images are too big**
Most stores upload 2MB images. That's insane.

- Use 300KB images instead
- Tools: TinyPNG, ImageOptim
- Compress before upload
- Still looks good, loads 5x faster

**Problem 2: Too many apps**
Each app adds code and slows your store down.

Audit your apps:
- Remove unused apps
- Keep only essential ones
- Each app = 0.2 - 0.5 seconds slower

We removed 8 unused apps. Saved 3 seconds.

**Problem 3: JavaScript is heavy**
Third-party code from reviews, chat, analytics slows you down.

Solutions:
- Lazy load chat (load only when clicked)
- Defer non-critical JavaScript
- Use Shopify's built-in analytics first

**Problem 4: No caching**
Pages load from scratch every time.

Use browser caching:
- Set cache headers to 30 days
- Static pages should cache
- Shopify does this automatically if you don't mess with it

**Problem 5: Too many redirects**
Each redirect adds 100-200ms.

Example: Old URL → New URL → Product
That's 2 redirects. 200-400ms wasted.

Fix: Redirect directly. One step.

**What we measured**
Before:
- Load time: 3.2s
- Bounce rate: 35%
- Conversion: 2.1%

After:
- Load time: 1.1s
- Bounce rate: 18%
- Conversion: 3.5%

Better speed = more sales. Simple math.

**Tools to check speed**
- Google PageSpeed Insights
- GTmetrix
- Shopify Theme Store speed rankings

**Start here**
1. Compress images first (biggest impact)
2. Remove unused apps
3. Lazy load heavy widgets
4. Check PageSpeed score

You'll see results in days.

Speed matters. Fix it now.`,
    tags: ['Shopify', 'Performance', 'E-commerce', 'Optimization'],
  },
  {
    id: 'b4',
    title: 'Firebase vs Building Your Own Backend: When to Use What',
    slug: 'firebase-vs-custom-backend',
    date: '2025-12-28',
    category: 'Backend Development',
    summary: 'Firebase is great for some projects. For others, you need your own backend. Here\'s how to decide.',
    content: `Should you use Firebase or build your own backend?

I've used both. Here's when to use each.

**What is Firebase?**
Firebase is a package of services from Google:
- Database (Firestore)
- Authentication (sign up, login)
- Hosting
- Analytics
- Push notifications
- And more

You don't run servers. Google does. You pay only for what you use.

**What is custom backend?**
You write code (Node.js, Python, Laravel). You run it on servers (AWS, DigitalOcean, Heroku). You pay for the servers.

**Use Firebase when:**
- App is small (< 10,000 users)
- You don't have backend expertise
- You want fast time to market
- Cost is low (< $1000/month)
- Simple database needs

Example: Startup app, learning project, MVP

**Use custom backend when:**
- App is big (100,000+ users)
- Complex business logic
- You need custom analytics
- You want full control
- Complex database queries
- Integrations with other systems

Example: E-commerce platform, SaaS product, enterprise app

**Cost comparison**
Firebase:
- 10,000 users, 1M reads/month = ~$50/month
- 100,000 users, 10M reads/month = ~$200/month
- 1M users, 100M reads/month = ~$1500/month

Custom backend (AWS):
- Small: $10-20/month (t2.micro)
- Medium: $50-100/month
- Large: $200-500/month

At scale, custom backend is cheaper. But more work.

**Speed**
Firebase: Deploy in minutes. Scales instantly.
Custom: Deploy takes hours. Scaling is manual work.

**Flexibility**
Firebase: You're limited to Google's features.
Custom: You can do anything.

**Our experience**
We started Azan Wholesale with custom Node.js backend. Why?
- Complex inventory system
- Custom pricing rules per customer
- Integration with Shopify, Android, web

Firebase couldn't handle it easily.

We started Savers Pharma with Firebase. Why?
- Quick launch needed
- Simple product catalog
- Firebase was enough
- Later we'll migrate if needed

**The decision matrix**
| Factor | Firebase | Custom |
|--------|----------|--------|
| Speed to launch | ✅ | ❌ |
| Cost (small) | ✅ | ❌ |
| Cost (large) | ❌ | ✅ |
| Flexibility | ❌ | ✅ |
| Scaling | ✅ | ❌ |
| Complexity | ✅ | ❌ |

**My recommendation**
- Start with Firebase
- If Firebase limits you, migrate to custom backend
- Most apps never need to migrate
- But if you do, migrate before you have 1M users

It's easier to start with Firebase and move to custom backend than the other way around.

Choose based on your actual needs. Not hype.`,
    tags: ['Backend', 'Firebase', 'Architecture', 'Decision Making'],
  },
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
