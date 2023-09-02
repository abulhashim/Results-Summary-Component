import ReactionIcon from "./assets/images/icon-reaction.svg";
import MemoryIcon from "./assets/images/icon-memory.svg";
import VerbalIcon from "./assets/images/icon-verbal.svg";
import VisualIcon from "./assets/images/icon-visual.svg";

const data = [
  {
    category: "Reaction",
    score: 80,
    icon: ReactionIcon,
    id: 1,
    colors: {
      bgColor: "bg-LightRed",
      textColor: "text-LightRed",
    },
  },
  {
    category: "Memory",
    score: 92,
    icon: MemoryIcon,
    id: 2,
    colors: {
      bgColor: "bg-OrangeyYellow",
      textColor: "text-OrangeyYellow",
    },
  },
  {
    category: "Verbal",
    score: 61,
    icon: VerbalIcon,
    id: 3,
    colors: {
      bgColor: "bg-GreenTeal",
      textColor: "text-GreenTeal",
    },
  },
  {
    category: "Visual",
    score: 72,
    icon: VisualIcon,
    id: 4,
    colors: {
      bgColor: "bg-CobaltBlue",
      textColor: "text-CobaltBlue",
    },
  },
];

export default data;
