import React from 'react'
import './App.scss'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <Layout>
    <div style={{paddingTop: '60px' }}>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      </div>
    </Layout>
  );
}

export default App;