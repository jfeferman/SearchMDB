import React from 'react';
import 'jest-styled-components';
import { create } from 'react-test-renderer';
import Search from '..';
import {
  Cta,
  TextInput,
} from '../../../atoms';
import { StyledSearch } from '../styles';

describe('components/molecules/Search', () => {
  let renderer;
  let instance;

  beforeEach(() => {
    renderer = create(<Search />);
    instance = renderer.root;
  });

  it('matches the snapshot of the component', () => {
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it('renders a container', () => {
    expect(instance.findAll(el => el.type === StyledSearch)).toHaveLength(1);
  });

  it('renders one text input', () => {
    expect(instance.findAll(el => el.type === TextInput)).toHaveLength(1);
  });

  it('renders one cta', () => {
    expect(instance.findAll(el => el.type === Cta)).toHaveLength(1);
  });
});
