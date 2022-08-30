export const dateFormat = (dateStr: string, local: string) =>
  new Date(dateStr).toLocaleDateString(local);
