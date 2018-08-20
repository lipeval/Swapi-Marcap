import { Base } from './base.model';
import { Specie } from './specie.model';
import { Planet } from './planet.model';
import { Vehicle } from './vehicle.model';
import { People } from './people.model';
/**
 * Oggeto Film
 */
export class Film extends Base {
  /**
   * titolo
   */
  title: string;
  /**
   * Regista
   */
  director: string;
  /**
   * Numero Episodio
   */
  episode_id: number;
  /**
   * titoli di test
   */
  opening_crawl: string;
  /**
   * Produttori
   */
  producer: string;
  /**
   * Data di uscita
   */
  release_date: string;
  /**
   * Specie presenti
   */
  species: string;
  /**
   * Specie presenti estratte in dimamico tramite url
   */
  speciesObj: Specie[];
  /**
   * Personaggi
   */

  characters: string;
  /**
   * Personalli presenti estratte in dimamico tramite url
   */
  charactersObj: People[];

  /**
   * Pianeti
   */
  planets: string;

  /**
   * Pianteti presenti estratte in dimamico tramite url
   */
  planetsObj: Planet[];

  /**
   * Veicoli
   */
  vehicles: string;

  /**
   * Veicoli presenti estratte in dimamico tramite url
   */
  vehiclesObj: Vehicle[];
}
/**
 * Oggetti estratti nelle pop-up delle descrizioni
 */
export const FilmFields = [
  {
    label: 'Title',
    field: 'title'
  },
  {
    label: 'Director',
    field: 'director'
  },
  {
    label: 'Producer',
    field: 'producer'
  },
  {
    label: 'Release date',
    field: 'release_date'
  },

  {
    label: 'Episode',
    field: 'episode_id'
  },

  {
    label: 'Opening Crawl',
    field: 'opening_crawl'
  }
];
