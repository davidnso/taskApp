import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
   
   }
   getTask(){
    return this.http.get('/api/tasks')
  }
   getCategories(){
     return this.http.get('/api/Categories')
   }
   deleteThisTask( id: number){
     
     return this.http.delete('/api/tasks/'+id);
   }
   deleteGeneralTask(id: number){

    return this.http.delete('/api/tasks/'+id);
   }
   addTask(input:string){
    return this.http.post('/api/tasks/',{
      text: input,
      completed: false
    }).subscribe()
   }
   addCategory(input:string){
     return this.http.post('/api/Categories/',{
       name: input,
       tasks: null
     }
    ).subscribe()
   }
   deleteCategory(id:number){
     return this.http.delete('/api/Categories/'+id);

   }
}
