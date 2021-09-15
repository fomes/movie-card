import React, { useState }  from 'react';

export default function AddMovie() {
  const movies = JSON.parse(localStorage.getItem('movies'));

  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [story, setStory] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState('');

  const handleAddMovie = () => {
    const newMovie = {
      'title': title,
      'subtitle': subTitle,
      'storyline': story,
      'rating': rating,
      'imagePath': image,
    }
    
    if (newMovie.title === '') {
      alert('Preencha o título do filme!');
    } else {
      movies.push(newMovie);
      localStorage.removeItem('movies');
      localStorage.setItem('movies', JSON.stringify(movies));
      alert('Filme adicionado com sucesso!');
    }
  }

  return (
    <div>
      <h1>Add New Movie</h1>

      <div>
        <input type="text" placeholder="title" onChange={e => setTitle(e.target.value)}/>
      </div>

      <div>
        <input type="text" placeholder="subtitle" onChange={e => setSubTitle(e.target.value)}/>
      </div>

      <div>
        <textarea placeholder="sinpse" onChange={e => setStory(e.target.value)}></textarea>
      </div>

      <div>
        <input type="number" placeholder="rating" onChange={e => setRating(e.target.value)}/>
      </div>

      <div>
        <input type="text" placeholder="url image" onChange={e => setImage(e.target.value)}/>
      </div>

      <div>
        <button onClick={handleAddMovie}>Adicionar</button>
      </div>

    </div>
  )
}
