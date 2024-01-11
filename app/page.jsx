import CategoryBar from "./components/CategoryBar";
import DisplayVideo from "./components/DisplayVideo";
import TestingForm from "./components/TestingForm";

export default function Home() {
  return (
    <div className="container">
      <hr />
      <div>
        <CategoryBar />
        <TestingForm />
        <DisplayVideo />
      </div>
    </div>
  );
}
