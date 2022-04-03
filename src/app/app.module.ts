import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BlogsComponent } from './blogs/blogs.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { BlogFormComponent } from './blog-form/blog-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { FooterComponent } from './footer/footer.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { EventComponent } from './event/event.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { MeetingComponent } from './meeting/meeting.component';
import { BlocComponent } from './bloc/bloc.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { AttendeesComponent } from './attendees/attendees.component';
import { GeneralChatComponent } from './general-chat/general-chat.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogsComponent,
    LoginComponent,
    BlogFormComponent,
    RegisterComponent,
    ResetComponent,
    FooterComponent,
    SponsorComponent,
    EventComponent,
    SpeakersComponent,
    MeetingComponent,
    BlocComponent,
    NewloginComponent,
    AttendeesComponent,
    GeneralChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    MatDatepickerModule,  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
