
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  produits$: Observable<Produit[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.produits$ = this.apiService.getProduits();
  }
}
