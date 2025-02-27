import Component1 from "./components/Component1";
import ComponentA from "./components/ComponentA";

export default function Home() {
  console.log("Rendering Home");
  return (
    <>
      <ul>
      <h2>We implemented state management using <i>Jotai</i> in <code>store.js</code></h2>

      <h3>
          This time, instead of using <code>createContext</code> and <code>useContext</code>, we used Jotai&apos;s <code>atom</code> to create a global state. <br /><br />

          The <code>countAtom</code> is an independent state, and any component using <code>useAtom(countAtom)</code> subscribes to its changes. <br /><br />

          - <b>Component3</b> reads <code>countAtom</code>, so it only updates when the count value changes. <br />
          - <b>ComponentC</b> updates <code>countAtom</code> using <code>setCount</code>, but now <b>only ComponentC re-renders</b> when the button is clicked. <br /><br />

          🔴 **Problem with Context API:** React Context caused <b>all consuming components</b> to re-render, even if they didn't need updates. <br />
          ✅ **Jotai&apos;s Solution:** With atoms, <b>only the components using `useAtom(countAtom)` re-render</b>, improving performance and preventing unnecessary updates.
      </h3>
<br /><br />

        <li><Component1 /><br /></li>
        <li><ComponentA /></li>
      </ul>
    </>
  )
}
