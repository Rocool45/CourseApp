import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../service/cards.service';
import { Icard } from '../../model/card';
import { SnackbarService } from '../../service/snackbar.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  courses : Array<Icard> =[]
  constructor(
    private _CardsService : CardsService,
    private  _sncakbar : SnackbarService,
    private _MatDialog : MatDialog
  ) { }

  ngOnInit(): void {

     this._CardsService.fetchAllCards()
      .subscribe({
        next : res=>{
          console.log(res)
          this.courses = res
        }
      })
  }
    OnEditcard(EditObj:Icard){
       this._CardsService.Editcard$.next(EditObj)
    }

    OnRemove(id:string){
      let configObj =new MatDialogConfig
      configObj.width="400px";
      configObj.disableClose = true;
      configObj.maxHeight = "90%";
      configObj.data = "Are You Sure , You Want To Remove This Course";
    const MatdialogRef=this._MatDialog.open(GetConfirmComponent,configObj)

    MatdialogRef.afterClosed()
    .subscribe({
      next : res=>{
    if(res){
       this._CardsService.onRemoveobj(id)
      .subscribe({
        next : res=>{
      this._sncakbar.openSnackBar(`This course is Removed with ${res}`)
        },
        error : err=>console.log(err)
      })
    }
      }
    })
    }

}
