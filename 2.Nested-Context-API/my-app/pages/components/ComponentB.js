import ComponentC from "./ComponentC";
export default function ComponentB(props) {

    console.log("Component(B) Rendered");
    return (
        <>
            <ComponentC setCount={props.setCount}/>
        </>
    );
}