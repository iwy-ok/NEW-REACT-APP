import React from 'react';
import { Link } from 'react-router-dom';
import {generateMedia} from 'styled-media-query';
import styled from 'styled-components';



 const FooterChoosePlan = () => {
    return (
        <FooterContainer>
            <div className="footer-wrapper">

        
           <span className="question-link" style={{ marginLeft: '10%', color: '#999' }}>Questions?&nbsp;
                <Link> Call 1-877-742-1335</Link>
            </span>
            <div className="footer-columns">
               <ul>
                   <li>
                     <Link to="/">FAQ</Link>
                   </li> 
                </ul>
                <ul>
                   <li>
                     <Link to="/">Help Center</Link>
                   </li>                       
                </ul>
                <ul>
                   <li>
                     <Link to="/">Terms of use</Link>
                   </li>
                </ul>
                <ul>
                   <li>
                     <Link to="/">Privacy</Link>
                   </li> 
                </ul>
            </div>
        </div>
    </FooterContainer>
    );
    };

    export default FooterChoosePlan;


    const customMedia = generateMedia({
        lgDesktop: '1350px',
        mdDesktop: '1150px',
        tablet: '960px',
        smTablet: '740px'
    })

//Footer Container  
const FooterContainer = styled.footer`
dispaly: grid;
justify-content: center;
background: #f3f3f3;
padding: 1.875rem 0;
margin-top: 10rem;
position: relative;
border-top: 1px solid #e6e6e6;
z-index: 5;

.footer-columns {
    width: 80%;
    margin: 1rem 3rem 0 3rem;
    color: #999;
    display: grid;
    grid-template-columns: repeat(4, 250px);
    grid-gap: 0.3rem;
    ${customMedia.lessThan('lgDesktop')`
    grid-template-columns: repeat(2, 1fr);
   `}
}

.footer-wrapper {
    margin: 0 auto;
    padding: 4rem;
}

.question-link {
    margin-left: 3rem;
    font-size: 1rem;
}

a {
 color: #999;
 font-size: 0.8125rem;
 &:hover {
     text-decoration: underline;
     cursor: pointer;
 }
}

ul {
    list-style-type: none;
}

`;