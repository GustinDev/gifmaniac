/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
//URLwAPIKEY: api.giphy.com/v1/gifs/search?api_key=FvHPqiYVzSVDFlxXHo23uXSkhu5komSz&q=

import GifItem from './GifItem';
import { useFetch } from '../hooks/useFetch';

function GifGrid({ category }) {
  const { images, isLoading } = useFetch(category);

  console.log(images);

  return (
    <div>
      <h1>{category}</h1>
      <ol>
        {/* //Podemos hacer destucturing, para no usar images.todo */}
        {isLoading == true ? (
          <h1>Cargando..</h1>
        ) : (
          images.map(({ id, title, url }) => (
            <GifItem key={id} title={title} url={url} />
          ))
        )}
      </ol>
    </div>
  );
}

export default GifGrid;
