import Component2 from "../components/Component2";

export default function Component1() {
    console.log("Component(1) Rendered");
  return (
    <>
      Component 1
      <ul>
        <li><Component2 /></li>
      </ul>
    </>
  );
}