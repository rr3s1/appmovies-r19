import './App.css';

/* 
 VIDEO TUTORIAL FINAL CODE */


import './App.css'
const Card = () => {
  
  return (
    <div >
      <h2>{title}</h2>
    </div>
  )
}
const App = () => {
  return (
    <div> 
    <h2>Functional Arrow Component</h2>
    <Card title="Star Wars" rating={5} isCool={true} actors={[{name: 'Actors'}]}/>
    <Card title="Avatar"/>
    <Card title="The Lion King"/>
    </div>
  )}
  
  export default App; 


/* EXPANDED CODE

const Card = ({ title, rating, isCool, actors }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      {rating && <p>⭐ {rating}/5</p>}
      {isCool && <p className="highlight">Featured Film</p>}
      {actors && (
        <div>
          <h4>Cast:</h4>
          <ul>
            {actors.map((actor, index) => (
              <li key={index}>{actor.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>🎬 Film Database</h1>
      <Card 
        title="Star Wars" 
        rating={5} 
        isCool={true} 
        actors={[{ name: "Mark Hamill" }, { name: "Carrie Fisher" }]}
      />
      <Card 
        title="Avatar" 
        rating={4} 
        actors={[{ name: "Zoe Saldana" }, { name: "Sam Worthington" }]}
      />
      <Card title="The Lion King" />
    </div>
  );
};

export default App;

 */

