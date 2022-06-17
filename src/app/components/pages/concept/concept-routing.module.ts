import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConceptComponent } from './concept.component';

const routes: Routes = [{ path: '', component: ConceptComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConceptRoutingModule { }
