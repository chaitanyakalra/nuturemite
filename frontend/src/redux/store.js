import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
});

const store = createStore(rootReducer);

const Root = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default Root;
