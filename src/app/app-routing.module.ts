import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'error',component:ErrorComponent,title:'404'},
  {path:'',redirectTo:'/error',pathMatch:'full',},
  {path:'home',component:HomeComponent,title:'home'},
  {path:'about', component:AboutComponent,title:'about'},
  {path:'portfolio',component:PortfolioComponent,title:'portfolio'},
  {path:'contacts',component:ContactsComponent,title:'contacts'},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
