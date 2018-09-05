// Code your solution in this file.
function lowerCaseDrivers(aray){
return  aray.map(function(drivers){
 return drivers.toLowerCase();
})
}
function nameToAttributes (aray) {
  return aray.map(function (drivers) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}