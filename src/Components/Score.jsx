// eslint-disable-next-line react/prop-types
function Score({ category, score, icon, colors: { textColor, bgColor } }) {
  return (
    <div
      className={`mt-4 flex w-full items-center rounded-md bg-opacity-5 px-4 py-3 md:py-4 ${bgColor}`}
    >
      <img src={icon} alt={`${category} icon`} />
      <h4 className={`ml-2 mr-auto font-bold ${textColor}`}>{category}</h4>
      <p className="text-gray-400">
        <span className="font-bold text-DarkGrayBlue">{score}</span> / 100
      </p>
    </div>
  );
}

export default Score;
