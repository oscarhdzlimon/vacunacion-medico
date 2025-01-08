import { Component, Input, SimpleChanges } from '@angular/core';
import { ModalEfectosSecundariosComponent } from '../modal-efectos-secundarios/modal-efectos-secundarios.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { gruposVacunas, infoDosis, resumenVacuna, VwOtrasVacPaciente } from '../../../models/PacienteHomeResponse';

@Component({
  selector: 'app-otras',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatGridListModule,TranslateModule],
  templateUrl: './otras.component.html',
  styleUrl: './otras.component.scss'
})
export class OtrasComponent {

  @Input() vwOtrasVacPaciente !: VwOtrasVacPaciente[];
    public grupos: gruposVacunas = new gruposVacunas();


  constructor(
    public dialog: MatDialog
  ) {}

  openModal(listaEfectos: any): void {
    this.dialog.open(ModalEfectosSecundariosComponent, {
      data: {
        efectos: listaEfectos
      },
      width: '800px',
    });
  }

  vaccines = [
    {
      name: 'COVID 19',
      description: 'Mayores de 65 años o en riesgo',
      status: 'Aplicada',
      color: 'verde',
      nextDate: 'Aplicada',
      nextDate2: '12/nov/2024',
      vacunas: [{
        dosis: 'Primera dosis',
        mostrar: false
      }, {
        dosis: 'Segunda dosis',
        mostrar: true
      }]
    }
  ];
  vaccines2 = [
    {
      name: 'Fiebre Tifoides',
      description: 'Única dosis',
      status: 'Aplicada',
      statusColor: '#d32f2f',
      color: 'verde',
      nextDate: 'Aplicada',
      nextDate2: '12/nov/2024'
    },
    {
      name: 'Triple viral - SRP',
      description: '2a dosis',
      status: 'Aplicada',
      statusColor: '#d32f2f',
      color: 'verde',
     nextDate: 'Aplicada',
      nextDate2: '12/nov/2024'
    }
  ];

  mostrarVacuna(vacuna:any){
    vacuna.mostrar = !vacuna.mostrar;
  }

   ngOnChanges(changes: SimpleChanges) {
      console.log(changes);
      this.agruparVacunas();
    }

    public agruparVacunas() {

      let itemGrupo = new gruposVacunas();

      this.grupos = itemGrupo;


        this.vwOtrasVacPaciente.forEach((vacuna)=>{
          let itemVacuna = new resumenVacuna();
          itemVacuna.idvacuna = vacuna.idvacuna;
          itemVacuna.vacunanombre = vacuna.vacunanombre;
          itemVacuna.fechaaplicacion = vacuna.fechaaplicacion;
          itemVacuna.estatus = vacuna.estatus;

          switch(itemVacuna.estatus){
            case "Aplicada":
              itemVacuna.color = "verde";
              break;

              case "No Aplicada":
                itemVacuna.color = "rojo";
              break;

              default:
                itemVacuna.color = "amarillo";
              break;

          }

          //itemVacuna.color =
          itemVacuna.dosis = []


          if(this.grupos.vacunas?.filter(x=>x.idvacuna == itemVacuna.idvacuna).length==0){
            this.grupos.vacunas.push(itemVacuna);
          }
        });


        this.grupos.vacunas?.forEach((item)=>{

          let dosisVacuna = this.vwOtrasVacPaciente.filter(x=>x.idvacuna == item.idvacuna);
          dosisVacuna.forEach((dosis)=>{
            let itemDosis = new infoDosis();
            itemDosis.lugaraplicacion = dosis.lugaraplicacion;
            itemDosis.fechaaplicacion = dosis.fechaaplicacion;
            //itemDosis.horaaplicacion = dosis.horaaplicacion;

            itemDosis.viaadministracion = dosis.viaadministracion;
            itemDosis.dosisadministrada = dosis.dosisadministrada;
            itemDosis.fabricante = dosis.fabricante;
            itemDosis.dosistipo = dosis.dosistipo;
            itemDosis.lote = dosis.lote;
            itemDosis.EfectosAdversos = dosis.EfectosAdversos;


            item.dosis?.push(itemDosis);
          });


        });

    }
}
