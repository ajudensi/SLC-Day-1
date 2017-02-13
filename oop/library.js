function Car(manufacturerName, model, color, speed) {
  if (!(this instanceof Car)) {
    return new Car(manufacturerName, model, color, speed);
  }

  this.manufacturerName = manufacturerName || 'unknown';
  this.model = model || 'unknown';
  this.color = color || 'white';
  this.speed = speed || 'unknown';

  Object.defineProperties(this, {
    powerSource: {
      get() {
        return this.manufacturerName.toLowerCase() === 'tesla' ? 'electricity' : 'gas';
      },
    },
    carType: {
      get() {
        return this.constructor.name;
      },
    },
    numberOfDoors: {
      get() {
        return (this.carType.toLowerCase() === 'sportcar') ? 2 : 4;
      },
    },
  });

  this.carDescription = function () {
    return 'The ' + this.color + ' colored ' + this.manufacturerName + ' ' + this.model + ', runs ' + this.speed + ' mph and it uses ' + this.powerSource;
  };

  this.accelerate = function (drivingSpeed) {
    value = drivingSpeed || this.speed;
    if (value <= 100) {
      return 'Driving like a snail.';
    } else if (value > 100 && value <= 400) {
      return 'You seem to be in a hurry. Stay focused';
    } else if (this.numberOfDoors === 2) {
      return 'It\'s a sport car, but you don\'t have to crash';
    }
    return 'Can\'t run that fast. Get a sport car instead';
  };
}


function SportCar(manufacturerName, model, color, speed) {
  if (!(this instanceof SportCar)) {
    return new SportCar(manufacturerName, model, color, speed);
  }

  this.manufacturerName = manufacturerName || this.manufacturerName;
  this.model = model || this.model;
  this.color = color || this.color;
  this.speed = speed || this.speed;

  SportCar.prototype.carDescription = function () {
    return 'A ' + this.color + ' ' + this.manufacturerName + ' ' + this.model + '. It can go ' + this.speed + 'mph and it uses ' + this.powerSource + '. Its definitely a sport car with ' + this.numberOfDoors + ' doors';
  };
}

function SUV(manufacturerName, model, color, speed) {
  if (!(this instanceof SUV)) {
    return new SUV(manufacturerName, model, color, speed);
  }
  const numOfSeats = 8;
  this.manufacturerName = manufacturerName || this.manufacturerName;
  this.model = model || this.model;
  this.color = color || this.color;
  this.speed = speed || this.speed;

  SUV.prototype.carDescription = function () {
    return this.manufacturerName + ' ' + this.model + ' with ' + numOfSeats + ' seats and ' + this.numberOfDoors + ' doors';
  };
}


SportCar.prototype = new Car();
SportCar.prototype.constructor = SportCar;

SUV.prototype = new Car();
SUV.prototype.constructor = SUV;

exports.Car = Car;
exports.SportCar = SportCar;
exports.SUV = SUV;
