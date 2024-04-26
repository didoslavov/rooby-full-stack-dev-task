import increase from "/public/expertise/increase.svg";
import marketing from "/public/expertise/marketing.svg";
import help from "/public/expertise/help.svg";
import Card from "./Card";
import Link from "next/link";

const cards = [
  {
    img: increase,
    chip: "Sales",
    heading: "Increase company revenue up to 65%",
    description:
      "Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging.",
    list: [
      "Close more deals with single-page contact management",
      "Enjoy one-click calling, call scripts and voicemail automation",
      "Track stages and milestones of your deals to keep the sales process on track",
    ],
  },
  {
    img: marketing,
    chip: "Marketing",
    heading: "Marketing",
    description:
      "Market like the most successful companies in the world with Agile CRM's marketing automation software.",
    list: [
      "Close more deals with single-page contact management",
      "Use our templates to create high converting, mobile responsive landing pages",
      "Integrate social media easily into your marketing campaigns & contact views",
    ],
  },
  {
    img: help,
    chip: "Service",
    heading: "Help Desk Software",
    description:
      "Great customer support separates decent companies from excellent companies. A positive customer support experience is a crucially important piece of the customer journey.",
    list: [
      "Resolve every issue in the shortest possible time with powerful ticketing features",
      "Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)",
      "Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard",
    ],
  },
];

function Expertise() {
  return (
    <section className="col-start-1 col-end-13 grid grid-cols-subgrid bg-white">
      {cards.map((c, i) => {
        return (
          <article
            key={i}
            className={`relative flex flex-col items-center gap-10 sm:text-center md:flex-row md:text-start lg:gap-0 ${i === cards.length - 1 && "mb-16 lg:mb-[120px]"} ${i % 2 === 1 ? "xl:flex-row-reverse xl:gap-24" : "xl:flex-row"} col-start-2 col-end-12 mt-16 border-t border-main-grey-700 xl:mt-[120px] xl:pt-12`}
          >
            <Card expertise={c} />
            {i === 1 && (
              <div className="pointer-events-none absolute -bottom-10 flex flex-col items-center gap-3 rounded-xl bg-main-blue py-3 pl-6 pr-3 text-base text-white hover:bg-main-yellow hover:text-black sm:bottom-8 sm:left-10 sm:flex-row md:-bottom-10 md:left-40 lg:-bottom-14 lg:left-56 lg:text-lg xl:bottom-10 xl:left-14">
                <p className=" font-bold -tracking-[0.25px]">
                  Automate your sales & marketing
                </p>
                <Link
                  href="#"
                  className="pointer-events-auto rounded-lg bg-main-green p-2 font-bold -tracking-[0.25px] hover:bg-main-green-100 lg:pb-4 lg:pl-5 lg:pr-[18px] lg:pt-4"
                >
                  Start now
                </Link>
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
}

export default Expertise;
