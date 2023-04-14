const Card = ({ movie }) => {
  const { title, poster, id, rating, genres, director } = movie;
  return (
    <div
      key={id}
      className="relative flex flex-col bg-gradient-to-br from-blue-500 to-purple-600 border border-gray-500 rounded-lg p-4 cursor-pointer 
      backface-hidden transform-gpu transition-transform ease-out duration-200 hover:scale-105"
    >
      <img src={poster} alt="movie poster" className="rounded-md mb-2" />
      <h2 className="text-base text-white mb-1">{title}</h2>
      <p className="text-sm text-white font-bold mb-1">
        Directed by: {director}
      </p>
      <p className="text-xs text-white mb-1">Genres: {genres.join(", ")}</p>
      <div className="absolute top-0 right-0 bg-blue-900 text-white rounded-bl-md px-2 py-1 text-xs">
        Rating: {rating}
      </div>
    </div>
  );
};

export default Card;
