export const getUpdateDate = (date: string) => {
  const thisYear = new Date();

  const updateDate = new Date(date);

  const updateDay = updateDate.getDate();
  const updateMonth = updateDate.getMonth();
  const updateYear = updateDate.getFullYear();

  const showDate =
    updateYear < thisYear.getFullYear()
      ? `${updateDay}/${updateMonth + 1}/${updateYear}`
      : `${updateDay}/${updateMonth + 1}`;

  return showDate;
};
