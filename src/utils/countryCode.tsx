const countryCode = {
  CHN: 'China',
  BTN: 'Bhutan',
  TMP: 'Timor-Leste',
  TWN: 'Taiwan, China',
  MAC: 'Macao SAR, China',
  HKG: 'Hong Kong SAR, China',
  CAF: 'Central African Republic',
  DNK: 'Denmark',
  UKR: 'Ukraine',
  UZB: 'Uzbekistan',
  UGA: 'Uganda',
  URY: 'Uruguay',
  TCD: 'Chad',
  YEM: 'Yemen, Rep.',
  ARM: 'Armenia',
  ISR: 'Israel',
  IRQ: 'Iraq',
  IRN: 'Iran, Islamic Rep.',
  BLZ: 'Belize',
  CPV: 'Cabo Verde',
  RUS: 'Russian Federation',
  BGR: 'Bulgaria',
  HRV: 'Croatia',
  GUM: 'Guam',
  GMB: 'The Gambia',
  ISL: 'Iceland',
  GIN: 'Guinea',
  GNB: 'Guinea-Bissau',
  LIE: 'Liechtenstein',
  COG: 'Congo, Rep.',
  ZAR: 'Congo, Dem. Rep.',
  LBY: 'Libya',
  LBR: 'Liberia',
  CAN: 'Canada',
  GHA: 'Ghana',
  GAB: 'Gabon',
  HUN: 'Hungary',
  MNP: 'Northern Mariana Islands',
  SSD: 'South Sudan',
  ZAF: 'South Africa',
  BWA: 'Botswana',
  QAT: 'Qatar',
  RWA: 'Rwanda',
  LUX: 'Luxembourg',
  IND: 'India',
  IDN: 'Indonesia',
  GTM: 'Guatemala',
  ECU: 'Ecuador',
  ERI: 'Eritrea',
  CUB: 'Cuba',
  KGZ: 'Kyrgyz Republic',
  DJI: 'Djibouti',
  KAZ: 'Kazakhstan',
  COL: 'Colombia',
  CRI: 'Costa Rica',
  CMR: 'Cameroon',
  TUV: 'Tuvalu',
  TKM: 'Turkmenistan',
  TUR: 'Turkey',
  LCA: 'St. Lucia',
  KNA: 'St. Kitts and Nevis',
  STP: 'Sao Tome and Principe',
  VCT: 'St. Vincent and the Grenadines',
  MAF: 'St. Martin (French part)',
  SXM: 'Sint Maarten (Dutch part)',
  SMR: 'San Marino',
  GUY: 'Guyana',
  TZA: 'Tanzania',
  ETH: 'Ethiopia',
  KIR: 'Kiribati',
  TJK: 'Tajikistan',
  SEN: 'Senegal',
  SRB: 'Serbia',
  SLE: 'Sierra Leone',
  CYP: 'Cyprus',
  SYC: 'Seychelles',
  MEX: 'Mexico',
  TGO: 'Togo',
  DMA: 'Dominica',
  DOM: 'Dominican Republic',
  KOR: 'Korea, Rep.',
  AUT: 'Austria',
  VEN: 'Venezuela, RB',
  BGD: 'Bangladesh',
  AGO: 'Angola',
  ATG: 'Antigua and Barbuda',
  ADO: 'Andorra',
  FSM: 'Micronesia, Fed. Sts.',
  NIC: 'Nicaragua',
  NGA: 'Nigeria',
  NER: 'Niger',
  NPL: 'Nepal',
  BHS: 'The Bahamas',
  PAK: 'Pakistan',
  BRB: 'Barbados',
  PNG: 'Papua New Guinea',
  PRY: 'Paraguay',
  PAN: 'Panama',
  BHR: 'Bahrain',
  BRA: 'Brazil',
  BFA: 'Burkina Faso',
  BDI: 'Burundi',
  GRC: 'Greece',
  PLW: 'Palau',
  CUW: 'Curacao',
  CYM: 'Cayman Islands',
  DEU: 'Germany',
  ITA: 'Italy',
  SLB: 'Solomon Islands',
  LVA: 'Latvia',
  NOR: 'Norway',
  CZE: 'Czech Republic',
  MDA: 'Moldova',
  MAR: 'Morocco',
  MCO: 'Monaco',
  BRN: 'Brunei Darussalam',
  FJI: 'Fiji',
  SWZ: 'Swaziland',
  SVK: 'Slovak Republic',
  SVN: 'Slovenia',
  LKA: 'Sri Lanka',
  SGP: 'Singapore',
  NCL: 'New Caledonia',
  NZL: 'New Zealand',
  JPN: 'Japan',
  CHL: 'Chile',
  PRK: 'Korea, Dem. Rep.',
  KHM: 'Cambodia',
  GRD: 'Grenada',
  GRL: 'Greenland',
  GEO: 'Georgia',
  BEL: 'Belgium',
  MRT: 'Mauritania',
  MUS: 'Mauritius',
  TON: 'Tonga',
  SAU: 'Saudi Arabia',
  FRA: 'France',
  PYF: 'French Polynesia',
  FRO: 'Faeroe Islands',
  POL: 'Poland',
  PRI: 'Puerto Rico',
  BIH: 'Bosnia and Herzegovina',
  THA: 'Thailand',
  ZWE: 'Zimbabwe',
  HND: 'Honduras',
  HTI: 'Haiti',
  CHI: 'Channel Islands',
  AUS: 'Australia',
  IRL: 'Ireland',
  EST: 'Estonia',
  JAM: 'Jamaica',
  TCA: 'Turks and Caicos Islands',
  TTO: 'Trinidad and Tobago',
  BOL: 'Bolivia',
  SWE: 'Sweden',
  CHE: 'Switzerland',
  VUT: 'Vanuatu',
  BLR: 'Belarus',
  BMU: 'Bermuda',
  KWT: 'Kuwait',
  COM: 'Comoros',
  CIV: 'Cote d\'Ivoire',
  KSV: 'Kosovo',
  PER: 'Peru',
  TUN: 'Tunisia',
  LTU: 'Lithuania',
  SOM: 'Somalia',
  JOR: 'Jordan',
  WBG: 'West Bank and Gaza',
  NAM: 'Namibia',
  MMR: 'Myanmar',
  ROM: 'Romania',
  USA: 'United States',
  VIR: 'Virgin Islands (U.S.)',
  ASM: 'American Samoa',
  LAO: 'Lao PDR',
  KEN: 'Kenya',
  FIN: 'Finland',
  SDN: 'Sudan',
  SUR: 'Suriname',
  GBR: 'United Kingdom',
  NLD: 'Netherlands',
  MOZ: 'Mozambique',
  LSO: 'Lesotho',
  PHL: 'Philippines',
  SLV: 'El Salvador',
  WSM: 'Samoa',
  PRT: 'Portugal',
  MNG: 'Mongolia',
  ESP: 'Spain',
  BEN: 'Benin',
  ZMB: 'Zambia',
  GNQ: 'Equatorial Guinea',
  VNM: 'Vietnam',
  AZE: 'Azerbaijan',
  AFG: 'Afghanistan',
  DZA: 'Algeria',
  ALB: 'Albania',
  SYR: 'Syrian Arab Republic',
  EGY: 'Egypt, Arab Rep.',
  ARE: 'United Arab Emirates',
  OMN: 'Oman',
  ARG: 'Argentina',
  ABW: 'Aruba',
  MKD: 'Macedonia, FYR',
  MDV: 'Maldives',
  IMY: 'Isle of Man',
  MWI: 'Malawi',
  MYS: 'Malaysia',
  MHL: 'Marshall Islands',
  MLT: 'Malta',
  MDG: 'Madagascar',
  MLI: 'Mali',
  LBN: 'Lebanon',
  MNE: 'Montenegro'
}

export default countryCode