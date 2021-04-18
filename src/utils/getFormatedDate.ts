export const getFormatedDate = (): string[] => {
  const today = new Date();
  const tomorrow = new Date(today);
  const twoDaysLater = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  twoDaysLater.setDate(tomorrow.getDate() + 2);

  return [
    `${today.getFullYear()}/${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}/${String(today.getDate()).padStart(2, "0")}`,
    `${tomorrow.getFullYear()}/${String(tomorrow.getMonth() + 1).padStart(
      2,
      "0"
    )}/${String(tomorrow.getDate()).padStart(2, "0")}`,
    `${twoDaysLater.getFullYear()}/${String(
      twoDaysLater.getMonth() + 1
    ).padStart(2, "0")}/${String(twoDaysLater.getDate()).padStart(2, "0")}`,
  ];
};
