import React from 'react';

import { storiesOf, describe, it, specs } from '../facade';

import GitHubForkRibbon from '../../src';

storiesOf('GitHub fork ribbon/default', module)
  .add('default with right position and red color', () => {
    const component = (
      <GitHubForkRibbon href="//www.google.com" target="_blank">
        Fork me on GitHub
      </GitHubForkRibbon>
    );

    return component;
  })
  .add('handle unexist position with default', () => {
    const component = (
      <GitHubForkRibbon href="//www.google.com" target="_blank" position="WOW">
        Fork me on GitHub
      </GitHubForkRibbon>
    );

    return component;
  })
  .add('handle unexist color with default', () => {
    const component = (
      <GitHubForkRibbon href="//www.google.com" target="_blank" color="Hi">
        Fork me on GitHub
      </GitHubForkRibbon>
    );

    return component;
  });

storiesOf('GitHub fork ribbon/position', module)
  .add('on right position', () => {
    const component = (
      <GitHubForkRibbon href="//www.google.com" target="_blank" position="right">
        Fork me on GitHub
      </GitHubForkRibbon>
    );

    return component;
  })
  .add('on left position', () => {
    const component = (
      <GitHubForkRibbon href="//www.google.com" target="_blank" position="left">
        Fork me on GitHub
      </GitHubForkRibbon>
    );

    return component;
  })
  .add('on right-bottom position', () => {
    const component = (
      <GitHubForkRibbon href="//www.google.com" target="_blank" position="right-bottom">
        Fork me on GitHub
      </GitHubForkRibbon>
    );

    return component;
  })
  .add('on left-bottom position', () => {
    const component = (
      <GitHubForkRibbon href="//www.google.com" target="_blank" position="left-bottom">
        Fork me on GitHub
      </GitHubForkRibbon>
    );

    return component;
  });

storiesOf('GitHub fork ribbon/color', module)
  .add('with red color', () => {
    const component = (
      <GitHubForkRibbon href="//www.google.com" target="_blank" color="red">
        Fork me on GitHub
      </GitHubForkRibbon>
    );

    return component;
  })
  .add('with orange color', () => {
    const component = (
      <GitHubForkRibbon href="//www.google.com" target="_blank" color="orange">
        Fork me on GitHub
      </GitHubForkRibbon>
    );

    return component;
  })
  .add('with black color', () => {
    const component = (
      <GitHubForkRibbon href="//www.google.com" target="_blank" color="black">
        Fork me on GitHub
      </GitHubForkRibbon>
    );

    return component;
  })
  .add('with green color', () => {
    const component = (
      <GitHubForkRibbon href="//www.google.com" target="_blank" color="green">
        Fork me on GitHub
      </GitHubForkRibbon>
    );

    return component;
  });

storiesOf('GitHub fork ribbon/className', module)
  .add('hidden on small devices up to 576px', () => {
    const component = (
      <div>
        <style>
        {`
          @media (max-width: 576px) {
            .custom-class {
              display: none;
            }
          }
        `}
        </style>
        <GitHubForkRibbon href="//www.google.com" target="_blank" className="custom-class">
          Fork me on GitHub
        </GitHubForkRibbon>
      </div>
    );

    return component;
  });
