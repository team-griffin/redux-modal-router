import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';

export const PureModalRouter = ({
  config,
  modal,
  modalComponent,
  closeModal,
}) => {
  if(config == null) {
    return cloneElement(modalComponent, {
      key: 'modal',
      isOpen: false,
      actions: {
        closeModal,
      }
    }, [
      (<div/>)
    ]);
  }

  return cloneElement(modalComponent, {
    key: 'modal',
    isOpen: modal.open,
    actions: {
      closeModal,
    }
  }, [
    cloneElement(config.component, {
      config,
      modal,
      actions: {
        closeModal,
      }
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
