import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/allclick" as any)({
  component: AllclickPage,
});


export function MyButton({ name, count, handleClick }: { name: string, count: number, handleClick: () => void }) {
  console.log(`MyButton render: ${name}`);

  return (
    <div>
      <button onClick={handleClick}>click me for {count} times</button>
    </div>
  );
}

export default function AllclickPage() {
  console.log('AllclickPage render');
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>wan</p>
      <MyButton name="wan"  count={count} handleClick={handleClick} />
      <p>ongsa</p>
      <MyButton name="ongsa" count={count} handleClick={handleClick} />
      <p>shasha</p>
      <MyButton name="shasha" count={count} handleClick={handleClick} />
    </div>
  );
}
