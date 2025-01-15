import { PlayIcon } from "@heroicons/react/24/outline";

interface PlayButtonProps {
  title: string;
  onClick?: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ title, onClick }) => {
  return (
    <div className="welcomeButton">
      <button onClick={onClick}>
        <PlayIcon />
        {title}
      </button>
    </div>
  );
};

export default PlayButton;
