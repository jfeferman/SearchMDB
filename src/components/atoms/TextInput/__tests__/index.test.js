import React from 'react';
import { create, act } from 'react-test-renderer';
import TextInput from '..';
import { StyledTextInput } from '../styles';

describe('components/atoms/TextInput', () => {
  let renderer;
  let instance;
  let input;
  const placeholder = 'Placeholder text';
  const onChange = jest.fn();

  beforeEach(() => {
    renderer = create(
      <TextInput
        placeholder={placeholder}
        onChange={onChange}
      />,
    );
    instance = renderer.root;
    input = instance.find(el => el.type === StyledTextInput);
  });

  it('matches the snapshot of the component', () => {
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it('verifies that a styled text input component is present', () => {
    expect(instance.findAll(el => el.type === StyledTextInput)).toHaveLength(1);
  });

  it('verifies the placeholder text', () => {
    expect(instance.props.placeholder).toBe(placeholder);
  });

  it('verifies function is called when input is changed', () => {
    act(() => {
      input.props.onChange();
    });
    expect(onChange).toHaveBeenCalled();
  });
});
