import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card title="string" content="content string"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it ('renders the UI as expected', () => {
  const tree = renderer
    .create(<Card title="string" content="content string"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

