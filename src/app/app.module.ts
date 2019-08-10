import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostListItemComponent} from './post-list-item/post-list-item.component';
import {PostService} from './services/post.service';
import {AppRoutingModule} from './app-routing.module';
import {LoremIpsum} from 'lorem-ipsum';
import {NgxMasonryModule} from 'ngx-masonry';
import {AuthService} from './services/auth.service';
import { NewPostComponent } from './new-post/new-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		PostListComponent,
		PostListItemComponent,
		NewPostComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgxMasonryModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [
		PostService,
		AuthService,
		LoremIpsum
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
