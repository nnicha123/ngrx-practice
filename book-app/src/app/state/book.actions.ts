import {createAction,props} from '@ngrx/store';

export const addBook = createAction(
  '[Book List] Add Book',
  props<{bookId:string}>()
);

export const removeBook = createAction(
  '[Book List] Remove Book',
  props<{bookId:string}>()
);

export const retrievedBookList = createAction(
  '[Book List] Retrieve Book List',
  props<{Book}>()
)
