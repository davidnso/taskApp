import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {
  userTask:string;
  constructor(private data:DataService) { }

  ngOnInit() {
  }
  sendInput(){
    userTask: this.userTask
    this.data.addTask(this.userTask)
    document.write()
  }

}
