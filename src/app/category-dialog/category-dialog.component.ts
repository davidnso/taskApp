import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss']
})
export class CategoryDialogComponent implements OnInit {
  userCategory: string;
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  sendCategories(){
    this.data.addCategory(this.userCategory)
    window.location.reload()
  }
}
