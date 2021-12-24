import React from 'react';
import Counsel from './Counsel';

function PageSub4(){
    return(
		<div id="contents">
			<div class="sub_conts_wrap">
			<div className="sub_tit mr_top10 mr_bot6">
                    <h3>IOT 제품</h3>
					<p>설립 후 19년, 태양광발전 데이터의 정확하고 안정된 솔루션 구축을 위해</p>
                </div>
                <div className="mr_bot10 lin_h">
                	<div className="iot_pro_tit">
                		<h3>태양광발전 모니터링</h3>
                		<button>상세정보 다운로드</button>
					</div>
					<table className="iot_pro">
						<tbody>
							<tr>
								<td rowspan="2" className="pro_img"><img src="img/iot_img1.png"/></td>
								<th>제품명</th>
								<td className="ptit_m">QS-2200E RTU PLUS</td>
							</tr>
							<tr>
								<th>제품사양</th>
								<td>
									<ul>
										<li>용도 : 웹모니터링 전송용 RTU</li>
										<li>크기 : 132mm(가로) × 102mm(세로) × 36(두께) mm</li>
										<li>입출력 : 4 Line CLCD, RJ-45 1개</li>
										<li>통신 : RS-485#1(인버터용), RS-485#2(환경장비용), RS232(현황판 등 예비용) 1Port</li>
									</ul>
								</td>
							</tr>
							<tr>
								<td rowspan="2" className="pro_img"><img src="img/iot_img2.png"/></td>
								<th>제품명</th>
								<td className="ptit_m">기상관측장비</td>
							</tr>
							<tr>
								<th>제품사양</th>
								<td>
									<ul>
										<li>용도 : 태양광 발전소 기상 관측용 수평면, 경사면 일사량 및 온도 측정</li>
										<li>일사량 측정범위 : 0~1500W/m2</li>
										<li>일사량 정밀도 : ±5%</li>
										<li>크기 : 가로×세로×높이: 110× 110 × 41mm</li>
										<li>전원 : DC 9V IN 포함</li>
										<li>통신 : RS-485 방식 / 1.0Km(9,600bps)</li>
									</ul>
								</td>
							</tr>
							<tr>
								<td rowspan="2" className="pro_img"><img src="img/iot_img3.png"/></td>
								<th>제품명</th>
								<td className="ptit_m">QS-485 Converter</td>
							</tr>
							<tr>
								<th>제품사양</th>
								<td>
									<ul>
										<li>용도 : RS232 to RS422/485 회선 컨버터(인터페이스: EIA RS-232, RS-485, RS-422표준)</li>
										<li>크기 : 132mm(가로) × 102mm(세로) × 36(두께) mm</li>
										<li>전원 : DC9V</li>
										<li>통신 : RS-485/422 : 1.0KM ,(115,200bps ) . RS-232 : 5M이하</li>
										<li>플러그 앤 플레이 (핫 플러그, 데이터 형식 자동감지&자동조정)데이터 방향으로 자동전환, 흐름제어가 필요 없음</li>
										<li>LED를 통한 송신, 수신, 전원 상태 확인 가능</li>
									</ul>
								</td>
							</tr>
							<tr>
								<td rowspan="2" className="pro_img"><img src="img/iot_img4.png"/></td>
								<th>제품명</th>
								<td className="ptit_m">CCTV_실외용</td>
							</tr>
							<tr>
								<th>제품사양</th>
								<td>
									<h6>2MP FIXED BULLET CAMERA (FIB-2030RFGP)</h6>
									<ul>
										<li>1/2.8” 2Megapixel STARVIS CMOS 이미지 센서</li>
										<li>소니 초고감도 센서 (STARVIS) 사용</li>
										<li>최대 30fps@1920X1080 고해상도 지원</li>
										<li>Dual 스트리밍 지원(H.264)</li>
										<li>3.6mm 메가픽셀 고정 Lens</li>
										<li>IR 가시거리 30M</li>
										<li>PoE 지원</li>
									</ul>
									<h6 className="mr_top1">2MP Motorized BULLET CAMERA (FIB-2030RAGP)</h6>
									<ul>
										<li>1/2.8” 2Megapixel STARVIS CMOS 이미지 센서</li>
										<li>소니 초고감도 센서 (STARVIS) 사용</li>
										<li>최대 30fps@1920X1080 고해상도 지원</li>
										<li>Dual 스트리밍 지원(H.264)</li>
										<li>2.8-12mm Motorized Lens</li>
										<li>IR 가시거리 40M</li>
										<li>PoE 지원</li>
									</ul>
								</td>
							</tr>
							<tr>
								<td rowspan="2" className="pro_img"><img src="img/iot_img5.png"/></td>
								<th>제품명</th>
								<td className="ptit_m">CCTV_실내용</td>
							</tr>
							<tr>
								<th>제품사양</th>
								<td>
									<h6>2MP FIXED DOME CAMERA (FID-2020RFWP)</h6>
									<ul>
										<li>1/2.8” 2Megapixel STARVIS CMOS 이미지 센서</li>
										<li>소니 Progressive Scan CMOS 사용</li>
										<li>최대 30fps@1920X1080 고해상도 지원</li>
										<li>Dual 스트리밍 지원(H.264)</li>
										<li>3.6mm 메가픽셀 고정렌즈</li>
										<li>IR 가시거리 10M</li>
										<li>PoE 지원</li>
									</ul>
								</td>
							</tr>
							<tr>
								<td rowspan="2" className="pro_img"><img src="img/iot_img6.png"/></td>
								<th>제품명</th>
								<td className="ptit_m">4K NVR</td>
							</tr>
							<tr>
								<th>제품사양</th>
								<td>
									<ul>
										<li>4K 카메라 지원</li>
										<li>내장 PoE(최대 8채널)를 이용한 플러그 앤 플레이 기능</li>
										<li>One-Click 방식의 카메라 자동 등록</li>
										<li>드래그 & 드롭 방식의 스마트 등록</li>
										<li>자동 IP를 이용한 IP 설정 불필요</li>
										<li>ONVIF 완벽 지원을 통한 카메라 호환성 극대화</li>
										<li>지능형 이중(메인 & 서브) 스트림 녹화 및 디스플레이</li>
										<li>복잡한 네트워크 설정이 필요 없는 ezP2P™ 클라우드 서비스</li>
										<li>PUSH 비디오 콜(아이폰/아이패드 및 안드로이드 폰)</li>
										<li>원격 소프트웨어(CMS) 및 스마트폰을 이용한 원격 모니터링</li>
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
					<div className="iot_pro_tit mr_top6">
                		<h3>태양광발전 접속반</h3>
                		<button>상세정보 다운로드</button>
					</div>
					<table className="iot_pro">
						<tbody>
							<tr>
								<td rowspan="2" className="pro_img"><img src="img/iot_img7.png"/></td>
								<th>제품명</th>
								<td className="ptit_m">일반형</td>
							</tr>
							<tr>
								<th>제품사양</th>
								<td>
									<ul>
										<li>용도 : 태양전지에서 발생되는 전류 및 전압 충돌 방지</li>
										<li>크기 : 530 x 430 x 200 (mm) ~ 847 x 636 x 300 (mm)</li>
										<li>기본 설명 필요</li>
									</ul>
								</td>
							</tr>
							<tr>
								<td rowspan="2" className="pro_img"><img src="img/iot_img8.png"/></td>
								<th>제품명</th>
								<td className="ptit_m">통신형</td>
							</tr>
							<tr>
								<th>제품사양</th>
								<td>
									<ul>
										<li>용도 : 태양전지에서 발생되는 전류 및 전압을 중앙제어실에서 원격감시가 가능하도록 통신기능을 탑재</li>
										<li>크기 : 747 x 536 x 300 (mm) ~ 1,056 x 852 x 350 (mm)</li>
										<li>기본 설명 필요</li>
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
					<div className="iot_pro_tit mr_top6">
                		<h3>무선 온/습도 모니터링</h3>
                		<button>상세정보 다운로드</button>
					</div>
					<table className="iot_pro">
						<tbody>
							<tr>
								<td rowspan="2" className="pro_img"><img src="img/iot_img9.png"/></td>
								<th>제품명</th>
								<td className="ptit_m">로더/로거</td>
							</tr>
							<tr>
								<th>제품사양</th>
								<td>
									<ul>
										<li>용도 : 크린룸, 냉장고, 항온기, 건조기 등의 온도 측정 및 각종 창고 내부 온.습도 측정</li>
										<li>크기 : 125mm(가로) × 90mm(세로) × 33(두께) mm</li>
										<li>외부인터페이스 : RS232, RJ-45 Ethernet 1Port, Micro USB debugger 1Port, 온.습도 1Port, PT-100 온도측정 2 Port, 2 Line CLCD Display</li>
										<li>External Memory : 2G Micro SD Memory</li>
										<li>사용온도 : 0 - 60 °C</li>
										<li>전원 : 7.5v - 12V 1.5A</li>
										<li>방송통신기자재 적합등록 필증 : 인증번호(MSIP-RMM-Q2S-QTH-3200)</li>
									</ul>
								</td>
							</tr>
							<tr>
								<td rowspan="2" className="pro_img"><img src="img/iot_img10.png"/></td>
								<th>제품명</th>
								<td className="ptit_m">QM 2315 Humi & Temp Sensor</td>
							</tr>
							<tr>
								<th>제품사양</th>
								<td>
									<ul>
										<li>용도 : 온습도 센서</li>
										<li>전원 : 3.5 to 5.5V power and I/O</li>
										<li>습도 센서 : Good for 0-100% humidity readings with 2% accuracy</li>
										<li>온도 센서 : Good for -20 to 80°C temperature readings ±0.1°C typical accuracy</li>
										<li>크기 : 98mm x 16mm diameter (4" x 0.9" )</li>
										<li>무게 : 82.64g</li>
									</ul>
								</td>
							</tr>
							<tr>
								<td rowspan="2" className="pro_img"><img src="img/iot_img11.png"/></td>
								<th>제품명</th>
								<td className="ptit_m">온습도 웹모니터링</td>
							</tr>
							<tr>
								<th>제품사양</th>
								<td>
									<ul>
										<li>통합모니터링 : 온습도 채널 정보를 실시간으로 제공합니다.</li>
										<li>경보이력 : 실시간 경보정보, 경보이력 정보, SMS 발송정보를 제공합니다.</li>
										<li>통계보고서 : 다양한 형식의 통계자료를 제공합니다.</li>
										<li>접속기록 : 사용자의 접속기록 정보를 제공합니다.</li>
										<li>환경설정 : 관리자메뉴로서 사용자 관리, 로더 관리, 로거 관리 정보를 제공합니다.</li>
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				
				<Counsel/>
				</div>
		</div> 
    )
}

export default PageSub4;