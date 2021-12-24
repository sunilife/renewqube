import React from 'react'
import { Link } from 'react-router-dom';

function Modalpp(props){

	let [modal, modalch] = useState(false);
	let modalClose = () => {
		modalch(!modal)
		}
	return(
		<>
		{
        modal === true
        ? <div className="mo_nav on">
			<div className="mo_nav_wrap">
				<div className="top_bar">
					<img src="img/qb_logo.svg" alt="Qubesoft"/>
					<button type="button" className="btn_close" onClick={modalClose} ><img src="img/close.svg" alt="닫기"/></button>
				
				</div>
				<div>
					<ul>
						<li>
							<Link to={{
								pathname:'/sub1', 
								state:{modalch:false},
								}} className="mt">태양광발전 모니터링</Link>
								<ul>
									<li><Link to='/sub1'>태양광발전 모니터링</Link></li>
									<li><Link to='/sub1'>태양광발전 접속반</Link></li>
									<li><Link to='/sub1'>무선온습도 모니터링</Link></li>
									<li><Link to='/sub1'>태양광발전 접속반</Link></li>
									<li><Link to='/sub1'>무선온습도 모니터링</Link></li>
								</ul>
						</li>
						<li>
							<Link to='/sub2' className="mt">O&M 서비스</Link>
								<ul>
									<li><Link to='/sub1'>태양광발전 모니터링</Link></li>
									<li><Link to='/sub1'>태양광발전 접속반</Link></li>
									<li><Link to='/sub1'>무선온습도 모니터링</Link></li>
									<li><Link to='/sub1'>태양광발전 접속반</Link></li>
									<li><Link to='/sub1'>무선온습도 모니터링</Link></li>
								</ul>
						</li>
						<li>
							<Link to='/sub3' className="mt">전력 중개사업</Link>
								<ul>
									<li><Link to='/sub1'>태양광발전 모니터링</Link></li>
									<li><Link to='/sub1'>태양광발전 접속반</Link></li>
									<li><Link to='/sub1'>무선온습도 모니터링</Link></li>
									<li><Link to='/sub1'>태양광발전 접속반</Link></li>
									<li><Link to='/sub1'>무선온습도 모니터링</Link></li>
								</ul>
						</li>
						<li>
							<Link to='/sub4' className="mt">IOT 제품</Link>
								<ul>
									<li><Link to='/sub1'>태양광발전 모니터링</Link></li>
									<li><Link to='/sub1'>태양광발전 접속반</Link></li>
									<li><Link to='/sub1'>무선온습도 모니터링</Link></li>
									<li><Link to='/sub1'>태양광발전 접속반</Link></li>
									<li><Link to='/sub1'>무선온습도 모니터링</Link></li>
								</ul>
						</li>
						<li>
							<Link to='/sub5_1' className="mt">고객센터</Link>
								<ul>
									<li><Link to='/sub1'>태양광발전 모니터링</Link></li>
									<li><Link to='/sub1'>태양광발전 접속반</Link></li>
									<li><Link to='/sub1'>무선온습도 모니터링</Link></li>
									<li><Link to='/sub1'>태양광발전 접속반</Link></li>
									<li><Link to='/sub1'>무선온습도 모니터링</Link></li>
								</ul>
						</li>
						<li>
							<Link to='/sub6' className="mt">회사소개</Link>
								<ul>
									<li><Link to='/sub1'>태양광발전 모니터링</Link></li>
									<li><Link to='/sub1'>태양광발전 접속반</Link></li>
									<li><Link to='/sub1'>무선온습도 모니터링</Link></li>
									<li><Link to='/sub1'>태양광발전 접속반</Link></li>
									<li><Link to='/sub1'>무선온습도 모니터링</Link></li>
								</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
        : null
      	}
		</>
	)
}
export default Modalpp;