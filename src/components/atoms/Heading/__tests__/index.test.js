import React from 'react';
import 'jest-styled-components';
import { create } from 'react-test-renderer';
import Heading from '..';
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
} from '../styles';

describe('components/atoms/Heading', () => {
  let renderer;
  let instance;
  let level = '1';
  const text = 'Heading text';

  beforeEach(() => {
    renderer = create(
      <Heading level={level}>
        {text}
      </Heading>,
    );
    instance = renderer.root;
  });

  it('matches the snapshot of the component', () => {
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it('renders a level 1 heading', () => {
    expect(instance.findAll(el => el.type === StyledH1)).toHaveLength(1);
  });

  it('updates to level 2 and renders the heading', () => {
    level = '2';
    renderer.update(
      <Heading level={level}>
        {text}
      </Heading>,
    );
    expect(instance.findAll(el => el.type === StyledH2)).toHaveLength(1);
  });

  it('updates to level 3 and renders the heading', () => {
    level = '3';
    renderer.update(
      <Heading level={level}>
        {text}
      </Heading>,
    );
    expect(instance.findAll(el => el.type === StyledH3)).toHaveLength(1);
  });

  it('updates to level 4 and renders the heading', () => {
    level = '4';
    renderer.update(
      <Heading level={level}>
        {text}
      </Heading>,
    );
    expect(instance.findAll(el => el.type === StyledH4)).toHaveLength(1);
  });
});
