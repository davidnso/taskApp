import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '250px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  changeVisible(){
   let icon = document.getElementsByName("innerIcon");
   for(let i = 0;i<icon.length;i++){
    icon[i].style.visibility = 'visible'
   }
  }

}


