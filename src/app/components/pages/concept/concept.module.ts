import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ConceptRoutingModule } from './concept-routing.module';
import { ConceptComponent } from './concept.component';
import { MaterialSharedModule } from '../../../@es/shared/material-shared.module';
import { AppSharedModule } from '../../../@es/shared/app-shared.module';

@NgModule({
  declarations: [ConceptComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConceptRoutingModule,
    MaterialSharedModule,
    AppSharedModule
  ]
})
export class ConceptModule { }
