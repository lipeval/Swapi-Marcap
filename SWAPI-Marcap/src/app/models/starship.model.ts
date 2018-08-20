import { Macchine } from './macchine.model';
/**
 * Oggetto per le navi da battaglia
 */
export class Starship extends Macchine {
  /**
   * Classe della nava
   */
  starship_class: string;
  /**
   * Rating di velocità
   */
  hyperdrive_rating: string;
}

/**
 * Oggetti per la gestione dello lookup in visualizzazione
 */
export const StartShipFields = [
  {
    label: 'Name',
    field: 'name'
  },

  {
    label: 'Cargo Capacity',
    field: 'cargo_capacity'
  },

  {
    label: 'Consumables',
    field: 'consumables'
  },

  {
    label: 'Cost in Credits',
    field: 'cost_in_credits'
  },

  {
    label: 'Crew',
    field: 'crew'
  },
  {
    label: 'Hyperdrive rating',
    field: 'hyperdrive_rating'
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
    label: 'Max Atmosphering Speed',
    field: 'max_atmosphering_speed'
  },
  {
    label: 'model',
    field: 'model'
  },
  {
    label: 'Passengers',
    field: 'passengers'
  }
];
