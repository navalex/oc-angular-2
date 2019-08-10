import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor() {
	}

	isAuth = false;

	signIn() {
		this.isAuth = true;
	}

	signOut() {
		this.isAuth = false;
	}
}
