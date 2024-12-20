import { notFound } from "next/navigation";

export default function () {
  if (true) {
    notFound();
  }

  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}
