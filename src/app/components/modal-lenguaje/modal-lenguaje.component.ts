import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí

@Component({
  selector: 'app-modal-lenguaje',
  standalone: true,
  imports: [MatDialogModule,CommonModule,MatRadioModule],
  templateUrl: './modal-lenguaje.component.html',
  styleUrl: './modal-lenguaje.component.scss'
})
export class ModalLenguajeComponent {
opcion:string=''
constructor(private dialogRef: MatDialogRef<ModalLenguajeComponent>){}
seleccion(){
  console.log(this.opcion)
  this.dialogRef.close()
}
}
