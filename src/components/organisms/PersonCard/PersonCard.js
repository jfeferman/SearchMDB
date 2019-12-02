import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../../atoms';
import { CONTENT_KEYS } from '../../../config/constants';

const PersonCard = (props) => {
  const {
    name,
    known_for,
  } = props.item;

  const moviesKnown = () => {
    const movies = known_for.filter(content => content.media_type === 'movie');
    return movies.reduce((acc, val, idx) => {
      return `${acc}${idx !== 0 ? ',' : ''} ${val.title}`;
    }, '');
  };

  return (
    <div>
      <Heading level="3">{name}</Heading>
      <div>
        {CONTENT_KEYS.CARD_KNOWN_FOR}
        {' '}
        {moviesKnown()}
      </div>
    </div>
  );
};

PersonCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    known_for: PropTypes.arrayOf(PropTypes.shape()),
  }),
};

export default PersonCard;
