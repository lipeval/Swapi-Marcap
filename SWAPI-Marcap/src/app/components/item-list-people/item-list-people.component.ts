import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LazyLoadEvent } from 'primeng/primeng';
import { People } from '../../models/people.model';
import { ItemListBase } from '../item-list-base';

@Component({
  selector: 'app-item-list-people',
  templateUrl: './item-list-people.component.html',
  styleUrls: ['./item-list-people.component.css']
})
export class ItemListPeopleComponent extends ItemListBase {
  public loadData: People[];
  public mainUrl = 'people';
  
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    super();
  }

  
  public loadDataAndConfigureTable(event: LazyLoadEvent) {
    this.currentPage = event.first / event.rows;
    if (this.currentPage === 0) {
      this.currentPage = 1;
    } else {
      this.currentPage++;
    }
    this.loading = true;
    this.apiService.getUrlPages(this.currentPage, this.mainUrl).then(data => {
      data.results.forEach(d => this.apiService.elaborateLookup(d));

      this.loadData = data.results;

      this.totalRecords = data.count;
      this.loading = false;
    });
  }
}
