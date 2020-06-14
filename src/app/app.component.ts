﻿import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    user: User;
    menuVisibility = false;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }

    toogleMenu() {
        this.menuVisibility = !this.menuVisibility;
    }
}
