import ModalRouter from './ModalRouter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { getModal } from '../selectors';

const mapStateToProps = (state) => {
  return {
    modal: getModal(state),
  };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export default enhance(ModalRouter);
