
let $    = require('jquery');
global.$ = global.jQuery = $;
require('semantic-ui/dist/semantic.js');

import React            from 'react';
import ReactDOM         from 'react-dom';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import CodeBlock        from './CodeBlock.jsx';

import {Header, List, Item} from 'react-semantify';

let Index = React.createClass({

  render: function () {
    return (
      <div>

        <GitHubForkRibbon position="right"
                          color="green"
                          href="//github.com/jessy1092/react-github-fork-ribbon"
                          target="_blank">
          Fork me on GitHub
        </GitHubForkRibbon>

        <GitHubForkRibbon position="left-bottom"
                          color="red"
                          href="//github.com/jessy1092/react-github-fork-ribbon"
                          target="_blank">
          Fork me on GitHub
        </GitHubForkRibbon>

        <div className="container">
          <Header className="huge dividing">Fork me on Github - React component</Header>

          <p>This is Pure inline style github fork ribbon on React component.
             The inline style css is from <a href="http://simonwhitaker.github.io/github-fork-ribbon-css/" target="_blank">
             "Fork me on GitHub"</a> CSS ribbon.</p>

          <Header className="huge dividing">Install</Header>

          <p>Use npm to install.</p>

          <CodeBlock className="bash">{"$ npm install react-github-fork-ribbon"}</CodeBlock>

          <Header className="huge dividing">Usage</Header>

          <CodeBlock language="js">
            {["var React = require('react'); ",
             "var GitHubForkRibbon = require('react-github-fork-ribbon'); ",
             "var ForkRibbon = React.createClass({ ",
             "",
             "  render: function () { ",
             "    return ( ",
             "      <GitHubForkRibbon position=\"right\" ",
             "                        color=\"green\"",
             "                        href=\"//github.com/jessy1092/react-github-fork-ribbon\" ",
             "                        target=\"_blank\" > ",
             "        Fork me on GitHub ",
             "      </GitHubForkRibbon> ",
             "    ); ",
             "  } ",
             "}); ",
             "",
             "React.render( ",
             "  <ForkRibbon />, ",
             "  document.body ",
             ");"].join('\n')}
          </CodeBlock>

          <p>And then you will see GitHub Fork Ribbon.</p>

          <Header className="huge dividing">Properties</Header>

          <Header className="medium">href</Header>
          <p>{"It would be <a> tag's attribute href"}</p>

          <Header className="medium">target</Header>
          <p>{"It would be <a> tag's attribute target"}</p>

          <Header className="medium">position</Header>
          <List className="bulleted">
            <Item>left</Item>
            <Item>right</Item>
            <Item>left-bottom</Item>
            <Item>right-bottom</Item>
          </List>

          <Header className="medium">color</Header>
          <List className="bulleted">
            <Item>red</Item>
            <Item>orange</Item>
            <Item>black</Item>
            <Item>green</Item>
          </List>

          <p>If you want to know more detail, you can see this website <a href="//github.com/jessy1092/react-github-fork-ribbon/tree/website" target="_blank">
             source code</a>.</p>

          <p>Have a nice Fork!</p>

        </div>

      </div>
    );
  }
});

ReactDOM.render(<Index />, document.getElementsByClassName('main')[0]);
