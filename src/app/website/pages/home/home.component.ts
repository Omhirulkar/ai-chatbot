import { Component, OnInit } from '@angular/core';

interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface Step {
  step: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface UseCase {
  title: string;
  description: string;
  icon: string;
  color: string;
  keyBenefit: string;
}

interface PricingPlan {
  name: string;
  price: string;
  currency: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  featured?: boolean;
}

interface Testimonial {
  name: string;
  position: string;
  company: string;
  photo: string;
  companyLogo: string;
  text: string;
  rating: number;
}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  features: Feature[] = [
    {
      title: "Smart Lead Qualification",
      description: "AI analyzes visitor behavior and asks relevant questions to identify high-quality prospects automatically.",
      icon: "fas fa-users",
      color: "purple"
    },
    {
      title: "WhatsApp Lead Transfer",
      description: "Automatically transfer qualified leads to your WhatsApp with full conversation context and contact details.",
      icon: "fab fa-whatsapp",
      color: "green"
    },
    {
      title: "24/7 Automation",
      description: "Works around the clock without any human intervention. No manual replies, no missed opportunities.",
      icon: "fas fa-bolt",
      color: "blue"
    },
    {
      title: "Conversion Analytics",
      description: "Track conversion rates, lead quality, and performance metrics with detailed analytics dashboard.",
      icon: "fas fa-chart-bar",
      color: "orange"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols to protect your customer data and conversations.",
      icon: "fas fa-shield-alt",
      color: "red"
    },
    {
      title: "Multi-Language Support",
      description: "Supports 50+ languages to engage visitors in their preferred language for better conversion.",
      icon: "fas fa-globe",
      color: "indigo"
    }
  ];
  
  useCases: UseCase[] = [
    {
      title: "E-commerce Stores",
      description: "Boost your online sales by instantly assisting customers with product queries, guiding them to the right products, and automating order tracking.",
      icon: "fas fa-shopping-cart",
      color: "purple",
      keyBenefit: "Reduce cart abandonment by 35%"
    },
    {
      title: "SaaS & Software Websites",
      description: "Engage website visitors with interactive demos, qualify leads, and automate FAQs. Let your chatbot schedule product demos and provide pricing details.",
      icon: "fas fa-cloud",
      color: "blue",
      keyBenefit: "Increase demo bookings by 40%"
    },
    {
      title: "Educational Institutes",
      description: "Simplify student inquiries regarding courses, fees, admissions, and batch timings. Automate counseling requests and capture student leads.",
      icon: "fas fa-graduation-cap",
      color: "green",
      keyBenefit: "Capture 24/7 student inquiries"
    },
   
    {
      title: "Real Estate Agencies",
      description: "Capture property inquiries, share property listings, and schedule site visits—all automated through your chatbot, enhancing buyer engagement.",
      icon: "fas fa-home",
      color: "red",
      keyBenefit: "Increase qualified leads by 45%"
    },
    {
      title: "Healthcare Clinics",
      description: "Automate appointment scheduling, share health tips, and assist patients with department/doctor-related queries through an intelligent chatbot.",
      icon: "fas fa-heartbeat",
      color: "indigo",
      keyBenefit: "Streamline patient intake process"
    },
    {
      title: "Finance & Insurance",
      description: "Help customers with policy information, premium calculations, and claims processing. Automate lead qualification for financial products.",
      icon: "fas fa-chart-line",
      color: "teal",
      keyBenefit: "Improve customer satisfaction by 30%"
    }
  ];
  
  logos = [
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  ];
  
  steps: Step[] = [
    {
      step: 1,
      title: "Install on Your Website",
      description: "Add our simple code snippet to your website. Takes less than 2 minutes to set up.",
      icon: "fas fa-bolt",
      color: "purple"
    },
    {
      step: 2,
      title: "AI Engages Visitors",
      description: "Smart chatbot automatically starts conversations with website visitors and qualifies leads.",
      icon: "fas fa-comments",
      color: "blue"
    },
    {
      step: 3,
      title: "Transfer to WhatsApp",
      description: "Qualified leads are automatically transferred to your WhatsApp with full conversation context.",
      icon: "fas fa-users",
      color: "green"
    }
  ];

  pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: "0",
      currency: "$",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "1 website",
        "500 conversations/month",
        "Basic lead qualification",
        "Email support",
        "Standard analytics"
      ],
      buttonText: "Get Started"
    },
    {
      name: "Pro",
      price: "49",
      currency: "$",
      period: "/month",
      description: "For growing businesses that need more power",
      features: [
        "5 websites",
        "5,000 conversations/month",
        "Advanced lead qualification",
        "Priority support",
        "Advanced analytics",
        "WhatsApp integration",
        "Custom branding",
        "Multi-language support"
      ],
      buttonText: "Start Free Trial",
      featured: true
    },
    {
      name: "Enterprise",
      price: "199",
      currency: "$",
      period: "/month",
      description: "For large organizations with high volume",
      features: [
        "Unlimited websites",
        "Unlimited conversations",
        "AI-powered lead scoring",
        "24/7 dedicated support",
        "Custom analytics dashboard",
        "Advanced WhatsApp features",
        "White-label solution",
        "API access",
        "Custom integrations",
        "Dedicated account manager"
      ],
      buttonText: "Contact Sales"
    }
  ];

  testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechSolutions Inc.",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      text: "The AI chatbot has completely transformed our lead generation process. We're now capturing 3x more qualified leads and our sales team can focus on closing deals instead of answering basic questions.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "E-Shop Global",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      text: "Implementation was incredibly simple, and the results were immediate. Our cart abandonment rate dropped by 35% in the first month. The WhatsApp integration is a game-changer for customer support.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Manager",
      company: "HealthPlus Clinics",
      photo: "https://randomuser.me/api/portraits/women/3.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      text: "Our patients love the instant support they receive. The chatbot handles appointment scheduling and basic inquiries 24/7, freeing up our staff to focus on patient care. Highly recommended!",
      rating: 4
    },
    {
      name: "David Thompson",
      position: "Sales Director",
      company: "Prime Properties",
      photo: "https://randomuser.me/api/portraits/men/4.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      text: "The AI qualification system is incredibly accurate. We're only getting leads that are actually interested in our properties, which has increased our conversion rate by 45%. Best investment we've made this year.",
      rating: 5
    }
  ];
  
  faqs: FAQ[] = [
    {
      question: "How long does it take to set up the AI chatbot?",
      answer: "Setting up the AI chatbot is incredibly simple and takes less than 2 minutes. Just copy and paste our code snippet into your website's HTML, and the chatbot will be live immediately. No technical skills required."
    },
    {
      question: "Can I customize the chatbot's appearance and responses?",
      answer: "Yes! Our platform offers extensive customization options. You can change the chatbot's colors, avatar, greeting messages, and conversation flows to match your brand identity. You can also train the AI with your specific business information."
    },
    {
      question: "How does the WhatsApp lead transfer work?",
      answer: "When a visitor qualifies as a lead, our AI automatically sends their contact information and conversation history to your WhatsApp number. You'll receive a message with all the details, allowing you to continue the conversation personally."
    },
    {
      question: "What platforms does the chatbot integrate with?",
      answer: "Our chatbot works with any website platform including WordPress, Shopify, Wix, Squarespace, and custom-built sites. It also integrates with popular CRMs like Salesforce, HubSpot, and Zoho CRM through our API."
    },
    {
      question: "Is there a limit to the number of conversations?",
      answer: "It depends on your pricing plan. Our Starter plan includes 500 conversations per month, Pro plan includes 5,000 conversations, and Enterprise plan offers unlimited conversations. You can upgrade or downgrade your plan at any time."
    },
    {
      question: "How secure is the chatbot and customer data?",
      answer: "Security is our top priority. We use bank-grade encryption for all data transmission and storage. Customer conversations are never shared with third parties, and we comply with GDPR, CCPA, and other privacy regulations."
    }
  ];
  
  faqsLeft: FAQ[] = [];
  faqsRight: FAQ[] = [];
  activeFaqLeft: number | null = null;
  activeFaqRight: number | null = null;
  currentTestimonial: number = 0;
  testimonialInterval: any;
  
  pricingFeatures: string[] = [
    "Unlimited website installations",
    "24/7 AI-powered conversations",
    "WhatsApp lead transfer",
    "Smart lead qualification",
    "Real-time analytics dashboard",
    "Multi-language support (50+ languages)",
    "Custom branding options",
    "Priority email support",
    "Advanced conversation flows",
    "Integration with popular CRMs"
  ];
  
  constructor() { }
  
  ngOnInit(): void {
    // Initialize component
    this.startTestimonialAutoplay();
    
    // Split FAQs into two arrays
    const half = Math.ceil(this.faqs.length / 2);
    this.faqsLeft = this.faqs.slice(0, half);
    this.faqsRight = this.faqs.slice(half);
  }
  
  ngOnDestroy(): void {
    // Clean up interval when component is destroyed
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }
  
  startTestimonialAutoplay(): void {
    this.testimonialInterval = setInterval(() => {
      this.nextTestimonial();
    }, 5000);
  }
  
  prevTestimonial(): void {
    this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
    this.resetAutoplay();
  }
  
  nextTestimonial(): void {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
    this.resetAutoplay();
  }
  
  goToTestimonial(index: number): void {
    this.currentTestimonial = index;
    this.resetAutoplay();
  }
  
  resetAutoplay(): void {
    // Reset the autoplay timer
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
    this.startTestimonialAutoplay();
  }
  
  toggleFaq(index: number, side: 'left' | 'right'): void {
    if (side === 'left') {
      if (this.activeFaqLeft === index) {
        this.activeFaqLeft = null;
      } else {
        this.activeFaqLeft = index;
      }
    } else {
      if (this.activeFaqRight === index) {
        this.activeFaqRight = null;
      } else {
        this.activeFaqRight = index;
      }
    }
  }
  
  selectPlan(plan: PricingPlan): void {
    console.log('Selected plan:', plan.name);
    // Handle plan selection logic here
    if (plan.name === 'Enterprise') {
      // Open contact modal or redirect to contact page
      window.open('https://your-contact-url.com', '_blank');
    } else {
      // Redirect to signup page
      window.open('https://your-signup-url.com?plan=' + plan.name.toLowerCase(), '_blank');
    }
  }
  
  contactSales(): void {
    // Handle contact sales action
    console.log('Contacting sales...');
    window.open('https://your-contact-url.com', '_blank');
  }
  
  startFreeTrial(): void {
    // Handle free trial signup
    console.log('Starting free trial...');
    window.open('https://your-signup-url.com', '_blank');
  }
  
  watchDemo(): void {
    // Handle demo video
    console.log('Opening demo...');
    window.open('https://your-demo-url.com', '_blank');
  }
  
  buildAgent(): void {
    // Handle build agent action
    console.log('Building AI agent...');
    window.open('https://your-builder-url.com', '_blank');
  }
  
  // Optional: Add scroll animations
  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }
  
  private initScrollAnimations(): void {
    // Add intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);
    
    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => observer.observe(card));
    
    // Observe step cards
    const stepCards = document.querySelectorAll('.step-card');
    stepCards.forEach(card => observer.observe(card));
    
    // Observe use case cards
    const useCaseCards = document.querySelectorAll('.use-case-card');
    useCaseCards.forEach(card => observer.observe(card));
    
    // Observe pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => observer.observe(card));
    
    // Observe testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => observer.observe(card));
    
    // Observe FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => observer.observe(item));
  }
}