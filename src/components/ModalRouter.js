import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';

export const PureModalRouter = ({
  config,
  modal,
  modalComponent,
}) => {
  if(config == null) {
    return cloneElement(modalComponent, {
      key: 'modal',
      isOpen: false,
    }, [
      (<div/>)
    ]);
  }

  return cloneElement(modalComponent, {
    key: 'modal',
    isOpen: modal.open,
  }, [
    cloneElement(config.component, {
      config,
      modal,
    }),
  ]);
};

export const enhance = compose(
  withProps((ownerProps) => {
    return {
      config: ownerProps.routes[ownerProps.modal.route] || null,
    }
  }),
);

export default enhance(PureModalRouter);
