import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
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

  private searchTerm$ = new BehaviorSubject<string>('');
  produits$: Observable<Produit[]>;
  messageAucunProduit = ''; 

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.produits$ = combineLatest([
      this.apiService.getProduits(),
      this.searchTerm$
    ]).pipe(
      map(([produits, searchTerm]) => {
        const filteredProduits = produits.filter(produit =>
          produit.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          produit.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (produit.prix <= parseFloat(searchTerm) && !isNaN(parseFloat(searchTerm)))
        );

        
        this.messageAucunProduit = filteredProduits.length === 0 ? 'Aucun produit trouvé' : '';
        
        return filteredProduits;
      })
    );
  }

  onCriteresRecherche(searchTerm: string): void {
    this.searchTerm$.next(searchTerm);
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.onCriteresRecherche(input.value);
  }
}
