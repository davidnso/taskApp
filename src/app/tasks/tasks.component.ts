import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'; 
import {MatDialog} from "@angular/material";
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import {observable} from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  Tasks$: Object; 
  constructor(private data: DataService,public dialog: MatDialog) { }

  ngOnInit() {
   this.data.getTask().subscribe(
     data=>this.Tasks$ = data
   )
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
 
  deleteGenTasks(id: number){
    this.data.deleteGeneralTask(id).subscribe()
    window.location.reload()
    
  }
  addGeneralTask(){

  }
}
