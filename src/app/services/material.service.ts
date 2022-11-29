import { Material } from './../model/material';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  URL = "http://localhost:8080/api/"

  constructor(private httpClient: HttpClient) { }

  //create

  public save(material: Material): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', material);
  }

  //read

  public list(): Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.URL + 'vertodos');

  }

  public detail(id: number): Observable<Material> {
    return this.httpClient.get<Material>(this.URL + `ver/${id}`);
  }

  //delete

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }

  //update

  public update(id: number, material: Material): Observable<any> {
    return this.httpClient.put<any>(this.URL + `editar/${id}`, material);
  }

}
