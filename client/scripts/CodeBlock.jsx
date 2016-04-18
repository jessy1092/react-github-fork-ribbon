"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var Highlight = require('highlight.js');

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

    var codeNodes = ReactDOM.findDOMNode(this).querySelectorAll('pre code');

    if (codeNodes.length > 0)
    {
      Highlight.highlightBlock(codeNodes[0]);
    }
  }
})
