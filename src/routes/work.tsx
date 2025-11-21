import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  component: WorkPage,
});

const work = [
  { title: "鲸鱼杂货铺", ActorName: "Wan", role: "主角" },
  { title: "地球倾斜23.5度", ActorName: "Ongsa", role: "主角" },
  { title: "女孩规则", ActorName: "Shasha", role: "配角" },
];

const listItems = work.map((product) => (
  <li
    key={product.ActorName}
    style={{
      color: product.role === "主角" ? "blue" : "green",
    }}
  >
    {product.title}
    {/* 加上间隔 */}
    <span> | </span>
    {product.ActorName}
  </li>
));

function WorkPage() {
  return <ul>{listItems}</ul>;
}
