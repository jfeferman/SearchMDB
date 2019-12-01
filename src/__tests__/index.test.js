import React from 'react';
import 'jest-styled-components';
import { create } from 'react-test-renderer';
import App from '../App';
import { HomePage } from '../components/pages';

describe('components/organisms/SearchBlock', () => {
  let renderer;
  let instance;

  beforeEach(() => {
    renderer = create(<App />);
    instance = renderer.root;
  });

  it('matches the snapshot of the component', () => {
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it('renders the home page', () => {
    expect(instance.findAll(el => el.type === HomePage)).toHaveLength(1);
  });
});
