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

@Component({
  selector: 'app-about',
  standalone:false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  features: Feature[] = [
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
      title: "Smart Lead Qualification",
      description: "AI analyzes visitor behavior and asks relevant questions to identify high-quality prospects automatically.",
      icon: "fas fa-users",
      color: "purple"
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
  }

  startFreeTrial(): void {
    // Handle free trial signup
    console.log('Starting free trial...');
    // Add your logic here - redirect to signup page or open modal
    window.open('https://your-signup-url.com', '_blank');
  }

  watchDemo(): void {
    // Handle demo video
    console.log('Opening demo...');
    // Add your logic here - open video modal or redirect to demo page
    window.open('https://your-demo-url.com', '_blank');
  }

  buildAgent(): void {
    // Handle build agent action
    console.log('Building AI agent...');
    // Add your logic here - redirect to agent builder
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
  }
}