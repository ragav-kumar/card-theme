import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CommonModule } from '@angular/common';
import { PageComponent } from "./page/page.component";
import { FrontPageComponent } from "./front-page/front-page.component";

export const routes: Routes = [
	{
		path: '',
		component: FrontPageComponent,
		pathMatch: 'full'
	}, {
		path:':slug',
		component: PageComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	declarations: []
})
export class AppRoutingModule { }
