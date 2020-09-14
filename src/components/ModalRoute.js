import React from 'react';

const ModalRoute = ({
  matched,
  render,
  params,
  closeModal,
}) => {
  if (matched) {
    return render({
      params,
      closeModal,
    });
  }
  return null;
};
ModalRoute.displayName = 'ModalRoute';

export default ModalRoute;
