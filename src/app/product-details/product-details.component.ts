import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html"
})
export class ProductDetailsComponent implements OnInit {
  product: { name: string; price: number; description: string; };

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
  }

  addToCart(product: { name: string; price: number; description: string; }): void {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }

}
