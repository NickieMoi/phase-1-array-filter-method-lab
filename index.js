// Code your solution here

function findMatching(driver, power) {
  return driver.filter(
    (theMatch) => theMatch.toLowerCase() === power.toLowerCase()
  );
}

function fuzzyMatch(driver, testString) {
  return driver.filter(
    (theMatch) => theMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}

function matchName(driver,  powerName) {
 return driver.filter((record) => record.name ===  powerName);
 }
