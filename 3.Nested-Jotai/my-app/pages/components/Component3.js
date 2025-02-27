import { useAtom } from 'jotai';
import { countAtom } from '@/store';

export default function Component3() {
  console.log("Component(3) Rendered");

  // const [count, setCount] = useAtom(countAtom);  // this is legit but, since we're using only [ count ], so no need for setCount. Look line below
  const [ count ] = useAtom(countAtom);
  return (
    <>
      Component 3<br />
      <strong>Value: {count} </strong>
    </>
  );
}