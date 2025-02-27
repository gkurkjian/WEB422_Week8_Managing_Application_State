import Component3 from "./Component3";

export default function Component2(){
    console.log("Component(2) Rendered");

  return (
    <>
      Component 2
      <ul>
        <li><Component3 /></li>
      </ul>
    </>
  );
}