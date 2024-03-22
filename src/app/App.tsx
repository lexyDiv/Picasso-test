import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Routes } from "react-router-dom";
import { PostsPage } from "../pages";
import { AboutPostPage } from "../pages/components/AboutPostPage";

//https://lexydiv.github.io/Picasso-test/


function App(): JSX.Element {
  return (
    <div className="App">

      <Routes>
       {/* <Route path="/*" element={<Header/>}>
          <Route path=":id" element={<h1>papa loh</h1>}/>
       </Route> */}
       <Route path="/" element={<PostsPage/>}/>
       <Route path="/:id" element={<AboutPostPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
