import React from 'react';
import '../../style/footer.css'
import HowardLogo from '../../img/howardu_clocktower_logo.png'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <img src={HowardLogo} className='footer-image' alt="Logo"/>
                <p>Copyright &copy; Howard University Department of Computer Information Systems {new Date().getFullYear()}</p>

            </div>
        </>
    )
}
export {Footer as default}
