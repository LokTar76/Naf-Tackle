import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { AppSharedModule } from 'src/app/@es/shared/app-shared.module';
import { MaterialSharedModule } from 'src/app/@es/shared/material-shared.module';
import { FormsModule } from '@angular/forms';
import { EmailClient } from 'src/app/services/email.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule,
    AppSharedModule,
    MaterialSharedModule,
  ],
  providers:[EmailClient]
})
export class ContactModule { }
