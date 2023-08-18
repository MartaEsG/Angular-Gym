import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassI } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  url:string ="http://localhost:5000/class";
  id!: any;
  clase!: ClassI;

  constructor(private http: HttpClient) { }

  getClases(){
   return this.http.get(this.url)
  }

  getClassByID (id: string){
    return this.http.get(`${this.url}/${id}`)
  }

  postClass(clase: ClassI){
    return this.http.post(this.url, clase)
  }

  putClass (clase: ClassI, id:string){
    return this.http.put(`${this.url}/${id}`, clase)
  }

  deleteClass (id: string){
    return this.http.delete(`${this.url}/${id}`)
  }

  setClass(clase: ClassI, id: string){
    this.clase = {...clase}
    this.id = id;
  }

  getClass(){
    return this.clase
  }
  getID (){
    return this.id
  }
}
