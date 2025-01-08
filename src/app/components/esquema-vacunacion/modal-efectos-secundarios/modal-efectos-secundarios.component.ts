import { CommonModule } from '@angular/common';
import { Component, Inject, Input, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { EfectosAdverso } from '../../../models/PacienteHomeResponse';


@Component({
  selector: 'app-modal-efectos-secundarios',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './modal-efectos-secundarios.component.html',
  styleUrl: './modal-efectos-secundarios.component.scss'
})
export class ModalEfectosSecundariosComponent {
  //@Input() efectos?: EfectosAdverso[] = []

  constructor(public dialogRef: MatDialogRef<ModalEfectosSecundariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { efectos: EfectosAdverso[] }
  ) {
    console.log("Efectos: ",this.data.efectos);
  }

  close(): void {
    this.dialogRef.close();
  }


 ngOnChanges(changes: SimpleChanges) {
    console.log("Efectos: ",this.data);

  }

}
