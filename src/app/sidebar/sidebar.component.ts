import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  conversations = [
    {
      name: 'David',
      time: '8:00 AM',
      message: 'Hello',
      messageRead: true,
      messages: [
        { id: 1, body: 'Hi! How are you?', time: '7:56 AM', me: true },
        { id: 2, body: 'Hi! I am fine thanks', time: '7:57 AM', me: false },
        { id: 3, body: 'Glad to hear that', time: '7:58 AM', me: true },
        { id: 4, body: 'Hello', time: '8:00 AM', me: true },
      ],
    },
    {
      name: 'Rick',
      time: '10:30 PM',
      message: 'Hello',
      messageRead: true,
      messages: [
        { id: 1, body: 'Hi! How are you?', time: '10:25 PM', me: true },
        { id: 2, body: 'Hi! I am fine thanks', time: '10:26 PM', me: false },
        { id: 3, body: 'Glad to hear that', time: '10:27 PM', me: true },
        { id: 4, body: 'Hello', time: '10:30 PM', me: true },
      ],
    },
    {
      name: 'Ron',
      time: '10:00 PM',
      message: 'Hello',
      messageRead: true,
      messages: [
        { id: 1, body: 'Hi! How are you?', time: '10:00 PM', me: true },
        { id: 2, body: 'Hi! I am fine thanks', time: '10:00 PM', me: false },
        { id: 3, body: 'Glad to hear that', time: '10:00 PM', me: true },
        { id: 4, body: 'Hello', time: '10:00 PM', me: true },
      ],
    },
    {
      name: 'Negan',
      time: '7:40 PM',
      message: 'Hello',
      messageRead: true,
      messages: [
        { id: 1, body: 'Hi! How are you?', time: '7:40 PM', me: true },
        { id: 2, body: 'Hi! I am fine thanks', time: '7:40 PM', me: false },
        { id: 3, body: 'Glad to hear that', time: '7:40 PM', me: true },
        { id: 4, body: 'Hello', time: '7:40 PM', me: true },
      ],
    },
    {
      name: 'Thor',
      time: '7:00 PM',
      message: 'Hello',
      messageRead: false,
      messages: [
        { id: 1, body: 'Hi! How are you?', time: '7:56 AM', me: true },
        { id: 2, body: 'Hi! I am fine thanks', time: '7:57 AM', me: false },
        { id: 3, body: 'Glad to hear that', time: '7:58 AM', me: true },
        { id: 4, body: 'Hello', time: '8:00 AM', me: true },
      ],
    },
    {
      name: 'Odin',
      time: '6:00 PM',
      message: 'Hello',
      messageRead: false,
      messages: [
        { id: 1, body: 'Hi! How are you?', time: '7:56 AM', me: true },
        { id: 2, body: 'Hi! I am fine thanks', time: '7:57 AM', me: false },
        { id: 3, body: 'Glad to hear that', time: '7:58 AM', me: true },
        { id: 4, body: 'Hello', time: '8:00 AM', me: true },
      ],
    },
    {
      name: 'Hella',
      time: '3:00 PM',
      message: 'Hello',
      messageRead: false,
      messages: [
        { id: 1, body: 'Hi! How are you?', time: '7:56 AM', me: true },
        { id: 2, body: 'Hi! I am fine thanks', time: '7:57 AM', me: false },
        { id: 3, body: 'Glad to hear that', time: '7:58 AM', me: true },
        { id: 4, body: 'Hello', time: '8:00 AM', me: true },
      ],
    },
    {
      name: 'Thanos',
      time: '4:00 AM',
      message: 'Hello',
      messageRead: false,
      messages: [
        { id: 1, body: 'Hi! How are you?', time: '7:56 AM', me: true },
        { id: 2, body: 'Hi! I am fine thanks', time: '7:57 AM', me: false },
        { id: 3, body: 'Glad to hear that', time: '7:58 AM', me: true },
        { id: 4, body: 'Hello', time: '8:00 AM', me: true },
      ],
    },
    {
      name: 'Bruce',
      time: '6:00 PM',
      message: 'Hello',
      messageRead: false,
      messages: [
        { id: 1, body: 'Hi! How are you?', time: '7:56 AM', me: true },
        { id: 2, body: 'Hi! I am fine thanks', time: '7:57 AM', me: false },
        { id: 3, body: 'Glad to hear that', time: '7:58 AM', me: true },
        { id: 4, body: 'Hello', time: '8:00 AM', me: true },
      ],
    },
    {
      name: 'Alfred',
      time: '5:00 PM',
      message: 'Hello',
      messageRead: false,
      messages: [
        { id: 1, body: 'Hi! How are you?', time: '7:56 AM', me: true },
        { id: 2, body: 'Hi! I am fine thanks', time: '7:57 AM', me: false },
        { id: 3, body: 'Glad to hear that', time: '7:58 AM', me: true },
        { id: 4, body: 'Hello', time: '8:00 AM', me: true },
      ],
    },
    {
      name: 'Jack',
      time: '2:00 PM',
      message: 'Hello',
      messageRead: false,
      messages: [
        { id: 1, body: 'Hi! How are you?', time: '7:56 AM', me: true },
        { id: 2, body: 'Hi! I am fine thanks', time: '7:57 AM', me: false },
        { id: 3, body: 'Glad to hear that', time: '7:58 AM', me: true },
        { id: 4, body: 'Hello', time: '8:00 AM', me: true },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
