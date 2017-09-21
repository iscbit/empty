import { connect } from "react-redux";
import Test from "../components/Test";
import { doMagic } from "../actions/actions";

const mapStateToProps = state => {
  return {
    test: state.get("test")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doMagic: message => {
      dispatch(doMagic(message));
    }
  };
};

const TestContainer = connect(mapStateToProps, mapDispatchToProps)(Test);

export default TestContainer;
