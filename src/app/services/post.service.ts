import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from '../post';

@Injectable({
	providedIn: 'root'
})
export class PostService {
	postSubject = new Subject<Post[]>();
	private postList = [];

	emitPostSubject() {
		this.postSubject.next(this.postList.slice());
	}

	addPost(post: Post) {
		console.log('Adding Post');
		console.log(this.postList);
		this.postList.push(post);
		console.log(this.postList);
		this.emitPostSubject();
	}

	editPost(post: Post, id: number) {
		this.postList[id] = post;
		this.emitPostSubject();
	}

	removePost(id: number) {
		this.postList.splice(id, 1);
		this.emitPostSubject();
	}

	constructor() {
	}
}
