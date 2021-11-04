import { useState } from 'react';

import './CommingSoon.scss'
import ContactUs  from '../../Components/ContactUsForm/contactUs';

const ComingSoone = () => {
  const  [displayContactForm, setDisplayContactForm] = useState(true)

  const DisplayForm = () => {
    setDisplayContactForm(!displayContactForm)
  }

  return (
    <div className="coming-soon">
        <div className="coming-soon__title">
            <p>COMING</p>
            <p>SOON</p>
        </div>
        <div className='coming-soon__description'>
            <p>We will be celebrating the launch of our web site very soon! Please feel free to <span onClick={DisplayForm}>contact us</span> if you have any questions</p>
        </div>
        <div className="coming-soon__form" hidden={displayContactForm}>
            <ContactUs/>
        </div>
    </div>
  );
}

export default ComingSoone;
