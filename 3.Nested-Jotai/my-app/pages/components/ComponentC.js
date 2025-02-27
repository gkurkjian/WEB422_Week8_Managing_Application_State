import { useAtom } from 'jotai';
import { countAtom } from '@/store';

export default function ComponentC(){
  console.log("Component(C) Rendered");

  // const [count, setCount] = useAtom(countAtom);  // this is legit but, since we're using only [ setCount ], so no need for setCount. Look line below
  const [ setCount ] = useAtom(countAtom);

  return (
    <>
      Component C<br />
      <button onClick={e => setCount(count + 1) }>Increase Value</button>
    </>
  );
}