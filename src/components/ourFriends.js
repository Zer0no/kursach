import '../styles/ourFriends.css';
import Item from './categories/item';
import For from 'react';
import React from 'react';
import Pets from './categories/pets';
import pet1 from '../media/ourPets/pet1.png';
import pet2 from '../media/ourPets/pet2.png';
import pet3 from '../media/ourPets/pet3.png';
import pet4 from '../media/ourPets/pet4.png';







class OurFriendsPart extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cathegories: [
        {
          key: "all",
          name: "Все животные"
        },
        {
          key: "cat",
          name: "Кошки"
        },
        {
          key: "dog",
          name: "Собаки"
        }
      ],
      currentItems : [],
      pets :[
        { key: "1", name: "Муся", age: "4 года",description: "Муся — кошечка, умеющая за себя постоять. Но в ней столько нежности и чувствительности, что хочется обнять и укрыть от всех невзгод этого мира.", img: pet1 , category: "cat"},
        { key: "2",name: "Муся", age: "4 года",description: "Муся — кошечка, умеющая за себя постоять. Но в ней столько нежности и чувствительности, что хочется обнять и укрыть от всех невзгод этого мира.", img: pet2 , category: "dog"},
        { key: "3",name: "Муся", age: "4 года",description: "Муся — кошечка, умеющая за себя постоять. Но в ней столько нежности и чувствительности, что хочется обнять и укрыть от всех невзгод этого мира.", img: pet4 , category: "cat"},
        { key: "4",name: "Муся", age: "4 года",description: "Муся — кошечка, умеющая за себя постоять. Но в ней столько нежности и чувствительности, что хочется обнять и укрыть от всех невзгод этого мира.", img: pet3 , category: "dog"}
      ]
    }
    this.state.currentItems = this.state.pets;
    this.click = this.click.bind(this);
  }

  click(e){
    var cl = e.target.className;
    var elements = document.getElementsByClassName("cathegoryBtn")
    var category = e.target.attributes.category.value
    if (! e.target.classList.contains("active")){
      for (var i of elements){
        if (i.classList.contains("active")){
          i.classList.remove("active");
          i.classList.add("disable");
        }
      }
      e.target.classList.remove("disable");
      e.target.classList.add("active");
      this.setState({
        currentItems: this.state.pets.filter(el => el.category == category)
      })
      if (category == "all"){
        this.setState({currentItems: this.state.pets})
      }
    }
  }

  render(){
  return (
    <div id="ourFriendsPart" class="contentPart oddContentPart">
      <div id="ourFriendsContent">
        <div id='ourFriendsTitle'>Наши друзья, которые ищут дом</div>
        <div id="selectPetsMenu">
          <div class="cathegoryBtn active" category={this.state.cathegories[0]["key"]} onClick={this.click}>Все животные</div>
          <div class="cathegoryBtn disable" category={this.state.cathegories[2]["key"]} onClick={this.click}>Собаки</div>
          <div class="cathegoryBtn disable" category={this.state.cathegories[1]["key"]} onClick={this.click}>Кошки</div>
        </div>
        <Pets pets={this.state.currentItems}/>
      </div>
    </div>
  );
  }
}

export default OurFriendsPart;

