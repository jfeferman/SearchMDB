import React from 'react';
import 'jest-styled-components';
import { create } from 'react-test-renderer';
import HomePage from '..';
import { SearchBlock } from '../../../organisms';
import { GlobalStyle } from '../../../styleUtils/globalStyles';

describe('components/organisms/SearchBlock', () => {
  let renderer;
  let instance;

  beforeEach(() => {
    renderer = create(<HomePage />);
    instance = renderer.root;
  });

  it('matches the snapshot of the component', () => {
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it('contains the global styles', () => {
    expect(instance.findAll(el => el.type === GlobalStyle)).toHaveLength(1);
  });

  it('renders a search block', () => {
    expect(instance.findAll(el => el.type === SearchBlock)).toHaveLength(1);
  });
});
