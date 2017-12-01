import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { SafeHtmlPipe } from "../safe-html.pipe";
//import { Page } from "./page";
import { WpApiService } from "../wp-api.service";

@Component({
	selector: 'card-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.css'],
	providers: [ WpApiService ]
})
export class PageComponent implements OnInit {
	private page: Page;
	private decalURL: string;
	constructor(
		private titleService: Title,
		private wpService: WpApiService,
		private route: ActivatedRoute
	) { }

	private getPage(slug) {
		/*this.wpService.getPage(slug)
			.subscribe(response => {
				this.page = response[0];
				this.titleService.setTitle(this.wpService.decodeTitle(this.page.title.rendered));
				//this.getDecal(this.page.featured_media);
			});*/
	}

	/*private getDecal(id) {
		//if no id, set to to hardcoded default id.
		if (id == 0) { id = 21; }
		this.wpService.getDecal(id)
			.subscribe(response => this.decalURL = response.source_url);
	}*/

	ngOnInit() {
		this.route.params.forEach((params: Params) => {
			this.getPage(params['slug']);
		});
	}

}
