import React from 'react';
import 'jest-styled-components';
import { create } from 'react-test-renderer';
import SearchBlock from '..';
import { Heading } from '../../../atoms';
import { Search } from '../../../molecules';
import { StyledSearchBlock } from '../styles';

describe('components/organisms/SearchBlock', () => {
  let renderer;
  let instance;

  beforeEach(() => {
    renderer = create(<SearchBlock />);
    instance = renderer.root;
  });

  it('matches the snapshot of the component', () => {
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it('renders a container', () => {
    expect(instance.findAll(el => el.type === StyledSearchBlock)).toHaveLength(1);
  });

  it('renders a heading', () => {
    expect(instance.findAll(el => el.type === Heading)).toHaveLength(1);
  });

  it('renders the search molecule', () => {
    expect(instance.findAll(el => el.type === Search)).toHaveLength(1);
  });
});
