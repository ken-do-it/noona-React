import React, { Component } from 'react'
import './App.css';
import Box from './component/BoxClass';


const choice = {
    rock: {
      name:"Rock",
      img: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png",
    },
    scissors:{
      name: "Scissors",
      img : "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png",
    },
    paper :{
      name : "Paper",
      img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png",
    }
  }


export default class AppClass extends Component {


    constructor(props) {
        super(props)
        this.state = {
            userSelect: "null",
            computerSelect: "null",
            result:0,
            computerResult:0,
            winCount:0,
            loseCount:0,
            tieCount:0
        }
    }


    
    play = (userChoice) => {
        const userSelect = choice[userChoice];
        const computerSelect = this.randomChoice();
        
        const result = this.judgement(userSelect, computerSelect);
        
        this.setState({
          userSelect: userSelect,
          computerSelect: computerSelect,
          result: result.user,
          computerResult: result.computer
        });
    
        this.updateUserCount(result.user);
      };


      judgement = (user, computer) => {
        if (user.name === computer.name) {
          return { user: "tie", computer: "tie" };
        } else if (user.name === "Rock") {
          return computer.name === "Scissors"
            ? { user: "win", computer: "lose" }
            : { user: "lose", computer: "win" };
        } else if (user.name === "Scissors") {
          return computer.name === "Paper"
            ? { user: "win", computer: "lose" }
            : { user: "lose", computer: "win" };
        } else if (user.name === "Paper") {
          return computer.name === "Rock"
            ? { user: "win", computer: "lose" }
            : { user: "lose", computer: "win" };
        }
      };

      updateUserCount = (result) => {
        if (result === "win") {
          this.setState(prevState => ({ winCount: prevState.winCount + 1 }));
        } else if (result === "lose") {
          this.setState(prevState => ({ loseCount: prevState.loseCount + 1 }));
        } else if (result === "tie") {
          this.setState(prevState => ({ tieCount: prevState.tieCount + 1 }));
        }
      };
    
      randomChoice = () => {
        const itemArray = Object.keys(choice);
        const randomItem = Math.floor(Math.random() * itemArray.length);
        return choice[itemArray[randomItem]];
      };
    



  render() {
    return (
      <div className='main_body'> 
      <h1>Rock Scissor Paper!!</h1>
      <h2>class component</h2>
      <div className="main">
        <Box name ="You" item ={this.state.userSelect} result = {this.state.result}/>
        <Box name = "Computer" item = {this.state.computerSelect} result = {this.state.computerResult}/>
      </div>


      <div className='main'>
        <button onClick={() => this.play("scissors")}>가위</button> 
        <button onClick={() => this.play("rock")}>바위</button>
        <button onClick={() => this.play("paper")}>보</button>
      </div>
      
      <div className='main_col'>
        <h2>Total You win: {this.state.winCount}</h2> {/* 이긴 횟수 표시 */}
        <h2>Total You lose: {this.state.loseCount}</h2> {/* 진 횟수 표시 */}
        <h2>Total tie : {this.state.tieCount}</h2>
      </div>




      
      </div>
    )
  }
}
