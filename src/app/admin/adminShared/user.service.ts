import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import * as firebase from "firebase";

@Injectable()
export class UserService implements CanActivate {
    userLoggedIn: boolean = false;
    loggedInUser: string;
    authUser: any;

    constructor(private router: Router) {
        firebase.initializeApp({
            apiKey: "AIzaSyDdh05p75-Nt6Jfj12qgn6SCpCvJNbTpsA",
            authDomain: "gigabytegames-60050.firebaseapp.com",
            databaseURL: "https://gigabytegames-60050.firebaseio.com",
            projectId: "gigabytegames-60050",
            storageBucket: "gigabytegames-60050.appspot.com",
            messagingSenderId: "431629996951"
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.verifyLogin(url);
    }

    verifyLogin(url: string): boolean {
        if (this.userLoggedIn) { return true; }

        this.router.navigate(['/admin/login']);
        return false;
    }

    register(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                alert(`${error.message} Please Try Again!`);
            });
    };

    verifyUser() {
        this.authUser = firebase.auth().currentUser;

        if (this.authUser) {
            alert(`Welcome ${this.authUser.email}`);
            this.loggedInUser = this.authUser.email;
            this.userLoggedIn = true;
            this.router.navigate(['/admin']);
        }
    }

    login(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(error => alert(`${error.message} Unable to Login, Try Again!`));
    };

    logout() {
        this.userLoggedIn = false;
        firebase.auth().signOut()
            .then(() => alert('logged out'))
            .catch(error => alert(`${error.message} unable to logout, try again`));
    }

}