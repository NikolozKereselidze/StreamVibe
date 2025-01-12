type DoubleTitleProps = {
  heading: string;
  desc: string;
};

const DoubleTitle = ({ heading, desc }: DoubleTitleProps) => {
  return (
    <div className="sectionTitle">
      <h2>{heading}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default DoubleTitle;
