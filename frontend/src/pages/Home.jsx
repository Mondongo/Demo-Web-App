import React from 'react'
import MainContent from '../html/MainContent'
import { useEffect } from 'react'






const Home = () => {


  const texto = `
    <div><p>my texto aca</p></div>
    <div><p>my texto aca</p></div>
    <div><h3>my texto aca</h3></div>
  `





  useEffect(() => {
    console.log('cuando empieza--------------->');

    //clear------------------>
    return () => {

      console.log('cuando termina--------------->');

    }
  }, [])




  return (
    <div id='content' dangerouslySetInnerHTML={{ __html: texto }} />
  )
}

export default Home