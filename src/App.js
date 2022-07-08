import React,{useState, useEffect} from "react"
import Axios from 'axios'
import Coin from './components/Coin'



function App(){
    const [listOfCoins,setListOfCOins]=useState([])
    const [searchWord,setSearchWord]=useState("")
   
    useEffect(()=>{
     Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then(
        
         (response)=>{setListOfCOins(response.data.coins)}
         
     )
    },[])

    const filteredCoins=listOfCoins.filter((coin)=>{
            return coin.name.toLowerCase().includes(searchWord.toLowerCase())
        })
    

    return(
    <div className="App">
        <div className="cryptoHeader">
            <input type='text' placeholder='Bitcoin...' onChange={(e)=>{setSearchWord(e.target.value)}}/>
            {/* setting the value of state to whatever is in the input */}
        </div>
        <div className="cryptoDisplay">
            {filteredCoins.map((coin)=> {
                return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} />;
            })}
        </div>

    </div>
        
      
    )

};

export default App