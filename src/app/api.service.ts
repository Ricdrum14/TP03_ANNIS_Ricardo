import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './models/produit';
import { environnement } from '../environnements/environnement';


@Injectable({
    providedIn: 'root'
  })
export class ApiService {

  constructor(private http:HttpClient) { }

    public getProduits () : Observable<Produit[]> {
        return this.http.get<Produit[]>(environnement.backendProduit);
    }
}