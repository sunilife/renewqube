import React from 'react';
// import { postList } from '../../Data.js';

const CommonFaq = props => {
//   const { headersName, children } = props;

const postList = [
    {
      "no": 1,
      "title": "첫번째 게시글입니다.",
      "content": "첫번째 게시글 내용입니다.",
      "createDate": "2020-10-25",
      "readCount": 6
    },
    {
      "no": 2,
      "title": "두번째 게시글입니다.",
      "content": "두번째 게시글 내용입니다.",
      "createDate": "2020-10-25",
      "readCount": 5
    }
]

  return (

    <div className="bbs_faq">
        <dl>
            <dt>
            {postList[0].title}
            </dt>
            <dd>
            {postList[1].title}
            </dd>
        </dl>
    </div>
  )
}

export default CommonFaq;