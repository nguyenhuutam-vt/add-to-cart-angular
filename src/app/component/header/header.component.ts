import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public totalItem: number = 0;
  constructor(private survice: ApiService) {}
  ngOnInit(): void {
    this.survice.getProducts().subscribe((res: any) => {
      this.totalItem = res.length;
    });
  }
}
