import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreateForm from "./components/CreateForm";
import DisplayForm from "./components/DisplayForm";
import Update from "./views/Update"


function App() {
  return (
    <BrowserRouter>
      <h1>Favorite Authors</h1>
      

      <Routes>
        <Route path="" element={<DisplayForm />}></Route>
        <Route path="/authors/new" element={<CreateForm/>}></Route>
        <Route path="/authors/:id/edit" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
