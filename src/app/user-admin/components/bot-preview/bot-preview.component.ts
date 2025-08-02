import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bot-preview',
  standalone: false,
  templateUrl: './bot-preview.component.html',
  styleUrls: ['./bot-preview.component.scss']
})
export class BotPreviewComponent implements OnInit {
  @Input() botName!: string;
  @Input() botAvatar!: string;
  @Input() themeColor!: string;
  @Input() welcomeMessage!: string;
  
  isTyping: boolean = false;
  
  ngOnInit(): void {
    // Simulate typing indicator after a delay
    setTimeout(() => {
      this.isTyping = true;
      setTimeout(() => {
        this.isTyping = false;
      }, 3000);
    }, 2000);
  }
}