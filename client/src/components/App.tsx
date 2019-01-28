import Axios from "axios";
import React, { Component } from 'react';
import './App.css';

interface ICitation {
  court: string
  page: number
  page2: number
  reporter: string
  reporter_full_name: string
  volume: number
  year: number
}

interface IAppState {
  citations: ICitation[];
  text: string;
}

class App extends Component<any, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = { citations: [], text: "Based on the precedent set in Doe v.  Acme, 100 F.2d 234 (1999)" };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <textarea
            value={this.state.text || ""}
            onChange={o => {
              const value = o.target.value;
              this.setState(current => ({ ...current, text: value }));
            }} />
          <button onClick={this.getCitations}>Get Citations</button>
          {JSON.stringify(this.state.citations)}
        </header>
      </div>
    );
  }

  private getCitations = async () => {
    try {
      const request =
        await Axios({
          method: "get",
          url: `/api/citations`,
          params: { text: this.state.text }
        });

      this.setState(current => ({ ...current, citations: request.data }));
    }
    catch (error) {
      this.setState(current => ({ ...current, citations: error.toString() }));
    }
  }
}

export default App;
