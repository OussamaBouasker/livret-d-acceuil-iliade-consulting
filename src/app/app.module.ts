import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoursComponent } from './cours/cours.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations:[
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,

    CoursComponent,
      LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
