import React from 'react';

function Counsel(){
    return(
		<div>
				<hr class="hr_line"/>
                <div class="sub_tit mr_top10 mr_bot6">
                    <h4>빠른 상담문의</h4>
                    <p>신속한 상담을 위해 최선을 다하겠습니다.</p>
                </div>
                <div class="mr_bot10 lin_h">
  					<div class="counsel">
  						<div>
	  						<label>이름</label>
	  						<input type="text"/>
	  					</div>
	  					<div>
	  						<label>휴대폰</label>
	  						<input type="text"/>
	  					</div>
	  					<div>
	  						<label>문의내용</label>
	  						<textarea rows="5"></textarea>
	  					</div>
	  					<div class="chk">
	  						<input type="checkbox" />
	  						<label><a href="#">개인정보 수집 및 이용</a>을 확인하고 동의합니다.</label>
	  					</div>
	  					<hr/>
	  					<button>문의하기</button>
	  					
  					</div>
  					<div class="c_phone mr_top6">
  						<dl>
  							<dt>사업제휴 및 견적문의</dt>
  							<dd>02-6053-6406</dd>
  						</dl>
  						<dl>
  							<dt>기술지원</dt>
  							<dd>02-6053-6406</dd>
  						</dl>
  						<dl>
  							<dt>웹/모바일 모니터링지원</dt>
  							<dd>02-6053-6406</dd>
  						</dl>
  					</div>
				</div> 
		</div> 
    )
}

export default Counsel;