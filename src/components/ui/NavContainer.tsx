import Heading from "./Heading";
import NavLink from "./NavLink";

function NavContainer({
  data,
}: {
  data: { title: string; links: { id: number; link: string }[] };
}) {
  return (
    <>
      <Heading>
        <h6 className="pb-[13px] text-base">{data.title}</h6>
      </Heading>
      <ul className="flex w-fit flex-col text-nowrap text-sm">
        {data.links.map((l, i) => (
          <li
            key={l.id}
            className="relative w-fit px-1 leading-[34px] tracking-[0.2px]"
          >
            <NavLink
              link={
                l.link.split(" ").length > 1
                  ? l.link.split(" ").join("-").toLowerCase()
                  : l.link.split(" ")[0].toLowerCase()
              }
            >
              {l.link}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavContainer;
