import React from 'react';


function Footer() {
    return(
        <footer className='footer'>
            <div className='footer__brand-container'>
                <span role='img'>
                    Made with ❤️ by <a href='https://oliviadavis593.github.io/portfolio/' target='_blank' rel='noopener noreferrer'>Olivia Davis</a>
                </span>
            </div>
            <div className='footer__social-media'>
                <a href='https://github.com/oliviadavis593' className='gb-footer-github' target='_blank' rel="noopener noreferrer"><ion-icon name="logo-github" class="icons"></ion-icon></a>
                <a href='https://www.linkedin.com/in/olivia-davis-ab1848105/' className='gb-footer-linkedin' target='_blank' rel="noopener noreferrer"><ion-icon name="logo-linkedin" class="icons"></ion-icon></a>
                </div>
                <div className='copyright-text'>
                    <p>
                        Copyright &copy; 2020
                    <br />
                        All Rights Reserved
                    </p>
                </div>
            </footer>
    )
}


export default Footer; 