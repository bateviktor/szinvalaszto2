import { useState } from "react";
import SzinPanel from "./SzinPanel";

const colors = [
  { name: "Piros", rgb: "rgb(255, 0, 0)" },
  { name: "Zöld", rgb: "rgb(0, 128, 0)" },
  { name: "Kék", rgb: "rgb(0, 0, 255)" },
  { name: "Sárga", rgb: "rgb(255, 255, 0)" },
  { name: "Lila", rgb: "rgb(128, 0, 128)" },
];

function App() {
  const [selected, setSelected] = useState(null);

  const handleChange = (e) => {
    const found = colors.find((c) => c.name === e.target.value);
    setSelected(found || null);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Kedvenc szín választó</h1>
      <select onChange={handleChange} defaultValue="">
        <option value="">-- Válassz színt --</option>
        {colors.map((c) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
      {selected && <h2>{selected.name}</h2>}
      <SzinPanel color={selected} />
    </div>
  );
}

export default App;