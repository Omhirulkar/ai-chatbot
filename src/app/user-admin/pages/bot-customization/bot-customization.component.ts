import { Component } from '@angular/core';

@Component({
  selector: 'app-bot-customization',
  standalone: false,
  templateUrl: './bot-customization.component.html',
  styleUrls: ['./bot-customization.component.scss'],
})
export class BotCustomizationComponent {
  botName: string = 'ChatBuddy';
  botAvatar: string = 'https://dummyimage.com/100x100/000/fff.png&text=Bot';
  themeColor: string = '#4CAF50';
  welcomeMessage: string = 'Hi! How can I help you today?';
  
  // Preset theme colors for quick selection
  presetColors = [
    '#4CAF50', '#2196F3', '#9C27B0', '#FF9800', 
    '#F44336', '#00BCD4', '#8BC34A', '#FFC107'
  ];
  
  // Default values for reset
  defaultValues = {
    botName: 'ChatBuddy',
    botAvatar: 'https://dummyimage.com/100x100/000/fff.png&text=Bot',
    themeColor: '#4CAF50',
    welcomeMessage: 'Hi! How can I help you today?'
  };
  
  // Update methods
  onBotNameChange(event: any) {
    const input = event.target as HTMLInputElement;
    this.botName = input.value;
  }
  
  onAvatarChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.botAvatar = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  
  onThemeColorChange(event: any) {
    const input = event.target as HTMLInputElement;
    this.themeColor = input.value;
  }
  
  onWelcomeMessageChange(event: any) {
    const input = event.target as HTMLTextAreaElement;
    this.welcomeMessage = input.value;
  }
  
  // Reset avatar to default
  resetAvatar() {
    this.botAvatar = this.defaultValues.botAvatar;
  }
  
  // Reset all settings to default
  resetCustomization() {
    this.botName = this.defaultValues.botName;
    this.botAvatar = this.defaultValues.botAvatar;
    this.themeColor = this.defaultValues.themeColor;
    this.welcomeMessage = this.defaultValues.welcomeMessage;
  }
  
  saveCustomization() {
    console.log('Saved:', {
      botName: this.botName,
      botAvatar: this.botAvatar,
      themeColor: this.themeColor,
      welcomeMessage: this.welcomeMessage
    });
    
    // Here you would typically make an API call to save the settings
    // For example:
    // this.botService.updateBotSettings({
    //   name: this.botName,
    //   avatar: this.botAvatar,
    //   themeColor: this.themeColor,
    //   welcomeMessage: this.welcomeMessage
    // }).subscribe(response => {
    //   console.log('Settings saved successfully', response);
    //   // Show success notification
    // });
  }
}