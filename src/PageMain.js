import React from 'react';
import Counsel from './Counsel';

function PageMain(){
    return(
		<div id="contents">
			<div className="main_visual">
				메인베너 슬라이드
			</div>
			<div className="sub_conts_wrap">
				
                <div className="mr_bot10 lin_h">
                	메인내용
				</div>
				<hr className="hr_line"></hr>

			<Counsel/>
			</div>
		</div>
    )
}

export default PageMain;