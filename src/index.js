import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import { Provider , useSelector} from 'react-redux'
import {ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { store, rrfProps } from './store/indexStore.js';


function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}

ReactDOM.render(
    <Provider store={store}> 
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
         <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
