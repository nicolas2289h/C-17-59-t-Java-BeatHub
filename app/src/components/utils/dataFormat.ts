export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);
};

export const formatDate = (date: string) => {
  const dateObject = new Date(date);

  const day = dateObject.getDate() + 1;
  const month = dateObject.getMonth() + 1; // Los meses van de 0 a 11, por eso se suma 1
  const year = dateObject.getFullYear();
  return `${day}-${month}-${year}`;
};
