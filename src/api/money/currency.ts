export const currencyCodes = [
  'AFN',
  'EUR',
  'ALL',
  'DZD',
  'USD',
  'AOA',
  'XCD',
  'ARS',
  'AMD',
  'AWG',
  'AUD',
  'AZN',
  'BSD',
  'BHD',
  'BDT',
  'BBD',
  'BYN',
  'BZD',
  'XOF',
  'BMD',
  'INR',
  'BTN',
  'BOB',
  'BOV',
  'BAM',
  'BWP',
  'NOK',
  'BRL',
  'BND',
  'BGN',
  'BIF',
  'CVE',
  'KHR',
  'XAF',
  'CAD',
  'KYD',
  'CLP',
  'CLF',
  'CNY',
  'COP',
  'COU',
  'KMF',
  'CDF',
  'NZD',
  'CRC',
  'HRK',
  'CUP',
  'CUC',
  'ANG',
  'CZK',
  'DKK',
  'DJF',
  'DOP',
  'EGP',
  'SVC',
  'ERN',
  'SZL',
  'ETB',
  'FKP',
  'FJD',
  'XPF',
  'GMD',
  'GEL',
  'GHS',
  'GIP',
  'GTQ',
  'GBP',
  'GNF',
  'GYD',
  'HTG',
  'HNL',
  'HKD',
  'HUF',
  'ISK',
  'IDR',
  'IRR',
  'IQD',
  'ILS',
  'JMD',
  'JPY',
  'JOD',
  'KZT',
  'KES',
  'KPW',
  'KRW',
  'KWD',
  'KGS',
  'LAK',
  'LBP',
  'LSL',
  'ZAR',
  'LRD',
  'LYD',
  'CHF',
  'MOP',
  'MKD',
  'MGA',
  'MWK',
  'MYR',
  'MVR',
  'MRU',
  'MUR',
  'MXN',
  'MXV',
  'MDL',
  'MNT',
  'MAD',
  'MZN',
  'MMK',
  'NAD',
  'NPR',
  'NIO',
  'NGN',
  'OMR',
  'PKR',
  'PAB',
  'PGK',
  'PYG',
  'PEN',
  'PHP',
  'PLN',
  'QAR',
  'RON',
  'RUB',
  'RWF',
  'SHP',
  'WST',
  'STN',
  'SAR',
  'RSD',
  'SCR',
  'SLL',
  'SGD',
  'SBD',
  'SOS',
  'SSP',
  'LKR',
  'SDG',
  'SRD',
  'SEK',
  'CHE',
  'CHW',
  'SYP',
  'TWD',
  'TJS',
  'TZS',
  'THB',
  'TOP',
  'TTD',
  'TND',
  'TRY',
  'TMT',
  'UGX',
  'UAH',
  'AED',
  'USN',
  'UYU',
  'UYI',
  'UYW',
  'UZS',
  'VUV',
  'VES',
  'VND',
  'YER',
  'ZMW',
  'ZWL',
] as const

export type CurrencyCode = typeof currencyCodes[number]

export type Currency = {
  code: CurrencyCode
  minorUnits: number
  symbol: string
  name: string
}

export const allCurrencies: Currency[] = [
  {
    name: 'Afghani',
    code: 'AFN',
    minorUnits: 2,
    symbol: '؋',
  },
  {
    name: 'Euro',
    code: 'EUR',
    minorUnits: 2,
    symbol: '€',
  },
  {
    name: 'Lek',
    code: 'ALL',
    minorUnits: 2,
    symbol: 'Lek',
  },
  {
    name: 'Algerian Dinar',
    code: 'DZD',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'US Dollar',
    code: 'USD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Kwanza',
    code: 'AOA',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'East Caribbean Dollar',
    code: 'XCD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Argentine Peso',
    code: 'ARS',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Armenian Dram',
    code: 'AMD',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Aruban Florin',
    code: 'AWG',
    minorUnits: 2,
    symbol: 'ƒ',
  },
  {
    name: 'Australian Dollar',
    code: 'AUD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Azerbaijan Manat',
    code: 'AZN',
    minorUnits: 2,
    symbol: 'ман',
  },
  {
    name: 'Bahamian Dollar',
    code: 'BSD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Bahraini Dinar',
    code: 'BHD',
    minorUnits: 3,
    symbol: '',
  },
  {
    name: 'Taka',
    code: 'BDT',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Barbados Dollar',
    code: 'BBD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Belarusian Ruble',
    code: 'BYN',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Belize Dollar',
    code: 'BZD',
    minorUnits: 2,
    symbol: 'BZ$',
  },
  {
    name: 'CFA Franc BCEAO',
    code: 'XOF',
    minorUnits: 0,
    symbol: '',
  },
  {
    name: 'Bermudian Dollar',
    code: 'BMD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Indian Rupee',
    code: 'INR',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Ngultrum',
    code: 'BTN',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Boliviano',
    code: 'BOB',
    minorUnits: 2,
    symbol: '$b',
  },
  {
    name: 'Mvdol',
    code: 'BOV',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Convertible Mark',
    code: 'BAM',
    minorUnits: 2,
    symbol: 'KM',
  },
  {
    name: 'Pula',
    code: 'BWP',
    minorUnits: 2,
    symbol: 'P',
  },
  {
    name: 'Norwegian Krone',
    code: 'NOK',
    minorUnits: 2,
    symbol: 'kr',
  },
  {
    name: 'Brazilian Real',
    code: 'BRL',
    minorUnits: 2,
    symbol: 'R$',
  },
  {
    name: 'Brunei Dollar',
    code: 'BND',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Bulgarian Lev',
    code: 'BGN',
    minorUnits: 2,
    symbol: 'лв',
  },
  {
    name: 'Burundi Franc',
    code: 'BIF',
    minorUnits: 0,
    symbol: '',
  },
  {
    name: 'Cabo Verde Escudo',
    code: 'CVE',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Riel',
    code: 'KHR',
    minorUnits: 2,
    symbol: '៛',
  },
  {
    name: 'CFA Franc BEAC',
    code: 'XAF',
    minorUnits: 0,
    symbol: '',
  },
  {
    name: 'Canadian Dollar',
    code: 'CAD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Cayman Islands Dollar',
    code: 'KYD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Chilean Peso',
    code: 'CLP',
    minorUnits: 0,
    symbol: '$',
  },
  {
    name: 'Unidad de Fomento',
    code: 'CLF',
    minorUnits: 4,
    symbol: '',
  },
  {
    name: 'Yuan Renminbi',
    code: 'CNY',
    minorUnits: 2,
    symbol: '¥',
  },
  {
    name: 'Colombian Peso',
    code: 'COP',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Unidad de Valor Real',
    code: 'COU',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Comorian Franc ',
    code: 'KMF',
    minorUnits: 0,
    symbol: '',
  },
  {
    name: 'Congolese Franc',
    code: 'CDF',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'New Zealand Dollar',
    code: 'NZD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Costa Rican Colon',
    code: 'CRC',
    minorUnits: 2,
    symbol: '₡',
  },
  {
    name: 'Kuna',
    code: 'HRK',
    minorUnits: 2,
    symbol: 'kn',
  },
  {
    name: 'Cuban Peso',
    code: 'CUP',
    minorUnits: 2,
    symbol: '₱',
  },
  {
    name: 'Peso Convertible',
    code: 'CUC',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Netherlands Antillean Guilder',
    code: 'ANG',
    minorUnits: 2,
    symbol: 'ƒ',
  },
  {
    name: 'Czech Koruna',
    code: 'CZK',
    minorUnits: 2,
    symbol: 'Kč',
  },
  {
    name: 'Danish Krone',
    code: 'DKK',
    minorUnits: 2,
    symbol: 'kr',
  },
  {
    name: 'Djibouti Franc',
    code: 'DJF',
    minorUnits: 0,
    symbol: '',
  },
  {
    name: 'Dominican Peso',
    code: 'DOP',
    minorUnits: 2,
    symbol: 'RD$',
  },
  {
    name: 'Egyptian Pound',
    code: 'EGP',
    minorUnits: 2,
    symbol: '£',
  },
  {
    name: 'El Salvador Colon',
    code: 'SVC',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Nakfa',
    code: 'ERN',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Lilangeni',
    code: 'SZL',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Ethiopian Birr',
    code: 'ETB',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Falkland Islands Pound',
    code: 'FKP',
    minorUnits: 2,
    symbol: '£',
  },
  {
    name: 'Fiji Dollar',
    code: 'FJD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'CFP Franc',
    code: 'XPF',
    minorUnits: 0,
    symbol: '',
  },
  {
    name: 'Dalasi',
    code: 'GMD',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Lari',
    code: 'GEL',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Ghana Cedi',
    code: 'GHS',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Gibraltar Pound',
    code: 'GIP',
    minorUnits: 2,
    symbol: '£',
  },
  {
    name: 'Quetzal',
    code: 'GTQ',
    minorUnits: 2,
    symbol: 'Q',
  },
  {
    name: 'Pound Sterling',
    code: 'GBP',
    minorUnits: 2,
    symbol: '£',
  },
  {
    name: 'Guinean Franc',
    code: 'GNF',
    minorUnits: 0,
    symbol: '',
  },
  {
    name: 'Guyana Dollar',
    code: 'GYD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Gourde',
    code: 'HTG',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Lempira',
    code: 'HNL',
    minorUnits: 2,
    symbol: 'L',
  },
  {
    name: 'Hong Kong Dollar',
    code: 'HKD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Forint',
    code: 'HUF',
    minorUnits: 2,
    symbol: 'Ft',
  },
  {
    name: 'Iceland Krona',
    code: 'ISK',
    minorUnits: 0,
    symbol: 'kr',
  },
  {
    name: 'Rupiah',
    code: 'IDR',
    minorUnits: 2,
    symbol: 'Rp',
  },
  {
    name: 'Iranian Rial',
    code: 'IRR',
    minorUnits: 2,
    symbol: '﷼',
  },
  {
    name: 'Iraqi Dinar',
    code: 'IQD',
    minorUnits: 3,
    symbol: '',
  },
  {
    name: 'New Israeli Sheqel',
    code: 'ILS',
    minorUnits: 2,
    symbol: '₪',
  },
  {
    name: 'Jamaican Dollar',
    code: 'JMD',
    minorUnits: 2,
    symbol: 'J$',
  },
  {
    name: 'Yen',
    code: 'JPY',
    minorUnits: 0,
    symbol: '¥',
  },
  {
    name: 'Jordanian Dinar',
    code: 'JOD',
    minorUnits: 3,
    symbol: '',
  },
  {
    name: 'Tenge',
    code: 'KZT',
    minorUnits: 2,
    symbol: 'лв',
  },
  {
    name: 'Kenyan Shilling',
    code: 'KES',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'North Korean Won',
    code: 'KPW',
    minorUnits: 2,
    symbol: '₩',
  },
  {
    name: 'Won',
    code: 'KRW',
    minorUnits: 0,
    symbol: '₩',
  },
  {
    name: 'Kuwaiti Dinar',
    code: 'KWD',
    minorUnits: 3,
    symbol: '',
  },
  {
    name: 'Som',
    code: 'KGS',
    minorUnits: 2,
    symbol: 'лв',
  },
  {
    name: 'Lao Kip',
    code: 'LAK',
    minorUnits: 2,
    symbol: '₭',
  },
  {
    name: 'Lebanese Pound',
    code: 'LBP',
    minorUnits: 2,
    symbol: '£',
  },
  {
    name: 'Loti',
    code: 'LSL',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Rand',
    code: 'ZAR',
    minorUnits: 2,
    symbol: 'R',
  },
  {
    name: 'Liberian Dollar',
    code: 'LRD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Libyan Dinar',
    code: 'LYD',
    minorUnits: 3,
    symbol: '',
  },
  {
    name: 'Swiss Franc',
    code: 'CHF',
    minorUnits: 2,
    symbol: 'CHF',
  },
  {
    name: 'Pataca',
    code: 'MOP',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Denar',
    code: 'MKD',
    minorUnits: 2,
    symbol: 'ден',
  },
  {
    name: 'Malagasy Ariary',
    code: 'MGA',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Malawi Kwacha',
    code: 'MWK',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Malaysian Ringgit',
    code: 'MYR',
    minorUnits: 2,
    symbol: 'RM',
  },
  {
    name: 'Rufiyaa',
    code: 'MVR',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Ouguiya',
    code: 'MRU',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Mauritius Rupee',
    code: 'MUR',
    minorUnits: 2,
    symbol: '₨',
  },
  {
    name: 'Mexican Peso',
    code: 'MXN',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Mexican Unidad de Inversion (UDI)',
    code: 'MXV',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Moldovan Leu',
    code: 'MDL',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Tugrik',
    code: 'MNT',
    minorUnits: 2,
    symbol: '₮',
  },
  {
    name: 'Moroccan Dirham',
    code: 'MAD',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Mozambique Metical',
    code: 'MZN',
    minorUnits: 2,
    symbol: 'MT',
  },
  {
    name: 'Kyat',
    code: 'MMK',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Namibia Dollar',
    code: 'NAD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Nepalese Rupee',
    code: 'NPR',
    minorUnits: 2,
    symbol: '₨',
  },
  {
    name: 'Cordoba Oro',
    code: 'NIO',
    minorUnits: 2,
    symbol: 'C$',
  },
  {
    name: 'Naira',
    code: 'NGN',
    minorUnits: 2,
    symbol: '₦',
  },
  {
    name: 'Rial Omani',
    code: 'OMR',
    minorUnits: 3,
    symbol: '﷼',
  },
  {
    name: 'Pakistan Rupee',
    code: 'PKR',
    minorUnits: 2,
    symbol: '₨',
  },
  {
    name: 'Balboa',
    code: 'PAB',
    minorUnits: 2,
    symbol: 'B/.',
  },
  {
    name: 'Kina',
    code: 'PGK',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Guarani',
    code: 'PYG',
    minorUnits: 0,
    symbol: 'Gs',
  },
  {
    name: 'Sol',
    code: 'PEN',
    minorUnits: 2,
    symbol: 'S/.',
  },
  {
    name: 'Philippine Peso',
    code: 'PHP',
    minorUnits: 2,
    symbol: '₱',
  },
  {
    name: 'Zloty',
    code: 'PLN',
    minorUnits: 2,
    symbol: 'zł',
  },
  {
    name: 'Qatari Rial',
    code: 'QAR',
    minorUnits: 2,
    symbol: '﷼',
  },
  {
    name: 'Romanian Leu',
    code: 'RON',
    minorUnits: 2,
    symbol: 'lei',
  },
  {
    name: 'Russian Ruble',
    code: 'RUB',
    minorUnits: 2,
    symbol: 'руб',
  },
  {
    name: 'Rwanda Franc',
    code: 'RWF',
    minorUnits: 0,
    symbol: '',
  },
  {
    name: 'Saint Helena Pound',
    code: 'SHP',
    minorUnits: 2,
    symbol: '£',
  },
  {
    name: 'Tala',
    code: 'WST',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Dobra',
    code: 'STN',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Saudi Riyal',
    code: 'SAR',
    minorUnits: 2,
    symbol: '﷼',
  },
  {
    name: 'Serbian Dinar',
    code: 'RSD',
    minorUnits: 2,
    symbol: 'Дин.',
  },
  {
    name: 'Seychelles Rupee',
    code: 'SCR',
    minorUnits: 2,
    symbol: '₨',
  },
  {
    name: 'Leone',
    code: 'SLL',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Singapore Dollar',
    code: 'SGD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Solomon Islands Dollar',
    code: 'SBD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Somali Shilling',
    code: 'SOS',
    minorUnits: 2,
    symbol: 'S',
  },
  {
    name: 'South Sudanese Pound',
    code: 'SSP',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Sri Lanka Rupee',
    code: 'LKR',
    minorUnits: 2,
    symbol: '₨',
  },
  {
    name: 'Sudanese Pound',
    code: 'SDG',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Surinam Dollar',
    code: 'SRD',
    minorUnits: 2,
    symbol: '$',
  },
  {
    name: 'Swedish Krona',
    code: 'SEK',
    minorUnits: 2,
    symbol: 'kr',
  },
  {
    name: 'WIR Euro',
    code: 'CHE',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'WIR Franc',
    code: 'CHW',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Syrian Pound',
    code: 'SYP',
    minorUnits: 2,
    symbol: '£',
  },
  {
    name: 'New Taiwan Dollar',
    code: 'TWD',
    minorUnits: 2,
    symbol: 'NT$',
  },
  {
    name: 'Somoni',
    code: 'TJS',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Tanzanian Shilling',
    code: 'TZS',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Baht',
    code: 'THB',
    minorUnits: 2,
    symbol: '฿',
  },
  {
    name: 'Pa’anga',
    code: 'TOP',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Trinidad and Tobago Dollar',
    code: 'TTD',
    minorUnits: 2,
    symbol: 'TT$',
  },
  {
    name: 'Tunisian Dinar',
    code: 'TND',
    minorUnits: 3,
    symbol: '',
  },
  {
    name: 'Turkish Lira',
    code: 'TRY',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Turkmenistan New Manat',
    code: 'TMT',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Uganda Shilling',
    code: 'UGX',
    minorUnits: 0,
    symbol: '',
  },
  {
    name: 'Hryvnia',
    code: 'UAH',
    minorUnits: 2,
    symbol: '₴',
  },
  {
    name: 'UAE Dirham',
    code: 'AED',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'US Dollar (Next day)',
    code: 'USN',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Peso Uruguayo',
    code: 'UYU',
    minorUnits: 2,
    symbol: '$U',
  },
  {
    name: 'Uruguay Peso en Unidades Indexadas (UI)',
    code: 'UYI',
    minorUnits: 0,
    symbol: '',
  },
  {
    name: 'Unidad Previsional',
    code: 'UYW',
    minorUnits: 4,
    symbol: '',
  },
  {
    name: 'Uzbekistan Sum',
    code: 'UZS',
    minorUnits: 2,
    symbol: 'лв',
  },
  {
    name: 'Vatu',
    code: 'VUV',
    minorUnits: 0,
    symbol: '',
  },
  {
    name: 'Bolívar Soberano',
    code: 'VES',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Dong',
    code: 'VND',
    minorUnits: 0,
    symbol: '₫',
  },
  {
    name: 'Yemeni Rial',
    code: 'YER',
    minorUnits: 2,
    symbol: '﷼',
  },
  {
    name: 'Zambian Kwacha',
    code: 'ZMW',
    minorUnits: 2,
    symbol: '',
  },
  {
    name: 'Zimbabwe Dollar',
    code: 'ZWL',
    minorUnits: 2,
    symbol: '',
  },
]

export const currencyMap = Object.fromEntries(
  allCurrencies.map((c) => [c.code, c])
)

export const getCurrencyCode = (input: string): CurrencyCode | undefined =>
  currencyMap[input.toUpperCase()]?.code

export const isValidCurrency = (input: string): boolean =>
  !!getCurrencyCode(input)

export const toMinorUnits = (amountInMajor: number, currency: CurrencyCode) => {
  if (!currencyMap[currency])
    throw new Error(`Unsupported currency: ${currency}`)

  const { minorUnits } = currencyMap[currency]
  return Math.round(amountInMajor * 10 ** minorUnits)
}

export const toMajorUnits = (amountInMinor: number, currency: CurrencyCode) => {
  if (!currencyMap[currency])
    throw new Error(`Unsupported currency: ${currency}`)

  const { minorUnits } = currencyMap[currency]
  return amountInMinor / 10 ** minorUnits
}
