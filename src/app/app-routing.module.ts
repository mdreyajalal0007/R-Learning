import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {NavbarComponent} from './navbar/navbar.component'
import {HomeComponent} from './home/home.component'
import {ServiceComponent} from './service/service.component'
import {AboutusComponent} from './aboutus/aboutus.component'
 import {ContactComponent} from './contact/contact.component'
import {FooterComponent} from "./footer/footer.component"
 const routes: Routes = [

  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },
  {
    path: 'aboutus',
    component:AboutusComponent
  },
  {
     path:'contact',
     component:ContactComponent
  },
  {
   path:'footer',
   component:FooterComponent
  },
  {
    path:'**',
    component:HomeComponent

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
