import "./Select.css";

export default function Select({ value, onChange }) {
  return (
    <select
      className="region-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option> 
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}