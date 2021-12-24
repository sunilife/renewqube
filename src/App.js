import React, { useState } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

import LyHeader from './LyHeader.js';
// import LyContsBody from './LyContsBody.js';
import LyFooter from './LyFooter.js';
import PageMain from './PageMain.js'; //홈
import PageSub1 from './PageSub1.js'; //태양광발전 모니터링
import PageSub2 from './PageSub2.js'; //O&M 서비스
import PageSub3 from './PageSub3.js'; //전력 중개사업
import PageSub4 from './PageSub4.js'; //IOT 제품
import PageSub5_1 from './PageSub5_1.js'; //고객센터_자주 묻는 질문
import PageSub5_2 from './PageSub5_2.js'; //고객센터_자료실
import PageSub5_3 from './PageSub5_3.js'; //고객센터_고객문의
import PageSub6 from './PageSub6.js'; //회사소개
import { render } from '@testing-library/react';

import PostMain from './page/post/PostMain';
import PostView from './page/post/PostView';
// import Modalpp from './Modalpp';


function App() {

  return (
    <div className="App">
        <Switch>
          	<Route exact path='/main' component={PageMain}></Route>
            <Route exact path='/sub1' component={PageSub1}></Route>
            <Route exact path='/sub2' component={PageSub2}></Route>
            <Route exact path='/sub3' component={PageSub3}></Route>
            <Route exact path='/sub4' component={PageSub4}></Route>
            <Route exact path='/sub5_1' component={PageSub5_1}></Route>
            <Route exact path='/sub5_2' component={PageSub5_2}></Route>
            <Route exact path='/sub5_3' component={PageSub5_3}></Route>
            <Route exact path='/sub6' component={PageSub6}></Route>

            <Route exact path='/postView/:no' component={PostView} />
            <Route exact path='/' component={PostMain} />
	    </Switch> 
		<LyHeader />
		<LyFooter />
    </div>
  );
}


export default App;
