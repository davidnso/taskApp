import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {MatDialog} from "@angular/material";
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import {HttpClient, HttpParams} from '@angular/common/http';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  Categories$:Object;
  constructor(private data: DataService,public dialog: MatDialog,public http:HttpClient) { }

  ngOnInit() {
    this.data.getCategories().subscribe(
      data => this.Categories$ = data
    )
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  openUpdateDialog(id:number): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {

    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  deleteTask (id: number){
   // const url = "http://localhost:3000/tasks/"+id; 
    //document.write(url);
     this.data.deleteThisTask(id).subscribe()
      window.location.reload()
   // this.http.delete('http://localhost:3000/tasks/'+id)
  //console.log(id)
  }
  deleteThisCategory(id:number){
    console.log(id);
    this.data.deleteCategory(id).subscribe()
    window.location.reload()
  }

}
