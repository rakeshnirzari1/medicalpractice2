// This file contains the practice data that you can customize for each client

// Define types for the data structure
interface OpeningHours {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}

interface SocialLinks {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  // Add other properties if needed
}

interface HeroContent {
  heading: string;
  subheading: string;
  ctaLink: string;
  ctaText: string;
  image: string; // Added
}

interface AboutContent {
  heading: string;
  description: string;
  image: string;
  mission: string;
  vision: string;
  values: string[]; // Added
}

interface PracticeData {
  practiceName: string;
  shortDescription: string;
  longDescription: string;
  address: string;
  phone: string;
  email: string;
  openingHours: OpeningHours;
  socialLinks: SocialLinks;
  services: Service[];
  teamMembers: TeamMember[];
  heroContent: HeroContent;
  aboutContent: AboutContent;
  logo: string; // Added
}

export const practiceData: PracticeData = {
  practiceName: "Your Practice Name",
  shortDescription: "A trusted medical practice providing quality care.",
  longDescription: `We are a dedicated team of healthcare professionals committed to providing comprehensive medical services to our community. Our mission is to ensure the well-being of our patients through compassionate care and advanced medical practices.`,
  address: "123 Health St, City, State, ZIP",
  phone: "(123) 555-7890",
  email: "contact@yourpractice.com",
  openingHours: {
    Monday: "8:00 - 18:00",
    Tuesday: "8:00 - 18:00",
    Wednesday: "8:00 - 18:00",
    Thursday: "8:00 - 18:00",
    Friday: "8:00 - 18:00",
    Saturday: "9:00 - 14:00",
    Sunday: "Closed",
  },
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
  services: [
    { 
      id: "1", 
      title: "General Checkups", 
      description: "Routine health examinations for all ages.", 
      icon: "stethoscope" 
    },
    { 
      id: "2", 
      title: "Cardiology", 
      description: "Specialized care for heart-related conditions.", 
      icon: "heart" 
    },
    { 
      id: "3", 
      title: "Pediatrics", 
      description: "Comprehensive healthcare for children.", 
      icon: "user" 
    },
    { 
      id: "4", 
      title: "Dermatology", 
      description: "Treatment for skin conditions.", 
      icon: "shield" 
    },
    { 
      id: "5", 
      title: "Orthopedics", 
      description: "Care for bones and joints.", 
      icon: "activity" 
    },
    { 
      id: "6", 
      title: "Neurology", 
      description: "Diagnosis and treatment of neurological disorders.", 
      icon: "brain" 
    }
  ],
  teamMembers: [
    { name: "Dr. John Doe", role: "Chief Physician", image: "/doctors/doctor1.jpg" },
    { name: "Dr. Jane Smith", role: "Cardiologist", image: "/doctors/doctor2.jpg" },
  ],
  heroContent: {
    heading: "Quality Healthcare for Your Family",
    subheading: "Providing compassionate care for all.",
    ctaLink: "/services",
    ctaText: "Our Services",
    image: "/hero/clinic.jpg", // Added
  },
  aboutContent: {
    heading: "About Our Practice",
    description: "We are committed to delivering exceptional healthcare services with a patient-centered approach.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    mission: "To provide compassionate, high-quality healthcare to our community, ensuring the well-being of every patient.",
    vision: "To be the leading medical practice in our region, known for innovation and patient care excellence.",
    values: [
      "Compassion: We care deeply for our patients.",
      "Integrity: We uphold the highest ethical standards.",
      "Excellence: We strive for the best in all we do.",
      "Innovation: We embrace new ideas to improve care.",
    ],
  },
  logo: "/logo/practice-logo.png", // Added
};
