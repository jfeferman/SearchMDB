import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../../atoms';

const TvCard = (props) => {
  const {
    name,
    first_air_date,
    overview,
  } = props.item;

  return (
    <div>
      <Heading level="3">{name}</Heading>
      <div>
        First aired:
        {' '}
        {first_air_date}
      </div>
      <div>{overview}</div>
    </div>
  );
};

TvCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    first_air_date: PropTypes.string,
    overview: PropTypes.string,
  }),
};

export default TvCard;
