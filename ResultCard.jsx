export default function ResultCard({ result }) {
  return (
    <div className={`card ${result}`}>
      <h2>Status: {result}</h2>
    </div>
  );
}
