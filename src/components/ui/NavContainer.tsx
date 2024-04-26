import Heading from "./Heading";
import NavLink from "./NavLink";

function NavContainer({ data }: { data: { title: string; links: string[] } }) {
  return (
    <>
      <Heading>
        <h6 className="pb-[13px] text-base">{data.title}</h6>
      </Heading>
      <ul className="flex w-fit flex-col text-sm">
        {data.links.map((l, i) => (
          <li
            key={i}
            className="relative w-fit px-1 leading-[34px] tracking-[0.2px]"
          >
            <NavLink
              link={
                l.split(" ").length > 1
                  ? l.split(" ").join("-").toLowerCase()
                  : l.split(" ")[0].toLowerCase()
              }
            >
              {l}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavContainer;
