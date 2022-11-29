import { MaterialService } from './../../services/material.service';
import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/model/material';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  materiales: Material[] = [];

  constructor(private materialServicio: MaterialService) { }

  ngOnInit(): void {
    this.cargarMateriales();
  }

  cargarMateriales(): void {
    this.materialServicio.list().subscribe(data => { this.materiales = data; })
  }

  borrar(id?: number) {
    alert("¿Esta seguro de eliminar el material seleccionado?")
    if (id != undefined) {
      this.materialServicio.delete(id).subscribe({
        next: data => {
          alert("Material Borrado.");
          this.cargarMateriales();
        }, error: err => {
          alert("No se puede eliminar el libro")
        }
      }
      )
    }
  }

}
