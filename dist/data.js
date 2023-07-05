var teamSatMatch = "07/08(Sat.) UTC+8 17:00";
var teamSunMatch = "07/09(Sun.) UTC+8 17:00";
var teamWedMatch = "07/12(Wed.) UTC+8 17:00";

var teamSatResult = "07/01(Sat.)";
var teamSunResult = "07/02(Sun.)";
var teamWedResult = "07/05(Wed.)";

var indSatMatch = "07/08(Sat.)";
var indSunMatch = "07/09(Sun.)";
var indSatMatchTitle = "R.O.16 WINNERS' MATCH";
var indSunMatchTitle = "R.O.16 LOSERS' MATCH";

var indSatResult = "07/01(Sat.)";
var indSunResult = "07/02(Sun.)";
var indSatResultTitle = "R.O.16 GROUP 1";
var indSunResultTitle = "R.O.16 GROUP 2";

var Team = [
  // Sat.
  {
    name:"SRP",
    img:"Team/srp.png"
  },
  {
    name:"ST",
    img:"Team/st.png"
  },
  {
    name:"PO",
    img:"Team/po.png"
  },
  {
    name:"AR",
    img:"Team/ar.png"
  },

// Sun.
  {
    name:"SST",
    img:"Team/sst.png"
  },
  {
    name:"KDF",
    img:"Team/kdf.png"
  },
  {
    name:"ROX",
    img:"Team/rox.png"
  },
  {
    name:"LSB",
    img:"Team/lsb.png"
  },

// Wed.
  {
    name:"SRP",
    img:"Team/srp.png"
  },
  {
    name:"PO",
    img:"Team/po.png"
  },
  {
    name:"KDF",
    img:"Team/kdf.png"
  },
  {
    name:"ROX",
    img:"Team/rox.png"
  },
  {
    name:"AR",
    img:"Team/ar.png"
  },
  {
    name:"SST",
    img:"Team/sst.png"
  }
  
];

var TeamResult = [
  // Sat.
  {
    name:"PO",
    img:"Team/po.png",
    score: "2",
  },
  {
    name:"ST",
    img:"Team/st.png",
    score: "1",
  },
  {
    name:"SST",
    img:"Team/sst.png",
    score: "2",
  },
  {
    name:"SRP",
    img:"Team/srp.png",
    score: "1",
  },

  // Sun.
  {
    name:"ROX",
    img:"Team/rox.png",
    score: "2",
  },
  {
    name:"AR",
    img:"Team/ar.png",
    score: "0",
  },
  {
    name:"KDF",
    img:"Team/kdf.png",
    score: "2",
  },
  {
    name:"LSB",
    img:"Team/lsb.png",
    score: "0",
  },

  // Wed.
  {
    name:"LSB",
    img:"Team/lsb.png",
    score: "2",
  },
  {
    name:"ST",
    img:"Team/st.png",
    score: "1",
  },
  {
    name:"SST",
    img:"Team/sst.png",
    score: "2",
  },
  {
    name:"PO",
    img:"Team/po.png",
    score: "0",
  },
  {
    name:"ROX",
    img:"Team/rox.png",
    score: "2",
  },
  {
    name:"SRP",
    img:"Team/srp.png",
    score: "1",
  }
];

var Player = [
    {
      name: "JiMin",
      img:"Player/JiMin.png",
    },
    {
      name: "DDING",
      img:"Player/DDing.png",
    },
    {
      name: "Cool",
      img:"Player/Cool.png",
    },    
    {
      name: "World",
      img:"Player/World.png",
    },
    {
      name: "Luning",
      img:"Player/Luning.png",
    },
    {
      name: "Hero",
      img:"Player/Hero.png",
    },
    {
      name: "SPEAR",
      img:"Player/SPEAR.png",
    },
    {
      name: "NEAL",
      img:"Player/NEAL.png",
    },


    {
      name: "Duzzi",
      img:"Player/Duzzi.png",
    },
    {
      name: "HoJun",
      img:"Player/HoJun.png",
    },
    {
      name: "Most",
      img:"Player/Most.png",
    },
    {
      name: "HyunSu",
      img:"Player/HyunSu.png",
    },
    {
      name: "SUNGBIN",
      img:"Player/SUNGBIN.png",
    },
    {
      name: "Spell",
      img:"Player/Spell.png",
    },
    {
      name: "JJONG",
      img:"Player/JJONG.png",
    },
    {
      name: "Joker",
      img:"Player/Joker.png",
    }
  ];

var PlayerResult = [
  {
    name: "DDING",
    img:"Player/DDing.png",
    score: "53"
  },
  {
    name: "Cool",
    img:"Player/Cool.png",
    score: "53"    
  },
  {
    name: "World",
    img:"Player/World.png",
    score: "49"   
  },
  {
    name: "NEAL",
    img:"Player/NEAL.png",
    score: "36"    
  },
  {
    name: "Duzzi",
    img:"Player/Duzzi.png",
    score: "36"    
  },
  {
    name: "HyunSu",
    img:"Player/HyunSu.png",
    score: "27"    
  },
  {
    name: "SUNGBIN",
    img:"Player/SUNGBIN.png",
    score: "23"  
  },
  {
    name: "Joker",
    img:"Player/Joker.png",
    score: "13"    
  },


  {
    name: "JiMin",
    img:"Player/JiMin.png",
    score: "50"
  },
  {
    name: "Luning",
    img:"Player/Luning.png",
    score: "44"    
  },
  {
    name: "Hero",
    img:"Player/Hero.png",
    score: "42"    
  },
  {
    name: "SPEAR",
    img:"Player/SPEAR.png",
    score: "41"    
  },
  {
    name: "HoJun",
    img:"Player/HoJun.png",
    score: "26"  
  },
  {
    name: "Most",
    img:"Player/Most.png",
    score: "25"    
  },
  {
    name: "Spell",
    img:"Player/Spell.png",
    score: "18"    
  },
  {
    name: "JJONG",
    img:"Player/JJONG.png",
    score: "16"    
  }
];
