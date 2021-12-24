import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

function PageSub5_2(){
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
					<li class="act"><Link to='/sub5_2'>자료실</Link></li>
					<li><Link to='/sub5_3'>고객문의</Link></li>
				</ul>
                	<div className="bbs_search">
                		<select>
                			<option>제목</option>
                			<option>내용</option>
                		</select>
                		<input type="text" name=""/>
                		<button></button>
                	</div>
                	<div className="fw_bold fc_1 fz_s mr_top1 mr_bot1">총 50건</div>
                	<div>
						<table className="bbs_basic">
							<thead>
								<tr>
									<th>번호</th>
									<th>제목</th>
									<th>다운로드</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="no">10</td>
									<td className="tit"><a href="#">태양광발전웹모니터링시스템 제품소개서(큐브소프트)</a></td>
									<td className="download"><a href="#" download></a></td>
								</tr>
								<tr>
									<td className="no">9</td>
									<td className="tit"><a href="#">태양광발전웹모니터링시스템 제품소개서(큐브소스템 제품소개서(큐브소스템 제품소개서(큐브소프트)</a></td>
									<td className="download"><a href="#" download></a></td>
								</tr>
							</tbody>
						</table>
						<div className="bbs_pagenation">
							<a href="#" className="prev_2"></a>
							<a href="#" className="prev_1"></a>
							<ol>
								<li><a href="#" className="act">1</a></li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
							</ol>
							<a href="#" className="next_1"></a>
							<a href="#" className="next_2"></a>
						</div>
					</div> 
				</div>
				</div>
		</div> 
    )
}

export default PageSub5_2;