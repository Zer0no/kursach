import '../styles/about.css';
import ownerPhoto from "../media/ownerPhoto.png"
import '../media/OpenSans/opensans.css'

function AboutUsPart() {
  return (
    <div id="aboutUsPart" class="contentPart evenContentPart">
      <div id="aboutContent">
        <div id="owner">
          <img id="ownerPhoto" src={ownerPhoto} alt="Фото основателя"/>
          <div id="aboutOwner"><span><span>Иванова Маргарита,</span> 26 лет</span> <br/>Основатель приюта</div>
        </div>
        <div id="text">
          <div id="title"> О приюте </div>
          <div id="aboutText">
            <p>Наш приют существует с 2018 года, располагается в Ленинградской области и пока что насчитывает только 6 сотрудников. Мы создали сервис, где пользователи помогают бездомным собакам и кошкам, доставленными по всей стране. </p>
            <p>Наша миссия заключается в том, чтобы заботиться о благополучии животных и найти для них любящую семью. Мы помогли уже более 100 кошечкам и собачкам обрести новый дом.</p>
            <p>Наш приют существует за счет пожертвований, поэтому мы всегда готовы к сотрудничеству и будем благодарны за любую помощь, чтобы как можно быстрее все животные нашли свою семью.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPart;

