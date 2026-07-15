export interface CaseStudySection {
  heading: string;
  paragraphs: string[];
  pullQuote?: string;
}

export interface CaseStudy {
  slug: string;
  projectId: string;
  title: string;
  tagline: string;
  tags: string[];
  role: string;
  status: string;
  image?: string;
  links: Array<{ label: string; href: string }>;
  intro: string;
  sections: CaseStudySection[];
  closingStatement: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'azan-wholesale-android',
    projectId: '01',
    title: 'From Web Platform to Mobile Product',
    tagline: 'Building and launching the Azan Wholesale Android application on the Google Play Store — from identifying a real user problem to production release.',
    tags: ['React Native', 'Android', 'Mobile UX', 'Google Play', 'Product Engineering'],
    role: 'Product engineering · Mobile UX · Play Store delivery',
    status: 'Published on Google Play Store',
    image: '/images/azan-android-app.png',
    links: [
      { label: 'Google Play Store', href: 'https://play.google.com/store/apps/details?id=com.azanwholesale&hl=en' },
    ],
    intro: 'I successfully designed, developed, tested, and launched the Azan Wholesale Android application on the Google Play Store. This project was not only about converting an existing website into a mobile application — it was about understanding how our users run their businesses, identifying where the existing experience was failing them, and building a more convenient product around their daily behavior.',
    sections: [
      {
        heading: 'Understanding the Real User Problem',
        paragraphs: [
          'Before developing the mobile application, I had already worked on the Azan Wholesale web platform and reseller panel. I knew the system closely because I had designed and implemented many of its interfaces and features. I understood how resellers created their stores, explored products, managed orders, checked their sales, and operated their businesses.',
          'From a technical perspective, the web application was functional. It had the required features, and users could access the platform from both desktop and mobile browsers. But from a product perspective, I noticed an important problem.',
          'Most of our resellers were not traditional desktop users. Many of them were running their businesses through Facebook pages, Facebook Marketplace, Messenger, WhatsApp, and other mobile-first platforms. Their entire business workflow was happening on their phones.',
          'They were communicating with customers through mobile applications, posting products from their phones, receiving orders through social media, and checking business updates while moving from one place to another. However, when they needed to manage their Azan Wholesale reseller account, they had to open a browser, navigate through the web interface, and perform their tasks inside a mobile browser.',
          'Even though the website was responsive, the experience was not the same as using a dedicated mobile application. Users could accidentally close the browser tab. Their sessions could be interrupted. Navigation required more effort, and the platform did not feel like a permanent part of their daily business tools.',
          'I realized that the problem was not the availability of features. The problem was accessibility, convenience, and user behavior. As a Product Engineer, I believe that a product should fit naturally into the user\'s existing workflow. Since our resellers were already conducting most of their business activities through mobile applications, Azan Wholesale also needed to become a mobile-first product.',
        ],
        pullQuote: 'A product should fit naturally into the user\'s existing workflow. Users should not have to change their habits just to use a platform.',
      },
      {
        heading: 'Deciding to Build with React Native',
        paragraphs: [
          'My strongest development experience was in React, Next.js, TypeScript, API integration, and frontend architecture. Before this project, most of my professional work focused on web applications — responsive interfaces, complex dashboards, e-commerce platforms, user authentication systems, search experiences, checkout flows, and reusable component systems.',
          'React Native was the natural choice. It allowed me to continue working with concepts I already understood — components, props, state management, hooks, reusable UI architecture, API calls, conditional rendering, and TypeScript.',
          'However, I quickly learned that knowing React does not automatically mean knowing mobile application development. React Native reduced the learning barrier, but mobile development introduced an entirely different set of problems.',
          'On the web, I worked with URLs, browser navigation, responsive breakpoints, cookies, browser storage, and HTML elements. In React Native, I had to think about screen stacks, application lifecycle, native permissions, secure token storage, device dimensions, Android builds, application signing, release versions, and Play Store requirements.',
          'The programming mindset was familiar, but the environment was different. This project became both a product development journey and a major technical learning experience.',
        ],
      },
      {
        heading: 'Turning Existing Knowledge into a Mobile Experience',
        paragraphs: [
          'One of my biggest advantages was that I already understood the Azan Wholesale ecosystem. I did not need to start by discovering what every feature was supposed to do. I had previously worked on the reseller web platform, so I understood the business logic, APIs, user roles, feature relationships, and common reseller workflows.',
          'However, I did not simply copy the web interface and place it inside a mobile application. A mobile product requires different decisions.',
          'On a desktop dashboard, users can see navigation menus, tables, cards, filters, statistics, and multiple actions on the same screen. On mobile, the screen is smaller, users often operate with one hand, internet quality can be inconsistent, and every additional interaction creates friction.',
          'I had to identify what information was most important on each screen and what action the user was most likely to perform next. I simplified layouts, reorganized content, increased touch-friendly spacing, improved button placement, and designed navigation around the reseller\'s most common activities.',
          'Instead of trying to display everything at once, I focused on creating clear paths between tasks. The application needed to feel simple even though the system behind it contained complex business operations.',
        ],
      },
      {
        heading: 'Designing and Developing the Screens',
        paragraphs: [
          'Because I understood the existing platform, I was able to plan the application\'s screens based on real reseller workflows. I designed and developed the application screen by screen — authentication, store information, approval status, product browsing, product details, order-related activities, invoices, account information, and other reseller operations.',
          'I built reusable components instead of creating every interface independently. Buttons, input fields, cards, loading indicators, status badges, empty states, error messages, product elements, and navigation patterns were designed to remain consistent throughout the application.',
          'I also paid close attention to loading and error states. In a real application, API data does not always appear instantly. Internet connections may be slow, authentication tokens may expire, servers may return errors, or users may not have any data yet.',
          'A good product cannot only look correct when everything works perfectly. It must also communicate clearly when data is loading, when something fails, when the user needs to take action, and when there is nothing to display.',
        ],
      },
      {
        heading: 'Connecting the Backend and Building for Real Users',
        paragraphs: [
          'The application needed to communicate with the same backend ecosystem that supported the web platform — integrating authentication, user data, store information, products, orders, sales information, and other reseller operations through APIs.',
          'On the web, browser cookies and sessions can handle many authentication tasks. In a mobile application, I needed to manage tokens and user sessions carefully so users would not have to log in every time they opened the application. I implemented persistent authentication and created logic for handling expired or invalid sessions.',
          'I also created a centralized API structure so that requests, authentication headers, errors, and responses could be managed consistently. This made the application more stable and reduced the amount of repeated code across different screens.',
          'During development, I continuously tried to think from the reseller\'s perspective. A newly registered reseller might not have an approved store yet. Another user might have created a store but still be waiting for approval. Some users might have orders, while others might not have received their first order. These users should not all see the same generic interface.',
          'I added conditional states based on user and store information. The interface could guide users when an action was required, show the latest approval status, or display meaningful empty states when no data was available.',
        ],
        pullQuote: 'A feature is not complete simply because the API has been connected. A feature is complete when users understand what is happening, what the information means, and what they should do next.',
      },
      {
        heading: 'Testing the Application',
        paragraphs: [
          'Testing a mobile application is different from checking a responsive website in a browser. I needed to test different screen sizes, Android versions, navigation paths, authentication states, slow API responses, empty data, incorrect input, interrupted sessions, and real-device behavior.',
          'Some interfaces looked correct on one device but needed adjustment on another. Keyboard behavior also required attention — when users entered information, the keyboard could cover input fields or action buttons. I had to make sure forms remained usable when the keyboard was open.',
          'I also tested how users moved backward and forward through the application. Incorrect navigation behavior can easily confuse users or create duplicate screens inside the navigation stack.',
          'Testing revealed small issues that were easy to miss during development — inconsistent spacing, loading states that ended too early, buttons that needed better disabled states, API errors that were not communicated clearly, and screens that required additional fallbacks. Every testing cycle improved both the stability and usability of the application.',
        ],
      },
      {
        heading: 'The Deployment Journey',
        paragraphs: [
          'After completing development and testing, I entered the most challenging stage: publishing the application on Google Play. Mobile application deployment introduced a completely different process from web deployment.',
          'I needed to configure the Android package identifier, generate production builds, manage version codes, prepare signed application bundles, create the Play Console listing, complete policy declarations, upload screenshots, provide privacy information, and manage different testing and release tracks.',
          'Publishing the application was not as simple as uploading the production file and clicking a release button. The application needed to go through Google Play\'s testing process. I created testing releases, added testers, shared installation links, monitored access, and made sure the application was being used during the required testing period.',
          'I also had to understand how the application handled user data and accurately communicate that information to Google Play. The Data Safety section requires developers to explain which types of information the application collects or shares and how that information is protected.',
          'I also encountered warnings and configuration questions related to Android permissions and advertising identifiers. Even when an application does not intentionally use advertising features, third-party dependencies can introduce permissions into the final Android build. I had to inspect the configuration, review dependencies, and make sure the Play Console declarations matched the actual application behavior.',
        ],
      },
      {
        heading: 'Handling a Rejected Release',
        paragraphs: [
          'One of the most stressful moments in the journey was when the application submission was rejected because the review team could not access the application with the provided credentials.',
          'From my side, the application was working. But from the reviewer\'s perspective, they could not enter the product and verify its functionality. This experience taught me an important product and deployment lesson: a product is not ready for review only because it works for the development team. The reviewer must also be able to access it without confusion.',
          'I reviewed the credentials, tested the account again, checked the login flow, updated the necessary information, and prepared a clearer explanation for the review team. I also submitted an appeal and communicated the situation properly.',
          'Waiting for the result was difficult because the technical development was already complete, but the application still could not reach users. However, instead of treating the rejection as a failure, I treated it as another issue that needed to be investigated and resolved. That mindset helped me remain focused.',
        ],
        pullQuote: 'Instead of treating the rejection as a failure, I treated it as another issue that needed to be investigated and resolved.',
      },
      {
        heading: 'My Role as a Product Engineer',
        paragraphs: [
          'My contribution to this project was not limited to frontend development. I identified the user-experience problem, proposed the mobile solution, selected the technology, planned the application structure, designed the screens, developed the interfaces, integrated the APIs, handled authentication, tested the application, prepared store assets, managed Play Console requirements, responded to review issues, and completed the production release.',
          'During this project, I needed to move continuously between different perspectives. As a developer, I focused on architecture, code quality, API integration, and performance. As a designer, I focused on navigation, hierarchy, spacing, mobile interactions, and usability. As a product thinker, I focused on reseller behavior, business workflows, adoption barriers, and user value. As a release owner, I focused on testing, policy compliance, production builds, store presentation, and communication with the review team.',
          'This project represents what being a Product Engineer means to me. A Product Engineer does not only wait for a finalized design and a list of development tasks. A Product Engineer observes users, understands the business, identifies problems, proposes practical solutions, makes technical decisions, and remains responsible until the solution reaches real users.',
        ],
      },
      {
        heading: 'What I Learned',
        paragraphs: [
          'The biggest lesson I learned is that user behavior should guide product decisions. The web application already existed, but that did not mean the user experience was complete. Our users were mobile-first business owners. Building a dedicated mobile application brought the product closer to the way they already worked.',
          'I also learned that previous technical experience can provide a strong foundation, but entering a new platform still requires humility. My React and Next.js experience helped me understand component architecture and application state, but I still had to learn the rules of mobile development.',
          'Another lesson was that deployment is part of product engineering. Preparing a build, passing a review, handling policies, providing reviewer access, and creating store assets are not separate from the product. They are part of delivering it.',
          'I also learned to treat rejection as feedback rather than defeat. When the application was rejected, the right response was not frustration. The right response was to understand the reviewer\'s problem and remove the barrier.',
          'Finally, I learned that ownership creates growth. Because I handled the project from problem identification to production launch, I gained experience in areas that I would not have learned by working on only one isolated feature.',
        ],
      },
    ],
    closingStatement: 'Building the Azan Wholesale Android application was not simply an attempt to learn React Native. It started with a real product problem — our resellers were operating mobile-first businesses, but our platform was asking them to depend on a browser-based workflow. The journey included architecture decisions, UI design, API integration, authentication, testing, Android configuration, rejected submissions, Play Console policies, and multiple release challenges. But every challenge improved both the application and my understanding of product development. The most valuable result is that I learned how to take ownership of a product from identifying a user problem to delivering a working solution into the hands of real users.',
  },

  {
    slug: 'azan-wholesale-shopify-app',
    projectId: '02',
    title: 'Building the Azan Wholesale Shopify App',
    tagline: 'Connecting Shopify resellers with products, inventory and fulfilment — turning a manual workflow into a live Shopify App Store integration.',
    tags: ['Shopify', 'GraphQL', 'Webhooks', 'Automation', 'Product Engineering'],
    role: 'App architecture · Shopify integration · Product delivery',
    status: 'Live on Shopify App Store · Launched Nov 2025',
    image: '/images/azan-shopify.png',
    links: [
      { label: 'Shopify App Store', href: 'https://apps.shopify.com/azan-wholesales' },
    ],
    intro: 'After working on the Azan Wholesale reseller ecosystem, I noticed another important problem. Many resellers wanted to sell Azan Wholesale products through their own Shopify stores — but managing products manually created too much work. This workflow was slow, repetitive and vulnerable to human error. So I built the Azan Wholesale Shopify App.',
    sections: [
      {
        heading: 'The Problem',
        paragraphs: [
          'Our resellers wanted to focus on marketing and selling products — not continuously managing product information. The existing process created several challenges: product information had to be added manually, stock could become outdated without the reseller noticing, customers could order products that were no longer available, price changes needed to be updated across multiple stores, and order information had to be transferred manually.',
          'The real problem was not only product importing. The bigger problem was keeping two different systems synchronized. I needed to create a reliable connection between the reseller\'s Shopify store and the Azan Wholesale platform.',
        ],
      },
      {
        heading: 'The Product Idea',
        paragraphs: [
          'The idea was to make dropshipping easier for Azan Wholesale resellers. After installing the app, a merchant should be able to connect their Shopify store with Azan Wholesale, explore available products and import selected products directly into their store.',
          'After importing a product, the connection should continue working in the background. When product inventory or pricing changes in Azan Wholesale, the Shopify product should receive the latest information. When a customer places an order through Shopify, the order should be sent to Azan Wholesale for fulfilment.',
          'The reseller manages the storefront and customer relationship. Azan Wholesale manages product availability, order processing and delivery. The published application now supports one-click product importing, real-time inventory synchronization and automated order fulfilment for cosmetic resellers.',
        ],
      },
      {
        heading: 'Understanding the Complete Workflow',
        paragraphs: [
          'Before building the Shopify app, I had already worked on the Azan Wholesale website, reseller panel, APIs and product system. This experience gave me an important advantage — I understood how products were structured, how variants and inventory were managed, how resellers operated their stores and how orders moved through the Azan Wholesale system.',
          'However, understanding our own platform was only one part of the project. I also needed to understand how Shopify manages app installation and authentication, store access permissions, products and variants, inventory locations, orders and webhooks, fulfilment orders, and app review requirements.',
          'My main responsibility was to make these two systems communicate without making the process complicated for the merchant.',
        ],
      },
      {
        heading: 'How the Application Works',
        paragraphs: [
          'The merchant begins by installing the application from the Shopify App Store. The application then securely connects the merchant\'s Shopify store with the Azan Wholesale platform.',
          'From the app, the reseller can select a product and import it into Shopify. The app creates the product with its relevant information, including the title, description, images, pricing, variants and inventory data. However, importing the product is only the beginning.',
          'The application keeps a relationship between the Shopify product and the original Azan Wholesale product. This allows the system to recognize which products need to be updated when stock or other product information changes.',
          'When an order is placed, the application receives the order information and connects it with the Azan Wholesale fulfilment process. This reduces manual work and allows the reseller to run a more scalable dropshipping business.',
        ],
      },
      {
        heading: 'Building Real-Time Inventory Synchronization',
        paragraphs: [
          'Inventory synchronization was one of the most important parts of the application. Without accurate stock information, a reseller could sell a product that was already unavailable — creating cancelled orders, unhappy customers and additional support work.',
          'I created a synchronization process that connects the inventory information between Azan Wholesale and Shopify. When stock changes in the main product system, the connected Shopify products can be updated automatically.',
          'While building this feature, I had to carefully map products, variants, inventory items and Shopify locations. A product could contain multiple variants, and every variant needed to remain connected to the correct inventory record.',
        ],
        pullQuote: 'Synchronization is not only about sending data from one API to another. The system must know exactly which records are connected and what should happen when something changes.',
      },
      {
        heading: 'Automating the Order and Fulfilment Process',
        paragraphs: [
          'The next major challenge was order fulfilment. When a customer purchases an imported product, the reseller should not need to manually recreate the order inside another platform.',
          'The application needed to capture the Shopify order, identify the Azan Wholesale products and send the required information to the fulfilment system. Shopify also has a structured fulfilment-order workflow — the app needed the correct permissions and fulfilment logic so merchants could request fulfilment properly from their Shopify admin.',
          'During the Shopify review process, I received feedback related to fulfilment permissions, fulfilment requests and how the app handled the merchant\'s Request Fulfilment action. I reviewed Shopify\'s fulfilment architecture, updated the required access scopes and improved the fulfilment-request process.',
        ],
      },
      {
        heading: 'The Shopify App Review Journey',
        paragraphs: [
          'Building the application was only one part of the work. Publishing it on the Shopify App Store introduced a completely different set of challenges. Shopify reviewed the full merchant experience — installation and authentication, permission requirements, pricing information, product importing, inventory synchronization, fulfilment behavior, data access and privacy, and app errors.',
          'Some parts of the application did not pass during the first review. At different stages, I received feedback about fulfilment behavior, permission scopes, pricing explanations and an internal server error after installation. Each review helped me identify something that needed to be clearer or more reliable.',
          'I reproduced the issues, reviewed the app logs, updated the workflow and communicated with the Shopify review team. This process taught me that a marketplace application must work outside the developer\'s controlled environment. Installation, onboarding, permissions and error handling are all parts of the product experience.',
        ],
      },
      {
        heading: 'Designing for Trust',
        paragraphs: [
          'The application handles important business information — products, orders, customers and fulfilment data. Because of this, merchants need to understand why the application requires access to their store.',
          'I tried to make the onboarding and configuration process clear instead of presenting merchants with technical information they might not understand. I also added activity logs so merchants and administrators could understand whether products were imported, synchronized or processed successfully.',
          'For a system that performs background automation, visibility is important. Users need confidence that the system is working, even when they are not manually performing every action.',
        ],
      },
      {
        heading: 'What I Learned',
        paragraphs: [
          'This project taught me that automation is not only about reducing clicks. Good automation removes repetitive work while still giving users visibility and control.',
          'I also learned that third-party platform development requires a different mindset. I had to build according to Shopify\'s APIs, permissions, review standards and fulfilment architecture while still supporting Azan Wholesale\'s business requirements.',
          'The most important lesson was that building the feature is not the end of the work. The feature must survive installation, different store configurations, API failures, missing permissions, review testing and real merchant usage.',
          'My role included more than developing the application — I worked on identifying the reseller workflow problem, planning the Shopify integration, designing the app experience, connecting Shopify with the Azan Wholesale APIs, implementing product importing, building stock and price synchronization, handling order and fulfilment workflows, managing permissions and webhooks, debugging installation and production issues, responding to Shopify review feedback, and preparing and publishing the app listing.',
          'This project helped me understand Product Engineering at an ecosystem level. I was not building an isolated interface. I was building a bridge between suppliers, resellers, Shopify stores, customers and the fulfilment operation.',
        ],
        pullQuote: 'Good automation removes repetitive work while still giving users visibility and control.',
      },
    ],
    closingStatement: 'The Azan Wholesale Shopify App is now publicly available on the Shopify App Store. It allows cosmetic resellers to import products, receive inventory updates and connect their orders with Azan Wholesale fulfilment. More importantly, it transforms a manual reseller workflow into a connected system. Before the app, resellers had to manage products, stock and orders between separate platforms. With the app, many of those repetitive tasks happen automatically — helping resellers spend less time managing systems and more time growing their businesses.',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}
