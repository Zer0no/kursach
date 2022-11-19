import '../styles/advantages.css';
import sprite1 from "../media/sprite1.svg";
import sprite2 from "../media/sprite2.svg";
import sprite3 from "../media/sprite3.svg";
import sprite4 from "../media/sprite4.svg";
import sprite5 from "../media/sprite5.svg";
import sprite6 from "../media/sprite6.svg";


function AdvantagesPart() {
  return (
    <div id="advantagesPart" class="contentPart oddContentPart">
      <div id="advantagesContent">
        <div id='advantages' class="advPart">
          <div class='title'>Почему стоит выбрать наших друзей?</div>
          <div class='cardBlock'>
            <div class="card"><img src={sprite1} alt="sprite1" class="cardImg"/>
              <div class="cardText">
                <div class="textTitle">Они дружелюбные</div>
                <div class="text">Мы научили наших питомцев быть добрыми, окружив их любовью и заботой</div>
              </div>
            </div>
            <div class="card"><img src={sprite2} alt="sprite2" class="cardImg"/>
              <div class="cardText">
                <div class="textTitle">Они здоровые</div>
                <div class="text">Мы заботимся о здоровье питомцев, которые находятся у нас</div>
              </div>
            </div>
            <div class="card"><img src={sprite3} alt="sprite3" class="cardImg"/>
              <div class="cardText">
                <div class="textTitle">Они особенные</div>
                <div class="text">Мы смогли подобрать индивидуальный подход к каждому животному</div>
              </div>
            </div>
          </div>
        </div>
        <div id='hovCanHelp' class="advPart">
          <div class='title'>Как ещё можно помочь приюту?</div>
          <div class='cardBlock'>
          <div class="card"><img src={sprite4} alt="sprite4" class="cardImg"/>
              <div class="cardText">
                <div class="textTitle">Стать волонтёром</div>
                <div class="text">Помогай информационно, впривези необходимое или просто покорми животное</div>
              </div>
            </div>
            <div class="card"><img src={sprite5} alt="sprite5" class="cardImg"/>
              <div class="cardText">
                <div class="textTitle">Стать спонсором</div>
                <div class="text">Средства идут на лечение питомцев и содержание нашего приюта</div>
              </div>
            </div>
            <div class="card"><img src={sprite6} alt="sprite6" class="cardImg"/>
              <div class="cardText">
                <div class="textTitle">Передержка</div>
                <div class="text">Возьми животное временно на передержку, пока ему не подберут новую семью</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvantagesPart;

