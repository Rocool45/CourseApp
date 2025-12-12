import { Component, OnInit, ViewChild } from '@angular/core';
import { Icard } from '../../model/card';
import { CardsService } from '../../service/cards.service';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-cards-form',
  templateUrl: './cards-form.component.html',
  styleUrls: ['./cards-form.component.scss']
})
export class CardsFormComponent implements OnInit {
  editobj !: Icard
isinEditMode : boolean =false

  @ViewChild("cardform") cardform !: NgForm
  constructor(
    private _cardService : CardsService,
    private _uuidservice : UuidService,
    private _snackBar : SnackbarService
  ) { }

  ngOnInit(): void {
    this._cardService.Editcard$.subscribe({
      next : res => {
        this.editobj =res
         this.isinEditMode = true
        this.cardform.form.patchValue(res)
      },
      error : err=> console.log(err)
    })
  }

  OnAddcards(){
   if(this.cardform.valid){
     let obj : Icard= {...this.cardform.value,cardId:this._uuidservice.uuid()}
    this._cardService.AddCardsIndata(obj)
    .subscribe({
      next : res=>{
        this._snackBar.openSnackBar(`Course is Added Successfully ${res.heading}`)
         this.cardform.reset()
      },
      error : err=>console.log(err)
    })
   }
  }

  OnUpdateCard(){
    let Updated_obj :Icard = {...this.cardform.value,cardId:this.editobj.cardId};
    this._cardService.updatecard(Updated_obj)
    .subscribe({
      next : res=>{
         this.cardform.reset();
        this.isinEditMode=false;
        this._snackBar.openSnackBar(`The Course is updated with id ${res.cardId}`);
      },
      error : err=>console.log(err)
    })
  }
  
}
