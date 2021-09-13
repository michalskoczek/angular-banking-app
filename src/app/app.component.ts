import { Component } from '@angular/core';
import { PostTile } from './post-tile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postTile1: PostTile = {
    img: 'Obrazek1',
    title: 'Tytuł 1',
    category: 'Kategoria 1',
    descr: 'Skrócony opis 1',
    date: new Date(),
    comments: 2
  }

  postTile2: PostTile = {
    img: 'Obrazek2',
    title: 'Tytuł 2',
    category: 'Kategoria 2',
    descr: 'Skrócony opis 2',
    date: new Date(),
    comments: 5
  }
  public readonly articleTilesInfo = [ 
    this.postTile1, this.postTile2
  ]
}
