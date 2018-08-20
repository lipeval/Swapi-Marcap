import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) {}

  
  public loadData: any;
  public keys: any;


  ngOnInit() {
    this.loadMain();
  }


  public onClickNavigateList(page: string) {
    this.router.navigate([`/list/${page}`]);
  }

 
  private loadMain() {
    this.apiService.getUrl().then(data => {
      console.log(data);
      this.loadData = data;
      this.keys = Object.keys(data);
      console.log(this.keys);
    });
  }
}
