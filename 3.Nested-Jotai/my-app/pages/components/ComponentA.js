import ComponentB from "./ComponentB";
export default function Component1(props) {

    console.log("Component(A) Rendered");
    return (
        <>
            <ComponentB />
        </>
    );
}