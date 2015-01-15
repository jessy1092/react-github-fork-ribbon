"use strict";

var RibbonStyle = require('./ribbonStyle.js');
var React = require('react/addons');

var {
  GitHubForkRibbon,
  GitHubForkRibbonWrapper
} = RibbonStyle;

module.exports = global.GitHubForkRibbon = React.createClass({

  render: function () {

    var {position, href, target, ...other} = this.props;

    var ribbonStyle = [GitHubForkRibbon.baseStyle];
    var wrapperStyle = [GitHubForkRibbonWrapper.baseStyle];
    var position = '';

    switch(this.props.position) {

      case 'left':
        ribbonStyle.push(GitHubForkRibbon.leftStyle);
        wrapperStyle.push(GitHubForkRibbonWrapper.leftStyle);
        position = 'left';
        break;

      case 'right':
        ribbonStyle.push(GitHubForkRibbon.rightStyle);
        wrapperStyle.push(GitHubForkRibbonWrapper.rightStyle);
        position = 'right';
        break;

      case 'left-bottom':
        ribbonStyle.push(GitHubForkRibbon.leftBottomStyle);
        wrapperStyle.push(GitHubForkRibbonWrapper.leftBottomStyle);
        position = 'left-bottom';
        break;

      case 'right-bottom':
        ribbonStyle.push(GitHubForkRibbon.rightBottomStyle);
        wrapperStyle.push(GitHubForkRibbonWrapper.rightBottomStyle);
        position = 'right-bottom';
        break;

      default:
        ribbonStyle.push(GitHubForkRibbon.rightStyle);
        wrapperStyle.push(GitHubForkRibbonWrapper.rightStyle);
        position = 'right'
        break;
    }

    return (
      <div {...other}
           className={"github-fork-ribbon-wrapper " + position}
           styles={wrapperStyle}>
        <div className="github-fork-ribbon"
             styles={ribbonStyle}>
          <a href={this.props.href}
             target={this.props.target}
             styles={GitHubForkRibbon.urlStyle}>
            {this.props.children}
          </a>
        </div>
      </div>
    )
  }
})
