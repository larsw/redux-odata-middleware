import CALL_ODATA from './CALL_ODATA';
import isPlainObject from 'lodash.isplainobject';
import {normalizeTypeDescriptors} from './util';

function isRSOA(action) {
  return isPlainObject(action) && action.hasOwnProperty(CALL_ODATA);
}

function odataMiddlware({state}) {
  return (next) => async (action) => {
    if (!isRSOA(action)) {
      return next(action);
    }

    var {endpoint, headers} = action[CALL_ODATA];
    const [requestType, successType, failureType] = normalizeTypeDescriptors(types);

    
  }
}