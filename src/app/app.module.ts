import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { ApiService } from './api.service';
import { routes } from './app.routes';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule,CommonModule,RouterModule.forRoot(routes)],
  declarations: [AppComponent, ListeComponent],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule {}