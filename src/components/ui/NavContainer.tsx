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
          <li key={i} className="relative leading-[34px] tracking-[0.2px]">
            <NavLink>{l}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavContainer;
