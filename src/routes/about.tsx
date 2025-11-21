import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const milk = {
  firstName: "Pansa",
  familyName: "Vosbein",
  nativeName: "มิ้ลค์ พรรษา วอสเบียน",
  nationality: "Thai",
  gender: "Female",
  born: "July 31, 1996",
  age: 29,
  picture:
    "https://pbs.twimg.com/profile_images/1554759883698089985/HEx--Rpj_400x400.jpg",
};

function AboutPage() {
  return (
    <div>
      <h1>
        {milk.firstName} {milk.familyName}
      </h1>
      <p>{milk.nativeName}</p>
      <p>{milk.nationality}</p>
      <p>{milk.gender}</p>
      <p>{milk.born}</p>
      <p>{milk.age}</p>
      <img src={milk.picture} className="avatar" />
    </div>
  );
}
