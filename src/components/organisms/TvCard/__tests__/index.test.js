import React from 'react';
import 'jest-styled-components';
import { create } from 'react-test-renderer';
import TvCard from '..';
import { Heading } from '../../../atoms';

describe('components/molecules/Search', () => {
  let renderer;
  let instance;
  const item = {
    title: 'A title',
    first_air_date: '01/01/2019',
    overview: 'An overview',
  };

  beforeEach(() => {
    renderer = create(<TvCard item={item} />);
    instance = renderer.root;
  });

  it('matches the snapshot of the component', () => {
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it('renders a heading', () => {
    expect(instance.findAll(el => el.type === Heading)).toHaveLength(1);
  });
});
