import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context';

export default function SearchBar() {
  const { setSearch } = useContext(MyContext);
  const { checked, setChecked } = useContext(MyContext);
  let history = useHistory();

  function handleRoute() {
    history.push('/addmovie');
  }

  return (
    <div className="text-center">
      <button className="header-item btn btn-info" onClick={handleRoute}>Add Movie</button>
      <input type="text" className="header-item" placeholder="search for name" onChange={(e) => setSearch(e.target.value)} />
      <input type="checkbox" className="header-item" checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
      <label className="header-item">Favorites</label>
    </div>
  )
}
