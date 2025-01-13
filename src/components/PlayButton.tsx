import { PlayIcon } from "@heroicons/react/24/outline";

const PlayButton = ({ title }: { title: string }) => (
  <div className="welcomeButton">
    <button>
      <PlayIcon />
      {title}
    </button>
  </div>
);

export default PlayButton;
