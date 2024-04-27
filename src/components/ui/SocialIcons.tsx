import Image from "next/image";
import twitter from "/public/footer/twitter.svg";
import facebook from "/public/footer/facebook.svg";
import linkedin from "/public/footer/linkedin.svg";
import Link from "next/link";

function SocialIcons() {
  return (
    <div className="flex gap-4">
      <Link target="_blank" href="http://twitter.com">
        <Image src={twitter} alt="Twitter Logo" />
      </Link>
      <Link target="_blank" href="http://facebook.com">
        <Image src={facebook} alt="Facebook Logo" />
      </Link>
      <Link target="_blank" href="http://linkedin.com">
        <Image src={linkedin} alt="Linked In Logo" />
      </Link>
    </div>
  );
}

export default SocialIcons;
