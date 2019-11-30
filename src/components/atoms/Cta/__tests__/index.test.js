import React from 'react';
import 'jest-styled-components';
import { create } from 'react-test-renderer';
import Cta from '..';
import { StyledButton } from '../styles';

describe('components/atoms/Cta', () => {
  let renderer;
  let instance;

  beforeEach(() => {
    renderer = create(<Cta>Test Button</Cta>);
    instance = renderer.root;
  });

  it('matches the snapshot of the component', () => {
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it('verifies that a styled button component is present', () => {
    expect(instance.findAll(el => el.type === StyledButton)).toHaveLength(1);
  });
});
