export type ClientTestimonial = {
  id: string;
  client: string;
  quote: string;
  name: string;
  role: string;
  organization: string;
  location?: string;
};

export const testimonials: ClientTestimonial[] = [
  {
    id: "standard-bank-malawi",
    client: "Standard Bank Plc, Malawi",
    quote:
      "Over more than five years, the agency supported our digital marketing, developing and implementing campaigns that included award-winning work. Their efficient, capable team proved to be a reliable partner, and we would confidently recommend them.",
    name: "Nyambura E. Chege",
    role: "Head, Brand and Marketing",
    organization: "Standard Bank Plc, Malawi",
    location: "Malawi",
  },
  {
    id: "buffalo-bicycles",
    client: "Buffalo Bicycles",
    quote:
      "We have worked with Bwanji on several projects spanning traditional advertising, social media and public relations. Their team is professional and responsive, and consistently delivers high-quality work. I recommend them without hesitation.",
    name: "Anthony H A Kinnaird",
    role: "Country Director",
    organization: "Buffalo Bicycles",
  },
  {
    id: "fieldstone-helms",
    client: "Fieldstone Helms",
    quote:
      "Bwanji has been a valued local partner supporting our PSI campaigns in Malawi across advertising, public relations and social media management. Their team is strategic, creative, proactive and accessible, consistently delivering on time. We are happy to recommend them.",
    name: "Thomas Omanga",
    role: "Chief Executive Officer",
    organization: "Fieldstone Helms Ltd",
    location: "Kenya",
  },
  {
    id: "zicb",
    client: "Zambia Industrial Commercial Bank (ZICB)",
    quote:
      "Bwanji Media has supported ZICB with digital marketing and social media services since November 2021. We confidently recommend them as a reliable and professional service provider.",
    name: "Anthony N. Simbeye",
    role: "Head of Procurement and Shared Services",
    organization: "Zambia Industrial Commercial Bank",
    location: "Zambia",
  },
  {
    id: "thando-channel",
    client: "Thando Channel",
    quote:
      "Bwanji’s creativity, strategic thinking and understanding of our mission have helped elevate Thando Channel’s digital presence. By bringing storytelling and digital marketing together, they have expanded our reach and strengthened our engagement with readers, authors and creatives across Africa.",
    name: "Fadzai Muneri",
    role: "Founder",
    organization: "Thando Channel",
  },
];
