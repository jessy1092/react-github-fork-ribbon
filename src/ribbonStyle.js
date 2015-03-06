/*
 * "Fork me on GitHub" CSS ribbon v0.1.1 | MIT License
 * https://github.com/simonwhitaker/github-fork-ribbon-css
 *
 * 20150116 Lee: use css source for inline style react component.
*/

"use strict";

var ReactStyle = require('react-style');

module.exports = {

  GitHubForkRibbon: {

    baseStyle: ReactStyle({
      /* The right and left classes determine the side we attach our banner to */
      position: 'absolute',

      /* Add a bit of padding to give some substance outside the "stitching" */
      padding: '2px 0',

      /* Set the base colour */
      backgroundColor: '#a00',

      /* Set a gradient: transparent black at the top to almost-transparent black at the bottom */
      // backgroundImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.15)))',
      // backgroundImage: '-webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))',
      // backgroundImage: '-moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))',
      // backgroundImage: '-ms-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))',
      // backgroundImage: '-o-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))',
      backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))',

      /* Add a drop shadow */
      // -webkit-box-shadow: '0 2px 3px 0 rgba(0, 0, 0, 0.5)',
      // -moz-box-shadow: '0 2px 3px 0 rgba(0, 0, 0, 0.5)',
      boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.5)',

      /* Set the font */
      font: '700 13px "Helvetica Neue", Helvetica, Arial, sans-serif',

      zIndex: '9999',
      pointerEvents: 'auto'
    }),

    urlStyle: ReactStyle({
      /* Set the text properties */
      color: '#fff',
      textDecoration: 'none',
      textShadow: '0 -1px rgba(0, 0, 0, 0.5)',
      textAlign: 'center',

      /* Set the geometry. If you fiddle with these you'll also need
         to tweak the top and right values in .github-fork-ribbon. */
      width: '200px',
      lineHeight: '20px',

      /* Set the layout properties */
      display: 'inline-block',
      padding: '2px 0',

      /* Add "stitching" effect */
      borderWidth: '1px 0',
      borderStyle: 'dotted',
      // borderColor: '#fff',
      borderColor: 'rgba(255, 255, 255, 0.7)'
    }),

    redColor: ReactStyle({
      backgroundColor: '#a00',
    }),

    orangeColor: ReactStyle({
      backgroundColor: '#f80',
    }),

    blackColor: ReactStyle({
      backgroundColor: '#333',
    }),

    greenColor: ReactStyle({
      backgroundColor: '#090',
    }),

    leftStyle: ReactStyle({
      top: '42px',
      left: '-43px',

      // -webkit-transform: 'rotate(-45deg)',
      // -moz-transform: 'rotate(-45deg)',
      // -ms-transform: 'rotate(-45deg)',
      // -o-transform: 'rotate(-45deg)',
      transform: 'rotate(-45deg)'
    }),

    rightStyle: ReactStyle({
      top: '42px',
      right: '-43px',

      // -webkit-transform: 'rotate(45deg)',
      // -moz-transform: 'rotate(45deg)',
      // -ms-transform: 'rotate(45deg)',
      // -o-transform: 'rotate(45deg)',
      transform: 'rotate(45deg)'
    }),

    leftBottomStyle: ReactStyle({
      top: '80px',
      left: '-43px',

      // -webkit-transform: 'rotate(45deg)',
      // -moz-transform: 'rotate(45deg)',
      // -ms-transform: 'rotate(45deg)',
      // -o-transform: 'rotate(45deg)',
      transform: 'rotate(45deg)'
    }),

    rightBottomStyle: ReactStyle({
      top: '80px',
      right: '-43px',

      // -webkit-transform: 'rotate(-45deg)',
      // -moz-transform: 'rotate(-45deg)',
      // -ms-transform: 'rotate(-45deg)',
      // -o-transform: 'rotate(-45deg)',
      transform: 'rotate(-45deg)'
    })
  },

  GitHubForkRibbonWrapper: {

    baseStyle: ReactStyle({
      width: '150px',
      height: '150px',
      position: 'absolute',
      overflow: 'hidden',
      top: '0',
      zIndex: '9999',
      pointerEvents: 'none'
    }),

    fixedStyle: ReactStyle({
      position: 'fixed'
    }),

    leftStyle: ReactStyle({
      left: '0'
    }),

    rightStyle: ReactStyle({
      right: '0'
    }),

    leftBottomStyle: ReactStyle({
      position: 'fixed',
      top: 'inherit',
      bottom: '0',
      left: '0'
    }),

    rightBottomStyle: ReactStyle({
      position: 'fixed',
      top: 'inherit',
      bottom: '0',
      right: '0'
    })
  }
};
