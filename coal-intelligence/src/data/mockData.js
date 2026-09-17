export const users = [
  {
    id: 1,
    name: "Arjun Sharma",
    initials: "AS",
    role: "Management",
    department: "Strategic Planning",
  },
  {
    id: 2,
    name: "Dr. Neha Verma",
    initials: "NV",
    role: "Geologist",
    department: "Geological Services",
  },
  {
    id: 3,
    name: "Rohit Singh",
    initials: "RS",
    role: "Mining Engineer",
    department: "Mining Operations",
  },
  {
    id: 4,
    name: "Field Team 07",
    initials: "F7",
    role: "Field Worker",
    department: "Field Operations",
  },
];

export const documents = [
  {
    id: "GEO-BK-142",
    title: "Borehole Exploration Report — BK-142",
    category: "Geological",
    mine: "Barkakana Block",
    region: "Jharkhand",
    year: "2025",
    department: "Geological Services",
    status: "Verified",
    contributor: "Field Team 07",
    size: "8.4 MB",
    pages: 46,
    type: "PDF",
    description:
      "Exploration findings, lithological observations and coal seam intersections.",
  },
  {
    id: "PROD-ECL-25",
    title: "Annual Coal Production Report — 2024-25",
    category: "Production",
    mine: "Eastern Coalfields",
    region: "West Bengal",
    year: "2025",
    department: "Production Planning",
    status: "Verified",
    contributor: "Production Cell",
    size: "4.2 MB",
    pages: 82,
    type: "PDF",
    description:
      "Annual production, dispatch and productivity figures across operating mines.",
  },
  {
    id: "MIN-CWS-24",
    title: "Mining Operations Report — Central West",
    category: "Mining",
    mine: "Central West Mine",
    region: "Chhattisgarh",
    year: "2024",
    department: "Mining Operations",
    status: "Pending",
    contributor: "Rohit Singh",
    size: "12.1 MB",
    pages: 64,
    type: "PDF",
    description:
      "Mining operations, overburden removal and equipment utilization report.",
  },
  {
    id: "GEO-RS-119",
    title: "Regional Geological Assessment",
    category: "Geological",
    mine: "North Karanpura",
    region: "Jharkhand",
    year: "2023",
    department: "Geological Services",
    status: "Verified",
    contributor: "CMPDI Geology",
    size: "18.6 MB",
    pages: 104,
    type: "PDF",
    description:
      "Regional geological assessment and resource estimation study.",
  },
  {
    id: "PROD-NCL-24",
    title: "Mine Production Dataset — NCL",
    category: "Production",
    mine: "Northern Coalfields",
    region: "Madhya Pradesh",
    year: "2024",
    department: "Production Planning",
    status: "Verified",
    contributor: "NCL Data Cell",
    size: "2.8 MB",
    pages: 18,
    type: "XLSX",
    description:
      "Mine-wise production and dispatch records for the reporting period.",
  },
  {
    id: "GEO-BH-088",
    title: "Borehole Log Compilation — BH-088",
    category: "Geological",
    mine: "Singrauli Block",
    region: "Madhya Pradesh",
    year: "2022",
    department: "Exploration",
    status: "Pending",
    contributor: "Exploration Team",
    size: "6.1 MB",
    pages: 31,
    type: "PDF",
    description:
      "Compiled borehole logs containing depth, lithology and seam observations.",
  },
  {
    id: "MIN-NK-25",
    title: "North Karanpura Mine Performance Report",
    category: "Mining",
    mine: "North Karanpura",
    region: "Jharkhand",
    year: "2025",
    department: "Mining Operations",
    status: "Verified",
    contributor: "Mining Cell",
    size: "9.7 MB",
    pages: 57,
    type: "PDF",
    description:
      "Mine performance, equipment deployment and operational efficiency metrics.",
  },
  {
    id: "HIS-CIL-19",
    title: "Historical Coal Production Archive — 2019",
    category: "Historical",
    mine: "Central Coalfields",
    region: "Jharkhand",
    year: "2019",
    department: "Archives",
    status: "Verified",
    contributor: "Archive Cell",
    size: "21.4 MB",
    pages: 143,
    type: "PDF",
    description:
      "Digitized historical production records preserved from legacy archives.",
  },
];

export const activities = [
  {
    id: 1,
    type: "upload",
    title: "Borehole report uploaded",
    description: "GEO-BK-142 · Barkakana Block",
    time: "12 min ago",
    documentId: "GEO-BK-142",
  },
  {
    id: 2,
    type: "verify",
    title: "Production dataset verified",
    description: "PROD-NCL-24 · Northern Coalfields",
    time: "48 min ago",
    documentId: "PROD-NCL-24",
  },
  {
    id: 3,
    type: "report",
    title: "Annual report generated",
    description: "Production Summary · 2024-25",
    time: "2 hrs ago",
  },
  {
    id: 4,
    type: "upload",
    title: "Geological assessment added",
    description: "GEO-RS-119 · North Karanpura",
    time: "4 hrs ago",
    documentId: "GEO-RS-119",
  },
];

export const mines = [
  {
    name: "Barkakana Block",
    code: "BK-01",
    region: "Jharkhand",
    production: "4.2 MT",
    documents: 284,
    boreholes: 126,
    status: "Operational",
  },
  {
    name: "North Karanpura",
    code: "NK-07",
    region: "Jharkhand",
    production: "6.8 MT",
    documents: 391,
    boreholes: 184,
    status: "Operational",
  },
  {
    name: "Singrauli Block",
    code: "SG-12",
    region: "Madhya Pradesh",
    production: "8.1 MT",
    documents: 427,
    boreholes: 216,
    status: "Operational",
  },
  {
    name: "Central West Mine",
    code: "CW-04",
    region: "Chhattisgarh",
    production: "5.6 MT",
    documents: 218,
    boreholes: 94,
    status: "Operational",
  },
];

export const productionData = [
  { year: "2020", production: 48, dispatch: 45 },
  { year: "2021", production: 53, dispatch: 50 },
  { year: "2022", production: 59, dispatch: 56 },
  { year: "2023", production: 64, dispatch: 61 },
  { year: "2024", production: 69, dispatch: 66 },
  { year: "2025", production: 74, dispatch: 71 },
];

export const departmentData = [
  { name: "Geological", records: 3420 },
  { name: "Mining", records: 2960 },
  { name: "Production", records: 4180 },
  { name: "Historical", records: 2280 },
];

export const topics = [
  { name: "Production", count: 1248 },
  { name: "Borehole", count: 894 },
  { name: "Exploration", count: 762 },
  { name: "Geology", count: 718 },
  { name: "Coal Reserve", count: 641 },
  { name: "Dispatch", count: 583 },
  { name: "Mining", count: 551 },
  { name: "Stripping Ratio", count: 427 },
];

export const roleStats = {
  Management: {
    eyebrow: "MANAGEMENT CONTROL ROOM",
    title: "Executive Knowledge Overview",
    description:
      "Monitor information coverage, production intelligence and reporting activity across operations.",
    stats: [
      ["TOTAL RECORDS", "12,840", "+384 this month"],
      ["VERIFIED RECORDS", "10,421", "81.2% of repository"],
      ["PRODUCTION DATA", "4,180", "+126 this month"],
      ["PENDING REVIEW", "2,419", "34 require attention"],
    ],
  },

  Geologist: {
    eyebrow: "GEOLOGICAL SERVICES",
    title: "Geological Intelligence Workspace",
    description:
      "Explore borehole records, geological assessments and exploration information.",
    stats: [
      ["GEOLOGICAL RECORDS", "3,420", "+94 this month"],
      ["BOREHOLES", "1,842", "126 recently indexed"],
      ["EXPLORATION REPORTS", "762", "+38 this month"],
      ["PENDING REVIEW", "118", "12 require attention"],
    ],
  },

  "Mining Engineer": {
    eyebrow: "MINING OPERATIONS",
    title: "Mining Operations Workspace",
    description:
      "Monitor operational records, mine performance and production information.",
    stats: [
      ["MINE RECORDS", "2,960", "+82 this month"],
      ["ACTIVE MINES", "48", "4 recently updated"],
      ["PRODUCTION RECORDS", "4,180", "+126 this month"],
      ["PENDING REVIEW", "84", "9 require attention"],
    ],
  },

  "Field Worker": {
    eyebrow: "FIELD OPERATIONS",
    title: "Field Data Workspace",
    description:
      "Submit field observations and access verified operational information.",
    stats: [
      ["MY SUBMISSIONS", "86", "+12 this month"],
      ["VERIFIED RECORDS", "74", "86.0% verified"],
      ["FIELD REPORTS", "52", "+7 this month"],
      ["PENDING REVIEW", "12", "3 require attention"],
    ],
  },
};