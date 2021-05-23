import { Component } from '@angular/core';
import {Store,select} from '@ngrx/store';
import {selectBookCollection, selectBooks} from './state/book.selectors';
import {retrievedBookList,addBook,removeBook} from './state/book.actions';

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
    private store:Store
  ){}

  ngOnInit(){
    this.store.dispatch(retrievedBookList());
  }
}
