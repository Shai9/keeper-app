import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Note from './components/Note'
import notes from './Notes'



export default function App() {
  return (
    <>
      <Header />
      <Note 
        title = 'header'
        content = 'content'
      />
      <Footer />
    </>
  )
}
