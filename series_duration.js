const seriesDurations = [
  {
    title: "Big Boss",
    days: 7,
    hours: 2,
    minutes: 0,
  },
  {
    title: "The Kapil Sharma Show",
    days: 4,
    hours: 14,
    minutes: 0,
  },
  {
    title: "KBC",
    days: 8,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText() {
  const totalLifespanHours = 80 * 365 * 24;

  const show1 = seriesDurations[0];
  const show1Hours = show1.days * 24 + show1.hours + show1.minutes / 60;
  const show1Percentage = (show1Hours / totalLifespanHours) * 100;
  console.log(show1Percentage);

  const show2 = seriesDurations[1];
  const show2Hours = show2.days * 24 + show2.hours + show2.minutes / 60;
  const show2Percentage = (show2Hours / totalLifespanHours) * 100;
  console.log(show2Percentage);

  const show3 = seriesDurations[2];
  const show3Hours = show3.days * 24 + show3.hours + show3.minutes / 60;
  const show3Percentage = (show3Hours / totalLifespanHours) * 100;
  console.log(show3Percentage);

  const totalHoursAllSeries = show1Hours + show2Hours + show3Hours;

  const totalPercentage = (totalHoursAllSeries / totalLifespanHours) * 100;
  console.log(
    "In total that is " + totalPercentage.toFixed(3) + "% of my life",
  );

  const finalHours = Math.floor(totalHoursAllSeries);
  const finalMinutes = Math.round((totalHoursAllSeries - finalHours) * 60);
  console.log(
    "That is a total of " +
      finalHours +
      " hours and " +
      finalMinutes +
      " minutes.",
  );
}
logOutSeriesText();
