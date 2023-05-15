/* eslint-disable react/prop-types */
function GifItem({ title, url }) {
  return (
    <div className='card'>
      <p>{title}</p>
      <img src={url} alt='gif-img' />
    </div>
  );
}

export default GifItem;
