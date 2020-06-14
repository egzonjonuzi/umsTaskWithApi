import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {PostsComponent} from "./posts/posts.component";
import {AddEditPostsComponent} from "./add-edit-posts/add-edit-posts.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: PostsComponent },
      { path: 'add', component: AddEditPostsComponent },
      { path: 'edit/:id', component: AddEditPostsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
