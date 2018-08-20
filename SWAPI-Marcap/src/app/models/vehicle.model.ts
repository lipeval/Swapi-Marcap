import { Film } from './film.model';
import { Macchine } from './macchine.model';
import { People } from './people.model';

export class Vehicle extends Macchine {
  consumables: string;
 
  vehicle_class: string;

  films: string;
 

  filmsObj: Film[];
 

  pilots: string;


  pilotsObj: People[];
}

export const VehicleFields = [
  {
    label: 'Name',
    field: 'name'
  },
  {
    label: 'Cargo Capacity',
    field: 'cargo_capacity'
  },
  {
    label: 'Cost in credits',
    field: 'cost_in_credits'
  },

  {
    label: 'Crew',
    field: 'crew'
  },

  {
    label: 'Consumables',
    field: 'consumables'
  },

  {
    label: 'Length',
    field: 'length'
  },

  {
    label: 'Manufacturer',
    field: 'manufacturer'
  },

  {
    label: 'Maxa atmosphering speed',
    field: 'max_atmosphering_speed'
  },

  {
    label: 'Model',
    field: 'model'
  },

  {
    label: 'Passengers',
    field: 'passengers'
  },
  {
    label: 'Vehicle class',
    field: 'vehicle_class'
  }
];
