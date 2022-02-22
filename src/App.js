import react from 'react';
import Calculator from './components/Calculator';

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>

    );
  }
}

export default App;
