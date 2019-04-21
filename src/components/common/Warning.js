import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Footer from './Footer';
// import Header from './Header';

class Warning extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loderValue : false
    }
  }

  componentDidMount() {
    setTimeout( () => { this.setState({loderValue : true}) },2000);
  }

  render() {
    return (
      <>
        {/* <Header /> */}

        <div className="warning">
          <h2>404 ERROR !</h2>
          <strong>
            죄송합니다.<br />
            현재 찾을 수 없는 페이지를 요청 하셨습니다.
          </strong>
          <p>
            잠시 후 메인으로 이동됩니다.
          </p>
          {
            this.state.loderValue && <Redirect to="/"/>
          }
        </div>

        <Footer />
      </>
    );
  }
}

export default Warning;