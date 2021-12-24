import React from 'react';

function LyFooter(){
    return(
		<div id="footer">
			<div className="footer_wrap">
				<div>
					<img src="img/f_logo.svg" className="f_logo" alt="Qubesoft"/><br/>
					<span className="copyright">© 2021 Qubesoft, Inc.</span>
				</div>
				<div>
					<strong>(주) 큐브소프트</strong> (대표 : 박영규)<br/>     
					본사. 서울시 구로구 경인로 662. 15층 121호<br/>
					공장/연구소. 경기도 오산시 외삼미로15번길 54-2. 큐브빌딩<br/>
					<br/>
					<button type="button">이용약관</button> <button type="button">개인정보처리방침</button>
				</div>
				<div>
					<strong>대표전화. 02-6053-6400</strong><br/>
					팩스. 02-6053-6415
				</div>
				<div>
					<strong>업무시간.</strong><br/>
					평일오전 09:00~11:40<br/>
					평일오후 13:00~18:00
				</div>
			</div>
		</div>   
    )
}

export default LyFooter;