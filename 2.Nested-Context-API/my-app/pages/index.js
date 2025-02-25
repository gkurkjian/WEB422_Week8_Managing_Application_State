import Component1 from "./components/Component1";
import ComponentA from "./components/ComponentA";
export default function Home() {
  return (
    <>
      <h2>We implemented a hierarchical <i>count</i> & <i>setCount</i> in <code>pages/_app.js</code></h2>

<h3>
    In this approach, we used React&apos;s <code>createContext</code> and <code>useContext</code> to manage state globally. <br /><br />

    The <code>count</code> value is passed down through multiple nested components:<br />
    - <b>Component1 → Component2 → Component3</b> (using <code>CountContext</code> to read the value).<br />
    - <b>ComponentA → ComponentB → ComponentC</b> (using <code>SetCountContext</code> to update the state).<br /><br />

    Clicking the button inside <b>ComponentC</b> triggers <code>setCount</code>, updating the <code>count</code> state in <code>_app.js</code>. 
    Since React Context triggers a re-render for all components consuming the state, <b>every component that uses <code>count</code> is re-rendered</b> unnecessarily, 
    even if they don’t directly depend on the updated state. <br /><br />

    🔴 **Problem:** This approach causes <b>unnecessary re-renders</b> across all components whenever <code>setCount</code> is called. <br />
    ✅ **Solution:** In the next practice, we'll optimize this using <i>Jotai</i>, which allows us to update and re-render only the specific component that needs to change, without affecting others.
</h3>
<br /><br />

      <Component1 /><br />
      <ComponentA />
    </>
  );
}
