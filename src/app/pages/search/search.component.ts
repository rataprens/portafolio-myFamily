import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotosService } from '../../services/fotos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, public _fotos: FotosService) { }

  ngOnInit() {

    this.route.params.subscribe( params =>{

      this._fotos.buscarFotos(params['termino']);
      
    })
  }

  

}
