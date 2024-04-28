const API_KEY = process.env.EMBEDDED_MAPS_API_KEY;

function Map() {
  return (
    <iframe
      width="600"
      height="450"
      loading="lazy"
      src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Vasil+Levski+96,Plovdiv+Bulgaria`}
    ></iframe>
  );
}

export default Map;
