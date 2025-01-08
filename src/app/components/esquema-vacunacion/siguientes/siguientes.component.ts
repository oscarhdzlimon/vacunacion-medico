import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { gruposVacunas, infoDosis, resumenVacuna, VwSiguientesVacPaciente } from '../../../models/PacienteHomeResponse';
import { MatDialog } from '@angular/material/dialog';
import { ModalEfectosSecundariosComponent } from '../modal-efectos-secundarios/modal-efectos-secundarios.component';

@Component({
  selector: 'app-siguientes',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatGridListModule,TranslateModule],
  templateUrl: './siguientes.component.html',
  styleUrl: './siguientes.component.scss'
})
export class SiguientesComponent {

  @Input() vwSiguientesVacPaciente !: VwSiguientesVacPaciente[];

   public grupos: gruposVacunas[] = [];

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
      name: 'Influenza',
      description: 'Anual 2025',
      status: 'Proxima',
      color: 'amarillo',
      nextDate: 'Proxima',
      nextDate2: '11 meses'
    },
    {
      name: 'Virus del Papiloma Humano (VPH)',
      description: '2a dosis para niños y niñas',
      status: 'Proxima',
      color: 'amarillo',
      nextDate: 'Proxima',
      nextDate2: '3 meses'
    },
    {
      name: 'Pentavalente acelular',
      description: '2a dosis',
      status: 'Proxima',
      color: 'amarillo',
      nextDate: 'Proxima',
      nextDate2: '5 semanas'
    },
    {
      name: 'COVID 19',
      description: '3a dosis',
      status: 'Proxima',
      color: 'amarillo',
      nextDate: 'Proxima',
      nextDate2: '2 semanas'
    }
  ];


    public llenarVacunas() {

      this.vwSiguientesVacPaciente.forEach((itemVacuna)=>{
        itemVacuna.color = "verde"
      })


     /*  this.vwSiguientesVacPaciente.forEach((item) => {
        if (this.grupos.filter((x) => x.idgrupo == item.idgrupo).length == 0) {
          let itemGrupo = new gruposVacunas();
          itemGrupo.idgrupo = item.idgrupo;
          itemGrupo.grupo = item.grupo;
          itemGrupo.ordencuadrobasico = item.ordencuadrobasico;
          itemGrupo.vacunas = [];
          this.grupos.push(itemGrupo);
        }
      }); */

      /* this.grupos.forEach((grupo) => {
        let vacunas = this.vwSiguientesVacPaciente.filter(x=>x.idgrupo == grupo.idgrupo);
        vacunas.forEach((vacuna)=>{
          let itemVacuna = new resumenVacuna();
          itemVacuna.idvacuna = vacuna.idvacuna;
          itemVacuna.vacunanombre = vacuna.vacunanombre;
          itemVacuna.vacunadescripcion = vacuna.vacunadescripcion;
          itemVacuna.fechaaplicacion = vacuna.fechaaplicacion;
          //itemVacuna.horaaplicacion = vacuna.idvacuna;
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


          if(grupo.vacunas?.filter(x=>x.idvacuna == itemVacuna.idvacuna).length==0){
            grupo.vacunas.push(itemVacuna);
          }
        });


        grupo.vacunas?.forEach((item)=>{

          let dosisVacuna = vacunas.filter(x=>x.idvacuna == item.idvacuna);
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

      }); */
    //}
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.llenarVacunas();
  }

}
