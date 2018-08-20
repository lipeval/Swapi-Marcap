export class ItemListBase {
  public totalRecords: number;
  public loading = true;
  public currentPage = 1;

  public customFields;

  public modalItem;
  public displayModalDetail = false;
  public modalType: string;

  
  public resetModal(Event: Event) {
    this.displayModalDetail = false;
    this.modalItem = null;
    this.modalType = null;
  }

  
  public displayModalPannel(item: any, type: string) {
    this.displayModalDetail = true;
    this.modalItem = item;
    this.modalType = type;
  }
}
