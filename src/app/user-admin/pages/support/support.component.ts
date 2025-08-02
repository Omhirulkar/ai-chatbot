import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  standalone: false,
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  searchQuery: string = '';
  
  faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page and click on "Forgot Password". Enter your email address and we\'ll send you a link to reset your password.',
      open: false,
      relatedArticles: ['Account Security', 'Two-Factor Authentication']
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support payments through PayPal and bank transfers for annual plans.',
      open: false,
      relatedArticles: ['Billing Cycle', 'Invoicing']
    },
    {
      question: 'How can I upgrade my plan?',
      answer: 'You can upgrade your plan at any time from the Billing section in your account settings. Simply select the plan you want to upgrade to and follow the prompts.',
      open: false,
      relatedArticles: ['Plan Comparison', 'Pricing']
    },
    {
      question: 'Is my data secure with your service?',
      answer: 'Yes, we take data security very seriously. All data is encrypted in transit and at rest. We comply with industry standards including GDPR and SOC 2 Type II.',
      open: false,
      relatedArticles: ['Privacy Policy', 'Security Measures']
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription at any time from the Billing section. Your service will continue until the end of your current billing period.',
      open: false,
      relatedArticles: ['Refund Policy', 'Billing Cycle']
    }
  ];
  
  supportForm = {
    subject: '',
    message: '',
    attachment: null as File | null
  };
  
  searchHelp() {
    console.log('Searching for:', this.searchQuery);
    // Implement search functionality
  }
  
  navigateToSection(section: string) {
    console.log('Navigating to section:', section);
    // Navigate to specific section
  }
  
  openCategory(category: string) {
    console.log('Opening category:', category);
    // Navigate to category page
  }
  
  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
  
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.supportForm.attachment = input.files[0];
    }
  }
  
  submitSupportForm() {
    console.log('Submitting support form:', this.supportForm);
    // Implement form submission
    alert('Your message has been sent! We\'ll get back to you soon.');
    
    // Reset form
    this.supportForm = {
      subject: '',
      message: '',
      attachment: null
    };
  }
}