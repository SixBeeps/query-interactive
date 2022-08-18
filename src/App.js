import React from 'react';
import './App.css';
import QueryDisplay from './components/QueryDisplay';
import QueryButton from './components/QueryButton';
import { Tokens, generateRandomQuery } from './helpers/QueryData';
import AudioManager from './components/AudioManager';
import InsanityButton from './components/InsanityButton';

// Keep a query queued to be pushed to the query state
// This needs to be done because the query state is updated asynchronously
let queuedQuery = generateRandomQuery(false);

const regularTheme = {
  backgroundColor: 'white',
  filter: 'invert(0)'
}

const insanityTheme = {
  backgroundColor: 'white',
  filter: 'invert(1)'
}

export default function App() {
  const [query, setQuery] = React.useState(generateRandomQuery());
  const [queryDisplay, setQueryDisplay] = React.useState([]);
  const [audioManager, setAudioManager] = React.useState(null);
  const [insaneMode, setInsaneMode] = React.useState(false);

  return (
    <>
      <div className="width-overlay">
        <h2>Screen too small</h2>
        <p>Please use a display with a width greater than 700px</p>
      </div>
      <div className="App" style={insaneMode ? insanityTheme : regularTheme}>
        <QueryDisplay query={query} ref={me => setQueryDisplay(me)}/>
        <InsanityButton onClick={() => {
          setInsaneMode(true);
          audioManager.play("insane");
          queuedQuery = generateRandomQuery(true);
        }}/>
        <QueryButton onClick={() => {
          switch(queuedQuery[queuedQuery.length - 1]) {
            case Tokens.Yes:
              audioManager.play("good");
              break;
            case Tokens.No:
              audioManager.play("bad");
              break;
            case Tokens.Question:
              audioManager.play("question");
              break;
          }

          setQuery(queuedQuery);
          queuedQuery = generateRandomQuery(insaneMode);
          queryDisplay.animate();
        }} />
        <AudioManager ref={me => setAudioManager(me)}/>
      </div>
    </>
  );
}
