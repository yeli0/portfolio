import React, { Component } from 'react';
import Footer from '../common/Footer';
import { ImgList } from '../contents/Img';

class Whatthemex extends Component {
  render() {
    return (
      <>
        <div className="sub">
          <div className="sub-header">
            <h2>UZMEX</h2>
          </div>
          <div className="sub-contents">
            <div className="sub-contents-img">
              <img src={ImgList.whatthemex} alt="UZMEX 사이트"/> 
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
                    <a href="https://www.whatthemex.com/" target="_blank" rel="noopener noreferrer">
                      https://www.whatthemex.com/
                    </a>
                  </p>
                </div>
                <div>
                  <strong>YOUTUBE</strong>
                  <p>
                    <a href="https://youtu.be/Y0NS99Dzczc" target="_blank" rel="noopener noreferrer">
                      영상보기
                    </a>
                  </p>
                </div>
              </div>
              <div className="sub-contents-txt-desc">
                <p>
                  <span>참여도 : 100% ( 전체 페이지 반응형 퍼블리싱 )</span>
                  Uzmex는 비트코인 마진 거래소이며, 반응형 웹 사이트입니다.
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

export default Whatthemex;