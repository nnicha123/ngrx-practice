import { Component } from '@angular/core';
import {Store,select} from '@ngrx/store';
import {selectBookCollection, selectBooks} from './state/book.selectors';
import {retrievedBookList,addBook,removeBook} from './state/book.actions';
import {BooksService} from './book-list/books.service';
import { Book } from './book-list/books.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  onAdd(bookId:string){
    this.store.dispatch(addBook({bookId}));
  }

  onRemove(bookId:string){
    this.store.dispatch(removeBook({bookId}));
  }

  constructor(
    private bookService:BooksService,
    private store:Store
  ){}

  ngOnInit(){
    this.bookService.getBooks().subscribe((Book:Book[]) => this.store.dispatch(retrievedBookList({Book})))
  }
}
