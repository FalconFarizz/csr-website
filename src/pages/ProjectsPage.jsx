import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const allProjects = [
  { id: 1, title: 'Corporate Business Website', category: 'Scitech', industry: 'Business', desc: 'Premium corporate website with animated hero, services showcase and lead generation system.', tech: ['React', 'Next.js', 'Tailwind'], color: '#EC4899', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', metrics: ['300% traffic growth', '5-star rating'] },
  { id: 2, title: 'Archaeology Museum Portal', category: '3D/AR', industry: 'Heritage', desc: 'Interactive digital museum with artifact galleries, 3D exhibits and online ticketing.', tech: ['React', 'Three.js', 'Node.js'], color: '#A21CAF', img: 'https://images.unsplash.com/photo-1566121318599-4a48f72c44aa?auto=format&fit=crop&w=800&q=80', metrics: ['50K+ monthly visitors', 'UNESCO featured'] },
  { id: 3, title: 'Billing & Invoice Software', category: 'E-commerce', industry: 'Finance', desc: 'Cloud-based billing platform with automated invoicing, payment tracking and tax reports.', tech: ['React', 'Node.js', 'PostgreSQL'], color: '#7C3AED', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80', metrics: ['10K+ invoices/day', '99.9% uptime'] },
  { id: 4, title: 'Restaurant Management System', category: 'IoT', industry: 'F&B', desc: 'Full POS and restaurant management with order tracking, table management and analytics.', tech: ['React', 'Firebase', 'Node.js'], color: '#4F46E5', img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80', metrics: ['500+ restaurants', '40% efficiency up'] },
  { id: 5, title: 'Fashion E-Commerce Platform', category: 'E-commerce', industry: 'Retail', desc: 'AI-powered e-commerce store with personalized recommendations and one-click checkout.', tech: ['Next.js', 'Stripe', 'MongoDB'], color: '#DB2777', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', metrics: ['2M+ users', '340% revenue growth'] },
  { id: 6, title: 'Luxury Real Estate Portal', category: '3D/AR', industry: 'Real Estate', desc: 'Property listing platform with 3D tours, mortgage calculator and agent management.', tech: ['React', 'Google Maps', 'AWS'], color: '#E11D48', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', metrics: ['15K+ listings', '$500M properties listed'] },
  { id: 7, title: 'Hospital Management System', category: 'App', industry: 'Healthcare', desc: 'HIPAA-compliant HMS with patient records, appointment scheduling and billing integration.', tech: ['React', 'Python', 'PostgreSQL'], color: '#EC4899', img: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80', metrics: ['200+ hospitals', '94% patient satisfaction'] },
  { id: 8, title: 'School Education Portal', category: 'App', industry: 'Education', desc: 'Complete LMS with live classes, attendance tracking, grade reports and parent portal.', tech: ['React', 'Node.js', 'WebRTC'], color: '#A21CAF', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80', metrics: ['50K+ students', '98% attendance accuracy'] },
  { id: 9, title: 'Hotel Booking Platform', category: 'E-commerce', industry: 'Hospitality', desc: 'Luxury hotel booking system with room management, dynamic pricing and loyalty program.', tech: ['Next.js', 'Stripe', 'Redis'], color: '#7C3AED', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', metrics: ['1M+ bookings', '4.9★ rating'] },
  { id: 10, title: 'Fleet Logistics Tracker', category: 'IoT', industry: 'Logistics', desc: 'Real-time fleet tracking with route optimization, driver management and fuel analytics.', tech: ['React Native', 'MQTT', 'Go'], color: '#4F46E5', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80', metrics: ['50K+ vehicles tracked', '40% fuel savings'] },
  { id: 11, title: 'Law Firm Website', category: 'Scitech', industry: 'Legal', desc: 'Professional law firm portal with attorney profiles, case consultation booking and blog.', tech: ['Next.js', 'Sanity CMS', 'Tailwind'], color: '#DB2777', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80', metrics: ['300% client inquiries', 'Top-10 law firm site'] },
  { id: 12, title: 'Gym & Fitness App', category: 'App', industry: 'Health', desc: 'Cross-platform fitness app with workout plans, progress tracking, nutrition and live coaching.', tech: ['React Native', 'Node.js', 'MongoDB'], color: '#E11D48', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80', metrics: ['200K+ downloads', '4.8★ App Store'] },
  { id: 13, title: 'Travel Agency Platform', category: 'E-commerce', industry: 'Travel', desc: 'Full-featured travel booking with tour packages, flight search, visa guide and reviews.', tech: ['React', 'Amadeus API', 'AWS'], color: '#EC4899', img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80', metrics: ['500K+ bookings', '95% satisfaction'] },
  { id: 14, title: 'Construction Company Site', category: 'Scitech', industry: 'Construction', desc: 'Corporate construction website with project gallery, bid request system and client portal.', tech: ['React', 'Node.js', 'MongoDB'], color: '#A21CAF', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80', metrics: ['150+ projects won', '60% more inquiries'] },
  { id: 15, title: 'Finance Analytics Dashboard', category: 'Scitech', industry: 'FinTech', desc: 'Real-time financial dashboard with stock portfolio, expense tracker and crypto analytics.', tech: ['React', 'Python', 'Redis'], color: '#7C3AED', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80', metrics: ['$500M+ tracked', '10K+ active users'] },
  { id: 16, title: 'Food Delivery App', category: 'App', industry: 'F&B', desc: 'On-demand food delivery platform with restaurant onboarding, live order tracking and ratings.', tech: ['React Native', 'Node.js', 'Firebase'], color: '#4F46E5', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80', metrics: ['1M+ orders', '30min avg delivery'] },
  { id: 17, title: 'Salon Booking System', category: 'App', industry: 'Beauty', desc: 'Beauty salon management with appointment scheduling, stylist profiles and loyalty rewards.', tech: ['React', 'Node.js', 'Stripe'], color: '#DB2777', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80', metrics: ['2K+ salons', '80% no-shows reduced'] },
  { id: 18, title: 'Pharmacy Management System', category: 'App', industry: 'Healthcare', desc: 'Digital pharmacy with medicine inventory, prescription tracking and supplier management.', tech: ['React', 'Django', 'PostgreSQL'], color: '#E11D48', img: 'https://images.unsplash.com/photo-1607619056574-7b8f304b3c3f?auto=format&fit=crop&w=800&q=80', metrics: ['500+ pharmacies', 'Zero stock-outs reported'] },
  { id: 19, title: 'NGO Charity Website', category: 'E-commerce', industry: 'Non-Profit', desc: 'Donation-driven charity platform with campaign pages, donor portal and impact reporting.', tech: ['Next.js', 'Stripe', 'Contentful'], color: '#EC4899', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80', metrics: ['$2M+ donations raised', '50K+ donors'] },
  { id: 20, title: 'Car Rental Platform', category: 'E-commerce', industry: 'Automotive', desc: 'Online car rental with fleet management, GPS tracking, insurance integration and reviews.', tech: ['React', 'Node.js', 'Google Maps'], color: '#A21CAF', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80', metrics: ['10K+ rentals/month', '4.7★ rating'] },
  { id: 21, title: 'Event Ticketing System', category: 'E-commerce', industry: 'Events', desc: 'End-to-end event ticketing with QR codes, seat selection, refunds and organizer analytics.', tech: ['React', 'Node.js', 'Stripe'], color: '#7C3AED', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80', metrics: ['1M+ tickets sold', '300+ events hosted'] },
  { id: 22, title: 'Photography Portfolio Site', category: '3D/AR', industry: 'Creative', desc: 'Stunning photographer portfolio with masonry gallery, client proofing and print shop.', tech: ['Next.js', 'Cloudinary', 'Prisma'], color: '#4F46E5', img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80', metrics: ['5x client bookings', 'Awwwards nominated'] },
  { id: 23, title: 'Virtual Fitting Room', category: '3D/AR', industry: 'Fashion', desc: 'AR-powered virtual fitting room allowing users to try on clothes remotely.', tech: ['React Native', 'ARKit', 'TensorFlow'], color: '#EC4899', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', metrics: ['40% fewer returns', '1M+ try-ons'] },
  { id: 24, title: 'Smart Home Hub', category: 'IoT', industry: 'Real Estate', desc: 'Centralized IoT dashboard controlling lighting, security, and climate across properties.', tech: ['React', 'Node.js', 'MQTT'], color: '#A21CAF', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80', metrics: ['10K+ homes connected', '20% energy savings'] },
  { id: 25, title: 'Telemedicine Portal', category: 'Scitech', industry: 'Healthcare', desc: 'Secure platform for remote consultations, electronic prescriptions, and health tracking.', tech: ['Next.js', 'WebRTC', 'Django'], color: '#7C3AED', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80', metrics: ['500K+ consults', 'HIPAA Certified'] },
  { id: 26, title: 'Organic Food Delivery', category: 'E-commerce', industry: 'F&B', desc: 'Direct-to-consumer organic grocery platform with subscription boxes and local routing.', tech: ['React', 'Shopify', 'PostgreSQL'], color: '#4F46E5', img: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80', metrics: ['50K+ subscribers', '$5M ARR'] },
  { id: 27, title: 'Crypto Wallet App', category: 'App', industry: 'Finance', desc: 'Secure multi-currency crypto wallet with real-time trading and staking features.', tech: ['React Native', 'Web3.js', 'Go'], color: '#DB2777', img: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80', metrics: ['$1B+ volume handled', '0 security breaches'] },
  { id: 28, title: 'AI Content Generator', category: 'Scitech', industry: 'SaaS', desc: 'LLM-powered tool for generating marketing copy, blog posts, and SEO metadata.', tech: ['React', 'Python', 'OpenAI API'], color: '#E11D48', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80', metrics: ['10M+ words generated', '100K+ users'] },
  { id: 29, title: 'Drone Mapping Software', category: '3D/AR', industry: 'Agriculture', desc: '3D topographic mapping software processing drone imagery for crop health analysis.', tech: ['Three.js', 'Python', 'AWS'], color: '#EC4899', img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80', metrics: ['1M+ acres mapped', '30% yield increase'] },
  { id: 30, title: 'Smart City Lighting', category: 'IoT', industry: 'Government', desc: 'Networked street lighting system that adapts to traffic and pedestrian flow.', tech: ['Vue.js', 'Node.js', 'LoRaWAN'], color: '#A21CAF', img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80', metrics: ['50% power saved', 'City-wide deployment'] },
  { id: 31, title: 'Freelance Marketplace', category: 'E-commerce', industry: 'HR', desc: 'Platform connecting businesses with vetted top-tier freelance tech talent.', tech: ['Next.js', 'Stripe', 'Supabase'], color: '#7C3AED', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', metrics: ['20K+ jobs posted', '$10M+ paid out'] },
  { id: 32, title: 'Meditation & Sleep App', category: 'App', industry: 'Health', desc: 'Wellness app offering guided meditations, sleep sounds, and daily habit tracking.', tech: ['React Native', 'Firebase', 'Redux'], color: '#4F46E5', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80', metrics: ['1M+ downloads', '4.9★ rating'] },
  { id: 33, title: 'Genetic Research DB', category: 'Scitech', industry: 'Science', desc: 'High-performance database and visualizer for complex genomic sequencing data.', tech: ['React', 'Rust', 'GraphQL'], color: '#DB2777', img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80', metrics: ['10PB+ data stored', 'Used by top labs'] },
  { id: 34, title: 'AR Furniture Viewer', category: '3D/AR', industry: 'Retail', desc: 'Augmented reality app letting customers preview furniture in their homes before buying.', tech: ['Unity', 'ARCore', 'Node.js'], color: '#E11D48', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80', metrics: ['3x conversion rate', '500K+ AR views'] },
  { id: 35, title: 'Industrial Sensor Net', category: 'IoT', industry: 'Manufacturing', desc: 'Vibration and temperature monitoring system predicting factory machine failures.', tech: ['React', 'Python', 'InfluxDB'], color: '#EC4899', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', metrics: ['Zero unplanned downtime', '100+ factories'] },
  { id: 36, title: 'Subscription Box Hub', category: 'E-commerce', industry: 'Retail', desc: 'Customizable subscription platform for monthly curated lifestyle products.', tech: ['Next.js', 'Chargebee', 'PostgreSQL'], color: '#A21CAF', img: 'https://images.unsplash.com/photo-1513885059635-430c6c221a65?auto=format&fit=crop&w=800&q=80', metrics: ['100K+ active subs', '95% retention'] },
  { id: 37, title: 'Language Learning App', category: 'App', industry: 'Education', desc: 'Gamified language learning app with voice recognition and AI conversation partners.', tech: ['React Native', 'AWS Lex', 'Node.js'], color: '#7C3AED', img: 'https://images.unsplash.com/photo-1546410531-b4d24dc0f368?auto=format&fit=crop&w=800&q=80', metrics: ['5M+ users', 'App of the Day'] },
  { id: 38, title: 'Quantum Simulator', category: 'Scitech', industry: 'Science', desc: 'Web-based simulator for building and running quantum computing algorithms.', tech: ['React', 'WebAssembly', 'Python'], color: '#4F46E5', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80', metrics: ['Used in 50 universities', '100K+ simulations'] },
  { id: 39, title: 'Virtual Car Showroom', category: '3D/AR', industry: 'Automotive', desc: 'Immersive 3D showroom for configuring and exploring luxury vehicles.', tech: ['Three.js', 'React', 'AWS'], color: '#DB2777', img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80', metrics: ['2M+ configurations', '20% sales boost'] },
  { id: 40, title: 'Smart Grid Analytics', category: 'IoT', industry: 'Energy', desc: 'Real-time dashboard for monitoring power distribution and renewable energy inputs.', tech: ['Vue.js', 'Go', 'TimescaleDB'], color: '#E11D48', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80', metrics: ['1GW+ monitored', '99.999% uptime'] },
  { id: 41, title: 'B2B Wholesale Portal', category: 'E-commerce', industry: 'Business', desc: 'Bulk ordering portal with dynamic pricing tiers, credit lines, and SAP integration.', tech: ['Next.js', 'Node.js', 'SAP'], color: '#EC4899', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=800&q=80', metrics: ['$50M+ GMV', '500+ distributors'] },
  { id: 42, title: 'Pet Care & Vet App', category: 'App', industry: 'Services', desc: 'All-in-one app for pet health records, vet appointments, and pet sitting services.', tech: ['React Native', 'Firebase', 'Stripe'], color: '#A21CAF', img: 'https://images.unsplash.com/photo-1516734212829-f203876e6db8?auto=format&fit=crop&w=800&q=80', metrics: ['200K+ pets registered', 'Top 10 Lifestyle App'] },
  { id: 43, title: 'Satellite Data Analysis', category: 'Scitech', industry: 'Space', desc: 'Platform for analyzing satellite imagery to track deforestation and urban growth.', tech: ['React', 'Python', 'Google Earth Engine'], color: '#7C3AED', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80', metrics: ['Global coverage', 'Award-winning AI'] },
  { id: 44, title: '3D Anatomy Visualizer', category: '3D/AR', industry: 'Medical', desc: 'Interactive 3D human anatomy models used by medical students and doctors.', tech: ['WebGL', 'React', 'Node.js'], color: '#4F46E5', img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80', metrics: ['Used in 200 med schools', 'VR Ready'] },
  { id: 45, title: 'Cold Chain Tracking', category: 'IoT', industry: 'Logistics', desc: 'Temperature tracking for pharmaceutical logistics ensuring vaccine safety.', tech: ['React', 'Go', 'IoT Sensors'], color: '#DB2777', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80', metrics: ['10M+ doses protected', '100% compliance'] },
  { id: 46, title: 'Artisan Crafts Store', category: 'E-commerce', industry: 'Art', desc: 'Global marketplace connecting local artisans with international buyers.', tech: ['Next.js', 'Medusa.js', 'PostgreSQL'], color: '#E11D48', img: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80', metrics: ['10K+ artisans', 'Ships to 50+ countries'] },
  { id: 47, title: 'Local News Aggregator', category: 'App', industry: 'Media', desc: 'Hyper-local news app pulling feeds, weather, and community alerts into one UI.', tech: ['React Native', 'Node.js', 'Redis'], color: '#EC4899', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80', metrics: ['1M+ daily readers', '500+ local sources'] },
  { id: 48, title: 'Climate Data Platform', category: 'Scitech', industry: 'Environment', desc: 'Data visualization tool forecasting climate trends for agricultural planning.', tech: ['React', 'D3.js', 'Python'], color: '#A21CAF', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', metrics: ['90% prediction accuracy', 'Used by UN agencies'] },
  { id: 49, title: 'Virtual Event Platform', category: '3D/AR', industry: 'Events', desc: 'Metaverse-style virtual conference platform with spatial audio and networking.', tech: ['Three.js', 'WebRTC', 'Node.js'], color: '#7C3AED', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80', metrics: ['100K+ concurrent users', 'Enterprise grade'] },
  { id: 50, title: 'Smart Wearable Sync', category: 'IoT', industry: 'Fitness', desc: 'Companion app and cloud sync for next-gen biometrics fitness trackers.', tech: ['React Native', 'Bluetooth Low Energy', 'AWS'], color: '#4F46E5', img: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b0?auto=format&fit=crop&w=800&q=80', metrics: ['5M+ devices synced', 'Real-time alerts'] },
  { id: 51, title: 'Digital Art Marketplace', category: 'E-commerce', industry: 'Art', desc: 'High-end platform for trading authenticated digital art pieces and collectibles.', tech: ['Next.js', 'Prisma', 'Stripe'], color: '#DB2777', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80', metrics: ['$20M+ traded', 'Vetted artists only'] },
  { id: 52, title: 'Rideshare App', category: 'App', industry: 'Transportation', desc: 'Eco-friendly ridesharing app exclusively for electric vehicles and carpooling.', tech: ['React Native', 'Node.js', 'Google Maps'], color: '#E11D48', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80', metrics: ['100K+ daily rides', 'Carbon negative'] },
  { id: 53, title: 'Predictive Maintenance AI', category: 'Scitech', industry: 'Industrial', desc: 'Machine learning platform analyzing acoustic signatures to predict machine failure.', tech: ['React', 'TensorFlow', 'FastAPI'], color: '#EC4899', img: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80', metrics: ['98% accuracy', 'Saved clients $10M+'] },
  { id: 54, title: 'VR Training Simulator', category: '3D/AR', industry: 'Education', desc: 'Virtual reality hazard training simulator for heavy machinery operators.', tech: ['Unity', 'C#', 'Oculus SDK'], color: '#A21CAF', img: 'https://images.unsplash.com/photo-1622979135225-d2ba269c4ea1?auto=format&fit=crop&w=800&q=80', metrics: ['80% accident reduction', 'ISO Certified'] },
  { id: 55, title: 'Smart Irrigation System', category: 'IoT', industry: 'Agriculture', desc: 'Automated farm irrigation system responding to live soil moisture and weather data.', tech: ['Vue.js', 'Python', 'AWS IoT'], color: '#7C3AED', img: 'https://images.unsplash.com/photo-1592982537447-6f2334057864?auto=format&fit=crop&w=800&q=80', metrics: ['40% water saved', '500+ farms using'] },
  { id: 56, title: 'B2C Furniture Store', category: 'E-commerce', industry: 'Retail', desc: 'Modern headless commerce experience for a premium Scandinavian furniture brand.', tech: ['Next.js', 'Shopify Plus', 'Tailwind'], color: '#4F46E5', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80', metrics: ['2x conversion rate', 'Sub-second load times'] },
  { id: 57, title: 'Mobile Banking App', category: 'App', industry: 'Finance', desc: 'Next-gen neobank app with instant transfers, budgeting tools, and virtual cards.', tech: ['React Native', 'Java', 'PostgreSQL'], color: '#DB2777', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80', metrics: ['1M+ accounts opened', 'Award-winning UI'] },
];

const filters = ['All', '3D/AR', 'IoT', 'E-commerce', 'App', 'Scitech'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? allProjects : allProjects.filter(p => p.category === filter);

  return (
    <div style={{ minHeight: '100vh', background: '#FAF2F6', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ 
        position: 'relative', 
        height: '480px', 
        background: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat`, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        overflow: 'hidden' 
      }}>
        {/* Dark overlay */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(180deg, rgba(7, 19, 32, 0.7) 0%, rgba(7, 19, 32, 0.85) 100%)', 
          zIndex: 1 
        }} />
        
        {/* Hero content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          style={{ 
            textAlign: 'center', 
            zIndex: 2, 
            color: 'white', 
            padding: '0 24px', 
            maxWidth: 800 
          }}
        >
          <h1 style={{ 
            fontFamily: 'Plus Jakarta Sans, sans-serif', 
            fontWeight: 800, 
            fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', 
            letterSpacing: '-0.02em', 
            marginBottom: 16 
          }}>
            CSR Projects
          </h1>
          <p style={{ 
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', 
            color: 'rgba(255,255,255,0.85)', 
            lineHeight: 1.6 
          }}>
            We specialize in turning complex ideas into scalable digital realities.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section style={{ 
        padding: '80px 24px 100px', 
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF5F8 20%, #FAF2F6 100%)' 
      }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', position: 'relative' }}>
          
          {/* Back Button and Section Header */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            marginBottom: 60,
            position: 'relative'
          }}>
            {/* Back button on the top-left */}
            <div style={{ 
              position: 'absolute', 
              left: 0, 
              top: 0 
            }} className="back-btn-container">
              <Link 
                to="/" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: 6, 
                  padding: '10px 24px', 
                  background: 'linear-gradient(135deg, #EC4899, #A21CAF)', 
                  color: 'white', 
                  borderRadius: '50px', 
                  fontWeight: 600, 
                  fontSize: '0.85rem', 
                  textDecoration: 'none', 
                  boxShadow: '0 4px 14px rgba(236,72,153,0.3)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <ArrowLeft size={14} /> BACK
              </Link>
            </div>

            {/* Centered Heading */}
            <h2 style={{ 
              fontFamily: 'Plus Jakarta Sans, sans-serif', 
              fontWeight: 850, 
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', 
              color: '#1E1B4B', 
              textAlign: 'center',
              maxWidth: 700,
              lineHeight: 1.25,
              marginTop: 48,
              marginBottom: 32
            }}>
              Innovation of Today, Smartness of Tomorrow
            </h2>

            {/* Filter Pills */}
            <div style={{ 
              display: 'flex', 
              gap: 12, 
              justifyContent: 'center', 
              flexWrap: 'wrap' 
            }}>
              {filters.map(f => (
                <motion.button 
                  key={f} 
                  onClick={() => setFilter(f)} 
                  whileHover={{ scale: 1.03 }} 
                  whileTap={{ scale: 0.97 }} 
                  style={{ 
                    padding: '10px 26px', 
                    background: filter === f ? 'linear-gradient(135deg, #EC4899, #A21CAF)' : 'white', 
                    border: filter === f ? '1px solid transparent' : '1px solid #E2E8F0', 
                    borderRadius: '50px', 
                    cursor: 'pointer', 
                    color: filter === f ? 'white' : '#475569', 
                    fontFamily: 'Inter, sans-serif', 
                    fontWeight: 600, 
                    fontSize: '0.88rem', 
                    transition: 'all 0.25s', 
                    boxShadow: filter === f ? '0 4px 16px rgba(236,72,153,0.25)' : '0 1px 4px rgba(0,0,0,0.04)' 
                  }}
                >
                  {f}
                </motion.button>
              ))}
            </div>
          </div>

          <p style={{ textAlign: 'center', color: '#94A3B8', fontSize: '0.86rem', marginBottom: 60 }}>
            Showing <strong style={{ color: '#D946EF' }}>{filtered.length}</strong> projects
          </p>

          {/* Projects List with Alternating Rows */}
          <div className="projects-list" style={{ display: 'flex', flexDirection: 'column', gap: 90 }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="project-row"
                  style={{
                    display: 'flex',
                    flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                    alignItems: 'center',
                    gap: 64,
                    width: '100%',
                  }}
                >
                  {/* Image Column */}
                  <div className="project-image-wrapper" style={{ flex: 1, minWidth: 320 }}>
                    <div style={{
                      borderRadius: 32,
                      overflow: 'hidden',
                      height: 420,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                      background: '#FFF5F8',
                      position: 'relative',
                    }}>
                      <img
                        src={project.img}
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.04)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      />
                    </div>
                  </div>

                  {/* Text Details Column */}
                  <div className="project-info-wrapper" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span style={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: '#D946EF',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      marginBottom: 10,
                    }}>
                      {project.category}
                    </span>
                    <h3 style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontWeight: 800,
                      fontSize: '2.2rem',
                      color: '#1E1B4B',
                      marginBottom: 16,
                      lineHeight: 1.2,
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      color: '#475569',
                      fontSize: '1.05rem',
                      lineHeight: 1.65,
                      marginBottom: 24,
                    }}>
                      {project.desc}
                    </p>

                    {/* Tech Badges */}
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          style={{
                            padding: '6px 14px',
                            background: '#FDF2F8',
                            border: '1px solid #FCE7F3',
                            borderRadius: '50px',
                            color: '#C026D3',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Link
                      to={`/projects/demo/${project.id}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '12px 32px',
                        background: '#1E293B',
                        color: 'white',
                        borderRadius: '50px',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#0F172A';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#1E293B';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      View Demo <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ 
        padding: '90px 24px', 
        background: 'linear-gradient(135deg, #A21CAF 0%, #EC4899 60%, #F472B6 100%)', 
        textAlign: 'center', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 620, margin: '0 auto', position: 'relative' }}>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'white', letterSpacing: '-0.03em', marginBottom: 16 }}>Ready to Build Your Next Project?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.75, marginBottom: 40 }}>Join 250+ businesses that trust CSR Tech Solutions to deliver exceptional digital products.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 40px', background: 'white', color: '#A21CAF', fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '1rem', borderRadius: 50, textDecoration: 'none', boxShadow: '0 8px 40px rgba(0,0,0,0.15)' }}>
              Start a Project <ArrowRight size={18} />
            </Link>
            <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 36px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)', color: 'white', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '1rem', borderRadius: 50, textDecoration: 'none' }}>
              Our Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />

      <style>{`
        @media (max-width: 768px) {
          .back-btn-container {
            position: static !important;
            margin-bottom: 24px !important;
            align-self: flex-start !important;
          }
          .project-row {
            flex-direction: column !important;
            gap: 32px !important;
          }
          .project-image-wrapper, .project-info-wrapper {
            width: 100% !important;
            flex: none !important;
          }
          .project-image-wrapper div {
            height: 250px !important;
            border-radius: 20px !important;
          }
          .project-info-wrapper h3 {
            font-size: 1.6rem !important;
          }
        }
      `}</style>
    </div>
  );
}
