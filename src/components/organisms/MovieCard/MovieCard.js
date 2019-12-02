import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../../atoms';
import { CONTENT_KEYS } from '../../../config/constants';

const MovieCard = (props) => {
  const {
    title,
    release_date,
    overview,
  } = props.item;

  return (
    <div>
      <Heading level="3">{title}</Heading>
      <div>
        {CONTENT_KEYS.CARD_RELEASED}
        {' '}
        {release_date}
      </div>
      <div>{overview}</div>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
  }),
};

export default MovieCard;
