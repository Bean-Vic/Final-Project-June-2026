import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/sass/index.scss';
import App from 'src/components/App';
import { Provider } from 'react-redux';
import store from 'src/store';
import { HelloWorld1 } from 'src/example/simpleComponent';
import { ConditionalListRendering } from 'src/example/conditionalListRendering';
import { Counter } from 'src/example/counter';
import { Rickandmorty, Example } from "./example/rickandmorty";
import { UseRefExample } from "./example/useRefExample";
import { Consumer, ProviderComp } from 'src/example/context/components';
import { EntranceContainer } from 'src/example/redux-example/entrance-container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        // <Provider store={store}>
        //     {/* <App /> */}
        //     {/*<HelloWorld1 name="Alex" />*/}
        //     {/*<ConditionalListRendering shouldRender={true}/>*/}
        //     {/*<Counter />*/}
        //     {/*<Rickandmorty />*/}
        //     {/*<Example />*/}
        //     {/*<UseRefExample />*/}
        //     <Consumer />
        //     <ProviderComp />
        // </Provider>,
    <EntranceContainer />,
);
