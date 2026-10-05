import { packageServices } from './package.mjs';

export const site = {
  name: 'SkipManual',
  description: 'A professional 10–20 page website, automatic inquiry follow-up, missed-call text replies, review requests, and on-page SEO for local businesses. $249/month with SkipManual.',
  url: process.env.PUBLIC_SITE_URL || '',
  email: process.env.PUBLIC_CONTACT_EMAIL || '',
  contactEndpoint: process.env.PUBLIC_CONTACT_ENDPOINT || '',
  bookingUrl: process.env.PUBLIC_BOOKING_URL || '',
};

// Null means unconfirmed. Never render these as promises or package inclusions.
export const offer = {
  price: 249,
  currency: 'USD',
  interval: 'month',
  confirmedFeatures: packageServices.map(service => service.short),
  details: {
    setupFee: null, minimumTerm: null, hosting: null, maintenance: null,
    support: null, turnaround: null, revisions: null, domain: null,
    ownership: null, cancellation: null, addOns: null, messagingUsage: null, messagingPlatform: null,
  },
};

export const navigation = [
  { href: '/services/', label: 'What’s included' },
  { href: '/examples/', label: 'Website examples' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/how-it-works/', label: 'How it works' },
];

export const processSteps = [
  { title: 'Start with your business.', text: 'Tell us what you do, who you serve, and what you need your website to do.' },
  { title: 'Give it a clear direction.', text: 'We plan the pages, content, and design around the people you want to reach.' },
  { title: 'See it come together.', text: 'We design and build your website. You review the work before it goes live.' },
  { title: 'Make your next move.', text: 'We agree on the launch plan and what happens next, with the details clear up front.' },
];

export const faqs = [
  { category: 'The service', q: 'Who is SkipManual for?', a: 'Local businesses that want a professional website and a clear way for customers to get in touch. That includes home services, restaurants, studios, shops, and local professional services.' },
  { category: 'Pricing', q: 'What does $249/month include?', a: 'The $249/month package includes a professional 10–20 page website, automatic inquiry follow-up, missed-call text replies, review requests and reminders, and on-page SEO foundations. We confirm the pages, message flows, usage allowances, any extra costs, and billing terms before you commit.' },
  { category: 'Getting started', q: 'Do I need to know anything about websites?', a: 'No. Start with what you know: your business, your customers, and the services you offer. We’ll guide the conversation about what your website needs.' },
  { category: 'The service', q: 'Will my website work on phones?', a: 'Yes. We design for phones, tablets, and computers, with readable content and easy-to-use navigation and contact options.' },
  { category: 'Getting started', q: 'How does the process work?', a: 'We start with your business, agree on a plan, design and build the website, and share it for your review. The scope and launch arrangements are agreed before work begins.' },
  { category: 'Getting started', q: 'How long does a website take?', a: 'Timing depends on the pages, content, and functionality you need. We’ll discuss a realistic timeline for your project before you commit.' },
  { category: 'The service', q: 'Can you redesign my existing website?', a: 'Yes. Share your current website and what you’d like to improve. We’ll look at what is working, what is getting in the way, and how a new design could help.' },
  { category: 'The service', q: 'Can you build for my industry?', a: 'We design for a range of local businesses. The examples show a few different approaches, rather than a fixed list of industries. Tell us what you do so we can discuss the right fit.' },
  { category: 'Your website', q: 'Can I use my own domain?', a: 'Tell us if you already own a domain. We’ll review your current setup and confirm the steps and responsibilities for connecting it before launch.' },
  { category: 'Your website', q: 'Can I request changes?', a: 'You’ll have a chance to review the website. The revision scope and arrangements for changes after launch will be confirmed in your project agreement.' },
  { category: 'Your website', q: 'What happens after launch?', a: 'We’ll confirm the arrangements for hosting, maintenance, support, and future updates as part of your package discussion. We don’t want you guessing about what happens next.' },
  { category: 'Your website', q: 'Do you handle the technical side?', a: 'We handle the design and build. Any ongoing technical management, hosting, or maintenance will be clearly specified in the scope we agree with you.' },
  { category: 'Pricing', q: 'Are there setup fees or a minimum commitment?', a: 'The confirmed base price is $249/month. Setup costs, minimum terms, cancellation, and ownership arrangements will be explained before you enter an agreement.' },
  { category: 'The service', q: 'Are the example websites real client projects?', a: 'No. They are original example concepts for fictional businesses, made to show our design approach. They are clearly labeled and are not presented as client work.' },
  { category: 'The service', q: 'What does a missed-call text reply do?', a: 'When you miss a call, a text acknowledges the caller and invites them to describe what they need. You can then pick up the conversation. We agree on the wording, eligible calls, and reply rules during setup.' },
  { category: 'The service', q: 'Will the follow-up handle every customer for me?', a: 'It helps acknowledge inquiries and send useful follow-ups. You still answer specific questions, confirm availability, quote the work, and serve the customer. The messages and handoff are planned with you.' },
  { category: 'The service', q: 'Do review requests guarantee five-star ratings?', a: 'No. The system invites customers to share honest feedback and can send reminders. Every rating is welcome; customers are not screened by satisfaction before receiving a review link.' },
  { category: 'The service', q: 'Does on-page SEO guarantee search rankings?', a: 'No. It covers page titles, descriptions, headings, useful service content, internal links, and structured information based on verified business details. Search position depends on many factors.' },
  { category: 'Pricing', q: 'Are texts and third-party platform costs included?', a: 'The package includes the follow-up services. We confirm the messaging platform, usage allowances, and any additional message or third-party charges before you agree. This is not a promise of unlimited messaging.' },
  { category: 'Getting started', q: 'Can I contact you before starting?', a: 'Absolutely. Tell us a little about your business on the Get Started page. You don’t need a finished brief, and sending an inquiry doesn’t commit you to a package.' },
];

// Reserved for verified, consented client material. Empty until real work is available.
export const testimonials = [];
