import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public product: any[] = [];
  public grandTotal!: number;
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res: any) => {
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }
  constructor(private cartService: ApiService) {}

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }
}
