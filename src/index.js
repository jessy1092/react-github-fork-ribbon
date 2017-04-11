import React from 'react';

import {
  RibbonStyle,
  RibbonStyleWrapper
} from './ribbonStyle';

const positionMapping = {
  left: [RibbonStyle.leftStyle, RibbonStyleWrapper.leftStyle],
  right: [RibbonStyle.rightStyle, RibbonStyleWrapper.rightStyle],
  'left-bottom': [RibbonStyle.leftBottomStyle, RibbonStyleWrapper.leftBottomStyle],
  'right-bottom': [RibbonStyle.rightBottomStyle, RibbonStyleWrapper.rightBottomStyle],
};

const colorMapping = {
  red: RibbonStyle.redColor,
  orange: RibbonStyle.orangeColor,
  black: RibbonStyle.blackColor,
  green: RibbonStyle.greenColor,
};

export default global.RibbonStyle = React.createClass({

  render() {

    let {position = 'right', href, target, color = 'red', ...other} = this.props;

    const positionStyle = positionMapping[position] || [RibbonStyle.rightStyle, RibbonStyleWrapper.rightStyle];
    const colorStyle = colorMapping[color] || RibbonStyle.redColor;

    if (positionStyle[0] === RibbonStyle.rightStyle) {
      position = 'right';
    }

    this.ribbonStyle = {
      ...RibbonStyle.baseStyle,
      ...positionStyle[0],
      ...colorStyle
    };

    this.wrapperStyle = {
      ...RibbonStyleWrapper.baseStyle,
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
             style={RibbonStyle.urlStyle}>
            {this.props.children}
          </a>
        </div>
      </div>
    )
  }
});
