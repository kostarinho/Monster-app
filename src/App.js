
import './App.css';
import React , {Component} from 'react';
import {CardList} from './components/card-list/card-list.jsx'
import {Searchbox} from './components/searchbox/searchbox.jsx'

class App extends Component {
constructor(){
  super();

  this.state = {
    monsters : [],
    searchField: ' '
};

//εδω στον constructor μπορω να κανω bind οποιαδηποτε function θελω και να του παρασω οποιοδηποτε state αρκει να το ορισω
//σε διαφορετικη περιπτωση θα εβγαζε error εαν δεν ηταν μεσα στο render οπως για παραδειγμα με το this.handechange 
//θα μας εβγαζε undefined το this εαν δεν ειχε δηλωθει εδω το bind.
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(Response =>Response.json()) 
  .then(users =>this.setState({monsters:users}));
}

// Αντι να γραψουμε στον constructor και να κανουμε bind το handle change επιλεγουμαι να κανουμε την method μας
// ιση με τα args και να βαλουμε το βελακι.Αυτο μας προσφερει εξοικομηση χρονου και ειναι πρακτικα το ιδιο
//ουσιαστικα δειχνει μεσα στο context που καθοριζεται οπου ειναι το app component
handleChanged =(e) => {
  this.setState({ searchField: e.target.value})
}


render() {
  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    ) 
  return (
    <div className='App'> 
    <Searchbox
    placeholder ='Search Monsters'
    handleChanged={this.handleChanged}
    >
    </Searchbox>
    <CardList monsters={filteredMonsters}>
    {
      this.state.monsters.map(monster => (
        <h1 key= {monster.id}> { monster.name}</h1>
        ))}
    </CardList>

</div>                            
  );
}
}
 export default App;
