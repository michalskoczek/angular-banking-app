import { Component, Input, OnInit } from '@angular/core';
import { PostTile } from '../post-tile';

@Component({
  selector: 'app-article-tile',
  templateUrl: './article-tile.component.html',
  styleUrls: ['./article-tile.component.scss']
})
export class ArticleTileComponent implements OnInit {
@Input() public postTile: PostTile;

  constructor() { }

  ngOnInit(): void {
  }

  public onButtonClick(): void {
    window.alert('Pokaż cały wpis')
  }

}
