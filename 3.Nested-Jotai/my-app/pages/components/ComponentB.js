import ComponentC from "./ComponentC";

export default function ComponentB(){
  console.log("Component(B) Rendered");
  return (
    <>
      Component B
      <ul>
        <li><ComponentC /></li>
      </ul>
    </>
  );
}