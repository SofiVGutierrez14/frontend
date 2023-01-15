import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-perfil-add',
  templateUrl: './modal-perfil-add.component.html',
  styleUrls: ['./modal-perfil-add.component.css']
})
export class ModalPerfilAddComponent implements OnInit {

  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    titulo: new FormControl('', Validators.required),
  })
  constructor() { }

  ngOnInit() {
  }

}
