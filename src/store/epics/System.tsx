import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';
import { actionTypes } from '../reducers/System';

// 애픽's
const incrementAsync = (action$: any) => action$.pipe(ofType(actionTypes.INCREMENT), delay(5000), mapTo({ type: actionTypes.DECREMENT }));

export default incrementAsync;
