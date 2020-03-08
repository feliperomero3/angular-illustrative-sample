import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];

  addToCart(product: { name: string; price: number; description: string; }): void {
    this.items.push(product);
  }
}
