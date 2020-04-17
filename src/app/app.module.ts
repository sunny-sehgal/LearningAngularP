import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './routes/admin/admin.component';
import { ActivateGuard } from './services/authGuard/activate.guard';
import { UserService } from './services/authGuard/user.service';
import { HomeComponent } from './routes/home/home.component';
import { Approutes } from './Routing'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleChartsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot( Approutes )
  ],
  providers: [ActivateGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
