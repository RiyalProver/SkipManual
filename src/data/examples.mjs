import {exampleContent} from './example-content.mjs';
export const examples = [
  {
    slug: 'current-electric', name: 'Current Electric', category: 'Electrical',
    style: 'Bright. Friendly. Full of energy.', theme: 'current', number: '01',
    description: 'A residential electrical business that puts clarity and contact first.',
    brief: 'Help homeowners understand the work available and describe their project without searching through a complicated website.',
    approach: 'Vivid blue, sunny yellow, full-width electrical work photography, and bold service cards bring a friendly home-service personality to every page. The Magic Team reference informs the visual direction, with an original Current Electric identity and clear contact actions.',
    features: ['Clear service categories', 'Detailed service information', 'Project inquiry flow', 'Mobile-friendly navigation'],
    image: '/images/electrician.webp', alt: 'Electrical professional working on a wiring installation',
    pages: ['Home', 'Services', 'Lighting & upgrades', 'Request a quote'],
    routes: ['', 'services', 'lighting', 'request-a-quote'],
    headline: 'Good energy.\nExpertly wired.',
    outcome: 'Make it easy for a homeowner to recognize the right service and explain what needs attention.',
  },
  {
    slug: 'ridgeline-roofing', name: 'Ridgeline Roofing', category: 'Roofing',
    style: 'Strong. Clear. Built around the home.', theme: 'ridgeline', number: '02',
    description: 'A photo-led roofing website with a prominent assessment request and clear repair and replacement options.',
    brief: 'Give a homeowner a clear route through repairs, replacement, and roof materials, without pressure or unsupported promises.',
    approach: 'A black and blue identity, wide job-site photography, and a short assessment form follow the service-focused direction of the Idaho Roofing Contractors reference. Dedicated service pages and a repair-or-replace guide help homeowners choose their next step.',
    features: ['Repair-or-replace guidance', 'Roof material comparison', 'Distinct roofing service pages', 'A guided assessment request'],
    image: '/images/roof-shingles.webp', alt: 'A roofer fastening shingles over a prepared residential roof',
    pages: ['Home', 'Roofing services', 'Repair or replace?', 'Request an assessment'],
    routes: ['', 'roofing', 'repair-or-replace', 'request-an-assessment'],
    headline: 'Built around what\nyour roof needs.',
    outcome: 'Help visitors understand the questions worth asking about their roof, then request an assessment with confidence.',
  },
  {
    slug: 'clearflow-plumbing', name: 'Clearflow Plumbing', category: 'Plumbing',
    style: 'Practical. Reassuring. Straight to the point.', theme: 'clearflow', number: '03',
    description: 'A helpful residential plumbing website that starts with the problem, then makes the next step simple.',
    brief: 'Help a homeowner identify the service they need without knowing plumbing terminology, and make it easy to describe the issue.',
    approach: 'Navy framing, warm red contact buttons, and large plumbing work photographs give the business a distinct service-first identity. Visitors can start with a leak, a blocked drain, or a cold shower, then carry their service choice into a simple request.',
    features: ['Interactive service finder', 'Plain-language service pages', 'Water-heater information', 'A request form that remembers the service'],
    image: '/images/plumbing-sink-work.webp', alt: 'A plumber fitting a drain trap beneath a bathroom sink',
    pages: ['Home', 'Plumbing services', 'Water heaters', 'Request a visit'],
    routes: ['', 'services', 'water-heaters', 'request-a-visit'],
    headline: 'Let’s get your home\nback to normal.',
    outcome: 'Let a homeowner start with a familiar problem, find the right information, and make an informed inquiry.',
  },
  {
    slug: 'form-studio', name: 'Form Studio', category: 'Wellness & fitness',
    style: 'Calm. Considered. Human.', theme: 'form', number: '04',
    description: 'A boutique Pilates studio with space to breathe and a clear path to a first class.',
    brief: 'Make Pilates feel welcoming to beginners while giving returning visitors a simple way to compare classes.',
    approach: 'Soft lilac, sculptural typography, and spacious layouts reflect a slower, more intentional pace. Class information explains the experience without relying on fitness jargon.',
    features: ['Class comparison', 'Weekly class schedule', 'Beginner-friendly guidance', 'Introductory class request'],
    image: '/images/pilates-reformer.webp', alt: 'Pilates practice on a reformer beside studio windows',
    pages: ['Home', 'Classes', 'The studio', 'Find your class'],
    routes: ['', 'classes', 'the-studio', 'find-your-class'],
    headline: 'A little movement.\nA lot more you.',
    outcome: 'Help a first-time visitor find a class that feels right and feel comfortable asking to join.',
  },
  {
    slug: 'olive-and-ember', name: 'Olive & Ember', category: 'Restaurant',
    style: 'Warm. Seasonal. Inviting.', theme: 'olive', number: '05',
    description: 'A neighborhood restaurant, with a website that feels like a seat at the table.',
    brief: 'Give guests a feel for the food and atmosphere, make the menu easy to explore, and put a table request within reach.',
    approach: 'Rich olive tones, expressive serif type, and considered food photography create a relaxed, intimate experience. The menu is real text, so it is easy to read on a phone.',
    features: ['Readable seasonal menu', 'Table request flow', 'Atmosphere-led photography', 'A dedicated restaurant story'],
    image: '/images/restaurant.webp', alt: 'Beautifully plated seasonal food at a restaurant table',
    pages: ['Home', 'Menu', 'Our story', 'Book a table'],
    routes: ['', 'menu', 'our-story', 'book-a-table'],
    headline: 'Good food.\nGreat company.',
    outcome: 'Help a new guest picture their evening, find something they want to eat, and take the next step.',
  },
];

for(const example of examples) {
  const extra=exampleContent[example.theme].pages;
  example.pages.push(...extra.map(page=>page.label));
  example.routes.push(...extra.map(page=>page.route));
  example.features.push('An expanded photo gallery', 'Helpful answers and visitor guides');
}
