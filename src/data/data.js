// ============================================
// CSR Tech Solutions - Company Profile Data
// ============================================

export const companyInfo = {
  name: 'CSR Tech Solutions',
  tagline: 'Innovative Technology, Memorable Events, Powerful Digital Presence',
  shortTagline: 'Innovate • Build • Scale',
  description:
    'CSR Tech Solutions is a professional service company specializing in IT Software Development, Event Management, and Digital Management solutions. We are committed to delivering innovative technology services, successful event experiences, and effective digital strategies that help businesses achieve their goals and enhance their market presence.',
  mission:
    'To provide innovative, reliable, and high-quality technology, event management, and digital solutions that empower businesses to grow and succeed.',
  vision:
    'To be a leading provider of software development, event management, and digital management services by delivering excellence, creativity, and customer satisfaction.',
  address: '74/A Main Road, Sawyerpuram, Thoothukudi - 628251',
  phone: '7305172130',
  email: 'clintonsamualraj@gmail.com',
  website: 'csr@gmail.com',
};

// ============================================
// Three Core Service Pillars
// ============================================

export const servicePillars = [
  {
    id: 'it-software',
    icon: '💻',
    title: 'IT Software Development',
    shortDesc:
      'Custom-built software, websites, mobile apps, and cloud solutions engineered for your business success.',
    longDesc:
      'From idea to deployment, we craft reliable, scalable and high-performing software products that help your business operate smarter and grow faster.',
    color: '#1A5BF6',
    bg: '#EEF3FF',
    link: '/services/it-software',
    offerings: [
      'Custom Software Development',
      'Website Design and Development',
      'Mobile Application Development',
      'E-Commerce Solutions',
      'Business Management Systems',
      'Software Maintenance and Support',
      'Cloud-Based Solutions',
    ],
  },
  {
    id: 'event-management',
    icon: '🎉',
    title: 'Event Management',
    shortDesc:
      'End-to-end event production — from corporate meets to cultural programs and grand award functions.',
    longDesc:
      'Whether it is a corporate conference, a product launch or a cultural celebration, we plan, coordinate and execute events that leave lasting impressions.',
    color: '#7C3AED',
    bg: '#F5F3FF',
    link: '/services/event-management',
    offerings: [
      'Corporate Events',
      'Business Conferences and Seminars',
      'Product Launches',
      'Exhibitions and Trade Shows',
      'Cultural Programs',
      'Award Functions',
      'Event Branding and Promotion',
      'Venue and Logistics Management',
    ],
  },
  {
    id: 'digital-management',
    icon: '📈',
    title: 'Digital Management',
    shortDesc:
      'Data-driven digital marketing, SEO, social media and content strategies that grow your brand online.',
    longDesc:
      'We help your business get found, get noticed and get chosen. Our digital team builds campaigns that convert audiences into loyal customers.',
    color: '#0EA5E9',
    bg: '#F0F9FF',
    link: '/services/digital-marketing',
    offerings: [
      'Digital Marketing',
      'Social Media Management',
      'Search Engine Optimization (SEO)',
      'Content Creation and Marketing',
      'Online Brand Management',
      'Website Management',
      'Digital Advertising Campaigns',
      'Performance Monitoring and Analytics',
    ],
  },
];

// ============================================
// IT Software Development — Detailed Services
// ============================================
export const itServices = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    desc: 'Tailor-made software built around your unique workflows, operations and business goals.',
    icon: '🛠️',
  },
  {
    id: 'web-development',
    title: 'Website Design and Development',
    desc: 'Responsive, fast and SEO-friendly websites that represent your brand beautifully.',
    icon: '🌐',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Application Development',
    desc: 'Native and cross-platform mobile apps for Android and iOS with delightful user experiences.',
    icon: '📱',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    desc: 'Robust online stores with secure payments, inventory tools and a smooth shopping experience.',
    icon: '🛒',
  },
  {
    id: 'business-systems',
    title: 'Business Management Systems',
    desc: 'ERP, CRM and management systems that streamline operations and improve productivity.',
    icon: '📊',
  },
  {
    id: 'maintenance',
    title: 'Software Maintenance and Support',
    desc: 'Ongoing updates, bug fixes, performance tuning and reliable post-launch support.',
    icon: '🔧',
  },
  {
    id: 'cloud',
    title: 'Cloud-Based Solutions',
    desc: 'Scalable and secure cloud architectures for hosting, storage and modern SaaS products.',
    icon: '☁️',
  },
];

// ============================================
// Event Management — Detailed Services
// ============================================
export const eventServices = [
  {
    id: 'corporate',
    title: 'Corporate Events',
    desc: 'Professional corporate events including meetings, retreats and internal celebrations.',
    icon: '🏢',
  },
  {
    id: 'conferences',
    title: 'Business Conferences and Seminars',
    desc: 'Large-scale conferences and knowledge seminars with seamless stage and AV production.',
    icon: '🎤',
  },
  {
    id: 'launches',
    title: 'Product Launches',
    desc: 'Memorable launch events that introduce your products to the market with maximum impact.',
    icon: '🚀',
  },
  {
    id: 'exhibitions',
    title: 'Exhibitions and Trade Shows',
    desc: 'Booth design, vendor coordination and full exhibition management from start to finish.',
    icon: '🏛️',
  },
  {
    id: 'cultural',
    title: 'Cultural Programs',
    desc: 'Beautifully curated cultural shows, college fests and community programs.',
    icon: '🎭',
  },
  {
    id: 'awards',
    title: 'Award Functions',
    desc: 'Glamorous award nights and recognition ceremonies with full show management.',
    icon: '🏆',
  },
  {
    id: 'branding',
    title: 'Event Branding and Promotion',
    desc: 'Creative branding, stage design and on-ground / digital promotion for every event.',
    icon: '🎨',
  },
  {
    id: 'logistics',
    title: 'Venue and Logistics Management',
    desc: 'Venue scouting, vendor management, transport, hospitality and on-day coordination.',
    icon: '📋',
  },
];

// ============================================
// Digital Management — Detailed Services
// ============================================
export const digitalServices = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    desc: 'Performance-driven digital marketing campaigns that reach the right audience at the right time.',
    icon: '📣',
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    desc: 'Daily social media handling, content calendars, community engagement and growth.',
    icon: '💬',
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    desc: 'On-page, off-page and technical SEO to rank higher and drive organic traffic.',
    icon: '🔍',
  },
  {
    id: 'content',
    title: 'Content Creation and Marketing',
    desc: 'Engaging blogs, videos, reels and copy that tell your brand story with impact.',
    icon: '✍️',
  },
  {
    id: 'brand',
    title: 'Online Brand Management',
    desc: 'Reputation management, brand voice consistency and online presence strengthening.',
    icon: '🛡️',
  },
  {
    id: 'website-mgmt',
    title: 'Website Management',
    desc: 'Continuous website updates, performance optimization, backups and security monitoring.',
    icon: '🖥️',
  },
  {
    id: 'advertising',
    title: 'Digital Advertising Campaigns',
    desc: 'ROI-focused Google Ads, Meta Ads and paid campaigns with detailed targeting.',
    icon: '🎯',
  },
  {
    id: 'analytics',
    title: 'Performance Monitoring and Analytics',
    desc: 'In-depth analytics dashboards, monthly reports and insights for smarter decisions.',
    icon: '📈',
  },
];

// ============================================
// Statistics
// ============================================
export const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '3', label: 'Core Service Pillars' },
  { value: '50+', label: 'Happy Clients' },
  { value: '24/7', label: 'Support' },
];

// ============================================
// Testimonials (kept generic for demo)
// ============================================
export const testimonials = [
  {
    id: 1,
    name: 'Anitha R.',
    role: 'Founder, GreenLeaf Foods',
    avatar: 'AR',
    rating: 5,
    text: 'CSR Tech Solutions built our e-commerce store and ran our digital ads. Sales grew 3x in just 4 months. Their team is responsive and truly understands business.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Karthik V.',
    role: 'Director, V.K. Events',
    avatar: 'KV',
    rating: 5,
    text: 'We partnered with CSR for a 1000+ attendee corporate event. The execution was flawless — from venue to stage to hospitality. Highly recommended for any large event.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    name: 'Maria J.',
    role: 'Marketing Head, EduTech Co.',
    avatar: 'MJ',
    rating: 5,
    text: 'Their SEO and social media team helped us rank on the first page for our main keywords. The monthly reports are clear and we can see real progress every month.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    name: 'Suresh P.',
    role: 'Proprietor, Suresh & Sons',
    avatar: 'SP',
    rating: 5,
    text: 'CSR Tech built a custom billing and inventory system for our retail business. It has saved us hours every day and the support is excellent.',
    gradient: 'from-orange-500 to-amber-500',
  },
];

// ============================================
// FAQ
// ============================================
export const faqs = [
  {
    q: 'What does CSR Tech Solutions do?',
    a: 'CSR Tech Solutions is a professional service company specializing in three core areas: IT Software Development, Event Management, and Digital Management. We help businesses with technology, events and online growth.',
  },
  {
    q: 'Where is CSR Tech Solutions located?',
    a: 'Our office is at 74/A Main Road, Sawyerpuram, Thoothukudi - 628251. We work with clients locally and across India.',
  },
  {
    q: 'Do you build custom software?',
    a: 'Yes. Custom software development is one of our core services. We design, develop and maintain tailor-made applications that fit your exact business workflows.',
  },
  {
    q: 'Can you manage our company event end-to-end?',
    a: 'Absolutely. From corporate events, conferences and product launches to cultural programs and award functions — we handle venue, logistics, branding, AV and on-day coordination.',
  },
  {
    q: 'Do you offer digital marketing services?',
    a: 'Yes. Our Digital Management services include digital marketing, social media management, SEO, content creation, online brand management, digital advertising and analytics.',
  },
  {
    q: 'How can I get in touch with you?',
    a: 'You can call us at 7305172130 or email clintonsamualraj@gmail.com. You can also visit our office at 74/A Main Road, Sawyerpuram, Thoothukudi - 628251.',
  },
];

// ============================================
// Why CSR
// ============================================
export const whyCSR = [
  { icon: '🎯', title: 'Focused on Your Goals', desc: 'We listen first, then deliver. Every solution is built around your specific business goals.' },
  { icon: '🚀', title: 'Innovative Solutions', desc: 'Modern technology, creative event ideas and fresh digital strategies for every project.' },
  { icon: '🤝', title: 'Reliable Support', desc: 'Friendly, responsive and honest support — before, during and after the project.' },
  { icon: '💡', title: 'Creative Thinking', desc: 'From event branding to software UI, our team brings creative ideas that make you stand out.' },
  { icon: '⚡', title: 'On-Time Delivery', desc: 'We respect deadlines. Our planning and execution are designed for timely, quality delivery.' },
  { icon: '💰', title: 'Transparent Pricing', desc: 'Clear pricing with no hidden costs. We offer great value for premium-quality services.' },
];

// ============================================
// Portfolio / Projects
// ============================================
export const projects = [
  {
    id: 1,
    title: 'E-Commerce Store — GreenLeaf Foods',
    category: 'IT Software',
    industry: 'Retail',
    description: 'Custom e-commerce platform with product management, secure payments and order tracking.',
    tech: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
    color: '#1A5BF6',
    span: 'col-span-2',
  },
  {
    id: 2,
    title: 'Thoothukudi Business Conference 2025',
    category: 'Event Management',
    industry: 'Corporate',
    description: 'End-to-end management of a 800+ attendee business conference with stage, AV and hospitality.',
    tech: ['Event Planning', 'Branding', 'Logistics', 'AV Production'],
    color: '#7C3AED',
    span: 'col-span-1',
  },
  {
    id: 3,
    title: 'EduTech SEO Growth',
    category: 'Digital Marketing',
    industry: 'Education',
    description: 'SEO and content strategy that grew organic traffic by 280% in 6 months.',
    tech: ['SEO', 'Content', 'Analytics', 'Search Console'],
    color: '#0EA5E9',
    span: 'col-span-1',
  },
  {
    id: 4,
    title: 'Retail Billing & Inventory System',
    category: 'IT Software',
    industry: 'Retail',
    description: 'Custom billing and inventory management software for a multi-branch retail business.',
    tech: ['React', 'Express', 'MySQL', 'Cloud'],
    color: '#F59E0B',
    span: 'col-span-1',
  },
  {
    id: 5,
    title: 'College Cultural Fest 2025',
    category: 'Event Management',
    industry: 'Education',
    description: 'Complete cultural event management for a 2-day college fest with 5,000+ students.',
    tech: ['Stage Design', 'Sponsorship', 'Promotion', 'Talent Mgmt'],
    color: '#EC4899',
    span: 'col-span-2',
  },
  {
    id: 6,
    title: 'Restaurant Social Media Growth',
    category: 'Digital Marketing',
    industry: 'F&B',
    description: 'Instagram and Facebook growth campaign that tripled footfall in 3 months.',
    tech: ['Social Media', 'Reels', 'Ads', 'Photography'],
    color: '#10B981',
    span: 'col-span-1',
  },
];

// ============================================
// Pricing Plans
// ============================================
export const pricingPlans = [
  {
    name: 'Starter',
    price: '₹9,999',
    period: 'per month',
    description: 'Best for small businesses just getting started with digital presence.',
    features: [
      'Basic Website (up to 5 pages)',
      'Social Media (2 platforms)',
      'Monthly SEO Report',
      'Email Support',
    ],
    excluded: ['E-commerce features', 'Daily social posting', 'Paid ad management'],
    accent: '#1A5BF6',
    popular: false,
  },
  {
    name: 'Growth',
    price: '₹24,999',
    period: 'per month',
    description: 'Ideal for growing businesses that need a strong digital + software push.',
    features: [
      'Custom Website / Web App',
      'Social Media (3-4 platforms)',
      'SEO + Content Marketing',
      'Paid Ads Management',
      'Monthly Strategy Call',
    ],
    excluded: ['Dedicated account manager', 'Custom software modules'],
    accent: '#7C3AED',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'End-to-end IT, events and digital services for large organizations.',
    features: [
      'Custom Software Development',
      'Event Management',
      'Full Digital Management',
      'Dedicated Account Manager',
      'Priority Support',
      'On-site Coordination',
    ],
    excluded: [],
    accent: '#0EA5E9',
    popular: false,
  },
];

// ============================================
// Process
// ============================================
export const processSteps = [
  { step: '01', title: 'Discover', desc: 'We understand your business, goals and target audience.' },
  { step: '02', title: 'Plan', desc: 'We define scope, timelines and a clear execution roadmap.' },
  { step: '03', title: 'Create', desc: 'Our team designs, develops and produces your solution.' },
  { step: '04', title: 'Launch & Support', desc: 'We deploy, monitor and provide continuous support.' },
];

// ============================================
// Footer Links
// ============================================
export const footerLinks = {
  Services: [
    { label: 'IT Software', href: '/services/it-software' },
    { label: 'Event Management', href: '/services/event-management' },
    { label: 'Digital Management', href: '/services/digital-marketing' },
    { label: 'All Services', href: '/services' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Projects', href: '/projects' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
  Contact: [
    { label: 'Call: 7305172130', href: 'tel:7305172130' },
    { label: 'Email Us', href: 'mailto:clintonsamualraj@gmail.com' },
    { label: 'Sawyerpuram, Thoothukudi', href: '/contact' },
  ],
};
