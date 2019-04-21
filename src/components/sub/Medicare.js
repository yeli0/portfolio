import React, { Component } from 'react';
import Footer from '../common/Footer';
import { ImgList } from '../contents/Img';

class Medicare extends Component {
  render() {
    return (
      <>
        <div className="sub">
          <div className="sub-header">
            <h2>건강보험 보장성 강화</h2>
          </div>
          <div className="sub-contents">
            <div className="sub-contents-img">
              <img src={ImgList.medicare} alt="건강보험 보장성 강화 사이트"/> 
            </div>
            <div className="sub-contents-txt">
              <div className="sub-contents-txt-details">
                <h3>PROJECT DETAILS</h3>
                <div>
                  <strong>CLINET</strong>
                  <p>국민건강보험</p>
                </div>
                <div>
                  <strong>TYPE</strong>
                  <p>반응형 Website</p>
                </div>
                <div>
                  <strong>TECHNOLOGIES</strong>
                  <p>HTML5, CSS3, JAVASCRIPT</p>
                </div>
                <div>
                  <strong>WEBSITE</strong>
                  <p>
                    <a href="http://medicare1.nhis.or.kr/" target="_blank" rel="noopener noreferrer">
                      medicare1.nhis.or.kr
                    </a>
                  </p>
                </div>
              </div>
              <div className="sub-contents-txt-desc">
                <p>
                  <span>참여도 : 100% ( 별도의 백엔트 처리 없는 반응형 사이트 )</span>
                  재직 기간동안 유지 보수를 담당하였습니다.
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

export default Medicare;