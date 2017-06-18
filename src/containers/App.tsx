import App from '../components/App';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ responses }: StoreState) {
  return {
    responses,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ConnectToServer>) {
  return {
    connectToServer: () => dispatch(actions.connectToServer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);