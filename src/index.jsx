"use strict";

var RibbonStyle = require('./ribbonStyle.js');
var React = require('react/addons');

var {
  GitHubForkRibbon,
  GitHubForkRibbonWrapper
} = RibbonStyle;

module.exports = global.GitHubForkRibbon = React.createClass({

  render: function () {

    var {position, href, target, color, ...other} = this.props;

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

    switch(this.props.color){
      case 'red':
        ribbonStyle.push(GitHubForkRibbon.redColor);
        break;

      case 'orange':
        ribbonStyle.push(GitHubForkRibbon.orangeColor);
        break;

      case 'black':
        ribbonStyle.push(GitHubForkRibbon.blackColor);
        break;

      case 'green':
        ribbonStyle.push(GitHubForkRibbon.greenColor);
        break;

      default:
        ribbonStyle.push(GitHubForkRibbon.redColor);
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
