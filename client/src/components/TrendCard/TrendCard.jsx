import React from 'react';
import './TrendCard.css';
import {TrendData} from '../../Data/TrendData';

const TrendCard = () => {
  return (
    <div className='TrendCard'>
        <h3 style={{"color":"#0d0d4c"}}>Trends for you</h3>
        {TrendData.map((trend)=>{
            return(
                <div className='trend'>
                    <span>#{trend.name}</span>
                    <span>{trend.shares}k shares</span>
                </div>
            )
        })}
        <div className='button r-button'>Share</div>
    </div>
  )
}

export default TrendCard