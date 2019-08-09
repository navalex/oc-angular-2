import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  postList = [
    {
      title: 'Title1',
      content: 'When the kahless dies for subspace, all starships accelerate futile, gravimetric space suits.',
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: 'Title2',
      content: 'Ridetis sapienter ducunt ad rusticus rumor.',
      loveIts: 2,
      createdAt: new Date()
    },
    {
      title: 'Title3',
      content: 'Nunquam attrahendam gluten.',
      loveIts: -2,
      createdAt: new Date()
    }
  ];
}
