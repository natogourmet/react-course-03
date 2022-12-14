import React from 'react';
import PropTypes from 'prop-types';

interface props {
  title: string;
  subtitle: string;
}

const name: string = 'Nato Gourmet';

export const FirstApp = ({ title, subtitle }: props) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  title: 'Missing Nato',
  subtitle: 'Not a Software Engineer',
}