import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TasksComponent } from './tasks/tasks.component';
import { CategoriesComponent } from './categories/categories.component';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TasksComponent,
    CategoriesComponent,
    MyDialogComponent,
    CategoryDialogComponent,
    UpdateDialogComponent,
  
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents:[
    MyDialogComponent,CategoryDialogComponent,UpdateDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
