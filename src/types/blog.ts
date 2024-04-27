import { StaticImageData } from "next/image";

export interface BlogPost {
  id: number;
  tag: string;
  title: string;
  date: string;
  content: {
    main: {
      intro: string;
      heading: string;
      text: string[];
    };
    image: StaticImageData;
    quote: {
      paragraph: string;
      author: string;
    };
    sub: {
      heading: string;
      intro: string;
      subheading: string;
      text: string[];
    };
  };
  publisher: {
    name: string;
    avatar: StaticImageData;
    position: string;
  };
  image: StaticImageData;
}
