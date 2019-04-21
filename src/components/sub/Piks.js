import React, { Component } from 'react';
import Footer from '../common/Footer';
import { ImgList } from '../contents/Img';

class Piks extends Component {
  render() {
    return (
      <>
        <div className="sub">
          <div className="sub-header">
            <h2>3PIKS</h2>
          </div>
          <div className="sub-contents">
            <div className="sub-contents-img">
              <img src={ImgList.piks} alt="3piks 사이트"/> 
            </div>
            <div className="sub-contents-txt">
              <div className="sub-contents-txt-details">
                <h3>PROJECT DETAILS</h3>
                <div>
                  <strong>CLINET</strong>
                  <p>CosmicBC</p>
                </div>
                <div>
                  <strong>TYPE</strong>
                  <p>반응형 Website</p>
                </div>
                <div>
                  <strong>TECHNOLOGIES</strong>
                  <p>HTML5, SCSS</p>
                </div>
                <div>
                  <strong>WEBSITE</strong>
                  <p>
                    <a href="https://3piks.com/main" target="_blank" rel="noopener noreferrer">
                      www.3piks.com
                    </a>
                  </p>
                </div>
                <div>
                  <strong>YOUTUBE</strong>
                  <p>
                    <a href="https://youtu.be/sfWg8t5_JjI" target="_blank" rel="noopener noreferrer">
                      영상보기
                    </a>
                  </p>
                </div>
              </div>
              <div className="sub-contents-txt-desc">
                <p>
                  <span>참여도 : 95% ( 메인 페이지의 그래프와 표를 제외한 모든 페이지 모바일과 웹 퍼블리싱 )</span>
                  3piks는 비트코인과 이더리움 가격 예측을 하는 ai와 함께 예측하며,<br />
                  리워드를 받아가는 사이트 입니다.<br />
                  모바일, 웹을 지원하는 반응형 웹 사이트 입니다.<br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Piks;