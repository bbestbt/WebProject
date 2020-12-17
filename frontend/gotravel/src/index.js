import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Login from './login';
import SignUp from './signUpPage';
import Addfav from './addfav';
import PlanTrip from './planTripPage';
import TakPage from './tak';
import Tak1Page from './tak1';
import Tak2Page from './tak2';
import Tak3Page from './tak3';
import Tak4Page from './tak4';
import KanPage from './kan';
import Kan1Page from './kan1';
import Kan2Page from './kan2';
import Kan3Page from './kan3';
import Kan4Page from './kan4';
import RatPage from './rat';
import Rat1Page from './rat1';
import Rat2Page from './rat2';
import Rat3Page from './rat3';
import Rat4Page from './rat4';
import PhetPage from './phet';
import Phet1Page from './phet1';
import Phet2Page from './phet2';
import Phet3Page from './phet3';
import Phet4Page from './phet4';
import Prachuap from './prachuap';
import Prachuap1 from './prachuap1';
import Prachuap2 from './prachuap2';
import Prachuap3 from './prachuap3';
import Prachuap4 from './prachuap4';
import Trat from './trat';
import Trat1 from './trat1';
import Trat2 from './trat2';
import Trat3 from './trat3';
import Trat4 from './trat4';
import Chachoengsao from './chachoengsao'
import Chachoengsao1 from './chachoengsao1'
import Chachoengsao2 from './chachoengsao2'
import Chachoengsao3 from './chachoengsao3'
import Chachoengsao4 from './chachoengsao4'
import Chan from './chan'
import Chan1 from './chan1'
import Chan2 from './chan2'
import Chan3 from './chan3'
import Chan4 from './chan4'
import Chon from './chon'
import Chon1 from './chon1'
import Chon2 from './chon2'
import Chon3 from './chon3'
import Chon4 from './chon4'
import Prachin from './prachin'
import Prachin1 from './prachin1'
import Prachin2 from './prachin2'
import Prachin3 from './prachin3'
import Prachin4 from './prachin4'
import Rayong from './rayong'
import Rayong1 from './rayong1'
import Rayong2 from './rayong2'
import Rayong3 from './rayong3'
import Rayong4 from './rayong4'
import Sakaeo  from './sakaeo'
import Sakaeo1  from './sakaeo1'
import Sakaeo2  from './sakaeo2'
import Sakaeo3  from './sakaeo3'
import Sakaeo4  from './sakaeo4'
//North 
import Chiangmai from './mai'
import Chiangmai1 from './mai1'
import Chiangmai2 from './mai2'
import Chiangmai3 from './mai3'
import Chiangmai4 from './mai4'

import Chiangrai from './rai'
import Chiangrai1 from './rai1'
import Chiangrai2 from './rai2'
import Chiangrai3 from './rai3'
import Chiangrai4 from './rai4'

import Lampang from './pang'
import Lampang1 from './pang1'
import Lampang2 from './pang2'
import Lampang3 from './pang3'
import Lampang4 from './pang4'

import Lamphun from './phun'
import Lamphun1 from './phun1'
import Lamphun2 from './phun2'
import Lamphun3 from './phun3'
import Lamphun4 from './phun4'

import Maehong from './mae'
import Maehong1 from './mae1'
import Maehong2 from './mae2'
import Maehong3 from './mae3'
import Maehong4 from './mae4'

import Nan from './nan'
import Nan1 from './nan1'
import Nan2 from './nan2'
import Nan3 from './nan3'
import Nan4 from './nan4'

import Phayao from './phayao'
import Phayao1 from './phayao1'
import Phayao2 from './phayao2'
import Phayao3 from './phayao3'
import Phayao4 from './phayao4'

import Phrae from './phrae'
import Phrae1 from './phrae1'
import Phrae2 from './phrae2'
import Phrae3 from './phrae3'
import Phrae4 from './phrae4'

import Utta from './utta'
import Utta1 from './utta1'
import Utta2 from './utta2'
import Utta3 from './utta3'
import Utta4 from './utta4'

//NorthEast
import Amnat from './amnat'
import Amnat1 from './amnat1'
import Amnat2 from './amnat2'
import Amnat3 from './amnat3'
import Amnat4 from './amnat4'

import Bueng from './bueng'
import Bueng1 from './bueng1'
import Bueng2 from './bueng2'
import Bueng3 from './bueng3'
import Bueng4 from './bueng4'

import Buri from './buri'
import Buri1 from './buri1'
import Buri2 from './buri2'
import Buri3 from './buri3'
import Buri4 from './buri4'

import Chai from './chai'
import Chai1 from './chai1'
import Chai2 from './chai2'
import Chai3 from './chai3'
import Chai4 from './chai4'

import Kala from './kala'
import Kala1 from './kala1'
import Kala2 from './kala2'
import Kala3 from './kala3'
import Kala4 from './kala4'

import Khon from './khon'
import Khon1 from './khon1'
import Khon2 from './khon2'
import Khon3 from './khon3'
import Khon4 from './khon4'

import Loei from './loei'
import Loei1 from './loei1'
import Loei2 from './loei2'
import Loei3 from './loei3'
import Loei4 from './loei4'

import Maha from './maha'
import Maha1 from './maha1'
import Maha2 from './maha2'
import Maha3 from './maha3'
import Maha4 from './maha4'

import Mukda from './mukda'
import Mukda1 from './mukda1'
import Mukda2 from './mukda2'
import Mukda3 from './mukda3'
import Mukda4 from './mukda4'

import Phanom from './phanom'
import Phanom1 from './phanom1'
import Phanom2 from './phanom2'
import Phanom3 from './phanom3'
import Phanom4 from './phanom4'

import Ratcha from './ratcha'
import Ratcha1 from './ratcha1'
import Ratcha2 from './ratcha2'
import Ratcha3 from './ratcha3'
import Ratcha4 from './ratcha4'

import Lamphu from './phu'
import Lamphu1 from './phu1'
import Lamphu2 from './phu2'
import Lamphu3 from './phu3'
import Lamphu4 from './phu4'

import Khai from './khai'
import Khai1 from './khai1'
import Khai2 from './khai2'
import Khai3 from './khai3'
import Khai4 from './khai4'

import Et from './et'
import Et1 from './et1'
import Et2 from './et2'
import Et3 from './et3'
import Et4 from './et4'

import Sako from './sako'
import Sako1 from './sako1'
import Sako2 from './sako2'
import Sako3 from './sako3'
import Sako4 from './sako4'

import Si from './si'
import Si1 from './si1'
import Si2 from './si2'
import Si3 from './si3'
import Si4 from './si4'

import Surin from './surin'
import Surin1 from './surin1'
import Surin2 from './surin2'
import Surin3 from './surin3'
import Surin4 from './surin4'

import Ubon from './ubon'
import Ubon1 from './ubon1'
import Ubon2 from './ubon2'
import Ubon3 from './ubon3'
import Ubon4 from './ubon4'

import Udon from './udon'
import Udon1 from './udon1'
import Udon2 from './udon2'
import Udon3 from './udon3'
import Udon4 from './udon4'

import Yaso from './yaso'
import Yaso1 from './yaso1'
import Yaso2 from './yaso2'
import Yaso3 from './yaso3'
import Yaso4 from './yaso4'

//Central
import Bangkok from './Bangkok'
import Bangkok1 from './Bangkok1'
import Bangkok2 from './Bangkok2'
import Bangkok3 from './Bangkok3'
import Bangkok4 from './Bangkok4'

import AngThong from './AngThong'
import AngThong1 from './AngThong1'
import AngThong2 from './AngThong2'
import AngThong3 from './AngThong3'
import AngThong4 from './AngThong4'

import KamphaengPhet from './KamphaengPhet'
import KamphaengPhet1 from './KamphaengPhet1'
import KamphaengPhet2 from './KamphaengPhet2'
import KamphaengPhet3 from './KamphaengPhet3'
import KamphaengPhet4 from './KamphaengPhet4'

import Chainat from './Chainat'
import Chainat1 from './Chainat1'
import Chainat2 from './Chainat2'
import Chainat3 from './Chainat3'
import Chainat4 from './Chainat3'

import NakhonNayok from './NakhonNayok'
import NakhonNayok1 from './NakhonNayok1'
import NakhonNayok2 from './NakhonNayok2'
import NakhonNayok3 from './NakhonNayok3'
import NakhonNayok4 from './NakhonNayok4'

import NakhonPathom from './NakhonPathom'
import NakhonPathom1 from './NakhonPathom1'
import NakhonPathom2 from './NakhonPathom2'
import NakhonPathom3 from './NakhonPathom3'
import NakhonPathom4 from './NakhonPathom4'

import NakhonSawan from './NakhonSawan'
import NakhonSawan1 from './NakhonSawan1'
import NakhonSawan2 from './NakhonSawan2'
import NakhonSawan3 from './NakhonSawan3'
import NakhonSawan4 from './NakhonSawan4'

import Nonthaburi from './Nonthaburi'
import Nonthaburi1 from './Nonthaburi1'
import Nonthaburi2 from './Nonthaburi2'
import Nonthaburi3 from './Nonthaburi3'
import Nonthaburi4 from './Nonthaburi4'

import PathumThani from './PathumThani'
import PathumThani1 from './PathumThani1'
import PathumThani2 from './PathumThani2'
import PathumThani3 from './PathumThani3'
import PathumThani4 from './PathumThani4'

import PhraNakhonSiAyutthaya from './PhraNakhonSiAyutthaya'
import PhraNakhonSiAyutthaya1 from './PhraNakhonSiAyutthaya1'
import PhraNakhonSiAyutthaya2 from './PhraNakhonSiAyutthaya2'
import PhraNakhonSiAyutthaya3 from './PhraNakhonSiAyutthaya3'
import PhraNakhonSiAyutthaya4 from './PhraNakhonSiAyutthaya4'

import Phichit from './Phichit'
import Phichit1 from './Phichit1'
import Phichit2 from './Phichit2'
import Phichit3 from './Phichit3'
import Phichit4 from './Phichit4'

import Phitsanulok from './Phitsanulok'
import Phitsanulok1 from './Phitsanulok1'
import Phitsanulok2 from './Phitsanulok2'
import Phitsanulok3 from './Phitsanulok3'
import Phitsanulok4 from './Phitsanulok4'

import Phetchabun from './Phetchabun'
import Phetchabun1 from './Phetchabun1'
import Phetchabun2 from './Phetchabun2'
import Phetchabun3 from './Phetchabun3'
import Phetchabun4 from './Phetchabun4'

import LopBuri from './LopBuri'
import LopBuri1 from './LopBuri1'
import LopBuri2 from './LopBuri2'
import LopBuri3 from './LopBuri3'
import LopBuri4 from './LopBuri4'

import SamutPrakan from './SamutPrakan'
import SamutPrakan1 from './SamutPrakan1'
import SamutPrakan2 from './SamutPrakan2'
import SamutPrakan3 from './SamutPrakan3'
import SamutPrakan4 from './SamutPrakan4'

import SamutSongkhram from './SamutSongkhram'
import SamutSongkhram1 from './SamutSongkhram1'
import SamutSongkhram2 from './SamutSongkhram2'
import SamutSongkhram3 from './SamutSongkhram3'
import SamutSongkhram4 from './SamutSongkhram4'

import SamutSakhon from './SamutSakhon'
import SamutSakhon1 from './SamutSakhon1'
import SamutSakhon2 from './SamutSakhon2'
import SamutSakhon3 from './SamutSakhon3'
import SamutSakhon4 from './SamutSakhon4'

import SingBuri from './SingBuri'
import SingBuri1 from './SingBuri1'
import SingBuri2 from './SingBuri2'
import SingBuri3 from './SingBuri3'
import SingBuri4 from './SingBuri4'

import Sukhothai from './Sukhothai'
import Sukhothai1 from './Sukhothai1'
import Sukhothai2 from './Sukhothai2'
import Sukhothai3 from './Sukhothai3'
import Sukhothai4 from './Sukhothai4'

import SuphanBuri from './SuphanBuri'
import SuphanBuri1 from './SuphanBuri1'
import SuphanBuri2 from './SuphanBuri2'
import SuphanBuri3 from './SuphanBuri3'
import SuphanBuri4 from './SuphanBuri4'

import Saraburi from './Saraburi'
import Saraburi1 from './Saraburi1'
import Saraburi2 from './Saraburi2'
import Saraburi3 from './Saraburi3'
import Saraburi4 from './Saraburi4'

import UthaiThani from './UthaiThani'
import UthaiThani1 from './UthaiThani1'
import UthaiThani2 from './UthaiThani2'
import UthaiThani3 from './UthaiThani3'
import UthaiThani4 from './UthaiThani4'

//South
import Krabi from './Krabi'
import Krabi1 from './Krabi1'
import Krabi2 from './Krabi2'
import Krabi3 from './Krabi3'
import Krabi4 from './Krabi4'

import Chumphon from './Chumphon'
import Chumphon1 from './Chumphon1'
import Chumphon2 from './Chumphon2'
import Chumphon3 from './Chumphon3'
import Chumphon4 from './Chumphon4'

import Trang from './Trang'
import Trang1 from './Trang1'
import Trang2 from './Trang2'
import Trang3 from './Trang3'
import Trang4 from './Trang4'

import NakhonSiThammarat from './NakhonSiThammarat'
import NakhonSiThammarat1 from './NakhonSiThammarat1'
import NakhonSiThammarat2 from './NakhonSiThammarat2'
import NakhonSiThammarat3 from './NakhonSiThammarat3'
import NakhonSiThammarat4 from './NakhonSiThammarat4'

import Narathiwat from './Narathiwat'
import Narathiwat1 from './Narathiwat1'
import Narathiwat2 from './Narathiwat2'
import Narathiwat3 from './Narathiwat3'
import Narathiwat4 from './Narathiwat4'

import Pattani from './Pattani'
import Pattani1 from './Pattani1'
import Pattani2 from './Pattani2'
import Pattani3 from './Pattani3'
import Pattani4 from './Pattani4'

import Phangnga from './Phangnga'
import Phangnga1 from './Phangnga1'
import Phangnga2 from './Phangnga2'
import Phangnga3 from './Phangnga3'
import Phangnga4 from './Phangnga4'

import Phatthalung from './Phatthalung'
import Phatthalung1 from './Phatthalung1'
import Phatthalung2 from './Phatthalung2'
import Phatthalung3 from './Phatthalung3'
import Phatthalung4 from './Phatthalung4'

import Phuket from './Phuket'
import Phuket1 from './Phuket1'
import Phuket2 from './Phuket2'
import Phuket3 from './Phuket3'
import Phuket4 from './Phuket4'

import Ranong from './Ranong'
import Ranong1 from './Ranong1'
import Ranong2 from './Ranong2'
import Ranong3 from './Ranong3'
import Ranong4 from './Ranong4'

import Satun from './Satun'
import Satun1 from './Satun1'
import Satun2 from './Satun2'
import Satun3 from './Satun3'
import Satun4 from './Satun4'

import Songkhla from './Songkhla'
import Songkhla1 from './Songkhla1'
import Songkhla2 from './Songkhla2'
import Songkhla3 from './Songkhla3'
import Songkhla4 from './Songkhla4'

import SuratThani from './SuratThani'
import SuratThani1 from './SuratThani1'
import SuratThani2 from './SuratThani2'
import SuratThani3 from './SuratThani3'
import SuratThani4 from './SuratThani4'

import Yala from './Yala'
import Yala1 from './Yala1'
import Yala2 from './Yala2'
import Yala3 from './Yala3'
import Yala4 from './Yala4'

import Promo from './promotion';
import Attract from './attractTicket'
import Hotel from './hotelTicket'
import Food from './foodTicket'
import Hotel1 from './hotel1'
import Hotel2 from './hotel2'
import Hotel3 from './hotel3'
import Hotel4 from './hotel4'
import Hotel5 from './hotel5'
import Hotel6 from './hotel6'

import Food1 from './food1'
import Food2 from './food2'
import Food3 from './food3'
import Food4 from './food4'
import Food5 from './food5'

import East from './east'
import West from './west'
import Northeast from './northeast'
import North from './north'
import South from './south'
import Central from './central'

import { BrowserRouter, Route, Switch , withRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
// Add custom css import below this line
import "./index.css";

//test
import Home from "./pages/Home";
import Regis from './regis';


// import { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';

// function ScrollToTop({ history }) {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     }
//   }, []);

//   return (null);
// }

// export default withRouter(ScrollToTop);

const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       {/* <ScrollToTop /> */}
       <Switch>

  
        <Route exact path="/" component={App} />
        <Route path="/signUpPage" component={SignUp} />
        <Route path="/planTripPage" component={PlanTrip} />
        <Route path="/Login" component={Login} />
        <Route path="/App" component={App}/>
        <Route path="/addfav" component={Addfav} />
        <Route path="/tak" component={TakPage} />
        <Route path="/tak1" component={Tak1Page} />
        <Route path="/tak2" component={Tak2Page} />
        <Route path="/tak3" component={Tak3Page} />
        <Route path="/tak4" component={Tak4Page} />
        <Route path="/kan" component={KanPage} />
        <Route path="/kan1" component={Kan1Page} />
        <Route path="/kan2" component={Kan2Page} />
        <Route path="/kan3" component={Kan3Page} />
        <Route path="/kan4" component={Kan4Page} />
        <Route path="/rat" component={RatPage} />
        <Route path="/rat1" component={Rat1Page} />
        <Route path="/rat2" component={Rat2Page} />
        <Route path="/rat3" component={Rat3Page} />
        <Route path="/rat4" component={Rat4Page} />
        <Route path="/phet" component={PhetPage} />
        <Route path="/phet1" component={Phet1Page} />
        <Route path="/phet2" component={Phet2Page} />
        <Route path="/phet3" component={Phet3Page} />
        <Route path="/phet4" component={Phet4Page} />
        <Route path="/prachuap" component={Prachuap} />
        <Route path="/prachuap1" component={Prachuap1} />
        <Route path="/prachuap2" component={Prachuap2} />
        <Route path="/prachuap3" component={Prachuap3} />
        <Route path="/prachuap4" component={Prachuap4} />
        <Route path="/trat" component={Trat} />
        <Route path="/trat1" component={Trat1} />
        <Route path="/trat2" component={Trat2} />
        <Route path="/trat3" component={Trat3} />
        <Route path="/trat4" component={Trat4} />
        <Route path="/chachoengsao" component={Chachoengsao} />
        <Route path="/chachoengsao1" component={Chachoengsao1} />
        <Route path="/chachoengsao2" component={Chachoengsao2} />
        <Route path="/chachoengsao3" component={Chachoengsao3} />
        <Route path="/chachoengsao4" component={Chachoengsao4} />
        <Route path="/chan" component={Chan} />
        <Route path="/chan1" component={Chan1} />
        <Route path="/chan2" component={Chan2} />
        <Route path="/chan3" component={Chan3} />
        <Route path="/chan4" component={Chan4} />
        <Route path="/chon" component={Chon} />
        <Route path="/chon1" component={Chon1} />
        <Route path="/chon2" component={Chon2} />
        <Route path="/chon3" component={Chon3} />
        <Route path="/chon4" component={Chon4} />
        <Route path="/prachin" component={Prachin} />
        <Route path="/prachin1" component={Prachin1} />
        <Route path="/prachin2" component={Prachin2} />
        <Route path="/prachin3" component={Prachin3} />
        <Route path="/prachin4" component={Prachin4} />
        <Route path="/rayong" component={Rayong} />
        <Route path="/rayong1" component={Rayong1} />
        <Route path="/rayong2" component={Rayong2} />
        <Route path="/rayong3" component={Rayong3} />
        <Route path="/rayong4" component={Rayong4} />
        <Route path="/sakaeo" component={Sakaeo} />
        <Route path="/sakaeo1" component={Sakaeo1} />
        <Route path="/sakaeo2" component={Sakaeo2} />
        <Route path="/sakaeo3" component={Sakaeo3} />
        <Route path="/sakaeo4" component={Sakaeo4} />
        {/* North */}
        <Route path="/mai" component={Chiangmai} />
        <Route path="/mai1" component={Chiangmai1} />
        <Route path="/mai2" component={Chiangmai2} />
        <Route path="/mai3" component={Chiangmai3} />
        <Route path="/mai4" component={Chiangmai4} />

        <Route path="/rai" component={Chiangrai} />
        <Route path="/rai1" component={Chiangrai1} />
        <Route path="/rai2" component={Chiangrai2} />
        <Route path="/rai3" component={Chiangrai3} />
        <Route path="/rai4" component={Chiangrai4} />

        <Route path="/pang" component={Lampang} />
        <Route path="/pang1" component={Lampang1} />
        <Route path="/pang2" component={Lampang2} />
        <Route path="/pang3" component={Lampang3} />
        <Route path="/pang4" component={Lampang4} />

        <Route path="/phun" component={Lamphun} />
        <Route path="/phun1" component={Lamphun1} />
        <Route path="/phun2" component={Lamphun2} />
        <Route path="/phun3" component={Lamphun3} />
        <Route path="/phun4" component={Lamphun4} />

        <Route path="/mae" component={Maehong} />
        <Route path="/mae1" component={Maehong1} />
        <Route path="/mae2" component={Maehong2} />
        <Route path="/mae3" component={Maehong3} />
        <Route path="/mae4" component={Maehong4} />

        <Route path="/nan" component={Nan} />
        <Route path="/nan1" component={Nan1} />
        <Route path="/nan2" component={Nan2} />
        <Route path="/nan3" component={Nan3} />
        <Route path="/nan4" component={Nan4} />

        <Route path="/phayao" component={Phayao} />
        <Route path="/phayao1" component={Phayao1} />
        <Route path="/phayao2" component={Phayao2} />
        <Route path="/phayao3" component={Phayao3} />
        <Route path="/phayao4" component={Phayao4} />

        <Route path="/phrae" component={Phrae} />
        <Route path="/phrae1" component={Phrae1} />
        <Route path="/phrae2" component={Phrae2} />
        <Route path="/phrae3" component={Phrae3} />
        <Route path="/phrae4" component={Phrae4} />

        <Route path="/utta" component={Utta} />
        <Route path="/utta1" component={Utta1} />
        <Route path="/utta2" component={Utta2} />
        <Route path="/utta3" component={Utta3} />
        <Route path="/utta4" component={Utta4} />

        {/* NorthEast */}
        <Route path="/amnat" component={Amnat} />
        <Route path="/amnat1" component={Amnat1} />
        <Route path="/amnat2" component={Amnat2} />
        <Route path="/amnat3" component={Amnat3} />
        <Route path="/amnat4" component={Amnat4} />

        <Route path="/bueng" component={Bueng} />
        <Route path="/bueng1" component={Bueng1} />
        <Route path="/bueng2" component={Bueng2} />
        <Route path="/bueng3" component={Bueng3} />
        <Route path="/bueng4" component={Bueng4} />

        <Route path="/buri" component={Buri} />
        <Route path="/buri1" component={Buri1} />
        <Route path="/buri2" component={Buri2} />
        <Route path="/buri3" component={Buri3} />
        <Route path="/buri4" component={Buri4} />

        <Route path="/chai" component={Chai} />
        <Route path="/chai1" component={Chai1} />
        <Route path="/chai2" component={Chai2} />
        <Route path="/chai3" component={Chai3} />
        <Route path="/chai4" component={Chai4} />

        <Route path="/kala" component={Kala} />
        <Route path="/kala1" component={Kala1} />
        <Route path="/kala2" component={Kala2} />
        <Route path="/kala3" component={Kala3} />
        <Route path="/kala4" component={Kala4} />

        <Route path="/khon" component={Khon} />
        <Route path="/khon1" component={Khon1} />
        <Route path="/khon2" component={Khon2} />
        <Route path="/khon3" component={Khon3} />
        <Route path="/khon4" component={Khon4} />

        <Route path="/loei" component={Loei} />
        <Route path="/loei1" component={Loei1} />
        <Route path="/loei2" component={Loei2} />
        <Route path="/loei3" component={Loei3} />
        <Route path="/loei4" component={Loei4} />

        <Route path="/maha" component={Maha} />
        <Route path="/maha1" component={Maha1} />
        <Route path="/maha2" component={Maha2} />
        <Route path="/maha3" component={Maha3} />
        <Route path="/maha4" component={Maha4} />

        <Route path="/mukda" component={Mukda} />
        <Route path="/mukda1" component={Mukda1} />
        <Route path="/mukda2" component={Mukda2} />
        <Route path="/mukda3" component={Mukda3} />
        <Route path="/mukda4" component={Mukda4} />

        <Route path="/phanom" component={Phanom} />
        <Route path="/phanom1" component={Phanom1} />
        <Route path="/phanom2" component={Phanom2} />
        <Route path="/phanom3" component={Phanom3} />
        <Route path="/phanom4" component={Phanom4} />

        <Route path="/ratcha" component={Ratcha} />
        <Route path="/ratcha1" component={Ratcha1} />
        <Route path="/ratcha2" component={Ratcha2} />
        <Route path="/ratcha3" component={Ratcha3} />
        <Route path="/ratcha4" component={Ratcha4} />

        <Route path="/phu" component={Lamphu} />
        <Route path="/phu1" component={Lamphu1} />
        <Route path="/phu2" component={Lamphu2} />
        <Route path="/phu3" component={Lamphu3} />
        <Route path="/phu4" component={Lamphu4} />

        <Route path="/khai" component={Khai} />
        <Route path="/khai1" component={Khai1} />
        <Route path="/khai2" component={Khai2} />
        <Route path="/khai3" component={Khai3} />
        <Route path="/khai4" component={Khai4} />

        <Route path="/et" component={Et} />
        <Route path="/et1" component={Et1} />
        <Route path="/et2" component={Et2} />
        <Route path="/et3" component={Et3} />
        <Route path="/et4" component={Et4} />

        <Route path="/sako" component={Sako} />
        <Route path="/sako1" component={Sako1} />
        <Route path="/sako2" component={Sako2} />
        <Route path="/sako3" component={Sako3} />
        <Route path="/sako4" component={Sako4} />

        <Route path="/si" component={Si} />
        <Route path="/si1" component={Si1} />
        <Route path="/si2" component={Si2} />
        <Route path="/si3" component={Si3} />
        <Route path="/si4" component={Si4} />

        <Route path="/surin" component={Surin} />
        <Route path="/surin1" component={Surin1} />
        <Route path="/surin2" component={Surin2} />
        <Route path="/surin3" component={Surin3} />
        <Route path="/surin4" component={Surin4} />

        <Route path="/ubon" component={Ubon} />
        <Route path="/ubon1" component={Ubon1} />
        <Route path="/ubon2" component={Ubon2} />
        <Route path="/ubon3" component={Ubon3} />
        <Route path="/ubon4" component={Ubon4} />

        <Route path="/udon" component={Udon} />
        <Route path="/udon1" component={Udon1} />
        <Route path="/udon2" component={Udon2} />
        <Route path="/udon3" component={Udon3} />
        <Route path="/udon4" component={Udon4} />

        <Route path="/yaso" component={Yaso} />
        <Route path="/yaso1" component={Yaso1} />
        <Route path="/yaso2" component={Yaso2} />
        <Route path="/yaso3" component={Yaso3} />
        <Route path="/yaso4" component={Yaso4} />
        {/* Central */}
        <Route path="/Bangkok" component={Bangkok} />
        <Route path="/Bangkok1" component={Bangkok1} />
        <Route path="/Bangkok2" component={Bangkok2} />
        <Route path="/Bangkok3" component={Bangkok3} />
        <Route path="/Bangkok4" component={Bangkok4} />

        <Route path="/AngThong" component={AngThong} />
        <Route path="/AngThong1" component={AngThong1} />
        <Route path="/AngThong2" component={AngThong2} />
        <Route path="/AngThong3" component={AngThong3} />
        <Route path="/AngThong4" component={AngThong4} />

        <Route path="/KamphaengPhet" component={KamphaengPhet} />
        <Route path="/KamphaengPhet1" component={KamphaengPhet1} />
        <Route path="/KamphaengPhet2" component={KamphaengPhet2} />
        <Route path="/KamphaengPhet3" component={KamphaengPhet3} />
        <Route path="/KamphaengPhet4" component={KamphaengPhet4} />

        <Route path="/Chainat" component={Chainat} />
        <Route path="/Chainat1" component={Chainat1} />
        <Route path="/Chainat2" component={Chainat2} />
        <Route path="/Chainat3" component={Chainat3} />
        <Route path="/Chainat4" component={Chainat4} />

        <Route path="/NakhonNayok" component={NakhonNayok} />
        <Route path="/NakhonNayok1" component={NakhonNayok1} />
        <Route path="/NakhonNayok2" component={NakhonNayok2} />
        <Route path="/NakhonNayok3" component={NakhonNayok3} />
        <Route path="/NakhonNayok4" component={NakhonNayok4} />

        <Route path="/NakhonPathom" component={NakhonPathom} />
        <Route path="/NakhonPathom1" component={NakhonPathom1} />
        <Route path="/NakhonPathom2" component={NakhonPathom2} />
        <Route path="/NakhonPathom3" component={NakhonPathom3} />
        <Route path="/NakhonPathom4" component={NakhonPathom4} />

        <Route path="/NakhonSawan" component={NakhonSawan} />
        <Route path="/NakhonSawan1" component={NakhonSawan1} />
        <Route path="/NakhonSawan2" component={NakhonSawan2} />
        <Route path="/NakhonSawan3" component={NakhonSawan3} />
        <Route path="/NakhonSawan4" component={NakhonSawan4} />

        <Route path="/Nonthaburi" component={Nonthaburi} />
        <Route path="/Nonthaburi" component={Nonthaburi1} />
        <Route path="/Nonthaburi2" component={Nonthaburi2} />
        <Route path="/Nonthaburi3" component={Nonthaburi3} />
        <Route path="/Nonthaburi4" component={Nonthaburi4} />

        <Route path="/PathumThani" component={PathumThani} />
        <Route path="/PathumThani1" component={PathumThani1} />
        <Route path="/PathumThani2" component={PathumThani2} />
        <Route path="/PathumThani3" component={PathumThani3} />
        <Route path="/PathumThani4" component={PathumThani4} />

        <Route path="/PhraNakhonSiAyutthaya" component={PhraNakhonSiAyutthaya} />
        <Route path="/PhraNakhonSiAyutthaya1" component={PhraNakhonSiAyutthaya1} />
        <Route path="/PhraNakhonSiAyutthaya2" component={PhraNakhonSiAyutthaya2} />
        <Route path="/PhraNakhonSiAyutthaya3" component={PhraNakhonSiAyutthaya3} />
        <Route path="/PhraNakhonSiAyutthaya4" component={PhraNakhonSiAyutthaya4} />

        <Route path="/Phichit" component={Phichit} />
        <Route path="/Phichit1" component={Phichit1} />
        <Route path="/Phichit2" component={Phichit2} />
        <Route path="/Phichit3" component={Phichit3} />
        <Route path="/Phichit4" component={Phichit4} />

        <Route path="/Phitsanulok" component={Phitsanulok} />
        <Route path="/Phitsanulok1" component={Phitsanulok1} />
        <Route path="/Phitsanulok2" component={Phitsanulok2} />
        <Route path="/Phitsanulok3" component={Phitsanulok3} />
        <Route path="/Phitsanulok4" component={Phitsanulok4} />

        <Route path="/Phetchabun" component={Phetchabun} />
        <Route path="/Phetchabun1" component={Phetchabun1} />
        <Route path="/Phetchabun2" component={Phetchabun2} />
        <Route path="/Phetchabun3" component={Phetchabun3} />
        <Route path="/Phetchabun4" component={Phetchabun4} />

        <Route path="/LopBuri" component={LopBuri} />
        <Route path="/LopBuri1" component={LopBuri1} />
        <Route path="/LopBuri2" component={LopBuri2} />
        <Route path="/LopBuri3" component={LopBuri3} />
        <Route path="/LopBuri4" component={LopBuri4} />

        <Route path="/SamutPrakan" component={SamutPrakan} />
        <Route path="/SamutPrakan1" component={SamutPrakan1} />
        <Route path="/SamutPrakan2" component={SamutPrakan2} />
        <Route path="/SamutPrakan3" component={SamutPrakan3} />
        <Route path="/SamutPrakan4" component={SamutPrakan4} />

        <Route path="/SamutSongkhram" component={SamutSongkhram} />
        <Route path="/SamutSongkhram1" component={SamutSongkhram1} />
        <Route path="/SamutSongkhram2" component={SamutSongkhram2} />
        <Route path="/SamutSongkhram3" component={SamutSongkhram3} />
        <Route path="/SamutSongkhram4" component={SamutSongkhram4} />

        <Route path="/SamutSakhon" component={SamutSakhon} />
        <Route path="/SamutSakhon1" component={SamutSakhon1} />
        <Route path="/SamutSakhon2" component={SamutSakhon2} />
        <Route path="/SamutSakhon3" component={SamutSakhon3} />
        <Route path="/SamutSakhon4" component={SamutSakhon4} />

        <Route path="/SingBuri" component={SingBuri} />
        <Route path="/SingBuri1" component={SingBuri1} />
        <Route path="/SingBuri2" component={SingBuri2} />
        <Route path="/SingBuri3" component={SingBuri3} />
        <Route path="/SingBuri4" component={SingBuri4} />

        <Route path="/Sukhothai" component={Sukhothai} />
        <Route path="/Sukhothai1" component={Sukhothai1} />
        <Route path="/Sukhothai2" component={Sukhothai2} />
        <Route path="/Sukhothai3" component={Sukhothai3} />
        <Route path="/Sukhothai4" component={Sukhothai4} />

        <Route path="/SuphanBuri" component={SuphanBuri} />
        <Route path="/SuphanBuri1" component={SuphanBuri1} />
        <Route path="/SuphanBuri2" component={SuphanBuri2} />
        <Route path="/SuphanBuri3" component={SuphanBuri3} />
        <Route path="/SuphanBuri4" component={SuphanBuri4} />

        <Route path="/Saraburi" component={Saraburi} />
        <Route path="/Saraburi1" component={Saraburi1} />
        <Route path="/Saraburi2" component={Saraburi2} />
        <Route path="/Saraburi3" component={Saraburi3} />
        <Route path="/Saraburi4" component={Saraburi4} />

        <Route path="/UthaiThani" component={UthaiThani} />
        <Route path="/UthaiThani1" component={UthaiThani1} />
        <Route path="/UthaiThani2" component={UthaiThani2} />
        <Route path="/UthaiThani3" component={UthaiThani3} />
        <Route path="/UthaiThani4" component={UthaiThani4} />

        {/* South */}
        <Route path="/Krabi" component={Krabi} />
        <Route path="/Krabi1" component={Krabi1} />
        <Route path="/Krabi2" component={Krabi2} />
        <Route path="/Krabi3" component={Krabi3} />
        <Route path="/Krabi4" component={Krabi4} />

        <Route path="/Chumphon" component={Chumphon} />
        <Route path="/Chumphon1" component={Chumphon1} />
        <Route path="/Chumphon2" component={Chumphon2} />
        <Route path="/Chumphon3" component={Chumphon3} />
        <Route path="/Chumphon4" component={Chumphon4} />

        <Route path="/Trang" component={Trang} />
        <Route path="/Trang1" component={Trang1} />
        <Route path="/Trang2" component={Trang2} />
        <Route path="/Trang3" component={Trang3} />
        <Route path="/Trang4" component={Trang4} />

        <Route path="/NakhonSiThammarat" component={NakhonSiThammarat} />
        <Route path="/NakhonSiThammarat1" component={NakhonSiThammarat1} />
        <Route path="/NakhonSiThammarat2" component={NakhonSiThammarat2} />
        <Route path="/NakhonSiThammarat3" component={NakhonSiThammarat3} />
        <Route path="/NakhonSiThammarat4" component={NakhonSiThammarat4} />

        <Route path="/Narathiwat" component={Narathiwat} />
        <Route path="/Narathiwat1" component={Narathiwat1} />
        <Route path="/Narathiwat2" component={Narathiwat2} />
        <Route path="/Narathiwat3" component={Narathiwat3} />
        <Route path="/Narathiwat4" component={Narathiwat4} />

        <Route path="/Pattani" component={Pattani} />
        <Route path="/Pattani1" component={Pattani1} />
        <Route path="/Pattani2" component={Pattani2} />
        <Route path="/Pattani3" component={Pattani3} />
        <Route path="/Pattani4" component={Pattani4} />

        <Route path="/Phangnga" component={Phangnga} />
        <Route path="/Phangnga1" component={Phangnga1} />
        <Route path="/Phangnga2" component={Phangnga2} />
        <Route path="/Phangnga3" component={Phangnga3} />
        <Route path="/Phangnga4" component={Phangnga4} />

        <Route path="/Phatthalung" component={Phatthalung} />
        <Route path="/Phatthalung1" component={Phatthalung1} />
        <Route path="/Phatthalung2" component={Phatthalung2} />
        <Route path="/Phatthalung3" component={Phatthalung3} />
        <Route path="/Phatthalung4" component={Phatthalung4} />

        <Route path="/Phuket" component={Phuket} />
        <Route path="/Phuket1" component={Phuket1} />
        <Route path="/Phuket2" component={Phuket2} />
        <Route path="/Phuket3" component={Phuket3} />
        <Route path="/Phuket4" component={Phuket4} />

        <Route path="/Ranong" component={Ranong} />
        <Route path="/Ranong1" component={Ranong1} />
        <Route path="/Ranong2" component={Ranong2} />
        <Route path="/Ranong3" component={Ranong3} />
        <Route path="/Ranong4" component={Ranong4} />

        <Route path="/Satun" component={Satun} />
        <Route path="/Satun1" component={Satun1} />
        <Route path="/Satun2" component={Satun2} />
        <Route path="/Satun3" component={Satun3} />
        <Route path="/Satun4" component={Satun4} />

        <Route path="/Songkhla" component={Songkhla} />
        <Route path="/Songkhla1" component={Songkhla1} />
        <Route path="/Songkhla2" component={Songkhla2} />
        <Route path="/Songkhla3" component={Songkhla3} />
        <Route path="/Songkhla4" component={Songkhla4} />

        <Route path="/SuratThani" component={SuratThani} />
        <Route path="/SuratThani1" component={SuratThani1} />
        <Route path="/SuratThani2" component={SuratThani2} />
        <Route path="/SuratThani3" component={SuratThani3} />
        <Route path="/SuratThani4" component={SuratThani4} />

        <Route path="/Yala" component={Yala} />
        <Route path="/Yala1" component={Yala1} />
        <Route path="/Yala2" component={Yala2} />
        <Route path="/Yala3" component={Yala3} />
        <Route path="/Yala4" component={Yala4} />

        <Route path="/promo" component={Promo} />
        <Route path="/attractTicket" component={Attract} />
        <Route path="/hotelTicket" component={Hotel} />
        <Route path="/foodTicket" component={Food} />

        <Route path="/hotel1" component={Hotel1} />
        <Route path="/hotel2" component={Hotel2} />
        <Route path="/hotel3" component={Hotel3} />
        <Route path="/hotel4" component={Hotel4} />
        <Route path="/hotel5" component={Hotel5} />
        <Route path="/hotel6" component={Hotel6} />

        <Route path="/food1" component={Food1} />
        <Route path="/food2" component={Food2} />
        <Route path="/food3" component={Food3} />
        <Route path="/food4" component={Food4} />
        <Route path="/food5" component={Food5} />
{/* province */}
        <Route path="/north" component={North} />
        <Route path="/northeast" component={Northeast} />
        <Route path="/south" component={South} />
        <Route path="/east" component={East} />
        <Route path="/west" component={West} />
        <Route path="/central" component={Central} />

        
{/* test */}
        <Route path="/Home" component={withRouter(Home)} />
        <Route path="/Regis" component={Regis} />

      </Switch>
     
      </BrowserRouter>,
      rootElement
    );


//ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();