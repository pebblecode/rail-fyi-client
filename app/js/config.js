const subjectDescriptions = {
  Toilet: [
    'Dirty',
    'No toilet paper',
    'Blocked',
    'Broken',
    'Perfect'
  ],
  Cleanliness: [
    'Litter',
    'Dirty',
    'Super clean'
  ],
  Staff: [
    'Unfriendly',
    'Friendly',
    'Aggressive',
    'Uninformative'
  ],
  Crowd: [
    'Too crowded',
    'Just right',
    'No one\'s here'
  ],
  Temperature: [
    'Too hot',
    'Too cold'
  ]
};

const stationOperators = [
  { name: 'Abellio Greater Anglia',
    code: 'LE',
    twitter: '@greateranglia',
    email: ''
  },
  { name: 'Arriva Trains Wales',
    code: 'AW',
    twitter: '@ArrivaTW',
    email: ''
  },
  { name: 'c2c',
    code: 'CC',
    twitter: '@c2c_Rail',
    email: ''
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
    email: ''
  },
  { name: 'East Midlands Trains',
    code: 'EM',
    twitter: '@EMTrains',
    email: ''
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
    email: ''
  },
  { name: 'First Hull Trains',
    code: 'HT',
    twitter: '@FirstHTrains',
    email: ''
  },
  { name: 'First Scotrail',
    code: 'SR',
    twitter: '@ScotRail',
    email: ''
  },
  { name: 'First Transpennine Express',
    code: 'TP',
    twitter: '@TPExpressTrains',
    email: ''
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
    email: ''
  },
  { name: 'Govia Thameslink Railway (Great Northern)',
    code: 'GN',
    twitter: '@GNRailUK',
    email: ''
  },
  { name: 'Govia Thameslink Railway (Thameslink)',
    code: 'TL',
    twitter: '@TLRailUK',
    email: ''
  },
  { name: 'Heathrow Express',
    code: 'HX',
    twitter: '@HeathrowExpress',
    email: ''
  },
  { name: 'Island Lines',
    code: 'IL',
    twitter: '@NRE_Island_Line',
    email: ''
  },
  { name: 'London Midland',
    code: 'LM',
    twitter: '@LondonMidland',
    email: ''
  },
  { name: 'London Overground',
    code: 'LO',
    twitter: '@LDNOverground',
    email: ''
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
    email: ''
  },
  { name: 'Northern Rail',
    code: 'NT',
    twitter: '@northernassist',
    email: ''
  },
  { name: 'South West Trains',
    code: 'SW',
    twitter: '@SW_Trains',
    email: ''
  },
  { name: 'Southeastern',
    code: 'SE',
    twitter: '@SE_Railway',
    email: ''
  },
  { name: 'Southern',
    code: 'SN',
    twitter: '@SoutherRailUK',
    email: ''
  },
  { name: 'TfL Rail (will become Crossrail)',
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
    twitter: '@networkrail'
  }
];

export default { subjectDescriptions, stationOperators }
