export default function getFooterLinks(title: string) {
  const links = [
    {
      title: "Company",
      links: ["About", "Pricing", "Jobs", "Blog", "Careers"],
    },
    {
      title: "Product",
      links: [
        "Sales software",
        "Features",
        "Privacy",
        "Marketplace",
        "Status",
        "API",
      ],
    },
    {
      title: "Discover",
      links: [
        "Partner Program",
        "Get our newsletter",
        "Sales Pipeline",
        "What is CRM",
        "CRM Comparison",
        "CarResourceseers",
      ],
    },
    {
      title: "Help Center",
      links: ["Community", "Knowledge Base", "Academy", "Support"],
    },
  ];

  return links.filter((l) => l.title.toLowerCase() === title.toLowerCase())[0];
}
