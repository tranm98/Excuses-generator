import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  /// console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronoun = ["A(n)", "The"];
  let subject = [
    "performer",
    "gymnast",
    "dog",
    "clown",
    "electrician",
    "plumber"
  ];
  let action = ["took", "threw", "shocked", "stole", "bit"];
  let where = ["on the road", "at school", "at the store", "at work"];
  let possetion = ["my food", "my homework", "my car", "my cat", "my phone"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let whereIndex = Math.floor(Math.random() * where.length);
  let posIndex = Math.floor(Math.random() * possetion.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    action[actIndex] +
    " " +
    possetion[posIndex] +
    " " +
    where[whereIndex]
  );
};
