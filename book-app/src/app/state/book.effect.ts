import {Injectable} from '@angular/core';
import {Actions,createEffect,ofType} from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import {map,mergeMap,catchError} from 'rxjs/operators';
import {BooksService} from '../book-list/books.service';

@Injectable()
export class BookEffects{
  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType('[Book List] Retrieve Book List'),
    mergeMap(() => this.booksService.getBooks()
    .pipe(
      map(books => {
        return { type: '[Book List] Retrieved Book List Success',Book:books}
      }),
      catchError((error) => {return of({type:'[Book List] Retrieved Book Fail',error})})
    ))
  ))

  constructor(
    private actions$:Actions,
    private booksService:BooksService
  ){}
}