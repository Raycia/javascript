// index.js
import Animal from "./Animal.js";
import Cachorro from "./Cachorro.js";

const animal = new Animal("Animal");
animal.falar(); // Animal fala
animal.comer(); // Animal come
animal.dormir(); // Animal dorme

const cachorro = new Cachorro("Cachorro");
cachorro.falar(); // Cachorro fala au au au
cachorro.comer(); // Cachorro come ração
cachorro.dormir(); // Cachorro dorme
