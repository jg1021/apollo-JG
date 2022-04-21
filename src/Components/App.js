// import React from 'react';
// import {HashRouter as Router, Route} from 'react-router-dom';
// import Home from '../routes/Home';
// import Detail from '../routes/Detail';

// function App() {
//   return <Router>
//     <Route exact path='/' element={<Home />} />
//     <Route path='/:id' element={<Detail />} />
//   </Router>
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
const App = () => {
return (
< Router >
< Routes >
< Route exact path="/" element={< Home />} />
< Route path="/:id" element={< Detail />} />
</ Routes >
</ Router >
);
};

export default App;