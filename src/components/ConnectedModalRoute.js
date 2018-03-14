import ModalRoute from './ModalRoute';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { getModal, isOpen } from '../selectors';
import { close } from '../signals';
import * as r from 'ramda';

const pathMatch = r.equals;
const doesMatch = (isOpen, path, route) => r.and(
  isOpen,
  pathMatch(path, route),
);

const mapStateToProps = (state, props) => {
  const modal = getModal(state);

  return {
    matched: doesMatch(isOpen(state), props.path, modal.route),
    params: modal.params,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  closeModal: close,
}, dispatch);

export const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export default enhance(ModalRoute);
