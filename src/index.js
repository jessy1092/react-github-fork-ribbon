import React from 'react';
import assign from 'react/lib/Object.assign';

import {
  GitHubForkRibbon,
  GitHubForkRibbonWrapper
} from './ribbonStyle';

export default global.GitHubForkRibbon = React.createClass({

  _setPositionStyle() {

    this.ribbonStyle = assign({}, GitHubForkRibbon.baseStyle);
    this.wrapperStyle = assign({}, GitHubForkRibbonWrapper.baseStyle);
    this.ribbonPosition = '';

    switch(this.props.position) {

      case 'left':
        assign(this.ribbonStyle, GitHubForkRibbon.leftStyle);
        assign(this.wrapperStyle, GitHubForkRibbonWrapper.leftStyle);
        this.ribbonPosition = 'left';
        break;

      case 'right':
        assign(this.ribbonStyle, GitHubForkRibbon.rightStyle);
        assign(this.wrapperStyle, GitHubForkRibbonWrapper.rightStyle);
        this.ribbonPosition = 'right';
        break;

      case 'left-bottom':
        assign(this.ribbonStyle, GitHubForkRibbon.leftBottomStyle);
        assign(this.wrapperStyle, GitHubForkRibbonWrapper.leftBottomStyle);
        this.ribbonPosition = 'left-bottom';
        break;

      case 'right-bottom':
        assign(this.ribbonStyle, GitHubForkRibbon.rightBottomStyle);
        assign(this.wrapperStyle, GitHubForkRibbonWrapper.rightBottomStyle);
        this.ribbonPosition = 'right-bottom';
        break;

      default:
        assign(this.ribbonStyle, GitHubForkRibbon.rightStyle);
        assign(this.wrapperStyle, GitHubForkRibbonWrapper.rightStyle);
        this.ribbonPosition = 'right'
        break;
    }
  },

  _setColorStyle() {
    switch(this.props.color){
      case 'red':
        assign(this.ribbonStyle, GitHubForkRibbon.redColor);
        break;

      case 'orange':
        assign(this.ribbonStyle, GitHubForkRibbon.orangeColor);
        break;

      case 'black':
        assign(this.ribbonStyle, GitHubForkRibbon.blackColor);
        break;

      case 'green':
        assign(this.ribbonStyle, GitHubForkRibbon.greenColor);
        break;

      default:
        assign(this.ribbonStyle, GitHubForkRibbon.redColor);
        break;
    }
  },

  render() {

    let {position, href, target, color, ...other} = this.props;

    this._setPositionStyle();
    this._setColorStyle();

    return (
      <div {...other}
           className={"github-fork-ribbon-wrapper " + this.ribbonPosition}
           style={this.wrapperStyle}>
        <div className="github-fork-ribbon"
             style={this.ribbonStyle}>
          <a href={href}
             target={target}
             style={GitHubForkRibbon.urlStyle}>
            {this.props.children}
          </a>
        </div>
      </div>
    )
  }
});
