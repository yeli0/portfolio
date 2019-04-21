import React, { Component } from 'react';
import Footer from '../common/Footer';
import { ImgList } from '../contents/Img';

class Aipebot extends Component {
  render() {
    return (
      <>
        <div className="sub">
          <div className="sub-header">
            <h2>AIPE BOT</h2>
          </div>
          <div className="sub-contents">
            <div className="sub-contents-img">
              <img src={ImgList.aipebot} alt="aipebot 사이트"/> 
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
                  <p>Website</p>
                </div>
                <div>
                  <strong>TECHNOLOGIES</strong>
                  <p>HTML5, SCSS</p>
                </div>
                <div>
                  <strong>WEBSITE</strong>
                  <p>
                    <a href="http://www.aipebot.com/" target="_blank" rel="noopener noreferrer">
                      www.aipebot.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="sub-contents-txt-desc">
                <p>
                  <span>참여도 : 100% ( 전체 페이지 퍼블리싱 )</span>
                  aipebot은 ai bot모델의 데시보드 서비스 페이지 입니다.<br />
                  프로토타입으로 제작된 페이지로 현재 메인 웹 페이지만 제작되어 있습니다.
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

export default Aipebot;