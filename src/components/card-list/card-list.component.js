import { Component } from "react";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const movies = this.props.movies;
    return (
      <div className="card-list w-11/12 mx-auto grid grid-cols-4 gap-5">
        {movies.map((movie) => {
          return <Card movie={movie} />;
        })}
      </div>
    );
  }
}

export default CardList;
