import React from 'react';
import ScreenNavigation from './ScreenNavigation';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import mainReducer from './app/store/reducers/mainReducer'
enableScreens();
//const rootReducer = combineReducers({mainReducer,});
const store = createStore(mainReducer,applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <ScreenNavigation/>
    </Provider>
  );
  }
