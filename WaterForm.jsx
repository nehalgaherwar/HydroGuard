import { useState } from "react";
import ResultCard from "./ResultCard";

export default function WaterForm() {
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const pH = parseFloat(e.target.ph.value);
    const tds = parseFloat(e.target.tds.value);

    if (pH > 6.5 && pH < 8.5 && tds < 500) {
      setResult("Safe");
    } else if (tds < 1000) {
      setResult("Moderate");
    } else {
      setResult("Dangerous");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input name="ph" placeholder="pH Level" required />
        <input name="tds" placeholder="TDS Level" required />
        <button type="submit">Analyze</button>
      </form>
      {result && <ResultCard result={result} />}
    </>
  );
}
