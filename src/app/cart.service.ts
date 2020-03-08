import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];

  constructor(private http: HttpClient) {}

  addToCart(product: { name: string; price: number; description: string; }): void {
    this.items.push(product);
  }

  getItems(): { name: string; price: number; description: string; }[] {
    return this.items;
  }

  clearCart(): { name: string; price: number; description: string; }[] {
    this.items = [];
    return this.items;
  }
}
