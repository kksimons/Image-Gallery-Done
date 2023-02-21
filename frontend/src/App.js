import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

// final setword clears and returns the default value after pressing the button
const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  console.log(images); //can't be in the function because it'll update asynchronously and be a term behind

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]); //creates brand new array of images, pass new array to setImages function, adds a title to it (which is the searched term)
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  };

// uses each pics unique ID to then update and remove from array
// compare ID with supplied id and if it is not a match, then the image is kept in the array. Otherwise, False and removed.
// does not mutate the array so can be safely used
const handleDeleteImage = (id) => {
  setImages(images.filter((image) => image.id !== id));
};

//!! converts the length to a boolean value to avoid showing a number on the page
// map loops through previous array, modifies it to return a new array of ImageCards
// each rendering of image needs its own unique key prop
// mt-4 assigns the margin
// pb-3 gives padding between containers
// xs, md, lg makes it reactive to screen size
  return (
    <div>
      <Header title="Image Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className='mt-4'>
        <Row xs={1} md={2} lg={3}>
      {images.map((image, i) => (
        <Col key={i} className="pb-3">
        <ImageCard image={image} deleteImage={handleDeleteImage} />
        </Col>
        ))}
        </Row>
      </Container>
     </div>
  );
};

export default App;
