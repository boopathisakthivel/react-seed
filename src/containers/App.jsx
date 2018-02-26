import React from 'react';

const App = () => {
  const appTitle = 'This is a seed for a React project';

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">{appTitle}</h1>
      </header>
      <div className="page">Insert the app content here.</div>
    </div>
  );
};

export default App;
