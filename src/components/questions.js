import '../styles/questions.css';

function QuestionsPart() {
  return (
    <div id="questionsPart" class="contentPart oddContentPart">
      <div id="questionsContent">
        <div id="questionsTitle">Часто задаваемые вопросы</div>
        <div id='questions'>
          <div class="questionBlock">
            <div class="question">Поладит ли животное из приюта с ребёнком?</div>
            <div class="answer">Обыденный график и досуг достаточно часто подвергается корректировке с появлением нового питомца (даже не из приюта). 
              Наши животные ничем не отличаются от других хвостиков, наоборот, они даже проходят специальные тренинги, где их учат ладить с большинством других животных или людей.</div>
          </div>
          <div class="questionBlock">
            <div class="question">Как приучить питомца к новой квартире?</div>
            <div class="answer">Безусловно, любая резкая смена для животного - это стресс для организма. Наши животные достаточно стрессоустойчивы, однако, вероятность неприятных ситуаций остается.
              Лучше всего постараться стать для животного другом, постараться показать квартиру и убедить его, что он в безопасности. </div>
          </div>
          <div class="questionBlock">
            <div class="question">Нужно ли прививать животное из  приюта?</div>
            <div class="answer">Мы стараемся прививать животных, но иногда нам не хватает средств на плановые прививки, так как есть животные, которые нуждаются в скорой мед. помощи намного больше. 
              В любом случае разобраться поможет ветпаспорт, который в обязательном порядке заводится каждому животному.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsPart;

