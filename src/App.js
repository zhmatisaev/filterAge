import React, {useState} from 'react';
import './App.css';
import OnBtn from './components/OnBtns';
import { User } from './components/Users';
import {data} from './data'


function App() {
  const [age , setAge] = useState ('29');
  const [country , setCountry] = useState ('');

  const filterCountry = () => {
    switch(country){
      case 1:
        let arr1 = data.filter((el) => {
          return el.age <= "18" && el.country === "Kyrgyzstan";
        });
        return  arr1.map((el,id,) => {
          return <User data={el} key= {id} color = 'red' />
          })
      case 2:
        let arr2 = data.filter((el) => {
          return el.age <= "18" && el.country !== "Kyrgyzstan";
        });
        return  arr2.map((el,id,) => {
          return <User data={el} key= {id} color = 'red' />
          })
      default:
        let arr = data.filter((el)=>{
          return el.age <= 18;
        })
        return arr.map((el,id)=>{
          return <User data={el} key={id} />
        })
    }
    }
  const renderUsers = () => {
    switch(age) {
      // 1 -render
      case "1" :
        return (
          <div className='Onbtnn'>
            <div>
            <button onClick={() => setCountry(1)}>Kyrgyzstan</button>
  //         <button onClick={() => setCountry(2)}>Uzbekistan</button> 
           <div  className='country'>{filterCountry()}</div>
            </div>
          </div>
        )
      // <render-2>
      case '2':
        let arr2 =data.filter((el) => {
          return el.age > '18' && el.age < '24';
        });
        return arr2.map((el,id) => {
          return <User data={el} key= {id} color = 'red' />
        });
      
      // render -3
      case "3":
        let arr3 =data.filter((el) => {
          return el.age >'25';
        })
        return arr3.map((el,id) => {
          return <User data ={el} key ={id} color="blue"/>
        });
      // render 4
      case "4":
        let arr4 = data.filter((el) => {
          return el.age <= "29";
        })
        return arr4.map((el,id) => {
          return <User data={el} key={id} color="darkred"/>
        });
      default:
        return "";
    }
  }
  

  return (
    <div className="App">
      <div className = "btns-groups">
        {/* btn-1 */}
      <button className="btn"
        onClick ={ ()=> setAge('1')}
        style={
          age >'18'?{backgroundColor: "yellow"} : {backgroundColor: "none"}
        }
      >
          Меньше 18 </button>
        <OnBtn/>
        {/* btn-2 */}
      <button  className="btn"
        onClick ={() => setAge('2')}
        style={
          age >'18'&& age >'24' ?{backgroundColor: "orange"} : {backgroundColor: "none"}
        }
      >
         18-24</button>
      {/* btn-3 */}
      <button  className="btn"
        onClick ={() => setAge('3')}
        style={
          age >='25'?{backgroundColor: "Blue"} : {backgroundColor: "none"}
        }
      > Больше 24 </button>
      {/* btn-4 */}
      <button  className="btn"
        onClick ={() => setAge('4')}
        style={
          age <'29'?{backgroundColor: "violet"} : {backgroundColor: "none"}
        }
      >Всех</button>
      </div>

      <div className = "containers">
      {
        renderUsers()
      //  data.map((el, id) => {
      //    return <User data ={el} key ={id} />
      //  })
     }
      </div>
    </div>
  )
 }

export default App;
