import { Component } from '@angular/core';
import { UserService } from '../adminShared/user.service';
import { Router } from "@angular/router";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    email: string;
    password1: string;

    constructor(private userSvc: UserService, private router: Router) { };

    login() {
        this.userSvc.login(this.email, this.password1);
        this.userSvc.verifyUser();
    }

    signUp() {
        this.router.navigate(['/admin/signup']);
    }

    cancel() {
        this.router.navigate(['']);
    }
}