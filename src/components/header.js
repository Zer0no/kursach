import React from "react";
import '../styles/header.css'
import dog from "../media/headrImg.png"

function HeaderPart(){
    return <header>
        <div id="headerMenu">
        <div id="logo">
            <div id="img"></div>
            <div id="name">Ленинградский <br/>приют</div>
        </div>
        <nav id="headerNavigation">
            <ul>
                <li class="headerNavElement"><a href="#aboutUsPart">О нас</a></li>
                <li class="headerNavElement"><a href="#ourFriendsPart">Наши питомцы</a></li>
                <li class="headerNavElement"><a href="#donationPart">Благотворительность</a></li>
                <li class="headerNavElement"><a href="#footerPart">Отзывы</a></li>
                <li class="headerNavElement"><a href="#contacts">Контакты</a></li>
            </ul>
        </nav>

        </div>
        <div id="headerContent">
            <div id="contentText">Приют для животных <br/>в Ленинградской области</div>
            <div id="contentSlogan">Подари дом пушистому другу</div>
            <div id="showPetsBtn">Посмотреть животных</div>
        </div>
        	
    <img id="headerImg" src={dog} alt="альтернативный текст"/>
    </header>;
}

export default HeaderPart;
