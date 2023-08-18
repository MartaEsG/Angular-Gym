import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassI, UserI } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  url:string ="http://localhost:5000/class";
  url2: string="http://localhost:5000/users"
  id!: any;
  clase!: ClassI;

  constructor(private http: HttpClient) { }

  register(user: UserI){
    return this.http.post(`${this.url2}/register`, user)
  }

  login(user: UserI){
    return this.http.post(`${this.url2}/login`, user)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

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
