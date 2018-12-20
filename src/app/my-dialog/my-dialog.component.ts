import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {
   userTask:string; 
  constructor(private data: DataService) { }
  

  ngOnInit() {
  }
  sendInput(){
    userTask: this.userTask
    this.data.addTask(this.userTask)
    document.write()
    window.location.reload()
  }

}
