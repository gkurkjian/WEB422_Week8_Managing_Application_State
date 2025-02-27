import ComponentB from "../components/ComponentB";

export default function ComponentA(){
  console.log("Component(A) Rendered");

  return (
    <>
      Component A
      <ul>
        <li><ComponentB /></li>
      </ul>
    </>
  );
}