import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppService } from './_services/app.service';
import { AlertService} from './_services/alert.service';
import {AlertComponent } from './_directives/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,HttpClientModule,
    MatCardModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule, MatButtonModule
  ],
  providers: [AppService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
