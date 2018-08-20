import { Base } from './base.model';
import { Film } from './film.model';
import { People } from './people.model';
/**
 * Pianeta
 */
export class Planet extends Base {
  /**
   * Nome
   */
  name: string;
  /**
   * Clima
   */
  climate: string;
  /**
   * Diametro
   */
  diameter: string;

  films: string;
  filmsObj: Film[];
  /**
   * Gravità
   */
  gravity: string;
  /**
   * Periodo orbitale
   */
  orbital_period: string;
  /**
   * Popolazione
   */
  population: string;
  /**
   * elenco dei residenti
   */
  residents: string;
  residentsObj: People[];
  /**
   * Periodo di rotazione
   */
  rotation_period: string;
  /**
   * Acqua presente
   */
  surface_water: string;

  /**
   * tipo di terreno
   */
  terrain: string;
}

/**
 * Gestione dei campi di dettaglio nella visualizzazione delle popo-up
 */
export const PlanetFields = [
  {
    label: 'Name',
    field: 'name'
  },
  {
    label: 'Climate',
    field: 'climate'
  },

  {
    label: 'Diameter',
    field: 'diameter'
  }
];
