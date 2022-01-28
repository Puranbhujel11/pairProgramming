let myCar = {
    make: "Audi",
    model: "A4",
    year: 2012,
    mileage: 138000,
    color: "Silver",
  
    driveToWork: () => {
        myCar.mileage += 33;
        console.log(`Old Mileage: 138000 | New Mileage: ${myCar.mileage}.`)
    },
    driveAroundTheWorld: () => {
        myCar.mileage += 24000;
        console.log(`Old Mileage: 138000 | New Mileage: ${myCar.mileage}.`)
    },
    runErrands: () => {
        myCar.mileage += 30;
        console.log(`Old Mileage: 138000 | New Mileage: ${myCar.mileage}.`)
    },
  }
  
  myCar.driveToWork();
  myCar.driveAroundTheWorld();
  myCar.runErrands();