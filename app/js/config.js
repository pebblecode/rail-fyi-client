const subjects = [
  {
    name: 'Toilet',
    icon: 'icon-toilet',
    message: {
      pre: 'the',
      main: 'toilets',
      post: '',
    },
    options: [{
      name: 'Dirty',
      icon: 'icon-dirty',
      message: {
        pre: 'were',
        main: 'grim!',
        post: ''
      }
    }, {
      name: 'No toilet paper',
      icon: 'icon-no-tp',
      message: {
        pre: 'had no',
        main: 'blooming toilet paper!',
        post: ''
      }
    }, {
      name: 'Blocked',
      icon: 'icon-broken',
      message: {
        pre: 'were',
        main: 'blocked',
        post: ':O'
      }
    }, {
      name: 'Broken',
      icon: 'icon-broken',
      message: {
        pre: 'were',
        main: 'broken',
        post: ':('
      }
    }, {
      name: 'Perfect',
      icon: 'icon-clean',
      message: {
        pre: 'were',
        main: 'spotless!',
        post: ''
      }
    }]
  },
  {
    name: 'Cleanliness',
    icon: 'icon-clean',
    message: {
      pre: 'the',
      main: 'cleanliness',
      post: 'was'
    },
    options: [{
      name: 'Litter',
      icon: 'icon-litter',
      message: {
        pre: 'abysmal -',
        main: 'litter everywhere!',
        post: ''
      }
    }, {
      name: 'Dirty',
      icon: 'icon-dirty',
      message: {
        pre: 'abysmall - it\'s',
        main: 'super dirty!',
        post: ''
      }
    }, {
      name: 'Super clean',
      icon: 'icon-clean',
      message: {
        pre: '',
        main: 'top notch!',
        post: ''
      }
    }]
  },
  {
    name: 'Staff',
    icon: 'icon-staff',
    message: {
      pre: 'a',
      main: 'staff member',
      post: 'was'
    },
    options: [{
      name: 'Unfriendly',
      icon: 'icon-unfriendly',
      message: {
        pre: 'so',
        main: 'rude!',
        post: ''
      }
    },{
      name: 'Friendly',
      icon: 'icon-friendly',
      message: {
        pre: '',
        main: 'awesome!',
        post: ''
      }
    }, {
      name: 'Aggressive',
      icon: 'icon-agressive',
      message: {
        pre: '',
        main: 'aggressive',
        post: ''
      }
    }, {
      name: 'Uninformative',
      icon: 'icon-uninformative',
      message: {
        pre: '',
        main: 'blooming clueless!',
        post: ''
      }
    }]
  },
  {
    name: 'Crowd',
    icon: 'icon-crowded',
    message: {
      pre: 'the',
      main: 'crowd',
      post: 'was'
    },
    options: [{
      name: 'Too crowded',
      icon: 'icon-crowded',
      message: {
        pre: '',
        main: 'humongous!',
        post: ''
      }
    }, {
      name: 'No one\'s here',
      icon: 'icon-crowd-empty',
      message: {
        pre: '',
        main: 'nowhere',
        post: 'to be seen!'
      }
    }]
  },
  {
    name: 'Temperature',
    icon: 'icon-temp',
    message: {
      pre: 'the',
      main: 'temperature',
      post: 'was'
    },
    options: [{
      name: 'Too hot',
      icon: 'icon-temp-hot',
      message: {
        pre: '',
        main: 'absolutely baking!',
        post: ''
      }
    }, {
      name: 'Too cold',
      icon: 'icon-temp-cold',
      message: {
        pre: 'positively',
        main: 'freezing',
        post: '- brr!'
      }
    }],
  }
];

const stationOperators = [
  { name: 'Abellio Greater Anglia',
    code: 'LE',
    twitter: '@greateranglia',
    email: 'Contactcentre@abelliogreateranglia.co.uk'
  },
  { name: 'Arriva Trains Wales',
    code: 'AW',
    twitter: '@ArrivaTW',
    email: 'customer.services@arrivatrainswales.co.uk'
  },
  { name: 'c2c',
    code: 'CC',
    twitter: '@c2c_Rail',
    email: 'contact@c2crail.co.uk'
  },
  { name: 'Caledonian Sleeper',
    code: 'CS',
    twitter: '@CalSleeper',
    email: ''
  },
  { name: 'Chiltern Railway',
    code: 'CH',
    twitter: '@chilternrailway',
    email: ''
  },
  { name: 'CrossCountry',
    code: 'XC',
    twitter: '@crosscountryuk',
    email: 'customer.relations@crosscountrains.co.uk'
  },
  { name: 'East Midlands Trains',
    code: 'EM',
    twitter: '@EMTrains',
    email: 'getintouch@eastmidlandstrains.co.uk'
  },
  { name: 'East Coast',
    code: 'GR',
    twitter: '@Virgin_TrainsEC',
    email: ''
  },
  { name: 'Eurostar',
    code: 'ES',
    twitter: '@EurostarUK',
    email: ''
  },
  { name: 'First Great Western',
    code: 'GW',
    twitter: '@GWRHelp',
    email: 'GWRfeedback@GWR.com'
  },
  { name: 'First Hull Trains',
    code: 'HT',
    twitter: '@FirstHTrains',
    email: 'customer.services@hulltrains.co.uk'
  },
  { name: 'First Scotrail',
    code: 'SR',
    twitter: '@ScotRail',
    email: 'customer.relations@scotrail.co.uk'
  },
  { name: 'First Transpennine Express',
    code: 'TP',
    twitter: '@TPExpressTrains',
    email: 'tpecustomer.relations@firstgroup.com'
  },
  { name: 'Gatwick Express',
    code: 'GX',
    twitter: '@GatwickExpress',
    email: ''
  },
  { name: 'GB Railfreight',
    code: 'ZZ',
    twitter: '@GBRailFreight',
    email: ''
  },
  { name: 'Grand Central',
    code: 'GC',
    twitter: '@GC_Rail',
    email: 'customer.services@grandcentralrail.com'
  },
  { name: 'Govia Thameslink Railway (Great Northern)',
    code: 'GN',
    twitter: '@GNRailUK',
    email: ''
  },
  { name: 'Govia Thameslink Railway (Thameslink)',
    code: 'TL',
    twitter: '@TLRailUK',
    email: 'customerservices@thameslinkrailway.com'
  },
  { name: 'Heathrow Express',
    code: 'HX',
    twitter: '@HeathrowExpress',
    email: ''
  },
  { name: 'Island Lines',
    code: 'IL',
    twitter: '@NRE_Island_Line',
    email: 'customerrelations@swtrains.co.uk'
  },
  { name: 'London Midland',
    code: 'LM',
    twitter: '@LondonMidland',
    email: 'comments@londonmidland.com'
  },
  { name: 'London Overground',
    code: 'LO',
    twitter: '@LDNOverground',
    email: 'overgroundinfo@tfl.gov.uk'
  },
  { name: 'LUL Bakerloo Line',
    code: 'LT',
    twitter: '@bakerlooline',
    email: ''
  },
  { name: 'LUL District Line – Wimbledon',
    code: 'LT',
    twitter: '@districtline',
    email: ''
  },
  { name: 'LUL District Line – Richmond',
    code: 'LT',
    twitter: '@districtline',
    email: ''
  },
  { name: 'Merseyrail',
    code: 'ME',
    twitter: '@merseyrail',
    email: 'comment@merseyrail.org'
  },
  { name: 'Northern Rail',
    code: 'NT',
    twitter: '@northernassist',
    email: 'enquiries@northernrailway.co.uk'
  },
  { name: 'South West Trains',
    code: 'SW',
    twitter: '@SW_Trains',
    email: 'customerrelations@swtrains.co.uk'
  },
  { name: 'Southeastern',
    code: 'SE',
    twitter: '@SE_Railway',
    email: ''
  },
  { name: 'Southern',
    code: 'SN',
    twitter: '@SoutherRailUK',
    email: 'comments@southernrailway.com'
  },
  { name: 'TfL Rail',
    code: 'XR',
    twitter: '@Tfl',
    email: ''
  },
  { name: 'Virgin Trains',
    code: 'VT',
    twitter: '@VirginTrains',
    email: ''
  },
  {
    name: 'Network Rail',
    code: 'NR',
    twitter: '@networkrail',
    email: ''
  }
];

export default { subjects, stationOperators };
