import React from 'react';
import './Post.css';
import Like from '../../Img/like_rmg.png';
import Dislike from '../../Img/notlike.png';
import Comment from '../../Img/comment.png';
import Share from '../../Img/share.png';

const Post = ({data}) => {
  return (
     <>
        <div className='Post'>
            <img src={data.img} alt='' />

            <div className='postReact'> 
                <img src={data.liked?Like: Dislike} alt='' />
                <img src={Comment} alt='' />
                <img src={Share} alt='' />
            </div>

            <span><strong>{data.likes}</strong> likes</span>
            <div className='detail'>
                <span><strong>{data.name}</strong></span>
                <span> {data.desc}</span>
            </div>
        </div>
     </>
  )
}

export default Post