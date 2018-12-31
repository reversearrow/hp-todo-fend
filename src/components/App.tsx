import * as React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

interface IProps {
  input: string;
  handleOnChange(event: any): void;
}

function Test(props: IProps) {
  return (
    <div>
      <input onChange={props.handleOnChange} value={props.input} />
      <h1> {props.input} </h1>
    </div>
  );
}

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { input: "" };
  }

  public handleOnChange = (e: any) => {
    const value = e.target.value;
    this.setState({ input: value });
  };

  public root = () => {
    return (
      <div>
        <Test input={this.state.input} handleOnChange={this.handleOnChange} />
      </div>
    );
  };

  public render() {
    console.log(this.props);
    return <Route exact={true} path="/" render={this.root} />;
  }
}

const mapStateToProps = (state: any) => ({
  state
});

export default connect(
  mapStateToProps,
  {}
)(App);
