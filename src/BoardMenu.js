import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

function BoardMenu(){
    return(
		
        <ul class="bbs_menu">
            <li class="act"><Link to='/sub5_1'>자주 묻는 질문</Link></li>
            <li><Link to='/sub5_2'>자료실</Link></li>
            <li><Link to='/sub5_3'>고객문의</Link></li>
            {
                
            }
        </ul>
    )
}

export default BoardMenu;