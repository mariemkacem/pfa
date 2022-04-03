import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogsComponent } from './blogs/blogs.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { FooterComponent } from './footer/footer.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { EventComponent } from './event/event.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { MeetingComponent } from './meeting/meeting.component';
import { BlocComponent } from './bloc/bloc.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { AttendeesComponent } from './attendees/attendees.component';

const routes: Routes = [
  {path:'',redirectTo:'navbar', pathMatch:'full'},
  {path:'navbar',component:NavbarComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'reset',component:ResetComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'footer',component:FooterComponent},
  {path:'sponsor',component:SponsorComponent},
  {path:'event',component:EventComponent},
  {path:'speakers',component:SpeakersComponent},
  {path:'attendees',component:AttendeesComponent},

  {path:'meeting',component:MeetingComponent},
  {path:'bloc',component:BlocComponent},
  {path:'newlogin',component:NewloginComponent},
  {path:'register',component:RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
