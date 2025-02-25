import { CountContext } from "../_app";  // we're using CountContext that we created in _app.js
import { useContext } from "react";  // in order to use CountContext in our module, we've to "useContext" from 'react'

export default function Component3(props) {
    console.log("Component(3) Rendered");

    const count = useContext(CountContext);  // we set out count like th following: count = useContext(CountContext);
    return (
        <>
        <h3>This is coming from Component(3)</h3>
            Value: {count}
        </>
    );
}