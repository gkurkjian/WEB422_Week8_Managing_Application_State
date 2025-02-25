import Component1 from "./components/Component1";
import ComponentA from "./components/ComponentA";
export default function Home(props) {
  
  return (
    <>
    <h2>We implemented a hierarchical <i>count</i> & <i>setCount</i> in pages/_app.js</h2>
    <h3>
        The count value is passed through Component1, Component2, and Component3 using React.countContext, 
        and similarly from ComponentA to ComponentB and all the way to ComponentC with setCount. <br />
        Check _app.js for more details. <br />
        However, this approach causes all components to re-render on every click. <br />
        In the next practice, we&apos;ll optimize this using React&apos;s <i>useContext</i>.
    </h3> <br /><br />

      <Component1 count={props.count} /><br />
      <ComponentA setCount={props.setCount} />
    </>
  );
}
