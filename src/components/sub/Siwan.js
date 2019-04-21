import React, { Component } from 'react';
import Footer from '../common/Footer';
import { ImgList } from '../contents/Img';

class Siwan extends Component {
  render() {
    return (
      <>
        <div className="sub">
          <div className="sub-header">
            <h2>시완커뮤니케이션즈</h2>
          </div>
          <div className="sub-contents">
            <div className="sub-contents-img">
              <img src={ImgList.siwan} alt="시완커뮤니케이션즈 사이트"/> 
            </div>
            <div className="sub-contents-txt">
              <div className="sub-contents-txt-details">
                <h3>PROJECT DETAILS</h3>
                <div>
                  <strong>CLINET</strong>
                  <p>시완커뮤니케이션즈</p>
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
                    <a href="http://yeli0.com/siwan/" target="_blank" rel="noopener noreferrer">
                      siwancom.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="sub-contents-txt-desc">
                <p>
                  <span>참여도 : 100% ( 별도의 백엔트 처리 없는 반응형 사이트 )</span>
                  기업형 페이지로 현재는 리뉴얼 되어 제가 작업한 내역을 연동하였습니다.
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

export default Siwan;