import "./about.css";
import ziad from '../../images/ziad.jpeg';
const About = () => {
  return (
    <section className="about">
      <h1>About Us</h1>
     <div className="info">
      <p> Ziad Online Book Store The Online Book Shopping Store to manage, buy, add, remove and sell books. Book name and Quantity selection, auto receipt generated and payment options. Login and logout security for both user and admin. Seperate Profile for all.
</p>
      <img src={ziad} alt="ziad" />

     </div>
    </section>
  );
};

export default About;