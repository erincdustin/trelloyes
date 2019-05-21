import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('<List />', () => {
  it ('renders without crashing', () => {
    const div = document.createElement('div');
    const array = [{'title': 'Hello', 'content': 'something'},{'title': 'Hello', 'content': 'something'}]
    ReactDOM.render(<List cards= {array} header="something"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it ('renders the UI as expected', () => {
    const array = [{'title': 'Hello', 'content': 'something'},{'title': 'Hello', 'content': 'something'}]
    const tree = renderer
      .create(<List cards= {array} header="something"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});

