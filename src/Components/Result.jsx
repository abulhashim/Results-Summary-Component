function Result() {
  return (
    <div className="basis-1/2 rounded-bl-[2rem] rounded-br-[2rem] bg-result p-8 text-center text-LightLavender md:rounded-[2rem] md:px-14 md:py-10 ">
      <h1 className="text-xl font-medium md:text-2xl">Your Result</h1>
      <div className="mx-auto my-5 flex h-36 w-36 items-center justify-center rounded-full bg-scoreCircle md:my-8 md:h-[12.5rem] md:w-[12.5rem] ">
        <p>
          <span className="block text-5xl font-extrabold text-white md:text-7xl">
            76
          </span>
          of 100
        </p>
      </div>
      <div>
        <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
          Great
        </h2>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}

export default Result;
