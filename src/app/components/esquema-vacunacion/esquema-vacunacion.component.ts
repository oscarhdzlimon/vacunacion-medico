import { CommonModule } from '@angular/common';
import { Component, Input, input, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ModalEfectosSecundariosComponent } from './modal-efectos-secundarios/modal-efectos-secundarios.component';
import { TranslateModule } from '@ngx-translate/core';
import {
  gruposVacunas,
  infoDosis,
  resumenVacuna,
  VwEsquemaBasicoPaciente,
} from '../../models/PacienteHomeResponse';
import { GroupingService } from '../../services/grouping.services';

@Component({
  selector: 'app-esquema-vacunacion',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatGridListModule, TranslateModule],
  templateUrl: './esquema-vacunacion.component.html',
  styleUrl: './esquema-vacunacion.component.scss',
})
export class EsquemaVacunacionComponent {
  @Input() vwEsquemaBasicoPaciente!: VwEsquemaBasicoPaciente[];

  public grupos: gruposVacunas[] = [];

  public mostrarVacuna1 = true;
  public mostrarVacuna2 = true;

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

  mostrarVacuna(vacuna: any) {
    vacuna.mostrar = !vacuna.mostrar;
  }

  vaccines = [
    {
      name: 'Influenza',
      description: 'Anual 2024',
      status: 'No aplicada',
      statusColor: '#d32f2f',
      color: 'rojo',
      nextDate: 'No aplicada',
      nextDate2: 'Perdida por edad',
      vacunas: [],
    },
    {
      name: 'TD / TDPA',
      description: 'Tétanos, Difteria, Tos ferina | Cada 10 años',
      status: 'Próxima',
      statusColor: '#ff9800',
      color: 'amarillo',
      nextDate: 'Próxima',
      nextDate2: '3 semanas',
      vacunas: [],
    },
    {
      name: 'Antihepatitis B',
      description: 'Mayores de 65 años o en riesgo',
      status: '',
      statusColor: '#388e3c',
      color: 'verde',
      nextDate: 'Aplicada',
      nextDate2: '12/nov/2024',
      vacunas: [
        {
          dosis: 'Primera dosis',
          mostrar: false,
        },
        {
          dosis: 'Segunda dosis',
          mostrar: true,
        },
      ],
    },
  ];

  vaccines2 = [
    {
      name: 'Virus del Papiloma Humano (VPH)',
      description: '2a dosis para niños y niñas',
      status: 'Aplicada',
      statusColor: '#d32f2f',
      color: 'verde',
      nextDate: 'Aplicada',
      nextDate2: '10:20 am',
      vacunas: [
        {
          dosis: 'Primera dosis',
          mostrar: false,
        },
        {
          dosis: 'Segunda dosis',
          mostrar: false,
        },
      ],
    },
  ];

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.agruparVacunas();
  }

  public agruparVacunas() {

    this.vwEsquemaBasicoPaciente.forEach((item) => {
      if (this.grupos.filter((x) => x.idgrupo == item.idgrupo).length == 0) {
        let itemGrupo = new gruposVacunas();
        itemGrupo.idgrupo = item.idgrupo;
        itemGrupo.grupo = item.grupo;
        itemGrupo.ordencuadrobasico = item.ordencuadrobasico;
        itemGrupo.vacunas = [];
        this.grupos.push(itemGrupo);
      }
    });

    this.grupos.forEach((grupo) => {
      let vacunas = this.vwEsquemaBasicoPaciente.filter(x=>x.idgrupo == grupo.idgrupo);
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

    });
  }
}
