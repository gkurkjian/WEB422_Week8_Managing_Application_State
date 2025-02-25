import { useContext } from "react";
import { SetCountContext } from "../_app";

export default function ComponentC(props) {

    const setCount = useContext(SetCountContext);
    
    console.log("Component(C) Rendered.");
    
    return (
        <>
            <h5>This coming from Component(C)</h5>
            <button onClick={e => {
                setCount(count => count + 1)}
                }>
                    Increase Value
                </button>
        </>
    )
}