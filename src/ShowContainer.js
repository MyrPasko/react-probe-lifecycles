import React, { Component } from "react";
import "./styles.css";

class ShowContainer extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps.count !== prevState.count);
    console.log(nextProps.count, prevState.count);
    if (nextProps.count !== prevState.count) {
      console.log("IF is true");
      return { count: nextProps.count };
    }
    console.log("IF is false");
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      count: props.count,
      showFlag: false
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.count !== this.props.count) {
  //     console.log("SHIT");
  //     this.setState({
  //       count: nextProps.count
  //     });
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    console.warn(prevState.count === this.state.count);
    if (prevState.count !== this.state.count) {
      console.log("From component did update");
      this.showFlagHandler();
    } else {
      console.error("Never show");
    }
  }

  showFlagHandler = () => {
    this.setState({ showFlag: true });
    setTimeout(() => {
      this.setState({ showFlag: false });
    }, 3000);
  };

  render() {
    return (
      <>
        <div>{this.state.count.age}</div>
        {this.state.showFlag && <h1 className="Red">Props was changed</h1>}
      </>
    );
  }
}

export default ShowContainer;
