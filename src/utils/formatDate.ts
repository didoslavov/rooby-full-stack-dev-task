export const formatDate = (date: string) =>
  ((str) => str.charAt(0).toUpperCase() + str.slice(1))(
    new Date(date)
      .toLocaleDateString("en", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(/\b\w/, (c) => c.toUpperCase())
      .replace(",", ""),
  );
