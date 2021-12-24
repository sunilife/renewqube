import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

function PageSub5_3(){
    return(
		<div id="contents">
			<div class="sub_conts_wrap">
            <div className="sub_tit mr_top10 mr_bot6">
				<h3>고객센터</h3>
				<p>설립 후 19년, 태양광발전 데이터의 정확하고 안정된 솔루션 구축을 위해</p>
			</div>
			<div className="mr_bot10 lin_h">
				<ul class="bbs_menu">
					<li><Link to='/sub5_1'>자주 묻는 질문</Link></li>
					<li><Link to='/sub5_2'>자료실</Link></li>
					<li class="act"><Link to='/sub5_3'>고객문의</Link></li>
				</ul>
                	<div>
                		<div className="bbs_write">
							<div>
								<div>
									<label>이름</label>
									<input type="text" className="w_50per"/>
								</div>
							</div>
							<div>
								<div>
									<label>연락처</label>
									<input type="text"/>
								</div>
								<div>
									<label>이메일</label>
									<input type="text"/>
								</div>
							</div>
							<p>※ 상담 받으실 연락처 또는 이메일을 꼭 기재해주세요.</p>
							<div>
								<div>
									<label>제목</label>
									<input type="text"/>
								</div>
							</div>
							<div>
								<div>
									<label>내용</label>
									<textarea rows="10"></textarea>
								</div>
							</div>
							<div>
								<div>
									<label>첨부파일</label>
									<input type="file"></input>
								</div>
							</div>
						</div>
						<div className="bbs_btns">
							<button className="on">보내기</button>
							<button>초기화</button>
						</div>
					</div> 
				</div>
				</div>
		</div> 
    )
}

export default PageSub5_3;