"use strict";

import RibbonStyle from './ribbonStyle';
import React from 'react/addons';

let {
  GitHubForkRibbon,
  GitHubForkRibbonWrapper
} = RibbonStyle;

export default global.GitHubForkRibbon = React.createClass({

  _setPositionStyle() {

    this.ribbonStyle = [GitHubForkRibbon.baseStyle];
    this.wrapperStyle = [GitHubForkRibbonWrapper.baseStyle];
    this.position = '';

    switch(this.props.position) {

      case 'left':
        this.ribbonStyle.push(GitHubForkRibbon.leftStyle);
        this.wrapperStyle.push(GitHubForkRibbonWrapper.leftStyle);
        this.position = 'left';
        break;

      case 'right':
        this.ribbonStyle.push(GitHubForkRibbon.rightStyle);
        this.wrapperStyle.push(GitHubForkRibbonWrapper.rightStyle);
        this.position = 'right';
        break;

      case 'left-bottom':
        this.ribbonStyle.push(GitHubForkRibbon.leftBottomStyle);
        this.wrapperStyle.push(GitHubForkRibbonWrapper.leftBottomStyle);
        this.position = 'left-bottom';
        break;

      case 'right-bottom':
        this.ribbonStyle.push(GitHubForkRibbon.rightBottomStyle);
        this.wrapperStyle.push(GitHubForkRibbonWrapper.rightBottomStyle);
        this.position = 'right-bottom';
        break;

      default:
        this.ribbonStyle.push(GitHubForkRibbon.rightStyle);
        this.wrapperStyle.push(GitHubForkRibbonWrapper.rightStyle);
        this.position = 'right'
        break;
    }
  },

  _setColorStyle() {
    switch(this.props.color){
      case 'red':
        this.ribbonStyle.push(GitHubForkRibbon.redColor);
        break;

      case 'orange':
        this.ribbonStyle.push(GitHubForkRibbon.orangeColor);
        break;

      case 'black':
        this.ribbonStyle.push(GitHubForkRibbon.blackColor);
        break;

      case 'green':
        this.ribbonStyle.push(GitHubForkRibbon.greenColor);
        break;

      default:
        this.ribbonStyle.push(GitHubForkRibbon.redColor);
    }
  },

  render() {

    let {position, href, target, color, ...other} = this.props;

    this._setPositionStyle()
    this._setColorStyle()

    return (
      <div {...other}
           className={"github-fork-ribbon-wrapper " + this.position}
           styles={this.wrapperStyle}>
        <div className="github-fork-ribbon"
             styles={this.ribbonStyle}>
          <a href={this.props.href}
             target={this.props.target}
             styles={GitHubForkRibbon.urlStyle}>
            {this.props.children}
          </a>
        </div>
      </div>
    )
  }
});
