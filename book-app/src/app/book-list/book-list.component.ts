import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Book } from './books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() books:Book[];
  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
