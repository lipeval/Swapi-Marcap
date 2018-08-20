import { Base } from './base.model';
import { Planet } from './planet.model';
import { People } from './people.model';
import { Film } from './film.model';

/**
 * Oggetto di specifica delle specie
 */
export class Specie extends Base {
  /**
   * Nome
   */
  name: string;

  /**
   * altezza media
   */
  average_height: string;

  /**
   * Vita massima
   */
  average_lifespan: string;
  /**
   * Classificazione
   */
  classification: string;

  /**
   * Destino
   */
  designation: string;
  /**
   * colore della pelle
   */
  skin_colors: string;

  /**
   * colore degli occhi
   */
  eye_colors: string;
  /**
   * colore dei capelli
   */
  hair_colors: string;

  /**
   * Casa natale url
   */
  homeworld: string;
  /**
   * Casa natale obj
   */
  homeworldObj: Planet;

  /**
   * Lingua
   */
  language: string;

  /**
   * elenco personaggi
   */
  people: string;
  /**
   * elenco personaggi Obj
   */
  peoplesObj: People[];

  /**
   * elenco film url
   */
  films: string;
  /**
   * elenco film obj
   */

  filmsObj: Film[];
}

export const SpecieFields = [
  { label: 'Name', field: 'name' },
  { label: 'Average Height', field: 'average_height' },
  { label: 'Average Lifespan', field: 'average_lifespan' },
  { label: 'Classificazione', field: 'classification' },
  { label: 'Designation', field: 'designation' },
  { label: 'Eye colors', field: 'eye_colors' },
  { label: 'Hair colors', field: 'hair_colors' },
  { label: 'Skin Colors', field: 'skin_colors' },
  { label: 'Language', field: 'language' }
];
