import React from 'react'
import './NetflixCardList.css'
import myImage1 from '../assets/images/card_images/list-image-1.webp'
import myImage2 from '../assets/images/card_images/list-image-2.webp'
import myImage3 from '../assets/images/card_images/list-image-3.webp'
import myImage4 from '../assets/images/card_images/list-image-4.webp'
import myImage5 from '../assets/images/card_images/list-image-5.webp'
import myImage6 from '../assets/images/card_images/list-image-6.png'
import myImage7 from '../assets/images/card_images/list-image-7.png'
import myImage8 from '../assets/images/card_images/list-image-8.png'
import myImage9 from '../assets/images/card_images/list-image-9.png'

function NetflixCard() {
  return (
    <ul className='image-wrapper' id='shows'>
      <li className="image-container"><img src={myImage1} alt="Netflix card image" /></li>
      <li className="image-container"><img src={myImage2} alt="Netflix card image" /></li>
      <li className="image-container"><img src={myImage3} alt="Netflix card image" /></li>
      <li className="image-container"><img src={myImage4} alt="Netflix card image" /></li>
      <li className="image-container"><img src={myImage5} alt="Netflix card image" /></li>
      <li className="image-container"><img src={myImage6} alt="Netflix card image" /></li>
      <li className="image-container"><img src={myImage7} alt="Netflix card image" /></li>
      <li className="image-container"><img src={myImage8} alt="Netflix card image" /></li>
      <li className="image-container"><img src={myImage9} alt="Netflix card image" /></li>
    </ul>
  )
}

export default NetflixCard
