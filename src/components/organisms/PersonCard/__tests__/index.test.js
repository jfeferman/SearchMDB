import React from 'react';
import 'jest-styled-components';
import { create } from 'react-test-renderer';
import PersonCard from '..';
import { Heading } from '../../../atoms';

describe('components/molecules/Search', () => {
  let renderer;
  let instance;
  const item = {
    name: 'Person name',
    known_for: [
      {
        media_type: 'movie',
        tilte: 'Movie title',
      },
      {
        media_type: 'movie',
        tilte: 'Another movie title',
      },
    ],
  };

  beforeEach(() => {
    renderer = create(<PersonCard item={item} />);
    instance = renderer.root;
  });

  it('matches the snapshot of the component', () => {
    expect(renderer.toJSON()).toMatchSnapshot();
  });

  it('renders a heading', () => {
    expect(instance.findAll(el => el.type === Heading)).toHaveLength(1);
  });

  it.skip('renders multiple known for movies', () => {
    // TODO: Verify return of moviesKnown() given the known_for array.
    // TODO: Check the shape of the item object as it is not the same as that returned by the api.
  });
});
