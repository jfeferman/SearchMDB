import React from 'react';
import 'jest-styled-components';
import { create, act } from 'react-test-renderer';
import Cta from '..';
import { StyledButton } from '../styles';

describe('components/atoms/Cta', () => {
  let renderer;
  let instance;
  let input;
  let disabled = false;
  const text = 'Test Button';
  const onClick = jest.fn();

  beforeEach(() => {
    renderer = create(
      <Cta disabled={disabled} onClick={onClick}>
        {text}
      </Cta>,
    );
    instance = renderer.root;
    input = instance.find(el => el.type === StyledButton);
  });

  it('matches the snapshot of the component', () => {
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it('verifies that a styled button component is present', () => {
    expect(instance.findAll(el => el.type === StyledButton)).toHaveLength(1);
  });

  it('verifies that the button text matches', () => {
    expect(instance.props.children).toBe(text);
  });

  it('verifies that the button is enabled', () => {
    expect(instance.props.disabled).toBe(false);
  });

  it('verifies function is called when button is clicked', () => {
    act(() => {
      input.props.onClick();
    });
    expect(onClick).toHaveBeenCalled();
  });

  it('updates the input to disabled and verifies disabled prop', () => {
    disabled = true;
    renderer.update(
      <Cta disabled={disabled} onClick={onClick}>
        {text}
      </Cta>,
    );
    expect(instance.props.disabled).toBe(true);
  });
});
