import firebase from "../firebase-config.js";

const db = firebase.ref("/");

const getAll = () => {
  //vraca json
  return db;
};

const kreiraj = (podatak) => {
  //ubacuje novi obj u niz
  return db.push(podatak);
};

const azuriraj = (key, podatak) => {
  //nalazi poziciju deteta u nizu i azurira
  return db.child(key).update(podatak);
};

const brisi = (key, podatak) => {
  //nalazi poziciju deteta u nizu i brise
  return db.child(key).remove(podatak);
};

const brisiSve = () => {
  //remove ceo db
  return db.remove();
};

export default {
  getAll,
  kreiraj,
  azuriraj,
  brisi,
  brisiSve,
};
