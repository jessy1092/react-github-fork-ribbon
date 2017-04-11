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

const GitHubForkRibbon = ({position = 'right', href, target, color = 'red', children, ...other}) => {

  const positionStyle = positionMapping[position] || [RibbonStyle.rightStyle, RibbonStyleWrapper.rightStyle];
  const colorStyle = colorMapping[color] || RibbonStyle.redColor;

  if (positionStyle[0] === RibbonStyle.rightStyle) {
    position = 'right';
  }

  const ribbonStyle = {
    ...RibbonStyle.baseStyle,
    ...positionStyle[0],
    ...colorStyle
  };

  const wrapperStyle = {
    ...RibbonStyleWrapper.baseStyle,
    ...positionStyle[1],
  };

  return (
    <div {...other}
         className={`github-fork-ribbon-wrapper ${position}`}
         style={wrapperStyle}>
      <div className="github-fork-ribbon"
           style={ribbonStyle}>
        <a href={href}
           target={target}
           style={RibbonStyle.urlStyle}>
          {children}
        </a>
      </div>
    </div>
  );
};

export default global.RibbonStyle = GitHubForkRibbon;
