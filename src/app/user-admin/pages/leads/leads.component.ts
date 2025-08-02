import { Component } from '@angular/core';

@Component({
  selector: 'app-leads',
  standalone: false,
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent {
  // Stats data
  leadStats = {
    totalLeads: 1245,
    leadIncrease: 12,
    totalConversations: 3850,
    conversationIncrease: 8,
    convertedLeads: 342,
    conversionIncrease: 15,
    conversionRate: 27.5,
    rateIncrease: 3
  };
  
  // Filters
  showFilters = false;
  filters = {
    startDate: '',
    endDate: '',
    statuses: [] as string[],
    tags: [] as string[]
  };
  
  // View mode
  viewMode = 'table';
  
  // Status options
  statusOptions = [
    { value: 'new', label: 'New', color: '#3498db' },
    { value: 'contacted', label: 'Contacted', color: '#f39c12' },
    { value: 'qualified', label: 'Qualified', color: '#2ecc71' },
    { value: 'converted', label: 'Converted', color: '#9b59b6' },
    { value: 'lost', label: 'Lost', color: '#e74c3c' }
  ];
  
  // Tag options
  tagOptions = ['Hot Lead', 'Cold Lead', 'Follow-up', 'VIP', 'Enterprise', 'Trial'];
  
  // Sample leads data
  leads = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      status: 'new',
      tags: ['Hot Lead', 'Enterprise'],
      lastContact: new Date('2023-10-15'),
      lastMessage: 'Hi, I\'m interested in your enterprise plan. Can you provide more details?',
      avatar: 'https://picsum.photos/seed/user1/100/100.jpg'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@company.com',
      status: 'contacted',
      tags: ['Follow-up'],
      lastContact: new Date('2023-10-14'),
      lastMessage: 'Thanks for the information. I\'ll discuss with my team and get back to you.',
      avatar: 'https://picsum.photos/seed/user2/100/100.jpg'
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael@startup.io',
      status: 'qualified',
      tags: ['VIP', 'Hot Lead'],
      lastContact: new Date('2023-10-13'),
      lastMessage: 'We\'d like to schedule a demo for next week. What times are available?',
      avatar: 'https://picsum.photos/seed/user3/100/100.jpg'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily@business.com',
      status: 'converted',
      tags: ['Enterprise'],
      lastContact: new Date('2023-10-12'),
      lastMessage: 'Just signed up for the annual plan. Looking forward to using your platform!',
      avatar: 'https://picsum.photos/seed/user4/100/100.jpg'
    },
    {
      id: 5,
      name: 'David Wilson',
      email: 'david@tech.co',
      status: 'lost',
      tags: ['Cold Lead'],
      lastContact: new Date('2023-10-10'),
      lastMessage: 'We\'ve decided to go with a different solution. Thanks for your time.',
      avatar: 'https://picsum.photos/seed/user5/100/100.jpg'
    }
  ];
  
  // Filtered leads
  filteredLeads = [...this.leads];
  
  // Selection
  selectedLeads: number[] = [];
  
  // Pagination
  currentPage = 1;
  itemsPerPage = 10;
  
  // Modals
  showConversationModal = false;
  showEditModal = false;
  selectedLead: any = null;
  editingLead: any = {};
  newTag = '';
  
  // Conversation messages
  conversationMessages = [
    { sender: 'user', text: 'Hi, I\'m interested in your enterprise plan. Can you provide more details?', timestamp: new Date('2023-10-15T10:30:00') },
    { sender: 'bot', text: 'Hello! I\'d be happy to provide more information about our enterprise plan. It includes unlimited chats, priority support, and advanced analytics. Would you like me to schedule a demo?', timestamp: new Date('2023-10-15T10:31:00') },
    { sender: 'user', text: 'Yes, that would be great. What times are available next week?', timestamp: new Date('2023-10-15T10:32:00') },
    { sender: 'bot', text: 'We have availability on Tuesday at 2 PM or Thursday at 10 AM. Which works better for you?', timestamp: new Date('2023-10-15T10:33:00') }
  ];
  
  // Computed properties
  get allSelected() {
    return this.filteredLeads.length > 0 && this.selectedLeads.length === this.filteredLeads.length;
  }
  
  get totalPages() {
    // Returns an array of page numbers for *ngFor
    const pageCount = Math.ceil(this.filteredLeads.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }
  
  // Methods
  getStatusColor(status: string) {
    const statusObj = this.statusOptions.find(s => s.value === status);
    return statusObj ? statusObj.color : '#7f8c8d';
  }
  
  clearFilters() {
    this.filters = {
      startDate: '',
      endDate: '',
      statuses: [],
      tags: []
    };
    this.applyFilters();
  }
  
  applyFilters() {
    this.filteredLeads = this.leads.filter(lead => {
      // Date filter
      if (this.filters.startDate && lead.lastContact < new Date(this.filters.startDate)) {
        return false;
      }
      if (this.filters.endDate && lead.lastContact > new Date(this.filters.endDate)) {
        return false;
      }
      
      // Status filter
      if (this.filters.statuses.length > 0 && !this.filters.statuses.includes(lead.status)) {
        return false;
      }
      
      // Tag filter
      if (this.filters.tags.length > 0) {
        const hasTag = this.filters.tags.some(tag => lead.tags.includes(tag));
        if (!hasTag) return false;
      }
      
      return true;
    });
    
    this.currentPage = 1;
    this.showFilters = false;
  }
  
  toggleSelectAll() {
    if (this.allSelected) {
      this.selectedLeads = [];
    } else {
      this.selectedLeads = this.filteredLeads.map(lead => lead.id);
    }
  }
  
  toggleLeadSelection(leadId: number) {
    const index = this.selectedLeads.indexOf(leadId);
    if (index > -1) {
      this.selectedLeads.splice(index, 1);
    } else {
      this.selectedLeads.push(leadId);
    }
  }
  
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
    }
  }
  
  viewConversation(lead: any) {
    this.selectedLead = lead;
    this.showConversationModal = true;
  }
  
  editLead(lead: any) {
    this.editingLead = { ...lead };
    this.showEditModal = true;
  }
  
  exportLead(lead: any) {
    console.log('Exporting lead:', lead);
    alert(`Exporting lead: ${lead.name}`);
  }
  
  exportLeads() {
    console.log('Exporting all leads');
    alert('Exporting all leads data');
  }
  
  exportSelected() {
    console.log('Exporting selected leads:', this.selectedLeads);
    alert(`Exporting ${this.selectedLeads.length} selected leads`);
  }
  
  exportConversation() {
    console.log('Exporting conversation with:', this.selectedLead?.name);
    alert('Exporting conversation data');
  }
  
  bulkStatusChange() {
    console.log('Changing status for selected leads:', this.selectedLeads);
    alert('Status change dialog would open here');
  }
  
  addTag() {
    if (this.newTag.trim() && !this.editingLead.tags.includes(this.newTag.trim())) {
      this.editingLead.tags.push(this.newTag.trim());
      this.newTag = '';
    }
  }
  
  removeTag(tag: string) {
    const index = this.editingLead.tags.indexOf(tag);
    if (index > -1) {
      this.editingLead.tags.splice(index, 1);
    }
  }
  
  saveLead() {
    const index = this.leads.findIndex(l => l.id === this.editingLead.id);
    if (index > -1) {
      this.leads[index] = { ...this.editingLead };
      this.applyFilters();
    }
    this.showEditModal = false;
    alert('Lead updated successfully');
  }
}