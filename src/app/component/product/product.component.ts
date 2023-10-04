import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(private service: ApiService) {}

  productArray: any[] = [];
  ngOnInit(): void {
    this.getProduct();
    this.productArray.forEach((res : any)=>{
      Object.assign(res,{quantity :1 ,total: res.price})
    })
  }
  getProduct() {
    this.service.getProduct().subscribe((res: any) => {
      console.log(res);
      this.productArray = res;
    });
  }
  addtoCart(item: any) {
    this.service.addToCart(item);
  }
}
