import { Component, OnInit } from '@angular/core';
import { EmailClient } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public email: string = "";
  public firstName: string = "";
  public lastName: string = "";
  public message: string = "";

  constructor(private emailClient: EmailClient) { }

  ngOnInit(): void {
  }

  onSubmitClicked(){
    const from = this.firstName + " " + this.lastName + ": " + this.email;
    const message = this.message
    this.emailClient.sendEmail(from, message).subscribe(result=>{
      {
        alert("Thanks for your interest. We will get back to you soon.")
      }
    },
    error => {
      if (error.status == 0) //More investigation required.
      {
        alert("Thanks for your interest. We will get back to you soon.")
      }
    });
  }
}
