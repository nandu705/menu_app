export default function CategoryFilter({ categories, selected, setSelected }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Filter By Category:</h3>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      >
        <option value="All">All</option>

        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
