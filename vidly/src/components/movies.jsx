import React, { Component } from "react"; //imrc
import { getMovies } from "../services/fakeMovieService";

import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

//cc
class Movies extends Component {
  state = {
    movies: getMovies(), // bu yöntem çok da doğru değil ama hızlı başlangıç için ilk başta böyle yapıldı
    currentPage: 1,
    pageSize: 4,
  };

  // arrow function syntax'i kullanıldı. (this ifadesini constructor içinde bind etmeye gerek olmasın diye)
  handleDelete = (movie) => {
    // //console.log(movie); // silinen movie'yi consola bas
    // const updatedMovies = this.state.movies.filter((m) => m._id !== movie._id);
    // this.setState({ movies: updatedMovies }); // this ile erişildiği için direkt "movies" property'si güncellenebilir.

    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    // modern JavaScript'te değiştirilen değer ile yerine koyulacak değerlerin isimleri aynı ise kod
    // yukarıdaki gibi yazılabilir.
  };

  handleLike = (movie) => {
    //console.log(movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);

    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };

  handlePageChange = (pageNumber) => {
    //console.log(pageNumber);
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { length: count } = this.state.movies;
    const { currentPage, pageSize, movies: allMovies } = this.state;

    if (count === 0) return <p>There no movies in the database!</p>;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      // kursta bu div yoktu. Derleyene kadar hata da göstermiyordu. Yeni sürümlerde yazarken hata gösteriyor.
      // hata nedeni jsx'de her zaman tek element return edilebilir. Eğer birden fazla element return edilecek
      // ise bunu react'ın anlaması için return edilecek elementlerin ya div ya da React.Fragment içine
      // koyulması lazım. (parent lazım)
      <div>
        <p>
          Showing <b>{count}</b> movies in the database
        </p>
        {/* table.table>thead>tr>th*4 yazıp enter'a basınca template otomatik olarak çıkıyor. (Zen coding) */}
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stok</th>
              <th>Rate</th>
              <th>Like</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td className="font-weight-bold">{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  {/* 
                    button.btn.btn-danger.btn-sm yazıp tab'a basınca aşağıdaki template çıkıyor 
                    bir metoda parametre geçebilmek için () => this.method(param) şeklinde yazmak gerekiyor.
                    parametre almayan bir metot ise ASLA this.method() olarak yazmıyoruz this.method olarak yazıyoruz.
                */}
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm font-weight-bold"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Movies;
