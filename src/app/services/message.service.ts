import { Injectable } from '@angular/core';
import { MESSAGES } from '../message-data';
import { Message } from '../models/message';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessages(){
    return MESSAGES;
  }

  addMessage(message:Message){
    MESSAGES.push(message);
  }
}
