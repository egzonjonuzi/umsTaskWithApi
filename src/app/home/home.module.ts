import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {DataTablesModule} from 'angular-datatables';
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";
import {PostsComponent} from "./posts/posts.component";
import {AddEditPostsComponent} from "./add-edit-posts/add-edit-posts.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
   HomeRoutingModule,
    DataTablesModule
  ],
  declarations: [
    HomeComponent,
    AddEditPostsComponent,
    PostsComponent
  ]
})
export class HomeModule { }
