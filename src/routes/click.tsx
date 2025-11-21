import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/click" as any)({
  component: MyPage,
});

const wan = {};

const ongsa = {};

export function MyButton({ name }: { name: string }) {
  console.log(`MyButton render: ${name}`);
  const [count, setCount] = useState(0);

  function handleClick() {
    // alert('You clicked me!');
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>click me for {count} times</button>
    </div>
  );
}

export default function MyPage() {
  console.log('MyPage render');
  return (
    <div>
      <p>wan</p>
      <MyButton name="wan" />
      <p>ongsa</p>
      <MyButton name="ongsa" />
      <p>shasha</p>
      <MyButton name="shasha" />
    </div>
  );
}
