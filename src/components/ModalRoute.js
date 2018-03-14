import React from 'react';
import * as r from 'ramda';
import {
  setDisplayName,
  compose,
} from 'recompose';

const PureModalRoute = ({
  matched,
  render,
  params,
  closeModal,
}) => r.ifElse(
  r.equals(true),
  () => render({
    params,
    closeModal,
  }),
  r.always(null),
)(matched);

const enhance = compose(
  setDisplayName('ModalRoute'),
);

export default enhance(PureModalRoute);
