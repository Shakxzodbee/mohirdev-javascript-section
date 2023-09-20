function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  const givenYear = 2023; 
  
  const isLeap = isLeapYear(givenYear);
  console.log(isLeap);