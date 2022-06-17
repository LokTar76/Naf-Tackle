import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule) },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'value',
        loadChildren: () => import('./components/pages/concept/concept.module').then(m => m.ConceptModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./components/pages/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'technologies',
        loadChildren: () => import('./components/pages/technologies/technologies.module').then(m => m.TechnologiesModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule)
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
