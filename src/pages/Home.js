import React from 'react';

import Content from '..//components/content/Content';
import Aboutus from '..//components/aboutus/Aboutus';
import Header from '../components/header/Header';

// Home Page with Header, content and about us components linked

function Home() {
  return (
    <>
    <Header/>
    <Content/>
    <Aboutus/>
    </>    

  )
}

export default Home;