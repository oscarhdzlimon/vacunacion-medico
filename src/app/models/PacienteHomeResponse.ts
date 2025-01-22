export class AutenticacionRequest{
  username?:string
  password?:string
}

export class AutenticacionResponse{
  access_token?:string
}


export class PacienteHomeResponse{
  vwEsquemaBasicoPaciente :VwEsquemaBasicoPaciente[] = []
  vwOtrasVacPaciente:VwOtrasVacPaciente[] = []
  vwSiguientesVacPaciente:VwSiguientesVacPaciente[] = []
}

export class gruposVacunas{
  idgrupo?:number
  grupo?:string
  ordencuadrobasico?:number
  vacunas?: resumenVacuna[] = []
}

export class resumenVacuna {
  idvacuna?:number
  vacunanombre?:string
  dosistipo?:string
  vacunadescripcion?:string
  fechaaplicacion?:string
  horaaplicacion?:string
  estatus?:string
  color?:string
  dosis?: infoDosis[] = []
}


export class infoDosis {
  /* idvacuna?:number
  vacunanombre?:string */
  lugaraplicacion?:string
  fechaaplicacion?:string
  horaaplicacion?:string
  viaadministracion?:string
  dosisadministrada?:string
  fabricante?:string
  dosistipo?:string
  lote?:string
  mostrar: boolean = false
  EfectosAdversos?: EfectosAdverso[]
}


export class VwEsquemaBasicoPaciente {
  curp?:string
  dosisadministrada?:string
  dosistipo?:string
  estatus?:string
  fabricante?:string
  fechaaplicacion?:string
  grupo?:string
  idgrupo?:number
  idvacuna?:number
  lote?:string
  lugaraplicacion?:string
  ordencuadrobasico?:number
  vacunanombre?:string
  vacunadescripcion?:string
  viaadministracion?:string
  EfectosAdversos?: EfectosAdverso[]
}

export class VwOtrasVacPaciente {
  curp?:string
  dosisadministrada?:string
  viaadministracion?:string
  dosistipo?:string
  estatus?:string
  fabricante?:string
  fechaaplicacion?:string
  idvacuna?:number
  lote?:string
  lugaraplicacion?:string
  vacunanombre?:string
  color?:string
  EfectosAdversos?: EfectosAdverso[]
}

export class VwSiguientesVacPaciente {
  curp?:string
  dosistipo?:string
  fechaproximaaplicacion?:string
  idvacuna?:number
  vacunanombre?:string
  color?:string
}


export interface EfectosAdverso {
  descripcion: string
  efecto: string
  icon: string
  idefecto: number
  idvacuna: number
}
