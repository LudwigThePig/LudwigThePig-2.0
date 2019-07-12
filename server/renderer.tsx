import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../client/components/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store  } from '../client/redux/store';

export default function renderer(html: string, css:string, url:string): string {  

  const context = {};
  const app = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={context} >
        <App compiler="TypeScript" framework="React" />
      </StaticRouter>
    </Provider>
      );

  const divRegex = /(<div id="root">)(<\/div>)/;
  const styleRegex = /(<style>)(<\/style>)/;

  html = html.replace(divRegex, (original, div1:string, div2:string): string => {
      return div1 + app + div2;
  });
  
  html = html.replace(styleRegex, (original, div1:string, div2:string): string => {
    return div1 + css + div2;
  });

  return html;
}
