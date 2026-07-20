import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProjectDemoSite from './ProjectDemoSite';

export default function ProjectDemoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id) || 1;

  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSent, setContactSent] = useState(false);
  const [innerTab, setInnerTab] = useState('home');

  // Billing
  const [invoices, setInvoices] = useState([
    { id: 'INV-001', client: 'Acme Corp', amount: 1200, status: 'Paid', date: '2026-07-01' },
    { id: 'INV-002', client: 'Globex Ltd', amount: 850, status: 'Pending', date: '2026-07-05' },
    { id: 'INV-003', client: 'Initech Inc', amount: 2400, status: 'Paid', date: '2026-07-08' },
  ]);
  const [newClient, setNewClient] = useState('');
  const [newAmount, setNewAmount] = useState('');

  // Restaurant
  const [restaurantCart, setRestaurantCart] = useState([]);
  const [restaurantSearch, setRestaurantSearch] = useState('');
  const [restaurantCategory, setRestaurantCategory] = useState('All');

  // E-commerce
  const [ecommerceCartCount, setEcommerceCartCount] = useState(0);
  const [ecommerceSelectedSize, setEcommerceSelectedSize] = useState('M');

  // HMS
  const [hmsAppointments, setHmsAppointments] = useState([
    { id: 1, name: 'Alice Johnson', dept: 'Pediatrics', time: '10:00 AM', status: 'Checked In' },
    { id: 2, name: 'Robert Smith', dept: 'Cardiology', time: '11:30 AM', status: 'Waiting' },
  ]);
  const [hmsPatientName, setHmsPatientName] = useState('');
  const [hmsDepartment, setHmsDepartment] = useState('Cardiology');

  // School
  const [lmsHomeworkStatus, setLmsHomeworkStatus] = useState('Not Submitted');
  const [homeworkName, setHomeworkName] = useState('');

  // Hotel
  const [hotelRoom, setHotelRoom] = useState('Deluxe Suite ($250)');
  const [hotelDays, setHotelDays] = useState(3);
  const [hotelBooked, setHotelBooked] = useState(false);

  // Finance
  const [finCash, setFinCash] = useState(10000);
  const [finHoldings, setFinHoldings] = useState(0);
  const [finStockPrice, setFinStockPrice] = useState(150);
  const [finTrades, setFinTrades] = useState([]);

  // Travel
  const [travelDestination, setTravelDestination] = useState('Maldives');
  const [travelGuests, setTravelGuests] = useState(2);
  const [travelBookedStatus, setTravelBookedStatus] = useState(false);

  // Construction
  const [constructionSqft, setConstructionSqft] = useState(2000);
  const [constructionType, setConstructionType] = useState('residential');

  // Food delivery
  const [deliveryStep, setDeliveryStep] = useState(0);

  // Salon
  const [salonService, setSalonService] = useState('Signature Haircut');
  const [salonStylist, setSalonStylist] = useState('Sofia');
  const [salonBooked, setSalonBooked] = useState(false);

  // Pharmacy
  const [pharmaSearch, setPharmaSearch] = useState('');

  // NGO
  const [ngoDonation, setNgoDonation] = useState(50);
  const [ngoTotalRaised, setNgoTotalRaised] = useState(42450);
  const [ngoDonorsCount, setNgoDonorsCount] = useState(384);
  const [ngoThanks, setNgoThanks] = useState(false);

  // Car rental
  const [carDays, setCarDays] = useState(4);
  const [carSelected, setCarSelected] = useState('Tesla Model Y');

  // Event ticketing
  const [eventBooked, setEventBooked] = useState(false);
  const [eventSeatCount, setEventSeatCount] = useState(2);

  // Photography
  const [photoFilter, setPhotoFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Gym
  const [gymWeight, setGymWeight] = useState(75);
  const [gymGoal, setGymGoal] = useState('build');

  useEffect(() => {
    window.scrollTo(0, 0);
    setInnerTab('home');
    setContactSent(false);
    setContactForm({ name: '', email: '', message: '' });
    setEcommerceCartCount(0);
    setHotelBooked(false);
    setLmsHomeworkStatus('Not Submitted');
    setTravelBookedStatus(false);
    setSalonBooked(false);
    setNgoThanks(false);
    setEventBooked(false);
    setDeliveryStep(0);
    setFinCash(10000);
    setFinHoldings(0);
    setFinStockPrice(150);
    setFinTrades([]);
    setLightboxIndex(null);
    setRestaurantCart([]);
  }, [projectId]);

  useEffect(() => {
    if (projectId !== 15) return;
    const interval = setInterval(() => {
      setFinStockPrice(p => parseFloat((p + (Math.random() - 0.48) * 4).toFixed(2)));
    }, 3000);
    return () => clearInterval(interval);
  }, [projectId]);

  const getMortgagePayment = (amount = 450000, rate = 4.8, term = 30) => {
    const r = (rate / 12) / 100, n = term * 12;
    return ((amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)).toFixed(2);
  };

  const state = {
    innerTab, setInnerTab,
    contactForm, setContactForm, contactSent, setContactSent,
    invoices, setInvoices, newClient, setNewClient, newAmount, setNewAmount,
    restaurantCart, setRestaurantCart, restaurantSearch, setRestaurantSearch, restaurantCategory, setRestaurantCategory,
    ecommerceCartCount, setEcommerceCartCount, ecommerceSelectedSize, setEcommerceSelectedSize,
    hmsAppointments, setHmsAppointments, hmsPatientName, setHmsPatientName, hmsDepartment, setHmsDepartment,
    lmsHomeworkStatus, setLmsHomeworkStatus, homeworkName, setHomeworkName,
    hotelRoom, setHotelRoom, hotelDays, setHotelDays, hotelBooked, setHotelBooked,
    finCash, setFinCash, finHoldings, setFinHoldings, finStockPrice, setFinStockPrice, finTrades, setFinTrades,
    travelDestination, setTravelDestination, travelGuests, setTravelGuests, travelBookedStatus, setTravelBookedStatus,
    constructionSqft, setConstructionSqft, constructionType, setConstructionType,
    deliveryStep, setDeliveryStep,
    salonService, setSalonService, salonStylist, setSalonStylist, salonBooked, setSalonBooked,
    pharmaSearch, setPharmaSearch,
    ngoDonation, setNgoDonation, ngoTotalRaised, setNgoTotalRaised, ngoDonorsCount, setNgoDonorsCount, ngoThanks, setNgoThanks,
    carDays, setCarDays, carSelected, setCarSelected,
    eventBooked, setEventBooked, eventSeatCount, setEventSeatCount,
    photoFilter, setPhotoFilter, lightboxIndex, setLightboxIndex,
    gymWeight, setGymWeight, gymGoal, setGymGoal,
    getMortgagePayment,
  };

  return (
    <div style={{ minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
      <ProjectDemoSite projectId={projectId} state={state} />
      <button
        onClick={() => navigate('/projects')}
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 99999,
          background: 'rgba(15,23,42,0.9)', backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.2)', color: 'white',
          padding: '10px 22px', borderRadius: 50, cursor: 'pointer',
          fontWeight: 700, fontSize: '0.85rem', display: 'flex',
          alignItems: 'center', gap: 8, boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(135deg,#EC4899,#A21CAF)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(15,23,42,0.9)'}
      >
        <ArrowLeft size={14} /> Exit Live Demo
      </button>
    </div>
  );
}
