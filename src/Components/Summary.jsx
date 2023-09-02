import Scores from "./Scores";

function Summary() {
  return (
    <div className="basis-1/2 p-7 md:p-10">
      <h3 className="mb-3 text-xl font-bold text-DarkGrayBlue md:mb-5 md:text-2xl">
        Summary
      </h3>
      <Scores />
      <button className="mt-6 inline-block w-full cursor-pointer rounded-full bg-DarkGrayBlue py-4 font-medium text-white hover:bg-result md:mt-8">
        Continue
      </button>
    </div>
  );
}

export default Summary;
