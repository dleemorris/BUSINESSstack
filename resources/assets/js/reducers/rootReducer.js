import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import invoiceReducer from './invoiceReducer';

const rootReducer = combineReducers({
  loginReducer,
  invoiceReducer,
});

export default rootReducer;
