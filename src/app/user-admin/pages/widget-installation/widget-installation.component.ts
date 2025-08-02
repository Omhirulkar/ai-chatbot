import { Component } from '@angular/core';

@Component({
  selector: 'app-widget-installation',
  standalone: false,
  templateUrl: './widget-installation.component.html',
  styleUrls: ['./widget-installation.component.scss']
})
export class WidgetInstallationComponent {
  widgetCode = `<!-- Chat Widget -->
<script>
  (function() {
    var widgetId = 'your-widget-id';
    var script = document.createElement('script');
    script.src = 'https://cdn.yourchatwidget.com/widget.js';
    script.async = true;
    script.onload = function() {
      ChatWidget.init({
        widgetId: widgetId,
        position: 'right',
        themeColor: '#4CAF50'
      });
    };
    document.head.appendChild(script);
  })();
</script>`;

  includeStyles: boolean = true;
  asyncLoad: boolean = true;
  widgetPosition: string = 'right';
  widgetTrigger: string = 'click';
  themeColor: string = '#4CAF50';
  widgetSize: string = 'medium';
  widgetOpen: boolean = false;
  
  // Display settings
  showOnMobile: boolean = true;
  showOnDesktop: boolean = true;
  hideOnPages: boolean = false;

  copyCode() {
    navigator.clipboard.writeText(this.widgetCode).then(() => {
      console.log('Code copied to clipboard');
      // Here you would show a success notification
    }).catch(err => {
      console.error('Failed to copy code: ', err);
      // Here you would show an error notification
    });
  }

  toggleWidget() {
    this.widgetOpen = !this.widgetOpen;
  }

  updateWidgetSize(size: string) {
    this.widgetSize = size;
    console.log('Widget size updated to:', size);
  }

  saveSettings() {
    console.log('Settings saved:', {
      includeStyles: this.includeStyles,
      asyncLoad: this.asyncLoad,
      widgetPosition: this.widgetPosition,
      widgetTrigger: this.widgetTrigger,
      themeColor: this.themeColor,
      widgetSize: this.widgetSize,
      showOnMobile: this.showOnMobile,
      showOnDesktop: this.showOnDesktop,
      hideOnPages: this.hideOnPages
    });
    
    // Here you would typically make an API call to save the settings
  }

  resetSettings() {
    this.includeStyles = true;
    this.asyncLoad = true;
    this.widgetPosition = 'right';
    this.widgetTrigger = 'click';
    this.themeColor = '#4CAF50';
    this.widgetSize = 'medium';
    this.showOnMobile = true;
    this.showOnDesktop = true;
    this.hideOnPages = false;
    console.log('Settings reset to default');
  }
  
  openPlatformGuide(platform: string) {
    console.log('Opening guide for:', platform);
    // Here you would navigate to or open the specific platform guide
  }
}