import { Component, OnInit } from '@angular/core';
import {FotosService} from "../../services/fotos.service";

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public _foto:FotosService) { }

  ngOnInit() {
  }

}
