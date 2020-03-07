import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html"
})
export class ProductDetailsComponent implements OnInit {
  product: { name: string; price: number; description: string; };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
  }

}
