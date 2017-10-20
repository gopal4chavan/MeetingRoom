import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel {
  title: string;
}

@Component({
  selector: 'confirm',
  template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header text-center">
                     <button type="button" class="close" (click)="close()" >&times;</button>                    
                     <h1>Confirm Delete</h1>
                   </div>
                   <div class="model-body">
                      <br>
                      <div class="modal-title text-center">{{title || 'Confirm'}}</div>
                      <br>
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-danger" (click)="confirm()">Confirm</button>
                     <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
                   </div>
                 </div>
                </div>`,
  styleUrls:['app/Modals/delete-confirm.component.css']
})
export class DeleteConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    this.result = true;
    this.close();
  }
  cancel(){
      this.result=false;
      this.close();
  }
}