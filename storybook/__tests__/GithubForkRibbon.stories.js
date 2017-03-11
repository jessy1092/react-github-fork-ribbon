
import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';

import {
	storiesOf,
	describe,
	it,
	specs,
} from '../facade';

import GitHubForkRibbon from '../../src';

const stories = storiesOf('GitHub fork ribbon', module);

stories.add('default with right position and red color', () => {
	const component = (
    <GitHubForkRibbon href="//www.google.com"
                      target="_blank">
      Fork me on GitHub
    </GitHubForkRibbon>
	);

	return component;
});

stories.add('handle unexist position with default', () => {
	const component = (
    <GitHubForkRibbon href="//www.google.com"
                      target="_blank"
                      position="WOW">
      Fork me on GitHub
    </GitHubForkRibbon>
	);

	return component;
});

stories.add('handle unexist color with default', () => {
	const component = (
    <GitHubForkRibbon href="//www.google.com"
                      target="_blank"
                      color="Hi">
      Fork me on GitHub
    </GitHubForkRibbon>
	);

	return component;
});

stories.add('on right position', () => {
	const component = (
    <GitHubForkRibbon href="//www.google.com"
                      target="_blank"
                      position="right">
      Fork me on GitHub
    </GitHubForkRibbon>
	);

	return component;
});

stories.add('on left position', () => {
	const component = (
    <GitHubForkRibbon href="//www.google.com"
                      target="_blank"
                      position="left">
      Fork me on GitHub
    </GitHubForkRibbon>
	);

	return component;
});

stories.add('on right-bottom position', () => {
	const component = (
    <GitHubForkRibbon href="//www.google.com"
                      target="_blank"
                      position="right-bottom">
      Fork me on GitHub
    </GitHubForkRibbon>
	);

	return component;
});

stories.add('on left-bottom position', () => {
	const component = (
    <GitHubForkRibbon href="//www.google.com"
                      target="_blank"
                      position="left-bottom">
      Fork me on GitHub
    </GitHubForkRibbon>
	);

	return component;
});

stories.add('with red color', () => {
	const component = (
    <GitHubForkRibbon href="//www.google.com"
                      target="_blank"
                      color="red">
      Fork me on GitHub
    </GitHubForkRibbon>
	);

	return component;
});

stories.add('with orange color', () => {
	const component = (
    <GitHubForkRibbon href="//www.google.com"
                      target="_blank"
                      color="orange">
      Fork me on GitHub
    </GitHubForkRibbon>
	);

	return component;
});

stories.add('with black color', () => {
	const component = (
    <GitHubForkRibbon href="//www.google.com"
                      target="_blank"
                      color="black">
      Fork me on GitHub
    </GitHubForkRibbon>
	);

	return component;
});

stories.add('with green color', () => {
	const component = (
    <GitHubForkRibbon href="//www.google.com"
                      target="_blank"
                      color="green">
      Fork me on GitHub
    </GitHubForkRibbon>
	);

	return component;
});
