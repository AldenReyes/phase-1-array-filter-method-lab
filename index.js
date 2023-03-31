findMatching = (driversArray, driversString) => {
  const matchedDrivers = driversArray.filter(drivers => {
    if (drivers.toLowerCase() === driversString.toLowerCase()) {
      return true
    } else {
      return false
}});
return matchedDrivers
}

fuzzyMatch = (driversArray, driversString) => {
  const matchedDrivers = driversArray.filter(drivers => {
    if (drivers.startsWith(driversString)){
      return true
    } else {
      return false
}});
return matchedDrivers 
}

matchName = (driversArray, driversName) => {
  const matchedDrivers = driversArray.filter(drivers => {
    if (driversName === drivers.name) {
      return true
    } else {
      return false
}});
return matchedDrivers  
}
