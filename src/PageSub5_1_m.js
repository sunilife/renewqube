import React, { useState}  from 'react';
import { Route, Link, Switch } from 'react-router-dom';

// import CommonFaq from '../../component/faq/CommonFaq';
// import CommonTableColumn from '../../component/table/CommonTableColumn';
// import CommonTableRow from '../../component/table/CommonTableRow';
import faqList from './Datafaq.js';


function PageSub5_1(){

	// const[pushNum, setPushNum] = useState (0);
	
	let [ tabOpen, setTabOpen] = useState(false);
	let tabToggle = () => {
		setTabOpen(!tabOpen)
	  };
 	let [누른제목, 누른제목변경] = useState(false);
	let showHide = () => {
		누른제목변경(!누른제목)
	};

    return(
		<div id="contents">
			<div class="sub_conts_wrap">
			<div className="sub_tit mr_top10 mr_bot6">
				<h3>고객센터</h3>
				<p>설립 후 19년, 태양광발전 데이터의 정확하고 안정된 솔루션 구축을 위해</p>
			</div>
			<div className="mr_bot10 lin_h">
			<ul class="bbs_menu">
				<li class="act"><Link to='/sub5_1'>자주 묻는 질문</Link></li>
				<li><Link to='/sub5_2'>자료실</Link></li>
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
					{/* 
					<div className="bbs_faq">
						<dl>
							<dt><span>원터치, 자체 기술로 개발한 DSP 보드로 태양광구조물 생산혁신</span></dt>
							<dd>
								효율은 시간과 반비례한다. 그래서 제조업에서 생산성은 시간으로 결정된다. 태양광구조물도 마찬가지다. 구조물 생산 공정과 생산 시간을 줄이면, 
								그만큼 생산성과 이익은 늘어난다.태양광구조물 포밍라인 전문기업 원터치는 조업에서 생산성은 시간으로 결정된다. 태양광구조물도 마찬가지다. 구조물 생산 
								공정과 생산 시간‘태양광...
							</dd>
						</dl>
						<dl>
							<dt><span>원터치, 자체 기술로 개발한 DSP 보드로 태양광구조물 생산혁신</span></dt>
							<dd>
								효율은 시간과 반비례한다. 그래서 제조업에서 생산성은 시간으로 결정된다. 태양광구조물도 마찬가지다. 구조물 생산 공정과 생산 시간을 줄이면, 
								그만큼 생산성과 이익은 늘어난다.태양광구조물 포밍라인 전문기업 원터치는 조업에서 생산성은 시간으로 결정된다. 태양광구조물도 마찬가지다. 구조물 생산 
								공정과 생산 시간‘태양광...
							</dd>
						</dl>
						<dl>
							<dt><span>원터치, 자체 기술로 개발한 DSP 보드로 태양광구조물 생산혁신</span></dt>
							<dd>
								효율은 시간과 반비례한다. 그래서 제조업에서 생산성은 시간으로 결정된다. 태양광구조물도 마찬가지다. 구조물 생산 공정과 생산 시간을 줄이면, 
								그만큼 생산성과 이익은 늘어난다.태양광구조물 포밍라인 전문기업 원터치는 조업에서 생산성은 시간으로 결정된다. 태양광구조물도 마찬가지다. 구조물 생산 
								공정과 생산 시간‘태양광...
							</dd>
						</dl>
					</div> 
					*/}
					<div className="bbs_faq">
						{/* <dl>
							<dt><span>{postBist[0].title}</span></dt>
							<dd>{postBist[0].content}</dd>
						</dl> */}
						{
						 faqList.map((a) =>{
							 return (
							 	<dl>
									<dt onClick={tabToggle}><span>{a.title}</span></dt>
									{
										tabOpen === true 
										? <dd>{a.content}</dd>
										:null
									}
								</dl>
							 )
						 })
						}
					</div>	
					{
						 faqList.map((re, index) =>{
							return (
								<>
								<button onClick={showHide} key={index}>{faqList[index].title}</button>
								{
									누른제목 === true 
									? <div>{faqList[index].content}</div>
									:null
								}
								</>
							)
						 })
					}
						

					{/* <div className="bbs_pagenation">
						<a href="#" className="prev_2"></a>
						<a href="#" className="prev_1"></a>
						<ol>
							<li><a href="#" className="act">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
						</ol>
						<a href="#" className="next_1"></a>
						<a href="#" className="next_2"></a>
					</div> */}
				</div> 
			</div>
			</div>
		</div> 
    )
}

export default PageSub5_1;