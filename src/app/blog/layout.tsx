import Banner from "@/components/ui/Banner";
import Blog from "@/components/layout/Blog/Blog";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="col-start-1 col-end-13 grid grid-cols-subgrid overflow-hidden">
      <Blog />
      {children}
      <Banner />
    </div>
  );
}
