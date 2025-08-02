
import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  standalone: false,
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],

 
})
export class BillingComponent {
  // Current plan data
  currentPlan = {
    id: 'pro',
    tier: 'PRO',
    name: 'Professional Plan',
    price: 49,
    nextBillingDate: new Date(),
    apiUsage: 8500,
    apiLimit: 10000,
    teamMembers: 5,
    teamLimit: 10,
    paymentMethod: 'Visa •••• 4242'
  };
  
  // Usage statistics
  usageStats = {
    chatsThisMonth: 1245,
    chatIncrease: 12,
    leadsThisMonth: 89,
    leadIncrease: 8,
    avgResponseTime: '2.3m',
    responseDecrease: 15,
    satisfactionRate: 94,
    satisfactionIncrease: 3
  };
  
  // Plan options
  planOptions = [
    {
      id: 'starter',
      tier: 'STARTER',
      name: 'Starter Plan',
      price: 19,
      description: 'Perfect for small businesses',
      features: [
        '1,000 chats/month',
        '2 team members',
        'Basic analytics',
        'Email support'
      ]
    },
    {
      id: 'pro',
      tier: 'PRO',
      name: 'Professional Plan',
      price: 49,
      description: 'For growing businesses',
      features: [
        '10,000 chats/month',
        '10 team members',
        'Advanced analytics',
        'Priority support',
        'Custom branding'
      ]
    },
    {
      id: 'enterprise',
      tier: 'ENTERPRISE',
      name: 'Enterprise Plan',
      price: 99,
      description: 'For large organizations',
      recommended: true,
      features: [
        'Unlimited chats',
        'Unlimited team members',
        'Advanced analytics',
        '24/7 phone support',
        'Custom branding',
        'API access',
        'Dedicated account manager'
      ]
    }
  ];
  
  // Payment methods
  paymentMethods = {
    card: {
      lastFour: '4242',
      expiry: '12/25'
    }
  };
  
  // Billing history
  billingHistory = [
    {
      id: 'INV-001',
      date: new Date('2023-10-15'),
      description: 'Professional Plan - Monthly',
      amount: '49.00',
      status: 'paid'
    },
    {
      id: 'INV-002',
      date: new Date('2023-09-15'),
      description: 'Professional Plan - Monthly',
      amount: '49.00',
      status: 'paid'
    },
    {
      id: 'INV-003',
      date: new Date('2023-08-15'),
      description: 'Professional Plan - Monthly',
      amount: '49.00',
      status: 'paid'
    }
  ];
  
  // Modal states
  showUpgradePlanModal = false;
  showCancelSubscriptionModal = false;
  
  // Upgrade plans (filtered)
  get upgradePlans() {
    return this.planOptions.filter(plan => plan.price > this.currentPlan.price);
  }
  
  // Methods
  showUpgradeModal() {
    this.showUpgradePlanModal = true;
  }
  
  showCancelModal() {
    this.showCancelSubscriptionModal = true;
  }
  
  selectPlan(plan: any) {
    if (plan.id === this.currentPlan.id) {
      return;
    }
    
    if (plan.price > this.currentPlan.price) {
      this.showUpgradeModal();
    } else {
      // Handle downgrade
      console.log('Downgrading to:', plan.name);
      alert(`You've downgraded to ${plan.name}`);
    }
  }
  
  confirmUpgrade(plan: any) {
    console.log('Upgrading to:', plan.name);
    this.showUpgradePlanModal = false;
    alert(`You've successfully upgraded to ${plan.name}!`);
  }
  
  confirmCancellation() {
    console.log('Cancelling subscription');
    this.showCancelSubscriptionModal = false;
    alert('Your subscription has been cancelled. You\'ll continue to have access until the end of your current billing period.');
  }
  
  editPaymentMethod() {
    console.log('Editing payment method');
    alert('Payment method editing would open here');
  }
  
  removePaymentMethod() {
    console.log('Removing payment method');
    alert('Payment method removal would be handled here');
  }
  
  addPaymentMethod() {
    console.log('Adding payment method');
    alert('Add payment method form would open here');
  }
  
  downloadInvoice(invoiceId: string) {
    console.log('Downloading invoice:', invoiceId);
    alert(`Downloading invoice ${invoiceId}`);
  }
}