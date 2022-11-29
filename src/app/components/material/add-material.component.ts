import { Router, RouterModule } from '@angular/router';
import { Material } from './../../model/material';
import { MaterialService } from './../../services/material.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.scss']
})
export class AddMaterialComponent implements OnInit {

  nombreMaterial: string = '';
  precioMaterial!: number;

  constructor(private materialServ: MaterialService, private router: Router) { }

  ngOnInit(): void {

  }
  onCreate(): void {
    const material = new Material(this.nombreMaterial, this.precioMaterial);
    this.materialServ.save(material).subscribe({
      next: data => {
        alert("Material agregado.");
        this.router.navigate(['']);
      }, error: err => {
        alert("No se pudo agregar el material")
        this.router.navigate(['']);
      }
    })
  }

}
