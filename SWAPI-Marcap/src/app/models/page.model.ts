/**
 * Gestione della paginazione
 */
export class Page<T> {
  /**
   * Numero elementi
   */
  count: number;
  /**
   * indirizzo Prossima pagina
   */
  next: string;

  /**
   * Indirizzo pagina precedente
   */
  previous: string;

  /**
   * Risultati della pagina
   */
  results: T[];
}
