import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search= new BehaviorSubject("")

  constructor(private http:HttpClient) { }

  viewAllproduct(){
    const baseurl='http://localhost:3000/products'
    return this.http.get(baseurl)
  }

  viewproduct(productid:any){
    const baseurl='http://localhost:3000/products/'+productid
    return this.http.get(baseurl)
  }
  deleteproduct(productid:any){
    const baseurl='http://localhost:3000/products/'+productid
    return this.http.delete(baseurl)
  }

  addproduct(productData:any){
    const baseurl='http://localhost:3000/products/'
    return this.http.post(baseurl,productData)
  }
  editproduct(productid:any,productData:any){
    const baseurl='http://localhost:3000/products/'+productid
    return this.http.put(baseurl,productData)

}
}