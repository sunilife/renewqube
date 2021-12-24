import React, { useState} from 'react';
import { Route, Link, Switch } from 'react-router-dom';

function LyHeader(){

	const [ navbarOpen, setNavbarOpen] = useState(false);
	const handleToggle = () => {
		setNavbarOpen(!navbarOpen)
	  }

    return(

		<div id="header" className="on">
		
			<h1><Link to='/main'><img src="img/qb_logo.svg" alt="Qubesoft"/></Link></h1>
			<div className="nav">
					<ul className="navbar">
						<li className="dropdown">
						<Link to='/sub1' className="dropbtn">태양광발전 모니터링</Link>
						</li>
						<li className="dropdown">
						<Link to='/sub2' className="dropbtn">O&M 서비스</Link>
						</li>
						<li className="dropdown">
						<Link to='/sub3' className="dropbtn">전력중개사업</Link>
						</li>
						<li className="dropdown">
						<Link to='/sub4' className="dropbtn">IOT 제품</Link>
						</li>
						<li className="dropdown">
						<Link to='/sub5_1' className="dropbtn">고객센터</Link>
							<ul className="dropdown-content">
								<li><Link to='/sub5_1'>자주 묻는 질문</Link></li>
								<li><Link to='/sub5_2'>자료실</Link></li>
								<li><Link to='/sub5_3'>고객문의</Link></li>
							</ul>
						</li>
						<li className="dropdown">
						<Link to='/sub6' className="dropbtn">회사소개</Link>
						</li>
					</ul>
				</div>
			{ 
				navbarOpen === true 
				? 
					<ul>
						<li className="dropdown">
						<Link to='/sub1' className="dropbtn">태양광발전 모니터링</Link>
						</li>
						<li className="dropdown">
						<Link to='/sub2' className="dropbtn">O&M 서비스</Link>
						</li>
						<li className="dropdown">
						<Link to='/sub3' className="dropbtn">전력중개사업</Link>
						</li>
						<li className="dropdown">
						<Link to='/sub4' className="dropbtn">IOT 제품</Link>
						</li>
						<li className="dropdown">
						<Link to='/sub5_1' className="dropbtn">고객센터</Link>
							<ul className="dropdown-content">
								<li><Link to='/sub5_1'>자주 묻는 질문</Link></li>
								<li><Link to='/sub5_2'>자료실</Link></li>
								<li><Link to='/sub5_3'>고객문의</Link></li>
							</ul>
						</li>
						<li className="dropdown">
						<Link to='/sub6' className="dropbtn">회사소개</Link>
						</li>
					</ul>
				
				: null
			}
			
			
				<button type="button" className="btn_ham" onClick={handleToggle}><img src="img/hamburg.svg" alt="전체메뉴 보기" /></button>
			

			{/* {
				let hamburgBtn = document.querySelector('.btn_ham');
				let moNav = document.querySelector('.nav');
				let closeBtn = document.querySelector('.btn_close');

				hamburgBtn.addEventListener('click', () =>{
					moNav.classNameList.toggle('on');						
				});

			} */}
		
		</div>
    )
}



export default LyHeader;