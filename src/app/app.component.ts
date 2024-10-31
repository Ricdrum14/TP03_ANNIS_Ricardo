
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeComponent } from './liste/liste.component';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListeComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP03_ANNIS_Ricardo';
}
