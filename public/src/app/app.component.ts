import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  tasks =[];
  single;
  isHidden = true;
  newTask: any = {title: '', description: ''};
  editTask: any = {title: '', description: ''};
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    // this.getTasksFromService();
    // this.getSingleTaskFromService();
  }

  onButtonClick(): void { 
    let observable = this._httpService.getTasks();
    observable.subscribe((data: any) => {
      console.log("Gzot our taskz", data)
      this.tasks = data;
    });
}
onButtonClickParam(id: string){ 
  let observable = this._httpService.getSingle(id);
  observable.subscribe((data: any) => {
    console.log("Got one task", data)
    this.single = data;
  });
}
onSubmit(){
  //why do i need observable for creating 
  console.log(this.newTask);
  let observable  = this._httpService.addTask(this.newTask);
  observable.subscribe((data: any) => {
    this.newTask = {title: '', description: ''};
  })
}

showEditForm(id:string){
  this.isHidden = false;
  let observable = this._httpService.getSingle(id);
  observable.subscribe((data: any) => {
    console.log("Got one task", data)
    this.editTask = data;
  });
}
onEditSubmit(){
    //why do i need observable for creating 
  console.log(this.editTask);
  let observable  = this._httpService.sendUpdatedTask(this.editTask);
  observable.subscribe((data: any) => {
    this.editTask = {title: '', description: ''};
  });
}
onDeleteForm(id:string){
  console.log(id);
  let observable  = this._httpService.sendTaskToDelete(id);
  observable.subscribe((data: any) => {
  });
}




// onButtonClickParamEdit(id:any){
//   //why do i need observable for creating 
//   console.log(this.editTask);
//   let observable  = this._httpService.sendUpdatedTask(this.editTask);
//   observable.subscribe((data: any) => {
//     this.editTask = {title: '', description: ''};
//   })
// }


  // getTasksFromService(){
  //   let observable = this._httpService.getTasks();
  //   observable.subscribe((data: any) => {
  //     console.log("Gzot our taskz", data)
  //     this.tasks = data;
  //   });
  // }
  // getSingleTaskFromService(){
  //     let observable = this._httpService.getSingle();
  //     observable.subscribe((data: any) => {
  //       console.log("Got one task", data)
  //       this.single = data;
  //     });
  // }
}
