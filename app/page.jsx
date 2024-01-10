import TestingForm from "./components/TestingForm";

export default function Home() {
  const test = "coucou";
  return (
    <div>
      {test}
      <p>coucou c'est clem</p>
      <hr />
      <div>
        <TestingForm />
      </div>
    </div>
  );
}
