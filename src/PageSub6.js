import React from 'react';
import Counsel from './Counsel';

function PageSub6(){
    return(
		<div id="contents">
			<div class="sub_conts_wrap">
				<div className="sub_tit mr_top10 mr_bot6">
                    <h3>(주)큐브소프트 소개</h3>
                    <p>설립 후 19년, 태양광발전 데이터의 정확하고 안정된 솔루션 구축을 위해</p>
                </div>
				<div className="img_scale mr_bot10">
                    <div className="about">
                    	<div className="tit">큐브소프트 모니터링을 선택해야하는 이유!</div>
                    	<div className="exp">
                    		19년간 <strong>전국 8,000개 발전소</strong> 관리에서 쌓아 온 <br/>
							데이터와 기술력은 오랜 경험을 지닌 전문가 상담과 <br/>
							발빠른 문제해결 및 유지보수로 태양광발전 수익의 <br/>
							안전성을 높여드리고 있습니다.
	                    </div>
	                </div>
                </div>
                <hr className="hr_line"/>
                <div className="sub_tit mr_top10 mr_bot6">
                    <h4>사업분야</h4>
                </div>
                <div className="mr_bot10 lin_h">
					<ul className="business">
						<li>
							<h2>태양광발전 모니터링</h2>
							<p>태양광발전에 대한 오랜 경험으로 인해 숙련된 기술력을 보유하고 있습니다. </p>
							<div className="img"><img src="img/partner2.png"/></div>
							<button>자세히보기</button>
						</li>
						<li>
							<h2>SMP+REC 예측 시스템</h2>
							<p>태양광발전에 대한 오랜 경험으로 인해 숙련된 기술력을 보유하고 있습니다. </p>
							<div className="img"><img src="img/partner2.png"/></div>
							<button>자세히보기</button>
						</li>
						<li>
							<h2>통신장비 생산 및 판매</h2>
							<p>태양광발전에 대한 오랜 경험으로 인해 숙련된 기술력을 보유하고 있습니다. </p>
							<div className="img"><img src="img/partner2.png"/></div>
							<button>자세히보기</button>
						</li>
					</ul>
				</div>
				<hr className="hr_line"/>
                <div className="sub_tit mr_top10 mr_bot6">
                    <h4>회사연혁</h4>
                </div>
                <div className="mr_bot10 lin_h">
                	<ol className="history">
                		<li>
                			<div className="info">
                				<img src="img/partner7.png"/>
                				<h6>태양광발전에 대한 오랜 경험으로 인해</h6>
                				<p>태양광발전에 대한 오랜 경험으로 인해 숙련된 기술력을 보유하고 있습니다. </p>
                			</div>
                			<span className="point"></span>
                			<span className="year">2021</span>
                		</li>
                		<li className="opposite">
                			<span className="year">2021</span>
                			<span className="point"></span>
                			<div className="info">
                				<img src="img/partner7.png"/>
                				<h6>태양광발전에 대한 오랜 경험으로 인해</h6>
                				<p>태양광발전에 대한 오랜 경험으로 인해 숙련된 기술력을 보유하고 있습니다. </p>
                			</div>
                		</li>
                		<li>
                			<div className="info">
                				<img src="img/partner7.png"/>
                				<h6>태양광발전에 대한 오랜 경험으로 인해</h6>
                				<p>태양광발전에 대한 오랜 경험으로 인해 숙련된 기술력을 보유하고 있습니다. </p>
                			</div>
                			<span className="point"></span>
                			<span className="year">2021</span>
                		</li>
                	</ol>
					<div className="mr_top6 t_center">
						<button className="btn_more">더보기</button>
					</div>
				</div>
				<hr className="hr_line"/>
                <div className="sub_tit mr_top10 mr_bot6">
                    <h4>파트너사</h4>
                </div>
                <div className="mr_bot10 lin_h">
					<ul className="partner">
						<li><span><img src="img/partner1.png"/></span></li>
						<li><span><img src="img/partner2.png"/></span></li>
						<li><span><img src="img/partner3.png"/></span></li>
						<li><span><img src="img/partner4.png"/></span></li>
						<li><span><img src="img/partner5.png"/></span></li>
						<li><span><img src="img/partner6.png"/></span></li>
						<li><span><img src="img/partner7.png"/></span></li>
						<li><span><img src="img/partner8.png"/></span></li>
					</ul> 
					<div className="mr_top6 t_center">
						<button className="btn_more">더보기</button>
					</div>
				</div>
				<hr className="hr_line"/>
                <div className="sub_tit mr_top10 mr_bot6">
                    <h4>오시는 길</h4>
                </div>
                <div className="mr_bot10 lin_h t_center">
					<div className="com_map">
						<div><a href="https://map.kakao.com/?urlX=511065.0&amp;urlY=1026233.0&amp;itemId=1094010110&amp;q=%ED%81%90%EB%B8%8C%EC%86%8C%ED%94%84%ED%8A%B8&amp;srcid=1094010110&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank">
							<img className="map" src="http://t1.daumcdn.net/roughmap/imgmap/a5fb1b88d5791799210577ff10341b11eb4a2f4e1b0179fba13a846fcfb51cdf"/></a>
						</div>
					</div>
				</div>

            <Counsel/>
			</div>
		</div> 
    )
}

export default PageSub6;