
import renderer from 'react-test-renderer';

export const action = () => () => {};

export const linkTo = () => {};

export const specs = spec => {
	spec();
};

export const describe = jasmine.currentEnv_.describe;
export const it = jasmine.currentEnv_.it;
export const beforeEach = jasmine.currentEnv_.beforeEach;
export const afterEach = jasmine.currentEnv_.afterEach;
export const xit = jasmine.currentEnv_.xit;
export const xdescribe = jasmine.currentEnv_.xdescribe;
export const fit = jasmine.currentEnv_.fit;
export const after = () => {};
export const before = () => {};

export const snapshot = (name, func) => {
	it(name, () => func(expect));
};

const createSnapshot = (name, story) => {
	it(name, () => {
		const tree = renderer.create(story).toJSON();
		expect(tree).toMatchSnapshot();
	});
};

export const storiesOf = function storiesOf() {
	const api = {};
	let story;
	api.add = (name, func) => {
		story = func();
		createSnapshot(name, story);
		return api;
	};
	api.addWithInfo = (name, func) => {
		story = func();
		createSnapshot(name, story);
		return api;
	};
	return api;
};
