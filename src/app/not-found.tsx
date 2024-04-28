import MainLink from "@/components/ui/MainLink";
import Image from "next/image";
import notfound from "/public/notfound/404.png";
import notfound1 from "/public/notfound/404-2.png";

export default function NotFound() {
  return (
    <div className="col-span-full bg-main-blue bg-opacity-10">
      <div className="flex flex-col-reverse items-center justify-center gap-16 px-4 py-24 md:gap-28 md:px-44 md:py-20 lg:flex-row lg:px-24 lg:py-24">
        <div className="relative w-full pb-12 lg:pb-0 xl:w-1/2 xl:pt-24">
          <div className="relative">
            <div className="absolute">
              <div>
                <h1 className="my-2 text-2xl font-bold text-gray-800">
                  Looks like you&apos;ve found the doorway to the great nothing
                </h1>
                <p className="my-2 mb-20 text-gray-800">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
                <MainLink link="/" className="px-4 py-2">
                  Take me there!
                </MainLink>
              </div>
            </div>
            <div>
              <Image alt="Not found Page Image" src={notfound} />
            </div>
          </div>
        </div>
        <div>
          <Image alt="Not found Page Image" src={notfound1} />
        </div>
      </div>
    </div>
  );
}
