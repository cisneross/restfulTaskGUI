import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
  }
  getTasks(){
    //ajax stuff basically
    // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
 }


 getSingle(id:string){
    return this._http.get(`/tasks/${id}`);
 }

addTask(newOne){
  console.log(newOne);
  return this._http.post('/tasks', newOne);
}

sendUpdatedTask(editedTask){
  console.log(editedTask);
  return this._http.put(`/tasks/${editedTask._id}`, editedTask);
}
sendTaskToDelete(id:string){
  return this._http.delete(`/tasks/${id}`);
}
}
