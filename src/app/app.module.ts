import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { PageComponent } from './page/page.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from "./app-routing.module";
import { WpApiService } from "./wp-api.service";

@NgModule({
	declarations: [
		AppComponent,
		SafeHtmlPipe,
		PageComponent,
		FrontPageComponent,
		MenuComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [
		WpApiService
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
