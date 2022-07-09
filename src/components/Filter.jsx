import './Filter.css';

export default function Filter({ filter, setFilter }) {
  return (
    <label className='filter-label'>
      Filter:
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className='filter-input'
      />
    </label>
  );
}
