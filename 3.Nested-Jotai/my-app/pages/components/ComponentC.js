export default function ComponentC(props) {

    console.log("Component(C) Rendered");
    return (
        <>
            <button onClick={e => {console.log("Clicked")}}>Increase Value</button>
        </>
    );
}