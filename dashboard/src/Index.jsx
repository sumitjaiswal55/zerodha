import Home from './components/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function Index() {

  return (
    <>
      <Home />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />}/>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default Index
