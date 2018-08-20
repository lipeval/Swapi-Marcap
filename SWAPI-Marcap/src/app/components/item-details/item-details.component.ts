import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { StartShipFields } from '../../models/starship.model';
import { VehicleFields } from '../../models/vehicle.model';
import { PlanetFields } from '../../models/planet.model';
import { FilmFields } from '../../models/film.model';
import { PeopleFields } from '../../models/people.model';
import { SpecieFields } from '../../models/specie.model';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  public customFields;

  @Output()
  public onChiudi: EventEmitter<any> = new EventEmitter();

  @Input()
  public displayModal;

  @Input()
  public modalItem;

  @Input()
  set objecttype(value: string) {
    if (!value) {
      return;
    }
    switch (value) {
      case 'starship':
        this.customFields = StartShipFields;
        break;
      case 'veichle':
        this.customFields = VehicleFields;
        break;
      case 'film':
        this.customFields = FilmFields;
        break;
      case 'people':
        this.customFields = PeopleFields;
        break;
      case 'planet':
        this.customFields = PlanetFields;
        break;
      case 'specie':
        this.customFields = SpecieFields;
        break;
      default:
        console.log('Spiacenti, non abbiamo ' + value);
    }
    this.displayModal = true;
  }

  get objecttype(): string {
    // transform value for display
    return 'null';
  }

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {}

  public onHideModal(event: Event) {
    this.displayModal = false;

    this.modalItem = null;
    this.onChiudi.emit(null);
  }
}
