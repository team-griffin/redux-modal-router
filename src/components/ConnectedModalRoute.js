import ModalRoute from './ModalRoute';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getModal, isOpen } from '../selectors';
import { close } from '../signals';

const doesMatch = (isOpen, path, route) => isOpen && path === route;

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

export const enhance = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default enhance(ModalRoute);
