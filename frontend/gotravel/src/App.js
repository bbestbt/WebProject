import React, { Component } from "react";
import "./App.css";
import "./index.css";
import { Router, Link } from "@reach/router";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import NavbarMain from "./components/Navbar";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import PlanTripPage from './planTripPage';
import SignUpPage from './signUpPage';
import LoginPage from './login';
import FavPage from './addfav';

//test
import Regis from './regis'
import TakPage from './tak';
import KanPage from './kan';
import Promo from './promotion';
import RatPage from './rat';
import PhetPage from './phet';
import Prachuap from './prachuap'
import Trat from './trat'
import Chachoengsao from './chachoengsao'
import Chan from './chan'
import Chon from './chon'
import Prachin from './prachin'
import Rayong from './rayong'
import Sakaeo  from './sakaeo'
//North 
import Chiangmai from './mai'
import Chiangrai from './rai'
import Lampang from './pang'
import Lamphun from './phun'
import Maehong from './mae'
import Nan from './nan'
import Phayao from './phayao'
import Phrae from './phrae'
import Utta from './utta'

//Northeast
import Amnat from './amnat'
import Bueng from './bueng'
import Buri from './buri'
import Chai from './chai'
import Kala from './kala'
import Khon from './khon'
import Loei from './loei'
import Maha from './maha'
import Mukda from './mukda'
import Phanom from './phanom'
import Ratcha from './ratcha'
import Lamphu from './phu'
import Khai from './khai'
import Et from './et'
import Sako from './sako'
import Si from './si'
import Surin from './surin'
import Ubon from './ubon'
import Udon from './udon'
import Yaso from './yaso'

//Central
import Bangkok from './Bangkok'
import AngThong from './AngThong'
import KamphaengPhet from './KamphaengPhet'
import Chainat from './Chainat'
import NakhonNayok from './NakhonNayok'
import NakhonPathom from './NakhonPathom'
import NakhonSawan from './NakhonSawan'
import Nonthaburi from './Nonthaburi'
import PathumThani from './PathumThani'
import PhraNakhonSiAyutthaya from './PhraNakhonSiAyutthaya'
import Phichit from './Phichit'
import Phitsanulok from './Phitsanulok'
import Phetchabun from './Phetchabun'
import LopBuri from './LopBuri'
import SamutPrakan from './SamutPrakan'
import SamutSongkhram from './SamutSongkhram'
import SamutSakhon from './SamutSakhon'
import SingBuri from './SingBuri'
import Sukhothai from './Sukhothai'
import SuphanBuri from './SuphanBuri'
import Saraburi from './Saraburi'
import UthaiThani from './UthaiThani'

//South
import Krabi from './Krabi'
import Chumphon from './Chumphon'
import Trang from './Trang'
import NakhonSiThammarat from './NakhonSiThammarat'
import Narathiwat from './Narathiwat'
import Pattani from './Pattani'
import Phangnga from './Phangnga'
import Phatthalung from './Phatthalung'
import Phuket from './Phuket'
import Ranong from './Ranong'
import Satun from './Satun'
import Songkhla from './Songkhla'
import SuratThani from './SuratThani'
import Yala from './Yala'

import Attract from './attractTicket'
import Hotel from './hotelTicket'
import Food from './foodTicket'

import Hotel1 from './hotel1'
import East from './east'
import West from './west'
import Northeast from './northeast'
import North from './north'
import South from './south'
import Central from './central'
import west from "./west";




class App extends Component {
  render() {
    return (


      <div className="App">
        {/* <NavbarMain /> */}
        <Home/> 
          {/* <Router>
          <Home path="/" />
           <Tour path="tour" />
         </Router>  */}

         {/* <Regis/>  */}
         {/* <Promo/> */}
         {/* <SignUpPage/> */}
         <West/>
         <East/>

        
      </div>


      
    );
   
    
  }
}

export default App;