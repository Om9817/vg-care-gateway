export interface Treatment {
  id: string;
  name: string;
  description: string;
  recoveryTime: string;
  hospitalStay: string;
  startingPrice: number;
  priceRange: string;
  category: string;
}

export interface HospitalPackage {
  id: string;
  treatmentId: string;
  hospitalName: string;
  city: string;
  country: string;
  startingPrice: number;
  inclusions: string[];
  exclusions: string[];
  lengthOfStay: string;
  refundable: boolean;
  roomCategory: string;
  cancellationPolicy: string;
  rating: number;
  image: string;
}

export interface Specialist {
  id: string;
  name: string;
  title: string;
  specialty: string;
  yearsExperience: number;
  primaryHospital: string;
  primaryCity: string;
  proceduresPerformed: number;
  consultationFee: number;
  rating: number;
  languages: string[];
  qualifications: string[];
  summary: string;
  consultationModes: string[];
  successRate: number;
  avatar: string;
  affiliatedHospitals: AffiliatedHospital[];
}

export interface AffiliatedHospital {
  hospitalName: string;
  city: string;
  packages: string[];
  nextAvailable: string;
}

export const treatments: Treatment[] = [
  {
    id: "knee-replacement",
    name: "Knee Replacement",
    description: "Total or partial knee replacement surgery to restore mobility and relieve chronic knee pain. Advanced minimally invasive techniques ensure faster recovery and better outcomes.",
    recoveryTime: "6–8 weeks",
    hospitalStay: "3–5 days",
    startingPrice: 5500,
    priceRange: "$5,500 – $12,000",
    category: "Orthopedics",
  },
  {
    id: "heart-bypass",
    name: "Heart Bypass Surgery (CABG)",
    description: "Coronary artery bypass grafting to improve blood flow to the heart. Performed by world-class cardiac surgeons with state-of-the-art facilities.",
    recoveryTime: "8–12 weeks",
    hospitalStay: "7–10 days",
    startingPrice: 8000,
    priceRange: "$8,000 – $18,000",
    category: "Cardiology",
  },
  {
    id: "dental-implants",
    name: "Dental Implants",
    description: "Permanent tooth replacement using titanium implants. Natural-looking results with advanced 3D-guided placement technology.",
    recoveryTime: "3–6 months",
    hospitalStay: "Outpatient",
    startingPrice: 800,
    priceRange: "$800 – $3,500",
    category: "Dental",
  },
  {
    id: "ivf",
    name: "IVF Treatment",
    description: "Comprehensive in-vitro fertilization program with high success rates. Includes genetic screening and personalized fertility protocols.",
    recoveryTime: "2–4 weeks",
    hospitalStay: "1–2 days",
    startingPrice: 3500,
    priceRange: "$3,500 – $8,000",
    category: "Fertility",
  },
  {
    id: "spinal-fusion",
    name: "Spinal Fusion Surgery",
    description: "Minimally invasive spinal fusion to treat chronic back pain, herniated discs, and spinal instability with robotic-assisted precision.",
    recoveryTime: "8–12 weeks",
    hospitalStay: "3–5 days",
    startingPrice: 7000,
    priceRange: "$7,000 – $15,000",
    category: "Orthopedics",
  },
];

export const hospitalPackages: HospitalPackage[] = [
  {
    id: "pkg-1",
    treatmentId: "knee-replacement",
    hospitalName: "Apollo Hospitals",
    city: "Chennai",
    country: "India",
    startingPrice: 5500,
    inclusions: [
      "Surgery & anesthesia",
      "5-night hospital stay",
      "Post-op physiotherapy (5 sessions)",
      "Airport transfers",
      "Dedicated patient coordinator",
    ],
    exclusions: ["International flights", "Visa fees", "Extended rehab beyond 5 sessions"],
    lengthOfStay: "7–10 days",
    refundable: true,
    roomCategory: "Private Deluxe Room",
    cancellationPolicy: "Full refund if cancelled 14 days before procedure. 50% refund within 7–14 days.",
    rating: 4.8,
    image: "",
  },
  {
    id: "pkg-2",
    treatmentId: "knee-replacement",
    hospitalName: "Bumrungrad International",
    city: "Bangkok",
    country: "Thailand",
    startingPrice: 8200,
    inclusions: [
      "Surgery with robotic assistance",
      "7-night hospital stay in suite",
      "Post-op physiotherapy (10 sessions)",
      "Luxury airport transfers",
      "Interpreter services",
    ],
    exclusions: ["International flights", "Travel insurance", "Personal expenses"],
    lengthOfStay: "10–14 days",
    refundable: true,
    roomCategory: "Premium Suite",
    cancellationPolicy: "Full refund if cancelled 21 days before procedure. 75% refund within 14–21 days.",
    rating: 4.9,
    image: "",
  },
  {
    id: "pkg-3",
    treatmentId: "knee-replacement",
    hospitalName: "Fortis Healthcare",
    city: "Mumbai",
    country: "India",
    startingPrice: 6000,
    inclusions: [
      "Surgery & implant cost",
      "4-night hospital stay",
      "Post-op physiotherapy (3 sessions)",
      "Local transfers",
    ],
    exclusions: ["Flights", "Visa", "Accommodation beyond hospital stay"],
    lengthOfStay: "6–8 days",
    refundable: false,
    roomCategory: "Semi-Private Room",
    cancellationPolicy: "Non-refundable. Rescheduling allowed up to 7 days prior.",
    rating: 4.6,
    image: "",
  },
  {
    id: "pkg-4",
    treatmentId: "knee-replacement",
    hospitalName: "Mount Elizabeth Hospital",
    city: "Singapore",
    country: "Singapore",
    startingPrice: 11500,
    inclusions: [
      "Surgery with latest implant technology",
      "5-night stay in private suite",
      "Comprehensive physiotherapy program",
      "24/7 nursing care",
      "Concierge services",
    ],
    exclusions: ["Flights", "Extended accommodation", "Companion meals"],
    lengthOfStay: "7–10 days",
    refundable: true,
    roomCategory: "VIP Suite",
    cancellationPolicy: "Full refund up to 30 days before. 80% refund within 15–30 days.",
    rating: 4.9,
    image: "",
  },
];

export const specialists: Specialist[] = [
  {
    id: "dr-1",
    name: "Dr. Rajesh Sharma",
    title: "Senior Orthopedic Surgeon",
    specialty: "Knee & Joint Replacement",
    yearsExperience: 22,
    primaryHospital: "Apollo Hospitals",
    primaryCity: "Chennai",
    proceduresPerformed: 4500,
    consultationFee: 50,
    rating: 4.9,
    languages: ["English", "Hindi", "Tamil"],
    qualifications: ["MBBS – AIIMS Delhi", "MS Orthopedics – PGI Chandigarh", "Fellowship – Royal College of Surgeons, UK"],
    summary: "Dr. Rajesh Sharma is a globally renowned orthopedic surgeon specializing in minimally invasive knee and hip replacements. With over 22 years of experience and 4,500+ successful procedures, he is a pioneer of robotic-assisted joint replacement surgery in Asia.",
    consultationModes: ["Online", "In-person"],
    successRate: 98.5,
    avatar: "",
    affiliatedHospitals: [
      { hospitalName: "Apollo Hospitals", city: "Chennai", packages: ["pkg-1"], nextAvailable: "Mar 5, 2026" },
      { hospitalName: "Fortis Healthcare", city: "Mumbai", packages: ["pkg-3"], nextAvailable: "Mar 12, 2026" },
    ],
  },
  {
    id: "dr-2",
    name: "Dr. Ananya Patel",
    title: "Consultant Orthopedic Surgeon",
    specialty: "Joint Reconstruction & Sports Medicine",
    yearsExperience: 15,
    primaryHospital: "Fortis Healthcare",
    primaryCity: "Mumbai",
    proceduresPerformed: 2800,
    consultationFee: 40,
    rating: 4.8,
    languages: ["English", "Hindi", "Gujarati"],
    qualifications: ["MBBS – Grant Medical College, Mumbai", "DNB Orthopedics", "Fellowship in Arthroplasty – Germany"],
    summary: "Dr. Ananya Patel is an expert in complex revision joint surgeries and sports injury management. She brings international training from Germany and a patient-centric approach that has earned her recognition across South Asia.",
    consultationModes: ["Online", "In-person"],
    successRate: 97.2,
    avatar: "",
    affiliatedHospitals: [
      { hospitalName: "Fortis Healthcare", city: "Mumbai", packages: ["pkg-3"], nextAvailable: "Mar 3, 2026" },
    ],
  },
  {
    id: "dr-3",
    name: "Dr. Somchai Tanaka",
    title: "Chief of Orthopedics",
    specialty: "Total Joint Replacement",
    yearsExperience: 28,
    primaryHospital: "Bumrungrad International",
    primaryCity: "Bangkok",
    proceduresPerformed: 6200,
    consultationFee: 80,
    rating: 4.9,
    languages: ["English", "Thai", "Japanese"],
    qualifications: ["MD – Chulalongkorn University", "Fellowship – Mayo Clinic, USA", "Board Certified – American Academy of Orthopedic Surgeons"],
    summary: "Dr. Somchai Tanaka is one of Southeast Asia's most experienced joint replacement surgeons. Having trained at the Mayo Clinic and performed over 6,200 procedures, he specializes in complex revision surgeries and computer-navigated replacements.",
    consultationModes: ["Online", "In-person"],
    successRate: 99.1,
    avatar: "",
    affiliatedHospitals: [
      { hospitalName: "Bumrungrad International", city: "Bangkok", packages: ["pkg-2"], nextAvailable: "Mar 8, 2026" },
    ],
  },
  {
    id: "dr-4",
    name: "Dr. Mei Lin Wong",
    title: "Senior Consultant Orthopedic Surgeon",
    specialty: "Minimally Invasive Joint Surgery",
    yearsExperience: 18,
    primaryHospital: "Mount Elizabeth Hospital",
    primaryCity: "Singapore",
    proceduresPerformed: 3400,
    consultationFee: 120,
    rating: 4.8,
    languages: ["English", "Mandarin", "Malay"],
    qualifications: ["MBBS – National University of Singapore", "FRCS Edinburgh", "Fellowship – Hospital for Special Surgery, NYC"],
    summary: "Dr. Mei Lin Wong is a leading orthopedic surgeon in Singapore, known for her expertise in minimally invasive techniques that reduce recovery time by up to 40%. She has published extensively in international orthopedic journals.",
    consultationModes: ["Online", "In-person"],
    successRate: 98.8,
    avatar: "",
    affiliatedHospitals: [
      { hospitalName: "Mount Elizabeth Hospital", city: "Singapore", packages: ["pkg-4"], nextAvailable: "Mar 10, 2026" },
    ],
  },
];

export const searchSuggestions = {
  treatments: ["Knee Replacement", "Heart Bypass Surgery", "Dental Implants", "IVF Treatment", "Spinal Fusion", "Hip Replacement", "Lasik Eye Surgery", "Hair Transplant"],
  specialists: ["Dr. Rajesh Sharma", "Dr. Ananya Patel", "Dr. Somchai Tanaka", "Dr. Mei Lin Wong"],
  hospitals: ["Apollo Hospitals", "Bumrungrad International", "Fortis Healthcare", "Mount Elizabeth Hospital"],
};
