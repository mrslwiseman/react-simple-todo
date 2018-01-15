import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import App from './Components/App';
import todoApp from './Reducers';

const store = createStore(todoApp,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const render = () => ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,    
    document.getElementById('root'));
render();
store.subscribe(render);
