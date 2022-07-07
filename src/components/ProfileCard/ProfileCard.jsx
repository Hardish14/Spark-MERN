import React from 'react';
import './ProfileCard.css';
import cover from '../../Img/Vector1.png';
import personal from '../../Img/Personal.jpeg';
// import cover from '../../Img/Image-7.jpg';

const ProfileCard = () => {

const ProfilePage=true;

  return (
    <div className='ProfileCard'>
        <div className='ProfileImages'>
            <img src={cover} alt='' />
            <img src={personal} alt='' />
        </div>
        <div className='ProfileName'>
            <span>Hardish Avlani</span>
            <span>Web developer</span>
        </div>
        <div className='followstatus'>
            <hr />
            <div>
                <div className='follow'>
                    <span>6,890</span>
                    <span>Followings</span>
                </div>
                <div className='vl'></div>
                <div className='follow'>
                    <span>1</span>
                    <span>Followers</span>
                </div>

                {ProfilePage && (
                    <>
                        <div className='vl'></div>
                        <div className='follow'>
                            <span>3</span>
                            <span>Posts</span>
                        </div>
                    </>
                )}
            </div>
            <hr />
        </div>
        {ProfilePage?'':<span>My Profile</span>}
    </div>
  )
}

export default ProfileCard