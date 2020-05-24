import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { Persona } from "../models/Persona";


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private endpoint = 'http://127.0.0.1:8080/api/persona' ;

  constructor(private http: HttpClient) { }

  personaAgrega(persona: Persona): Observable<object>{

    console.log(persona);
    console.log(persona.fechaNac);
    return this.http.post(this.endpoint, persona);

  }

  cargarPersonas(){
    let url = 'http://127.0.0.1:8080/api/listapersonas';

    return this.http.get(url);
  }


}
