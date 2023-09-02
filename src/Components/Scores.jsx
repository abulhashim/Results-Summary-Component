import data from "../data";
import Score from "./Score";

function Scores() {
  const scoresData = data;

  return (
    <>
      {scoresData.map(({ category, score, icon, colors, id }) => {
        return (
          <Score
            category={category}
            score={score}
            icon={icon}
            key={id}
            colors={colors}
          />
        );
      })}
    </>
  );
}

export default Scores;
