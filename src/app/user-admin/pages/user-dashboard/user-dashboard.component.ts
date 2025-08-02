import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone:false,
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  currentDate = new Date();
  
  chatStats = {
    chatsToday: 124,
    chatChange: 12,
    leadsCaptured: 38,
    leadChange: 8
  };

  planInfo = {
    name: 'Professional Plan',
    description: 'Advanced features for growing businesses',
    renewalDate: new Date('2023-12-15'),
    apiUsage: 8420,
    apiLimit: 10000,
    teamMembers: 3,
    teamLimit: 5
  };

  setupProgress = {
    completedPercentage: 60,
    checklistItems: [
      { id: 'step1', title: 'Create your first chatbot', completed: true },
      { id: 'step2', title: 'Customize chatbot appearance', completed: true },
      { id: 'step3', title: 'Add knowledge base content', completed: true },
      { id: 'step4', title: 'Install chat widget on your website', completed: false },
      { id: 'step5', title: 'Configure notification settings', completed: false },
      { id: 'step6', title: 'Invite team members', completed: false }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    // Initialize component
  }

  toggleChecklistItem(itemId: string): void {
    const item = this.setupProgress.checklistItems.find(i => i.id === itemId);
    if (item) {
      item.completed = !item.completed;
      this.updateProgressPercentage();
    }
  }

  updateProgressPercentage(): void {
    const completed = this.setupProgress.checklistItems.filter(item => item.completed).length;
    const total = this.setupProgress.checklistItems.length;
    this.setupProgress.completedPercentage = Math.round((completed / total) * 100);
  }

  completeSetup(): void {
    // Mark all items as completed
    this.setupProgress.checklistItems.forEach(item => item.completed = true);
    this.updateProgressPercentage();
    console.log('Setup completed!');
  }

  skipSetup(): void {
    console.log('Setup skipped for now');
    // Navigate to dashboard or other page
  }
}