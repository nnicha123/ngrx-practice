import {createReducer, on} from '@ngrx/store';
import { retrievedBookListSuccess,retrievedBookFail} from './book.actions';
import {Book} from '../book-list/books.model';

export const initialState:ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookListSuccess, (state,{Book}) => [...Book]),
  on(retrievedBookFail, (state,{error}) => [...error]),
);