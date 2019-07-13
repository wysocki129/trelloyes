import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card component', () => {
	// Smoke test
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Card />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	// Snapshot Test
	it('renders the the Card as expected', () => {
		const tree = renderer.create(<Card title="Title" content="content" />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
