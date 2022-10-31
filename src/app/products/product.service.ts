import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search= new BehaviorSubject("")

  constructor(private httpClient:HttpClient) { }

  viewAllproduct(){
    const baseurl='http://localhost:3000/products'
    return this.httpClient.get(baseurl)
  }

}
