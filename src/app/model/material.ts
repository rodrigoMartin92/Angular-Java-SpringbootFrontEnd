export class Material {
  id?: number
  nombreMaterial: string;
  precioMaterial: number;

  constructor(nombreMaterial: string, precioMaterial: number){
    this.nombreMaterial = nombreMaterial;
    this.precioMaterial = precioMaterial;
  }
}
