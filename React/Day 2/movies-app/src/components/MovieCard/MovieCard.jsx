// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard({movie}) {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img width={300} height={200} style={{objectFit: "cover", objectPosition: "center"}} variant="top" src={movie.Images[0]}/>
      <Card.Body className='d-flex flex-column'>
        <Card.Title >{movie.Title}</Card.Title>
        <Card.Text style={{fontSize: "12px"}}>{movie.Plot}</Card.Text>
        <a className='btn btn-primary mt-auto' target='_blank' rel="noreferrer" href={`https://m.imdb.com/title/${movie.imdbID}/`}>Visit Page</a>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;