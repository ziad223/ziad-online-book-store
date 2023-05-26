import React from 'react';
 import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-container">
        <h2>Ziad Online Book Store</h2>
        <div className="icons">
        <a target='_blank' href="https://www.facebook.com/ana.mai.14203544/x"> <i style={{ color: "#2980b9" }} class="fa-brands fa-facebook"></i></a>
        <a target='_blank' href="https://instagram.com/ziad2508?igshid=YmMyMTA2M2Y="> <i class="fa-brands fa-instagram" style={{ color: "#c54739" }}></i> </a>
        <a target='_blank' href="https://ziad223.github.io/Ziad-Portfolio/"><i class="fa-brands fa-github" style={{ color: "#222" }}></i></a>
        <a target='_blank' href="https://www.linkedin.com/in/ziad-abdalla-0a3144228/"><i class="fa-brands fa-linkedin" style={{ color: "blue" }}></i></a>
        <a target='_blank' href="whatsapp:01288486337"><i  class="fa-brands fa-whatsapp" style={{ color: "green" }}></i></a>
        </div>
    </div>

    </div>
  )
}

export default Footer