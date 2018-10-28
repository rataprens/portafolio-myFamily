import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InfoPagina} from "../interfaces/info-pagina.interface";

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

    info: InfoPagina = {};
    cargada = false;

    familia:any[];

  constructor(private http:HttpClient) {

    this.cargarInfo();
    this.cargarFamilia();
  }


  private cargarInfo(){
    console.log("servicio cargado");
    this.http.get("assets/data/data-pagina.json").subscribe((res: InfoPagina) =>{
        this.cargada = true;
        this.info = res;
      });
  }

  private cargarFamilia(){
    this.http.get("https://familyportfolio-faec8.firebaseio.com/familia.json").subscribe((res:any) =>{
      this.familia = res;
      console.log(res);
    });
  }
}
