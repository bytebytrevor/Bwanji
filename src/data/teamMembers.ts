export type TeamDiscipline = "Leadership" | "Strategy" | "Creative" | "Digital" | "Public Relations" | "Experiential" | "Advisory";
export type TeamOffice = "Lusaka" | "Lilongwe" | "Regional";
export type TeamMember = {id:string;slug:string;name:string;initials:string;role:string;discipline:TeamDiscipline;office:TeamOffice;image:string;shortBio:string;biography:string[];expertise:string[];languages:string[];yearsExperience?:number;email?:string;linkedIn?:string;featured?:boolean;selectedWork?:{title:string;client:string;link?:string}[]};
export const teamMembers: TeamMember[] = [
  {
    "id": "sapi-bachi",
    "slug": "sapi-bachi",
    "name": "Sapi Bachi",
    "initials": "SB",
    "role": "Managing Director",
    "discipline": "Leadership",
    "office": "Regional",
    "image": "/Sapi%20Bachi.jpg",
    "shortBio": "Sapi is the Executive Director of Full Circle Communications (Pvt) Ltd, Sapi Bachi spearheads operations across Malawi, South Africa, Zambia, and Zimbabwe. Under her leadership, the businesses have achieved notable succe",
    "biography": [
      "Sapi is the Executive Director of Full Circle Communications (Pvt) Ltd, Sapi Bachi spearheads operations across Malawi, South Africa, Zambia, and Zimbabwe. Under her leadership, the businesses have achieved notable success, earning multiple awards.",
      "Sapi has been awarded numerous awards in Zimbabwe and across the region. Noteworthy among her accolades is the Institute of Directors of Zimbabwe SME Director of the Year award for 2020. She is a Vice Chairperson at Zimbabwe Advertising Research Fund (ZARF), and is Chair of the Advertising Standards Authority. She is a member of the Zimbabwe Association of Accredited Practitioners in Advertising (ZAAPA), the Institute of Directors Zimbabwe, and the Marketers Association of Zimbabwe.",
      "Beyond her corporate endeavours, Sapi is also the Founder of Thando Channel, a video-on-demand platform dedicated to amplifying the voices of African women. With a mission cantered on inspiring positive change and reshaping the narrative of Africa."
    ],
    "expertise": [],
    "languages": [],
    "featured": true
  },
  {
    "id": "anesu-sakutukwa",
    "slug": "anesu-sakutukwa",
    "name": "Anesu Sakutukwa",
    "initials": "AS",
    "role": "Head of Digital",
    "discipline": "Digital",
    "office": "Regional",
    "image": "/Anesu%20Profile%20Picture.jpg",
    "shortBio": "Anesu Sakutukwa is a digital and brand strategist with close to a decade of experience across agency and corporate environments in Zimbabwe and South Africa. She currently serves as Head of Digital, leading digital strat",
    "biography": [
      "Anesu Sakutukwa is a digital and brand strategist with close to a decade of experience across agency and corporate environments in Zimbabwe and South Africa. She currently serves as Head of Digital, leading digital strategy, content, integrated campaigns and brand experiences across a diverse portfolio of clients. Her approach combines commercial thinking, consumer insight, culture and creative execution, helping brands across Zimbabwe and Southern Africa navigate increasingly connected, fast-moving and culturally diverse audiences. She believes digital should not sit on the sidelines of brand communication but should be embedded in how modern brands are built, experienced and grown.",
      "Her experience spans financial services, telecommunications, FMCG, insurance, retail and technology. Across both in-house and agency roles, she has led work focused on strengthening brands, building meaningful audience engagement and delivering measurable business value.",
      "Anesu holds a Bachelor of Commerce in Business Management and Economics from Nelson Mandela University in Port Elizabeth and a BCom Honours in Strategic Brand Management from Vega School of Brand Leadership in Cape Town."
    ],
    "expertise": [],
    "languages": [],
    "featured": true
  },
  {
    "id": "david-duri",
    "slug": "david-duri",
    "name": "David Duri",
    "initials": "DD",
    "role": "Executive Creative Director",
    "discipline": "Creative",
    "office": "Regional",
    "image": "/David%20Duri%20-%20Executive%20Creative%20Director.jpeg",
    "shortBio": "David Duri is an Executive Creative Director and marketing leader working at the intersection of strategy, creativity and commercial growth.",
    "biography": [
      "David Duri is an Executive Creative Director and marketing leader working at the intersection of strategy, creativity and commercial growth.",
      "With experience spanning telecommunications, advertising, technology, finance, hospitality, media and research, he has helped organisations turn complex business challenges into focused brand and marketing solutions. His expertise covers brand strategy, integrated marketing, digital transformation, customer experience and go-to-market execution across both agency and corporate environments. Earlier exposure to global brands through KLA Johannesburg strengthened his belief that impactful creativity must be rooted in genuine consumer insight.",
      "Today, David is focused on advancing creative excellence, building integrated teams, mentoring talent and driving growth across Zimbabwe and African markets."
    ],
    "expertise": [],
    "languages": [],
    "featured": true
  },
  {
    "id": "tanyaradzwa-masendeke",
    "slug": "tanyaradzwa-masendeke",
    "name": "Tanyaradzwa Masendeke",
    "initials": "TM",
    "role": "Brand Strategist",
    "discipline": "Strategy",
    "office": "Regional",
    "image": "/Tanya%20Masendeke%20-%20Head%20of%20Strategy.jpeg",
    "shortBio": "Tanyaradzwa Masendeke is a hybrid strategist and creative with a strong foundation in visual design, advertising and brand communication.",
    "biography": [
      "Tanyaradzwa Masendeke is a hybrid strategist and creative with a strong foundation in visual design, advertising and brand communication.",
      "His ability to move comfortably between strategic thinking and creative execution gives him a distinctive approach to brand development, helping turn audience insight and business challenges into clear, engaging brand narratives.",
      "Tanyaradzwa has contributed to work across major brands including TelOne, Chibuku, Golden Pilsener, Shumba Mahewu and PPC, as well as regional work for the African Union.",
      "He is particularly passionate about developing brands that are culturally relevant, strategically grounded and able to build genuine connections with the people they serve."
    ],
    "expertise": [],
    "languages": [],
    "featured": false
  },
  {
    "id": "hilgard-kamuna",
    "slug": "hilgard-kamuna",
    "name": "Hilgard Kamuna",
    "initials": "HK",
    "role": "Account Manager, Magna Carta",
    "discipline": "Public Relations",
    "office": "Regional",
    "image": "/Hilgard.jpg",
    "shortBio": "Hilgard has 15+ years’ experience of operational and strategic experience in different sectors and positions. He is a passionate communications specialist whose career has been shaped by a love for storytelling, a sharp ",
    "biography": [
      "Hilgard has 15+ years’ experience of operational and strategic experience in different sectors and positions. He is a passionate communications specialist whose career has been shaped by a love for storytelling, a sharp eye for brand strategy, and a commitment to driving meaningful connections through marketing and communications. He is versatile with skills that range from marketing, communications, and advertising, to digital marketing and public relations. He has worked with clients in Financial Services, Telecommunications, Mining, Media, Logistics, and FMCG in markets across SADC. Clients Hilgard has worked with include Standard Bank Malawi, Old Mutual (Zimbabwe and Malawi), PSI, Giz, WBR, Delta, PPC and SECZ. Notable Projects: SECZ Financial Literacy Campaign, PSI I Can Campaign, Namibia Breweries, Vigo Launch, Old Mutual Solar projects."
    ],
    "expertise": [],
    "languages": [],
    "featured": false
  },
  {
    "id": "thokozani-unyolo",
    "slug": "thokozani-unyolo",
    "name": "Thokozani Unyolo",
    "initials": "TU",
    "role": "Director, Bwanji Malawi",
    "discipline": "Leadership",
    "office": "Lilongwe",
    "image": "/Professional%20Photo%20Thoko.jpg",
    "shortBio": "Thokozani brings 22 years of experience building businesses and brands across 17 countries, including the UK, UAE, and East and Southern Africa. She has worked across aviation, financial services, telecommunications, FMC",
    "biography": [
      "Thokozani brings 22 years of experience building businesses and brands across 17 countries, including the UK, UAE, and East and Southern Africa. She has worked across aviation, financial services, telecommunications, FMCG, and technology, with roles at Air Cargo Malawi, Standard Bank Group, Airtel Africa, Zain, Celtel, and The Coca-Cola Company.",
      "Her focus areas include regional leadership, strategy development, marketing management, brand building, stakeholder engagement, and CSR and ESG. She was the first woman to win the Chartered Institute of Marketing's Marketer of the Year award in Malawi (2017), and has since been named IMM Marketer of the Year (2020) and one of Malawi's Top 100 Most Influential Women, among other industry recognitions.",
      "Thokozani holds an MBA from the Gordon Institute of Business Science, a Bachelor of Business Administration from the University of Namibia, and certificates in digital marketing (Stellenbosch University) and strategic client relationship management (University of Cape Town)."
    ],
    "expertise": [],
    "languages": [],
    "featured": false
  },
  {
    "id": "lindarose-sikazwe",
    "slug": "lindarose-sikazwe",
    "name": "Lindarose Sikazwe",
    "initials": "LS",
    "role": "Business Development Manager, Zambia",
    "discipline": "Strategy",
    "office": "Lusaka",
    "image": "/Lindarose.jpg",
    "shortBio": "Lindarose is the Business Development Manager at Bwanji Zambia, with a background spanning client services, campaign management, financial services, and operations. She focuses on identifying new opportunities, building ",
    "biography": [
      "Lindarose is the Business Development Manager at Bwanji Zambia, with a background spanning client services, campaign management, financial services, and operations. She focuses on identifying new opportunities, building relationships with potential clients, and turning business challenges into proposals that convert.",
      "Before moving into business development, she spent over three years in client services, managing client relationships and expectations. She also brings more than five years in campaign management and operations, plus six years in administration, which shaped her approach to coordination and detail. In financial services, she worked as a financial advisor at Prudential, building her consultative selling and client relationship skills.",
      "Her approach treats business development as relationship-led: understanding a client's business and needs first, then presenting the solution that fits."
    ],
    "expertise": [],
    "languages": [],
    "featured": false
  }
];
