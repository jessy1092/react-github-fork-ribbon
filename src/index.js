import React from 'react';
import objectAssign from 'object-assign';

import {
  GitHubForkRibbon,
  GitHubForkRibbonWrapper
} from './ribbonStyle';

export default global.GitHubForkRibbon = React.createClass({

  _setPositionStyle() {

    this.ribbonStyle = objectAssign({}, GitHubForkRibbon.baseStyle);
    this.wrapperStyle = objectAssign({}, GitHubForkRibbonWrapper.baseStyle);
    this.ribbonPosition = '';

    switch(this.props.position) {

      case 'left':
        objectAssign(this.ribbonStyle, GitHubForkRibbon.leftStyle);
        objectAssign(this.wrapperStyle, GitHubForkRibbonWrapper.leftStyle);
        this.ribbonPosition = 'left';
        break;

      case 'right':
        objectAssign(this.ribbonStyle, GitHubForkRibbon.rightStyle);
        objectAssign(this.wrapperStyle, GitHubForkRibbonWrapper.rightStyle);
        this.ribbonPosition = 'right';
        break;

      case 'left-bottom':
        objectAssign(this.ribbonStyle, GitHubForkRibbon.leftBottomStyle);
        objectAssign(this.wrapperStyle, GitHubForkRibbonWrapper.leftBottomStyle);
        this.ribbonPosition = 'left-bottom';
        break;

      case 'right-bottom':
        objectAssign(this.ribbonStyle, GitHubForkRibbon.rightBottomStyle);
        objectAssign(this.wrapperStyle, GitHubForkRibbonWrapper.rightBottomStyle);
        this.ribbonPosition = 'right-bottom';
        break;

      default:
        objectAssign(this.ribbonStyle, GitHubForkRibbon.rightStyle);
        objectAssign(this.wrapperStyle, GitHubForkRibbonWrapper.rightStyle);
        this.ribbonPosition = 'right'
        break;
    }
  },

  _setColorStyle() {
    switch(this.props.color){
      case 'red':
        objectAssign(this.ribbonStyle, GitHubForkRibbon.redColor);
        break;

      case 'orange':
        objectAssign(this.ribbonStyle, GitHubForkRibbon.orangeColor);
        break;

      case 'black':
        objectAssign(this.ribbonStyle, GitHubForkRibbon.blackColor);
        break;

      case 'green':
        objectAssign(this.ribbonStyle, GitHubForkRibbon.greenColor);
        break;

      default:
        objectAssign(this.ribbonStyle, GitHubForkRibbon.redColor);
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
