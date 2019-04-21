import React, { Component } from 'react';
import { ImgList } from './Img';

class ProjectList extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <a href="/aipebot">
              <div className="img-box">
                <img src={ImgList.aipebot} alt="aipebot 홈페이지"/> 
              </div>
              <div className="txt">
                <p>AI Aouto-Trading Bot</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/aipe">
              <div className="img-box">
                <img src={ImgList.aipe} alt="aipe 홈페이지"/> 
              </div>
              <div className="txt">
                <p>AIPE 홈페이지</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/uzbit">
              <div className="img-box">
                <img src={ImgList.uzbit} alt="uzbit 홈페이지"/> 
              </div>
              <div className="txt">
                <p>UZBIT 홈페이지</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/whatthemex">
              <div className="img-box">
                <img src={ImgList.whatthemex} alt="whatthemex 홈페이지"/> 
              </div>
              <div className="txt">
                <p>마진거래소 홈페이지</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/3piks">
              <div className="img-box">
                <img src={ImgList.piks} alt="3piks 홈페이지"/> 
              </div>
              <div className="txt">
                <p>3PIKS 홈페이지</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/medicare">
              <div className="img-box">
                <img src={ImgList.medicare} alt="건강보험 보장성 강화 홈페이지"/> 
              </div>
              <div className="txt">
                <p>건강보험 보장성 강화 사이트</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/siwan">
              <div className="img-box">
                <img src={ImgList.siwan} alt="시완커뮤니케이션즈 홈페이지"/> 
              </div>
              <div className="txt">
                <p>시완커뮤니케이션즈 홈페이지</p>
              </div>
            </a>
          </li>
        </ul>
      </>
    );
  }
}

export default ProjectList;