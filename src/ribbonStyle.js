/*
* "Fork me on GitHub" CSS ribbon v0.1.1 | MIT License
* https://github.com/simonwhitaker/github-fork-ribbon-css
*
* 20150116 Lee: use css source for inline style react component.
*/
export const RibbonStyle = {

  baseStyle: {
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
    WebkitBoxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.5)',
    MozBoxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.5)',
    boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.5)',

    /* Set the font */
    font: '700 13px "Helvetica Neue", Helvetica, Arial, sans-serif',

    zIndex: '9999',
    pointerEvents: 'auto'
  },

  urlStyle: {
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
  },

  redColor: {
    backgroundColor: '#a00'
  },

  orangeColor: {
    backgroundColor: '#f80'
  },

  blackColor: {
    backgroundColor: '#333'
  },

  greenColor: {
    backgroundColor: '#090'
  },

  leftStyle: {
    top: '42px',
    left: '-43px',

    WebkitTransform: 'rotate(-45deg)',
    MozTransform: 'rotate(-45deg)',
    msTransform: 'rotate(-45deg)',
    OTransform: 'rotate(-45deg)',
    transform: 'rotate(-45deg)'
  },

  rightStyle: {
    top: '42px',
    right: '-43px',

    WebkitTransform: 'rotate(45deg)',
    MozTransform: 'rotate(45deg)',
    msTransform: 'rotate(45deg)',
    OTransform: 'rotate(45deg)',
    transform: 'rotate(45deg)'
  },

  leftBottomStyle: {
    top: '80px',
    left: '-43px',

    WebkitTransform: 'rotate(45deg)',
    MozTransform: 'rotate(45deg)',
    msTransform: 'rotate(45deg)',
    OTransform: 'rotate(45deg)',
    transform: 'rotate(45deg)'
  },

  rightBottomStyle: {
    top: '80px',
    right: '-43px',

    WebkitTransform: 'rotate(-45deg)',
    MozTransform: 'rotate(-45deg)',
    msTransform: 'rotate(-45deg)',
    OTransform: 'rotate(-45deg)',
    transform: 'rotate(-45deg)'
  }
};

export const RibbonStyleWrapper = {

  baseStyle: {
    width: '150px',
    height: '150px',
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    zIndex: '9999',
    pointerEvents: 'none'
  },

  fixedStyle: {
    position: 'fixed'
  },

  leftStyle: {
    left: 0
  },

  rightStyle: {
    right: 0
  },

  leftBottomStyle: {
    position: 'fixed',
    top: 'inherit',
    bottom: 0,
    left: 0
  },

  rightBottomStyle: {
    position: 'fixed',
    top: 'inherit',
    bottom: 0,
    right: 0
  }
};
