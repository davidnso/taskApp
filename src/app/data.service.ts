import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
   
   }
   getTask(){
    return this.http.get('http://localhost:3000/tasks')
  }
   getCategories(){
     return this.http.get('http://localhost:3000/Categories')
   }
   deleteThisTask( id: number){
     
     return this.http.delete('http://localhost:3000/tasks/'+id);
   }
   deleteGeneralTask(id: number){

    return this.http.delete('http://localhost:3000/tasks/'+id);
   }
   addTask(input:string){
    return this.http.post('http://localhost:3000/tasks/',{
      text: input,
      completed: false
    }).subscribe()
   }
   addCategory(input:string){
     return this.http.post('http://localhost:3000/Categories/',{
       name: input,
       tasks: null
     }
    ).subscribe()
   }
   deleteCategory(id:number){
     return this.http.delete('http://localhost:3000/Categories/'+id);

   }
}
