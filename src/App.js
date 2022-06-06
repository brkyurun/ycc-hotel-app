import React from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import NextPage from "./components/NextPage";
import Button from "./Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onFirstPage: true,
      onSecondPage: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.onSecondPage) return;
    this.setState({
      onFirstPage: !this.state.onFirstPage,
      onSecondPage: !this.state.onSecondPage,
    });
  }

  render() {
    return (
      <>
        {this.state.onFirstPage ? <FirstPage /> : <SecondPage />}
        <NextPage>
          <Button onClick={() => this.handleClick()} />
        </NextPage>
      </>
    );
  }
}

export default App;
