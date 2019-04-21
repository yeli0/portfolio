import React, { Component } from 'react';
import Counter from './contents/Counter';
import ProjectList from './contents/ProjectList';
// import Header from './common/Header';
import Footer from './common/Footer';
import TextEffect from './contents/TextEffect';
import { ImgList } from './contents/Img';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollEvent : false
    }
    this.skill = React.createRef();
  }

  componentDidMount() {
    const { current } = this.skill;
    window.addEventListener("scroll", () => {
      if( current.offsetTop < window.scrollY) {
        this.setState({scrollEvent : true });
      } else if ( current.offsetTop > window.scrollY + 200) {
        this.setState({ scrollEvent : false });
      }
    });
  }

  render() {
    const {
      scrollEvent
    } = this.state;
    return (
      <>
        {/* HEADER */}
        {/* <Header /> */}
        {/* HEADER */}

        <div className="container">
          {/* VISUAL */}
          <section className="visual">
            <div className="visual-img">
              <img src={ImgList.logo} alt="logo"/> 
            </div>
            <TextEffect />
          </section>
          {/* VISUAL */}

          {/* INTRO */}
          <section className="intro">
            <strong>안녕하세요!</strong>
            <em>코딩이 즐거운 프론트엔드 개발자 곽소정이라고 합니다.</em>
            <p>
              전문교육기관에서 프론트엔드 과정을 배우며 HTML, CSS의 기초부터 탄탄히 배웠습니다.<br/>
              그 후로도 배움을 게을리하지 않고, 계속 발전하는 개발자입니다.
            </p>
          </section>
          {/* INTRO */}

          {/* DESC */}
          <section className="desc-wrap" ref={this.skill}>
            <div className="desc">
              <h2>Web Publisher &amp; Front-end Developer</h2>
              <div>
                <h3>사용하는 언어</h3>
                <p>HTML, CSS, HTML5, CSS3, SCSS, JAVASCRIPT, JQUERY, REACT</p>
              </div>
              <div>
                <h3>사용하는 도구</h3>
                <ul>
                  <li>Atom</li>
                  <li>VScode</li>
                  <li>Bitbucket</li>
                  <li>Confluence</li>
                  <li>Jira</li>
                  <li>Github</li>
                  <li>Slack</li>
                </ul>
              </div>
            </div>
          </section>
          {/* DESC */}

          {/* SKILL */}
          <section className="skill">
            <Counter scrollEvent={scrollEvent}/>
          </section>
          {/* SKILL */}

          {/* PROJECT */}
          <section className="project">
            <h2>PORTFOLIO LIST</h2>
            <ProjectList />
          </section>
          {/* PROJECT */}

        </div>

        {/* FOOTER */}
        <Footer />
        {/* FOOTER */}
      </>
    );
  }
}

export default Main;