import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() conversation: any;
  constructor() {}

  messageSubmitted(event: any) {
    let value = event.target.value.trim();
    event.target.value = '';
    if (value.length < 1) return;
    this.conversation.messages.unshift({
      id: 1,
      body: value,
      time: '7:56 AM',
      me: true,
    });
  }

  ngOnInit(): void {}
}
