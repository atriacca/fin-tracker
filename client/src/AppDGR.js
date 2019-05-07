import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import View from './View';
import Footer from './Footer';
import Styles from './App.module.css';
import Entry from './Entry';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div className={Styles.mainReturnDiv}>
      <Header />

      <div className={Styles.viewDiv}>
      <Navbar />
      <Entry />
      <View />
      </div>

      <Footer />
    </div>
  );
}

export default App;
