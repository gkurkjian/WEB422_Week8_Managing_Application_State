export default function ComponentC(props) {

    console.log("Component(C) Rendered");
    return (
        <>
            <button onClick={(e) => {
                //console.log("Clicked");
                props.setCount(count => count + 1);
            }}>
                Increase Value
            </button>
        </>
    );
}