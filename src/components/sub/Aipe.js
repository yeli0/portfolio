import React, { Component } from 'react';
import Footer from '../common/Footer';
import { ImgList } from '../contents/Img';

class Aipe extends Component {
  render() {
    return (
      <>
        <div className="sub">
          <div className="sub-header">
            <h2>AIPE</h2>
          </div>
          <div className="sub-contents">
            <div className="sub-contents-img">
              <img src={ImgList.aipe} alt="aipe 사이트"/> 
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
                    <a href="https://aipe.io/" target="_blank" rel="noopener noreferrer">
                      www.aipe.io
                    </a>
                  </p>
                </div>
              </div>
              <div className="sub-contents-txt-desc">
                <p>
                  <span>참여도 : 100% ( 전체 페이지 반응형 퍼블리싱 )</span>
                  AIPE는 원페이지 반응형 웹 사이트 입니다.<br />
                  모바일, 태블릿, 웹 세가지 반응형을 지원합니다.
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

export default Aipe;