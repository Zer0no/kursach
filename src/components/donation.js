import '../styles/donation.css';
import donationDog from "../media/dogDonation.png";
import gif from "../media/gif1.gif"

function DonationPart() {
  return (
    <div id="donationPart" class="contentPart evenContentPart">
      <div id="donationContent">
        <div id="content">
          <img id="donationImg" src={donationDog} alt="Собака с миской"/>
          <div id="donationInfo">
            <div id='donationTitle'>Вы можете сделать небольшие пожертвования для наших питомцев</div>
            <div id="donationBtn">Помочь животным</div>
            <div id="donationComment">Спасибо вам за то, что совершаете пожертвования и помогаете нам дать заботу, дом и еду питомцам, которые попали в тяжелые жизненные ситуации.</div>
          </div>
        </div>
        <img id="donationGif" src={gif} alt='Гифка'/>
      </div>
    </div>
  );
}

export default DonationPart;

