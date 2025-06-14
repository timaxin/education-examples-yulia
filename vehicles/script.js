// Базовый класс
class Vehicle {
    constructor(brand, wheels) {
      this.brand = brand;
      this.wheels = wheels;
    }
  
    getInfo() {
      return `Марка: ${this.brand}, Колёс: ${this.wheels}`;
    }
  }
  
  // Класс Машина
  class Car extends Vehicle {
    constructor(brand, wheels) {
      super(brand, wheels);
    }
  
    getInfo() {
      return `🚗 Машина — ${super.getInfo()}`;
    }
  }
  
  // Класс Грузовик
  class Truck extends Vehicle {
    constructor(brand, wheels, capacity) {
      super(brand, wheels);
      this.capacity = capacity;
    }
  
    getInfo() {
      return `🚚 Грузовик — ${super.getInfo()}, Грузоподъёмность: ${this.capacity}т`;
    }
  }
  
  // Работа с формой
  document.getElementById('vehicleForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const type = document.getElementById('type').value;
    const brand = document.getElementById('brand').value;
    const wheels = parseInt(document.getElementById('wheels').value);
    const capacity = parseFloat(document.getElementById('capacity').value);
  
    let vehicle;
  
    if (type === 'car') {
      vehicle = new Car(brand, wheels);
    } else {
      vehicle = new Truck(brand, wheels, capacity);
    }
  
    displayVehicle(vehicle);
  });
  
  function displayVehicle(vehicle) {
    const output = document.getElementById('output');
    const div = document.createElement('div');
    div.className = 'vehicle-card';
    div.textContent = vehicle.getInfo();
    output.appendChild(div);
  }
  