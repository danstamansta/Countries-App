import "./Input.css";

export default function Input({ value, onChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for a country..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}