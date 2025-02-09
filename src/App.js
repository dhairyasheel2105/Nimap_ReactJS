import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import TopRatedPage from "./pages/TopRatedPage"
import UpcomingMoviePage from "./pages/UpcomingMoviePage"
import SingleMovieDetailPage from "./pages/SingleMovieDetailPage"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingMoviePage />} />
        <Route path="/movie/:id" element={<SingleMovieDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
