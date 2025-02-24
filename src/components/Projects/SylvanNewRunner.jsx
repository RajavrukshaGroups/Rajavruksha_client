import "./SylvanNewRunner.css";
const SylvanNewRunner = () => {
  const points = [
    "Located Near State Highway-09",
    "25-Minute Drive From KIAL",
    "6 KM From Shri Ghati Subrahmanya Temple",
    "KHIR City is only 15 Minutes Away",
  ];
  return (
    <div className="sylvan-runner-wrapper">
      <div className="sylvan-runner-track">
        <div className="sylvan-runner-content">
          {points.map((point, index) => (
            <span key={index} className="sylvan-runner-point">
              {point} •
            </span>
          ))}
        </div>
        <div className="sylvan-runner-content">
          {points.map((point, index) => (
            <span key={index} className="sylvan-runner-point">
              {point} •
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SylvanNewRunner;
