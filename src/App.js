import React, { Component } from "react";
import Header from "./components/Header";
import Row from "./components/Row";
import "./App.css";

let  initialValue = [
  {
    code: "CBA.AX",
    company: "COMMONWEALTH BANK OF AUSTRALIA",
    price: 0,
    volumn: 0
  },
  {
    code: "CRX.AX",
    company: "SIRTEX MEDICAL LIMITED",
    price: 0,
    volumn: 0
  },
  {
    code: "ANZ.AX",
    company: "AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED",
    price: 0,
    volumn: 0
  },
  {
    code: "BHP.AX",
    company: "BHP BILLITON LIMITED",
    price: 0,
    volumn: 0
  },
  {
    code: "WBC.AX",
    company: "WESTPAC BANKING CORPORATION",
    price: 0,
    volumn: 0
  },
  {
    code: "NAB.AX",
    company: "NATIONAL AUSTRALIA BANK LIMITED",
    price: 0,
    volumn: 0
  },
  {
    code: "MQG.AX",
    company: "MACQUARIE GROUP LIMITED",
    price: 0,
    volumn: 0
  },
  {
    code: "QBE.AX",
    company: "QBE INSURANCE GROUP LIMITED",
    price: 0,
    volumn: 0
  },
  {
    code: "RIO.AX",
    company: "RIO TINTO LIMITED",
    price: 0,
    volumn: 0
  },
  {
    code: "WES.AX",
    company: "WESFARMERS LIMITED",
    price: 0,
    volumn: 0
  },
  {
    code: "CSL.AX",
    company: "CSL LIMITED",
    price: 0,
    volumn: 0
  },
  {
    code: "FMG.AX",
    company: "FORTESCUE METALS GROUP LTD",
    price: 0,
    volumn: 0
  },
  {
    code: "TLS.AX",
    company: "TELSTRA CORPORATION LIMITED",
    price: 0,
    volumn: 0
  },
  {
    code: "CWN.AX",
    company: "CROWN RESORTS LIMITED",
    price: 0,
    volumn: 0
  },
  {
    code: "ALL.AX",
    company: "ARISTOCRAT LEISURE LIMITED",
    price: 0,
    volumn: 0
  },
  {
    code: "AAC.AX",
    company: "AUSTRALIAN AGRICULTURAL COMPANY LTD",
    price: 0,
    volumn: 0
  },
  {
    code: "ABC.AX",
    company: "ADBRI LIMITED",
    price: 0,
    volumn: 0
  },
  {
    code: "ABP.AX",
    company: "Abacus Property Group",
    price: 0,
    volumn: 0
  },
  {
    code: "AGG.AX",
    company: "ANGLOGOLD ASHANTI LTD",
    price: 0,
    volumn: 0
  },
  {
    code: "AGI.AX",
    company: "AINSWORTH GAME TECHNOLOGY LTD",
    price: 0,
    volumn: 0
  },
  {
    code: "AMS.AX",
    company: "ATOMOS LTD",
    price: 0,
    volumn: 0
  },
  {
    code: "AMX.AX",
    company: "AEROMETREX LTD",
    price: 0,
    volumn: 0
  },
  {
    code: "AMA.AX",
    company: "AMA GROUP LTD",
    price: 0,
    volumn: 0
  },
  {
    code: "AMC.AX",
    company: "AMCOR PLC",
    price: 0,
    volumn: 0
  },
  {
    code: "AMI",
    company: "AURELIA METALS LTD",
    price: 0,
    volumn: 0
  },
  {
    code: "ALC.AX",
    company: "ALCIDION GROUP LTD",
    price: 0,
    volumn: 0
  },
  {
    code: "ALG.AX",
    company: "ARDENT LEISURE GROUP LTD",
    price: 0,
    volumn: 0
  },
  {
    code: "ALK.AX",
    company: "ALKANE RESOURCES LTD",
    price: 0,
    volumn: 0
  },
  {
    code: "ALQ.AX",
    company: "ALS LTD",
    price: 0,
    volumn: 0
  },
  {
    code: "ALU.AX",
    company: "ALTIUM LTD",
    price: 0,
    volumn: 0
  }
];

initialValue = initialValue.map( item => {
  item.price = parseFloat((Math.random() * 100 + 1.00).toFixed(2));
  item.volumn = Math.floor(Math.random() * 999000) + 1000;
  item.value = Math.round(item.price * item.volumn);
  return item;
});

const title = {
  code: "Code",
  company: "Company",
  price: "Price",
  value: "Value",
  change: "Change",
  percentChange: "%Change"
}

class App extends Component {
  constructor() {
    super();
    this.initialValue = [...initialValue];
    this.state = {
      currentInfo: this.initialValue,
      topGainers: true,
      topLosers: false
    };
    this.onTopGainersClicked = this.onTopGainersClicked.bind(this);
    this.onTopLosersClicked = this.onTopLosersClicked.bind(this);
    setInterval(() => {
      this.setState({
        currentInfo: this.onChangeValue(this.initialValue, this.state.currentInfo),
      });
    },5000);
  }

  onSort(array, isAscending) {
    const newArr = JSON.parse(JSON.stringify(array));
    if(isAscending){
      for(let i = 0; i < newArr.length - 1; i++){
        for(let y = i + 1; y < newArr.length; y++){
          if(newArr[i].value > newArr[y].value){
            let tmp = newArr[i];
            newArr[i] = newArr[y];
            newArr[y] = tmp;
          }
        }
      }
      return newArr.slice(0,20);
    }
    for(let i = 0; i < newArr.length - 1; i++){
      for(let y = i + 1; y < newArr.length; y++){
        if(newArr[i].value < newArr[y].value){
          let tmp = newArr[i];
          newArr[i] = newArr[y];
          newArr[y] = tmp;
        }
      }
    }
    return newArr.slice(0,20);
  }

  onChangePrice(price) {
    const percentPrice = Math.floor(Math.random() * 5);
    let newPrice;
    if(Math.floor(Math.random() * 10) < 5) {
      newPrice = (price - (price * percentPrice)/100)
    }else {
      newPrice = (price + (price * percentPrice)/100);
    }
    if(newPrice >= 0.01 || newPrice <= 99.99){
      return newPrice;
    }
    return this.onChangePrice(price);
    return parseFloat(newPrice.toFixed(2));
  }

  onChangeVolume(volumn) {
    let newVolume;
    newVolume = (volumn + (Math.floor(Math.random() * 20) + 10))
    if(newVolume >= 1000 || newVolume <= 1000000){
      return newVolume;
    }
    return this.onChangePrice(volumn);
  }

  onChangeValue(initialInfo, currentInfo) {
    debugger;
    const newInfo = [];
    for(var i = 0; i < initialInfo.length; i++) {
      const newPrice = this.onChangePrice(currentInfo[i].price);
      const newVolume = this.onChangeVolume(currentInfo[i].volumn);
      newInfo.push({
        code: currentInfo[i].code,
        company: currentInfo[i].company,
        price: parseFloat(newPrice.toFixed(2)),
        volumn: newVolume,
        value: newVolume,
        change: parseFloat((newPrice - initialInfo[i].price).toFixed(2)),
        percentChange: parseFloat(((newPrice - initialInfo[i].price)/initialInfo[i].price * 100).toFixed(2))
      })
    }
    return newInfo;
  }

  onTopGainersClicked() {
    this.setState({
      topGainers: true,
      topLosers: false
    });
  }

  onTopLosersClicked() {
    this.setState({
      topGainers: false,
      topLosers: true
    });
  }

  render() {
    const {topGainers, topLosers} = this.state;
    const ascending = this.onSort(this.state.currentInfo, false);
    const descending = this.onSort(this.state.currentInfo, true);
    return (
      <div className="App">
        <Header onTopGainersClicked={this.onTopGainersClicked} onTopLosersClicked={this.onTopLosersClicked} topLosers={topLosers} topGainers={topGainers}/>
        <Row info={title} isTitle={true}/>
        {
          topGainers && (ascending.map((item) => <Row info ={item}/>))
        }
        {
          topLosers && (descending.map((item) => <Row info ={item}/>))
        }
      </div>
    );
  }
}

export default App;
