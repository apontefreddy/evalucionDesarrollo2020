import { Component, OnInit } from '@angular/core';
import { Persona } from "../models/Persona";
import { PersonaService } from "../services/persona.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-agrega-persona',
  templateUrl: './agrega-persona.component.html',
  styleUrls: ['./agrega-persona.component.css']
})
export class AgregaPersonaComponent implements OnInit {

  persona: Persona = new Persona;
  exito: boolean = false;
  siMensaje: boolean = false;
  personas:Persona[]=[];


  constructor(private personaService: PersonaService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("fechaNac")[0].setAttribute('max', today);
  }

  enviar(){

      this.guardarPersona()
  }


  limpia(){
    //this.exito = false;
    //this.siMensaje = false;
    this.persona.nombre = null;
    this.persona.apellido = null;
    this.persona.fechaNac = null;
    this.persona.edad = null;
    this.persona.mensaje = null;


  }

  guardarPersona(){

    this.persona.fechaNacString=this.persona.fechaNac.toString();
    console.log(this.persona)

    this.spinnerService.show();

    this.personaService.personaAgrega(this.persona)
        .subscribe(
          (data:any) => {
            this.exito = true;
            this.persona = data;
            

            if (this.persona.mensaje !== null){
              this.cargarPersonas();
            }

            console.log(data)
            this.spinnerService.hide();
          }
        )

  }

  cargarPersonas(){
    this.personaService.cargarPersonas().subscribe(
      (data:any) => {
        this.personas=data;
        this.limpia();
      }
    )
    //this.personas.push(this.persona);
  }

  

}
