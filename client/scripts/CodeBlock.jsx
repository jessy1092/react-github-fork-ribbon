
import React     from 'react';
import ReactDOM  from 'react-dom';
import Highlight from 'highlight.js';

module.exports = React.createClass({

  componentDidMount: function () {
    this._highlightCode();
  },

  componentDidUpdate: function () {
    this._highlightCode();
  },

  render: function () {
    return (
      <pre><code className={this.props.language}>
        {this.props.children}
      </code></pre>
    )
  },

  _highlightCode: function () {

    let codeNodes = ReactDOM.findDOMNode(this).querySelectorAll('pre code');

    if (codeNodes.length > 0)
    {
      Highlight.highlightBlock(codeNodes[0]);
    }
  }
})
