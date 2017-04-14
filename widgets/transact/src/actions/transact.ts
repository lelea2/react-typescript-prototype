import { createAction } fro 'redux-actions';
import * as Action from '../constants/actions';

export const addTransact = createAction<TransactItemData>(Actions.ADD_TRANSACT);
export const updateTransact = createAction<TransactItemData>(Actions.UPDATE_TRANSACT);
export const paginateTransact = createAction<void>(Actions.PAGINATE_TRANSACT);

