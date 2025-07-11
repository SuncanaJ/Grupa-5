function Imena(props) {
  return <li>Imena{ props.brand }</li>;
}

function Imena() {
  const name = ['Suncana', 'Marija', 'Niko', 'Marko', 'Daniel', 'Lana', 'Janko', 'Mia', 'Valentina', 'Ana'];
  return (
    <>
      <h1>Liste imena</h1>
      <ul>
        {imena.map((name) => <Lista={name} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<null />);