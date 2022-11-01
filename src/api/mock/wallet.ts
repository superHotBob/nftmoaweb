export const WALLET_LIST = [
  {
    name: 'MOA Wallet',
    iconUrl: 'https://user-images.githubusercontent.com/45615584/163530219-61fa7fc6-7531-446d-b434-844b28cab144.png',
    route: '/wallet'
  },
  {
    name: 'Metamask',
    iconUrl: 'https://user-images.githubusercontent.com/45615584/163530234-f8e122aa-d2e3-4a3b-a1a3-868bf3846de6.png'
  },
  {
    name: 'Coinbase Wallet',
    iconUrl: 'https://user-images.githubusercontent.com/45615584/163530250-3dba91a6-aaee-4b08-842c-6972b394c8e3.png'
  },
  {
    name: 'WalletConnect',
    iconUrl: 'https://user-images.githubusercontent.com/45615584/163530266-01814327-d584-4788-aab5-cb965fdf22df.png'
  },
  {
    name: 'kakao Klip',
    iconUrl: 'https://user-images.githubusercontent.com/45615584/163530194-cc0e11eb-a3cf-41ff-9d20-d388107fedb9.png'
  }
];

export const MY_WALLET = {
  profileImage: 'https://lh3.googleusercontent.com/E4zEF2IDmgIw7Sr1hkn8fVxPA3NcrWDLH6L_FwPbCehNAo7E1igj3x5Ca_zxFJH9g_vZvfJ0y2R99F0Gr4l1NmZK-Um9J_wSAurYWw=w316',
  publicKey: 'D8BroU6Wss4f8Nnr74r3nMeg8ETHE69kCPM4oBFEGtfZ',
  totalPrice: '1000000000',
  tokens: [
    {
      name: 'Ethereum',
      symbol: 'eth',
      amount: 0,
      price: 0,
      logoUrl: 'https://user-images.githubusercontent.com/45615584/163674333-6ccf865b-e085-44de-9d9f-b8a6ced1345a.png'
    },
    {
      name: 'Ethereum',
      symbol: 'eth',
      amount: 0,
      price: 0,
      logoUrl: 'https://user-images.githubusercontent.com/45615584/163674333-6ccf865b-e085-44de-9d9f-b8a6ced1345a.png'
    }
  ]
};

export const TOKEN_LIST = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    logoUrl: 'https://user-images.githubusercontent.com/45615584/163674333-6ccf865b-e085-44de-9d9f-b8a6ced1345a.png'
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    logoUrl: 'https://user-images.githubusercontent.com/45615584/163674333-6ccf865b-e085-44de-9d9f-b8a6ced1345a.png'
  },
  {
    name: 'Moa',
    symbol: 'MOA',
    logoUrl: 'https://user-images.githubusercontent.com/45615584/163674333-6ccf865b-e085-44de-9d9f-b8a6ced1345a.png',
    decimals: 9
  }
];

export const TOKEN_MAPPING_LIST: any = {
  SOL: {
    name: 'Solana',
    symbol: 'SOL',
    address: '',
    logoUrl: 'https://user-images.githubusercontent.com/45615584/163682344-09b07c1f-c80f-467a-b7da-29a075bfc417.png',
    decimals: 9,
    displayDecimals: 4,
    curPrice: 30000,
    tag: 'solana',
    isToken: 0,
    feeRate: 0.01,
    coingeckoSymbol: 'solana'
  },
  ETH: {
    name: 'Ethereum',
    symbol: 'ETH',
    address: '',
    logoUrl: 'https://user-images.githubusercontent.com/45615584/163682344-09b07c1f-c80f-467a-b7da-29a075bfc417.png',
    decimals: 9,
    displayDecimals: 4,
    curPrice: 2838,
    tag: 'ethereum',
    isToken: 0,
    feeRate: 0.01,
    coingeckoSymbol: 'ethereum'
  },
  MOA: {
    name: 'Moa',
    symbol: 'MOA',
    address: '',
    logoUrl: 'https://user-images.githubusercontent.com/45615584/163682344-09b07c1f-c80f-467a-b7da-29a075bfc417.png',
    decimals: 9,
    displayDecimals: 4,
    curPrice: 150,
    tag: 'moa',
    isToken: 0,
    feeRate: 0.01,
    coingeckoSymbol: 'moa'
  }
};

export const CURRENCY_LIST = [
  {
    id: 0,
    name: 'USD',
    logoUrl: 'https://user-images.githubusercontent.com/45615584/163773340-474e3b66-15fe-4a1b-8262-e14a87700719.png'
  },
  {
    id: 1,
    name: 'WON',
    logoUrl: 'https://user-images.githubusercontent.com/45615584/163773340-474e3b66-15fe-4a1b-8262-e14a87700719.png'
  }
];

export const CARD_LIST = [
  {
    id: 0,
    code: 'N01',
    companyEng: 'Shinhan',
    companyKor: '신한',
    cardName: 'LG U+ Light Plan Big Plus',
    cardNumber: '1234-1234-1234-1234',
    cardType: 'visa',
    cardTypeUrl: 'https://user-images.githubusercontent.com/45615584/164026927-7eb513dc-ec37-44c1-a692-57ecae812312.png',
    expirationMonth: 12,
    expirationYear: 25,
    securityCode: 123,
    lastName: 'Julia',
    firstName: 'James'
  },
  {
    id: 1,
    code: 'N02',
    companyEng: 'Samsung',
    companyKor: '삼성',
    cardNumber: '1234-1234-1234-1234',
    cardType: 'MASTER',
    expirationMonth: 12,
    expirationYear: 25,
    securityCode: 123,
    lastName: 'Julia',
    firstName: 'James'
  }
];

export const MY_TOKEN_ORDER = {
  balance: 8900,
  purchase: 20000,
  usd: 1500000,
  logoUrl: 'https://user-images.githubusercontent.com/45615584/163686085-556b2c63-4105-4df5-ab68-943091d29747.png',
  amount: 0.5384,
  token: 'Ethereum',
  symbol: 'ETH',
  methods: {
    type: 'card',
    cardType: 'visa',
    cardTypeImgUrl: 'https://user-images.githubusercontent.com/45615584/164048428-096ad8f2-c2fb-4089-a202-b52e55cdfc8c.png',
    cardNumber: '1234123412341234'
  },
  fee: 30.96,
  total: 230.06
};
