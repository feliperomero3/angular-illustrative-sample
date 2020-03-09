import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items: { name: string; price: number; description: string; }[];
  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder) {
      this.checkoutForm = this.formBuilder.group({
        name: "",
        address: ""
      });
    }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData: any): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn("Your order has ee sumited", customerData);
  }

}
