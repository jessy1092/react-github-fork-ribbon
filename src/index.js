import React from 'react';

import {
  GitHubForkRibbon,
  GitHubForkRibbonWrapper
} from './ribbonStyle';

const positionMapping = {
  left: [GitHubForkRibbon.leftStyle, GitHubForkRibbonWrapper.leftStyle],
  right: [GitHubForkRibbon.rightStyle, GitHubForkRibbonWrapper.rightStyle],
  'left-bottom': [GitHubForkRibbon.leftBottomStyle, GitHubForkRibbonWrapper.leftBottomStyle],
  'right-bottom': [GitHubForkRibbon.rightBottomStyle, GitHubForkRibbonWrapper.rightBottomStyle],
};

const colorMapping = {
  red: GitHubForkRibbon.redColor,
  orange: GitHubForkRibbon.orangeColor,
  black: GitHubForkRibbon.blackColor,
  green: GitHubForkRibbon.greenColor,
};

export default global.GitHubForkRibbon = React.createClass({

  render() {

    let {position = 'right', href, target, color = 'red', ...other} = this.props;

    const positionStyle = positionMapping[position] || [GitHubForkRibbon.rightStyle, GitHubForkRibbonWrapper.rightStyle];
    const colorStyle = colorMapping[color] || GitHubForkRibbon.redColor;

    if (positionStyle[0] === GitHubForkRibbon.rightStyle) {
      position = 'right';
    }

    this.ribbonStyle = {
      ...GitHubForkRibbon.baseStyle,
      ...positionStyle[0],
      ...colorStyle
    };

    this.wrapperStyle = {
      ...GitHubForkRibbonWrapper.baseStyle,
      ...positionStyle[1],
    };

    return (
      <div {...other}
           className={`github-fork-ribbon-wrapper ${position}`}
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
