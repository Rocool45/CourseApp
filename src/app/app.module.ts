import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './shaerd/component/cards/cards.component';
import { CardsFormComponent } from './shaerd/component/cards-form/cards-form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, NgForm } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { GetConfirmComponent } from './shaerd/component/get-confirm/get-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardsFormComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
