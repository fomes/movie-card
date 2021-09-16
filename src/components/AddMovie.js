import React, { useState, } from 'react';
import { useHistory } from 'react-router';

export default function AddMovie() {
  const movies = JSON.parse(localStorage.getItem('movies'));
  let history = useHistory();

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
      window.location.reload();
    }

  }
  
  const handleBack = () => {
    history.push('/');
  }

  return (
    <div className="container">
      <div className="main">
        <div className="main-center">

          <h4>Novo Filme</h4>
          <form className="" method="post" action="#">

            <div className="form-group">
              <label for="title">Movie Name</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id="title"
                  placeholder="Enter movie name"
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label for="subtitle">Subtitle</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="subtitle"
                  id="subtitle"
                  placeholder="Enter movie subtitle"
                  onChange={e => setSubTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label for="sinopse">Sinopse</label>
              <div className="input-group">
                <textarea
                  type="text"
                  className="form-control"
                  name="sinopse"
                  id="sinopse"
                  placeholder="Enter movie sinopse"
                  onChange={e => setStory(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label for="rating">Rating</label>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  name="rating"
                  id="rating"
                  placeholder="Enter movie rating"
                  onChange={e => setRating(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label for="image">URL Front Cover</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  id="image"
                  placeholder="Enter movie front cover"
                  onChange={e => setImage(e.target.value)}
                />
              </div>
            </div>

            <button
              type="button"
              className="btn btn-dark"
              onClick={handleAddMovie}>
              Adicionar
            </button>

            <button
              type="button"
              className="btn btn-dark"
              onClick={handleBack}>
              Voltar
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}
