'use strict';

const jasmine = require('jasmine').expect;
const library = require('../OOP/library.js');

const Car = library.Car;
const SportCar = library.SportCar;
const SUV = library.SUV;

const car = new Car('Tesla', 'Model-S', 'red', 285);
const car2 = new Car('Hyundai', 'Elantra', 'blue', 200);
const sp = new SportCar('Mercedes-Benz', 'SL 500', 'white', 500);
const sp2 = new SportCar('Porsche', 'Cayman', 'blue', 700);
const suv = new SUV('Ford', 'Explorer', 'black', 400);
const suv2 = new SUV();

describe('Car Class: Create Cars, and describe them', function () {
  describe('Classes, objects, constructors, and inheritances are well implemented and defined', function () {
    it('Car class, Sport class, SUV class must be defined', function () {
      expect(typeof Car()).toBeDefined();
      expect(typeof SportCar()).toBeDefined();
      expect(typeof SUV()).toBeDefined();
    });

    it('cars should be constructed from their appropriate constructors', function () {
      expect(car.constructor).toEqual(Car);
      expect(sp.constructor).toEqual(SportCar);
      expect(suv.constructor).toEqual(SUV);
    });

    it('car should be a typeof `object`, and an instance of the `Car` class', function () {
      expect(typeof car).toEqual(typeof {});
      expect(car instanceof Car).toBeTruthy();
    });
  });

  describe('object properties and their values', function () {
    it('A sport car should have 2 doors, other cars should have 4 doors', function () {
      expect(car.numberOfDoors).toEqual(4);
      expect(sp.numberOfDoors).toEqual(2);
      expect(suv.numberOfDoors).toEqual(4);
    });

    it('If supplied, a car name should be a property of the car subclass not the super Car class', function () {
      expect(sp.manufacturerName).toBe('Mercedes-Benz');
      expect(sp.manufacturerName === car.manufacturerName).toBe(false);
    });

    it('A Car should have `gas` as power source except its manufacturerName is Tesla ', function () {
      expect(car.powerSource).toBe('electricity');
      expect(car2.powerSource).toBe('gas');
      expect(suv.powerSource === 'electricity').toBeFalsy();
    });

    it('A car should have a cartype property', function () {
      expect(car.carType).toBe('Car');
      expect(sp.carType).toBe('SportCar');
      expect(suv.carType).toBe('SUV');
    });

    it('All objects should be instanceof Car class', function () {
      expect(car instanceof Car).toBeTruthy();
      expect(sp instanceof Car).toBeTruthy();
      expect(suv instanceof Car).toBeTruthy();
    });

    it('All objects with instanceof Car, must not have any undefined attributes', function () {
      expect(car.manufacturerName).toBeDefined();
      expect(car.manufacturerName).toBe('Tesla');
      expect(car.model).toBe('Model-S');

      expect(suv2.color).toBeDefined();
      expect(suv2.color).toBe('white');
      expect(suv2.model).toBe('unknown');
    });

    it('An SUV car should return instanceof Car and SUV true', function () {
      expect(suv instanceof Car).toBeTruthy();
      expect(suv2 instanceof SUV).toBeTruthy();
    });
  });

  describe('car acceleration and acceleration message', function () {
    it('A car accelerating <= 100  car should return `Driving like a snail.`', function () {
      expect(car.accelerate(1)).toBe('Driving like a snail.');
      expect(sp.accelerate(50)).toBe('Driving like a snail.');
      expect(suv.accelerate(100)).toBe('Driving like a snail.');
    });

    it('A car accelerating  between 101 and 400 should return `You seem to be in a hurry. Stay focused.`', function () {
      expect(car.accelerate(101)).toBe('You seem to be in a hurry. Stay focused');
      expect(sp.accelerate(250)).toBe('You seem to be in a hurry. Stay focused');
      expect(suv.accelerate(400)).toBe('You seem to be in a hurry. Stay focused');
    });

    it('A sport car accelerating > 400 should return `It\'s a sport car, but you don\'t have to crash`', function () {
      expect(sp.accelerate(401)).toBe('It\'s a sport car, but you don\'t have to crash');
      expect(suv.accelerate(401)).not.toBe('It\'s a sport car, but you don\'t have to crash');
    });

    it('A car not sport accelerating > 400  should return `Can\'t run that fast. Get a sport car instead`', function () {
      expect(car.accelerate(401)).toBe('Can\'t run that fast. Get a sport car instead');
      expect(sp.accelerate(401)).not.toBe('Can\'t run that fast. Get a sport car instead');
    });

    it('A car should have appropriate description', function () {
      expect(car.carDescription()).toBe('The red colored Tesla Model-S, runs 285 mph and it uses electricity');
      expect(sp.carDescription()).toBe('A white Mercedes-Benz SL 500. It can go 500mph and it uses gas. Its definitely a sport car with 2 doors');
      expect(suv.carDescription()).toBe('Ford Explorer with 8 seats and 4 doors');
      expect(suv2.carDescription()).toBe('unknown unknown with 8 seats and 4 doors');
    });
  });
});
