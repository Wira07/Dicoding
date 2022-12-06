import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import AddNote from "./pages/AddNote";
import NoteArchived from "./pages/NoteArchived";
import Detail from "./pages/Detail";
import BodyNote from "./pages/BodyNote";
import Navigation from "./component/Navigation";
import NoteNotFound from "./pages/NoteNotFound";

function NoteApp() {
  return (
    <div className="container">
      <header>
        <h1>
          <Link to="/">Aplikasi Catatan</Link>
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<BodyNote />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/notes/:id" element={<Detail />} />
          <Route path="/archived" element={<NoteArchived />} />
          <Route path="*" element={<NoteNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default NoteApp;
