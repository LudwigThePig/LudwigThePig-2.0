import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import App from '../client/templates/app';
import { StaticRouter } from 'react-router-dom';

export default function renderer(html: string, css:string, url:string): string {  

  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context} >
      <App compiler="TypeScript" framework="React" />
    </StaticRouter>
      );

  const regex = /(<div id="root">)(<\/div>)/;

  html = html.replace(regex, function(original, div1, div2) {
      return div1 + app + div2;
  });
  console.log(html)
  return html;
}