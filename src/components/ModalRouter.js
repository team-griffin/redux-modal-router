import React, { cloneElement, createElement } from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';

export const PureModalRouter = ({
  config,
  modal,
  modalComponent,
  closeModal,
  ...rest,
}) => {
  if(config == null) {
    return createElement(modalComponent, {
      key: 'modal',
      isOpen: false,
      actions: {
        closeModal,
      },
      ...rest,
    }, [
      (<div/>)
    ]);
  }

  return createElement(modalComponent, {
    key: 'modal',
    isOpen: modal.open,
    actions: {
      closeModal,
    },
    ...rest,
  }, [
    createElement(config.component, {
      config,
      modal,
      actions: {
        closeModal,
      },
      ...rest,
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
