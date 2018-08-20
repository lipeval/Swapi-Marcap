import { Starship } from './starship.model';
import { Film } from './film.model';
import { Specie } from './specie.model';
import { Base } from './base.model';
import { Vehicle } from './vehicle.model';
import { Planet } from './planet.model';

/**
 * Classe per il wrapping delle api dei personaggi
 */
export class People extends Base {
  /**
   * Nome del personalggio
   */
  name: string;
  /**
   * Altezza
   */
  height: string;

  /**
   * Massa
   */
  mass: string;
  /**
   * Colore die capelli
   */
  hair_color: string;
  /**
   * Colore della pelle
   */
  skin_color: string;
  /**
   * Colore degli occhi
   */
  eye_color: string;
  /**
   * Data di nascita
   */
  birth_year: string;
  /**
   * Genere
   */
  gender: string;
  /**
   * Url al pianeta natale
   */
  homeworld: string;
  /**
   * Oggetto del pianeta natale
   */
  homeworldObj: Planet;
  /**
   * elenco dei film
   */
  films: string[];
  /**
   * Oggetto film
   */
  filmsObj: Film[];
  /**
   * specie url
   */
  species: string[];
  /**
   * Oggetto specie url
   */
  speciesObj: Specie[];
  /**
   * Url dei veicoli utilizzati
   */
  vehicles: string[];
  /**
   * Oggetti estratti dagli url dei veicoli
   */
  vehiclesObj: Vehicle[];
  /**
   * Navi spaziali url
   */
  starships: string[];
  /**
   * Oggetti estratti dalle navi spaziali url
   */
  starshipsObj: Starship[];
}
/**
 * Campi per la renderizzazione nelle tabelle di lookup
 */
export const PeopleFields = [
  {
    label: 'Name',
    field: 'name'
  },
  {
    label: 'Height',
    field: 'height'
  },

  {
    label: 'Mass',
    field: 'mass'
  },
  {
    label: 'Name',
    field: 'name'
  },
  {
    label: 'Hair Color',
    field: 'hair_color'
  },
  {
    label: 'Skin Color',
    field: 'skin_color'
  },
  {
    label: 'Eye Color',
    field: 'eye_color'
  },
  {
    label: 'Birth year',
    field: 'birth_year'
  },
  {
    label: 'Gender',
    field: 'gender'
  }
];
