import React from 'react'
import './Slider.css'

function Slider() {
  return (
  <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth'>
        {/* 1 */}
        <div className='min-w-full md:h-[600px]' style={{
          backgroundImage:`url(https://wallpaperaccess.com/full/767567.jpg)`,
          backgroundSize:'cover',
          backgroundAttachment:'fixed'}}>
          <div className="banner-content">
            <h1>Spice</h1>
            <h2>Spice is Spicy</h2>
          </div>
        </div>
        {/* 2 */}
        <div className='min-w-full md:h-[600px]' style={{
        backgroundImage:`url(https://wallpaperaccess.com/full/826922.jpg)`,
        backgroundSize:'cover',
        backgroundAttachment:'fixed'}}>
          <div className="banner-content">
            <h1>Pizza</h1>
            <h2>Pizza is spicy</h2>
          </div>
        </div>
        {/* 2 */}
        <div className='min-w-full md:h-[600px]' style={{
        backgroundImage:`url(https://wallpapercave.com/wp/wp7029319.jpg)`,
        backgroundSize:'cover',
        backgroundAttachment:'fixed'}}>
          <div className="banner-content">
            <h1>Burger</h1>
            <h2>Burger is spicy</h2>
          </div>
        </div>
        {/* 3 */}
        <div className='min-w-full md:h-[600px]' style={{
        backgroundImage:`url(https://wallpaperaccess.com/full/767254.jpg)`,
        backgroundSize:'cover',
        backgroundAttachment:'fixed'}}>
          <div className="banner-content">
            <h1>Desert</h1>
            <h2>Desert are Sweet</h2>
          </div>
        </div>
        {/* 4 */}
        <div className='min-w-full md:h-[600px]' style={{
        backgroundImage:`url(https://wallpaperaccess.com/full/826923.jpg)`,
        backgroundSize:'cover',
        backgroundAttachment:'fixed'}}>
          <div className="banner-content">
            <h1>Curry</h1>
            <h2>Curry is spicy</h2>
          </div>
        </div>
        {/* 5 */}
        <div className='min-w-full md:h-[600px]' style={{
        backgroundImage:`url(https://pixelz.cc/wp-content/uploads/2018/08/grilled-steak-uhd-4k-wallpaper.jpg)`,
        backgroundSize:'cover',
        backgroundAttachment:'fixed'}}>
          <div className="banner-content">
            <h1>Steak</h1>
            <h2>Steak is spicy</h2>
          </div>
        </div>
        {/* 6 */}
        <div className='min-w-full md:h-[600px]' style={{
        backgroundImage:`url(https://images5.alphacoders.com/335/335086.jpg)`,
        backgroundSize:'cover',
        backgroundAttachment:'fixed'}}>
          <div className="banner-content">
            <h1>Tea</h1>
            <h2>Tea </h2>
          </div>
        </div>
  </div>
  )
}

export default Slider