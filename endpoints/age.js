const grabAge = function () {
  const dateOfBirth = new Date("1996-07-14 00:00:00");
  const ageDifference = Date.now() - dateOfBirth.getTime();
  const ageDate = new Date(ageDifference);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
module.exports = grabAge;
