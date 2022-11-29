import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from './../../services/material.service';
import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/model/material';

@Component({
  selector: 'app-edit-material',
  templateUrl: './edit-material.component.html',
  styleUrls: ['./edit-material.component.scss']
})
export class EditMaterialComponent implements OnInit {

  material: Material = null;

  constructor(private materialService: MaterialService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id']
    this.materialService.detail(id).subscribe({
      next: data => {
        alert("¿Seguro que desea modificar el material?")
        this.material = data;
      }, error: err => {
        alert("Error al seleccionar el material.");
        this.router.navigate(['']);
      }
    })
  }
  onUpdate(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.materialService.update(id, this.material).subscribe({
      next: data => {
        alert("material modificado correctamente");
        this.router.navigate(['']);
      }, error: err => {
        alert("error al modificar el material.")
        this.router.navigate(['']);
      }
    })
  }
}

