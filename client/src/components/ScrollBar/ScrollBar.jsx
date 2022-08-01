import React from 'react'
import './ScrollBar.css';
import { useEffect, useState } from 'react';

const Scrollbar = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () =>{
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll/height)*100;

        setScrollTop(scrolled);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll)

        return() => window.removeEventListener("scroll", onScroll)
    },) 

  return (
    <div className='progressmainwrapper' style={{"marginBottom":"10px"}}>
        <div className='progressmainstyle' style={{width: `${scrollTop}%`}}>
    
        </div>
      </div>
  )
}

export default Scrollbar