import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import {PostsComponent} from './home/posts/posts.component';
import {AddEditPostsComponent} from './home/add-edit-posts/add-edit-posts.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const homeModule = () => import('./home/home.module').then(x => x.HomeModule);

const routes: Routes = [
  /*  { path: '', component: HomeComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: PostsComponent },
            { path: 'add', component: AddEditPostsComponent},
            { path: 'edit/:id', component: AddEditPostsComponent}
        ]},*/
    { path: '', loadChildren: homeModule, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home1
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing: ModuleWithProviders = RouterModule.forRoot(routes)
