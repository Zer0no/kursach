import '../styles/footer.css';
import footerCat from "../media/footerCat.png"
import React from 'react';
import sliderPhoto from "../media/sliderPhoto.png"
import ReactSwipe from 'react-swipe';
import nextButton from "../media/nextBtn.svg"
import prevButton from "../media/prevBtn.svg"

class SliderBlock extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(<div class="block">
      <img src={this.props.sliderPhoto} alt="SliderPhoto" class="photo"/>
      <div class='sliderContent'>
        <span class="sliderName"><span class="nameBold">{this.props.name},</span> {this.props.age} </span> <br/>
        <span class="sliderInfo">
          <p>{this.props.p1}</p>
          <p>{this.props.p2}</p></span>
      </div>
      
    </div>)
  }
}

const Carousel = () => {
  let reactSwipeEl;
  return(
    <div id="sliderBlock">
          <button  class="sliderBtn" onClick={() => reactSwipeEl.prev()}><img src={prevButton} width="60%" alt="Вперёд"/></button>
      <div id='carousel'>
      <ReactSwipe
          childCount = {6}
          swipeOptions={{ continuous: false }}
          ref={el => (reactSwipeEl = el)}>
            <div className='slide'>
            <SliderBlock name="Боня" age="2 года" sliderPhoto={sliderPhoto}
                p1="Кошечка Боня стала для меня самым лучшим другом!  Не представляю, как я жила раньше без нее. Теперь мой дом наполнен теплом и уютом."
                p2="Хочется выразить большую благодарность приюту и пожелать успехов, а также развития."/>
            </div>
            <div className='slide'>
            <SliderBlock name="Боня" age="2 года" sliderPhoto={sliderPhoto}
                p1="Кошечка Боня стала для меня самым лучшим другом!  Не представляю, как я жила раньше без нее. Теперь мой дом наполнен теплом и уютом."
                p2="Хочется выразить большую благодарность приюту и пожелать успехов, а также развития."/>
            </div>
            <div className='slide'>
            <SliderBlock name="Боня" age="2 года" sliderPhoto={sliderPhoto}
                p1="Кошечка Боня стала для меня самым лучшим другом!  Не представляю, как я жила раньше без нее. Теперь мой дом наполнен теплом и уютом."
                p2="Хочется выразить большую благодарность приюту и пожелать успехов, а также развития."/>
            </div>
            <div className='slide'>
            <SliderBlock name="Боня" age="2 года" sliderPhoto={sliderPhoto}
                p1="Кошечка Боня стала для меня самым лучшим другом!  Не представляю, как я жила раньше без нее. Теперь мой дом наполнен теплом и уютом."
                p2="Хочется выразить большую благодарность приюту и пожелать успехов, а также развития."/>
            </div>
            <div className='slide'>
            <SliderBlock name="Боня" age="2 года" sliderPhoto={sliderPhoto}
                p1="Кошечка Боня стала для меня самым лучшим другом!  Не представляю, как я жила раньше без нее. Теперь мой дом наполнен теплом и уютом."
                p2="Хочется выразить большую благодарность приюту и пожелать успехов, а также развития."/>
            </div>
            <div className='slide'>
            <SliderBlock name="Боня" age="2 года" sliderPhoto={sliderPhoto}
                p1="Кошечка Боня стала для меня самым лучшим другом!  Не представляю, как я жила раньше без нее. Теперь мой дом наполнен теплом и уютом."
                p2="Хочется выразить большую благодарность приюту и пожелать успехов, а также развития."/>
            </div>
          </ReactSwipe>
      </div>
      
          <button class="sliderBtn" onClick={() => reactSwipeEl.next()}><img src={nextButton} width="50%" alt="Вперёд"/></button>
    </div>
  )
}

function FooterPart() {
  return (
    <footer id="footerPart" class="oddContentPart">
      <div id='footerContent'>
        <div id="footerCon">
          <div id="footerTitle">
            Наши животные в новом доме
          </div>
          <Carousel/>
        </div>
      </div>
      <div id="footerOverlay">
        <div id="contacts">
          <div id="footerLogo">
          <div id="footerLogoImg"></div>
            <div id="footerLogoName">Ленинградский <br/>приют</div>
          </div>
          <div id='time'>пн-вс с 9:00 до 18:00 <br/>
          8 (999) 999- 99-99<br/>
          г. Пушкин, ул. Гражданская 52</div>
        </div>
        <img id="overlayCat" src={footerCat} alt="Кот снизу"/>
      </div>
    </footer>
  );
}

export default FooterPart;

