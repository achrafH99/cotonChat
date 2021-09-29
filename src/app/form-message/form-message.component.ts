import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Message } from '../models/message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.css']
})
export class FormMessageComponent implements OnInit {
  @Input() name: string;
  message = ""
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    console.log(this.name);

  }

  onSubmit(data:any){
    this.messageService.addMessage(new Message(this.name,data.message,new Date()));
    this.eraseForm();
  }

  eraseForm(){
    const textArea=document.getElementsByName("message");
    textArea.forEach(value=>{
      (<HTMLInputElement>value).value="";
      this.message=""
    })
  }
}
