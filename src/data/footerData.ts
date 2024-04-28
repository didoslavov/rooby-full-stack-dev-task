export default function getFooterLinks(title: string) {
  const links = [
    {
      title: "Company",
      links: [
        { id: 1, link: "About" },
        { id: 2, link: "Pricing" },
        { id: 3, link: "Jobs" },
        { id: 4, link: "Blog" },
        { id: 5, link: "Careers" },
      ],
    },
    {
      title: "Product",
      links: [
        { id: 1, link: "Sales software" },
        { id: 2, link: "Features" },
        { id: 3, link: "Privacy" },
        { id: 4, link: "Marketplace" },
        { id: 5, link: "Status" },
        { id: 6, link: "API" },
      ],
    },
    {
      title: "Discover",
      links: [
        { id: 1, link: "Partner Program" },
        { id: 2, link: "Get our newsletter" },
        { id: 3, link: "Sales Pipeline" },
        { id: 4, link: "What is CRM" },
        { id: 5, link: "CRM Comparison" },
        { id: 6, link: "CarResourceseers" },
      ],
    },
    {
      title: "Help Center",
      links: [
        { id: 1, link: "Community" },
        { id: 2, link: "Knowledge Base" },
        { id: 3, link: "Academy" },
        { id: 4, link: "Support" },
      ],
    },
  ];

  return links.filter((l) => l.title.toLowerCase() === title.toLowerCase())[0];
}
