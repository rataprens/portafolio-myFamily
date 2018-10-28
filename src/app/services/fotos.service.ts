import { Injectable } from '@angular/core';
import { FotosPagina } from "../interfaces/fotos-pagina.interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  bandera = true;
  foto: FotosPagina[] = [];
  fotoFiltrado: FotosPagina[] = [];

  constructor(private http:HttpClient ) {
      this.cargarFotos();
 }

 cargarFotos(){
  
  return new Promise(  (resolve, reject) =>{
    this.http.get("https://familyportfolio-faec8.firebaseio.com/foto.json").subscribe((res: FotosPagina[]) =>{
      this.foto = res;

      setTimeout(() =>{
        this.bandera = false;
      }, 500)

      resolve();
    });
  } );


 }

 buscarFotos(termino: string){
    
    if(this.foto.length === 0){
        
      this.cargarFotos().then(()=>{
          
        this.filtarFotos(termino);
      });
    }else{
      this.filtarFotos(termino);
    }
 }

 filtarFotos(termino: string){

  termino = termino.toLocaleLowerCase();
    
  console.log(this.foto);
  this.fotoFiltrado = [];

  this.foto.forEach(foto =>{
    
    const tituloLower = foto.titulo.toLocaleLowerCase();
    const subtituloLower = foto.subtitulo.toLocaleLowerCase();

    if(tituloLower.indexOf(termino)>=0 || subtituloLower.indexOf(termino)>= 0){
      this.fotoFiltrado.push(foto);
    }
  })
 }
}
