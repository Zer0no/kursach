import '../styles/ourLife.css';
import dog1 from '../media/dog1.png';
import dog2 from '../media/dog2.png';
import cat1 from '../media/cat1.png';
import cat2 from '../media/cat2.png';
import cat3 from '../media/cat3.png';



function OurLifePart() {
  return (
    <div id="ourLifePart" class="contentPart evenContentPart">
      <div id="ourLifeContent">
      <div id="title">Наша жизнь</div>
      <div id="photos">
        <img id="dog1" src={dog1} alt="dog1"/>
        <img id="dog2" src={dog2} alt="dog2"/>
        <img id="cat1" src={cat1} alt="cat1"/>
        <img id="cat2" src={cat2} alt="cat2"/>
        <img id="cat3" src={cat3} alt="cat3"/>
      </div>
    </div>
      </div>
  );
}

export default OurLifePart;

