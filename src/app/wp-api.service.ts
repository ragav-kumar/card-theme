import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Page } from "./page";

const apiURL: string = "https://localhost/ragavkumar/wp-json/";

const tokenURL: string = apiURL + "jwt-auth/v1/token";
const validateURL: string = apiURL + "jwt-auth/v1/token/validate";
const pageURL: string = apiURL + "wp/v2/pages";
const menuURL: string = apiURL + "wp-api-menus/v2/menus";

const restUser: string = "rest-user";
const restPass: string = "aKH3iIX6UH(6AHI&iI52YCwO";

@Injectable()
export class WpApiService {
	private bearerToken: string = "";
	private connectionOpen: boolean = false;
	
	constructor(
		private http: HttpClient
	) { }
	/**
	 * Open connection to WordPress REST API. Currently exposes administrative login info; replace ASAP with OAuth or something.
	 * @param username Rest Username. This really shouldn't be visible...
	 * @param password Rest Password. Why the hell am I exposing this on the client?!?!?!?!?
	 */
	private openConnection(username: string, password: string): void {
		if (this.bearerToken !== "") {
			this.http.post(validateURL, {},{
				headers: new HttpHeaders().set('Authorization', this.bearerToken),
			  });
		} else {
			//
		}
	}
	/**
	 * Returns Observable<Page> of page with matching relative path. Trying to make this code flexible, dammit.
	 * @param slug Relative path of page to be pulled. Must include any relevant heirarchy.
	 */
	getPage(slug: string): Observable<Page> {
		if (!this.connectionOpen) {
			console.log("Opening connection to REST API");
			this.openConnection(restUser, restPass);
		}
		return null;
	}
	/**
	 * Returns Observable<Page> of the WordPress front page. Pulls from a custom endpoint for the frontpage.
	 */
	getFrontPage(): Observable<Page> {
		if (!this.connectionOpen) {
			console.log("Opening connection to REST API");
			this.openConnection(restUser, restPass);
		}
		return null;
	}
	/**
	 * Decodes a title string containing HTML encoded characters using a virtual DOM. Probably unsafe...
	 * @param title HTML encoded Title string
	 */
	decodeTitle(title: string): string {
		let e = document.createElement('textarea');
		e.innerHTML = title;
		return e.value;
	}
}
