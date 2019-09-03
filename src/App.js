import { connect } from 'react-redux';
import "./App.scss";
import Main from './Main'
import { bindActionCreators } from 'redux';
import * as actionCreators from './store/actions/actionCreators';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const mapStateToProps = state => {
   
  return {
      favs: state.favs,
      city: state.city,
      nightMode:state.nightMode
  }
}

const mapDispachToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
}
const App = connect(mapStateToProps, mapDispachToProps)(Main);
export default App;

