import face from "/public/benefits/face.svg";
import laptop from "/public/benefits/laptop.svg";
import wound from "/public/benefits/wound.svg";
import increase from "/public/expertise/increase.svg";
import marketing from "/public/expertise/marketing.svg";
import help from "/public/expertise/help.svg";
import nellie from "/public/clients/nellie.svg";
import lawrence from "/public/clients/lawrence.svg";
import lola from "/public/clients/lola.svg";
import daisy from "/public/clients/daisy.svg";
import andrew from "/public/clients/andrew.svg";

const benefitsData = [
  {
    id: 1,
    icon: face,
    heading: "Lead customers to happiness",
    description:
      "Rooody Support helps you provide personalized support when and where customers need it, so customers stay happy.",
  },
  {
    id: 2,
    icon: laptop,
    heading: "Support your support",
    description:
      "Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.",
  },
  {
    id: 3,
    icon: wound,
    heading: "Grow without growing pains",
    description:
      "Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.",
  },
];

const expertiseData = [
  {
    id: 1,
    img: increase,
    chip: "Sales",
    heading: "Increase company revenue up to 65%",
    description:
      "Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging.",
    list: [
      { id: 1, text: "Close more deals with single-page contact management" },
      {
        id: 2,
        text: "Enjoy one-click calling, call scripts and voicemail automation",
      },
      {
        id: 3,
        text: "Track stages and milestones of your deals to keep the sales process on track",
      },
    ],
  },
  {
    id: 2,
    img: marketing,
    chip: "Marketing",
    heading: "Marketing",
    description:
      "Market like the most successful companies in the world with Agile CRM's marketing automation software.",
    list: [
      { id: 1, text: "Close more deals with single-page contact management" },
      {
        id: 2,
        text: "Use our templates to create high converting, mobile responsive landing pages",
      },
      {
        id: 3,
        text: "Integrate social media easily into your marketing campaigns & contact views",
      },
    ],
  },
  {
    id: 3,
    img: help,
    chip: "Service",
    heading: "Help Desk Software",
    description:
      "Great customer support separates decent companies from excellent companies. A positive customer support experience is a crucially important piece of the customer journey.",
    list: [
      {
        id: 1,
        text: "Resolve every issue in the shortest possible time with powerful ticketing features",
      },
      {
        id: 2,
        text: "Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)",
      },
      {
        id: 3,
        text: "Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard",
      },
    ],
  },
];

const resultsData = [
  {
    id: 1,
    result: "$2.5 M",
    type: "Generate sales",
    text: "Using Кирилица CRM is one of the best decisions we’ve ever made. We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.",
    img: nellie,
    name: "Nellie Foster",
    position: "Founder & CEO, Foster Business Strategies",
  },
  {
    id: 2,
    result: "45%",
    type: "Grew revenue",
    text: "Yoora is created for sales people. It’s the kind of software that just works. I don’t have to try to make it work. It already does. It’s just perfect.",
    img: lawrence,
    name: "Lawrence Gibbs",
    position: "Marketing Director",
  },
];

const testimonialsData = [
  {
    id: 1,
    text: "The best thing we love about Yoora is it does two-way sync with Google Apps. It has helped us to better organize and keep everything on track.",
    img: lola,
    name: "Lola Ross",
    position: "Marketing Director",
  },
  {
    id: 2,
    text: "It has made our sales department more effective and efficient. It’s easy to use and it’s constantly updated. It’s easy to use and it’s constantly updated.",
    img: daisy,
    name: "Daisy Phelps",
    position: "Speaker and Author, Lifeiseasy",
  },
  {
    id: 3,
    text: "Easy to use, reasonably priced, and ensures I don’t drop the ball on following up with my leads!",
    img: andrew,
    name: "Andrew Wilkins",
    position: "Managing Director, Nirma Studio",
  },
];

export function getBenefitsData() {
  return benefitsData;
}

export function getExpertiseData() {
  return expertiseData;
}

export function getResultsData() {
  return resultsData;
}

export function getTestimonialsData() {
  return testimonialsData;
}
