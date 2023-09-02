import Result from "./Components/Result";
import Summary from "./Components/Summary";

function App() {
  return (
    <main>
      <article>
        <div className="overflow-hidden bg-white text-[18px] md:flex md:min-h-[32rem] md:max-w-[46.25rem] md:rounded-[2rem] md:shadow-2xl md:shadow-indigo-200">
          <Result />
          <Summary />
        </div>
      </article>
    </main>
  );
}

export default App;
