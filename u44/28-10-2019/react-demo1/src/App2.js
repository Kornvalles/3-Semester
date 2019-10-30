import React from "react";
import person, { males, females } from "./file2";

const [...names] = males;
const [...fnames] = females;
const { firstName } = person;
names.push(firstName);
fnames.unshift("Helle");
fnames.push("Tina");

console.log(names.concat(fnames));

export default function App2() {
  return (
    <div>
      <h3>Add code here...</h3>
      <p></p>
    </div>
  );
}
