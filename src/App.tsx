import React from 'react';
import { Sidebar, Feed, Widgets } from './components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
    maxWidth: '1300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 10px'
  }
});

function App() {
  const cssClasses = useStyles();

  return (
    <div className={cssClasses.root}>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
