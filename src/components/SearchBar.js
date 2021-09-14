import React, { useContext } from 'react';
import MyContext from '../context';

export default function SearchBar() {
  const { setSearch } = useContext(MyContext);
  const { checked, setChecked } = useContext(MyContext);

  return (
    <div className="text-center">
      <input type="text" className="header-item" id="searchText" onChange={(e) => setSearch(e.target.value)} />
      <input type="checkbox" className="header-item" id="bookmarkedOnly" checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
      <label className="header-item">Favoritos</label>
    </div>
  )
}
