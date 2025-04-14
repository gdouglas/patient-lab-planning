import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import Wireframes from './pages/Wireframes'
import Diagrams from './pages/Diagrams'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/documentation/:docId" element={<Documentation />} />
            <Route path="/wireframes" element={<Wireframes />} />
            <Route path="/wireframes/:wireframeId" element={<Wireframes />} />
            <Route path="/diagrams" element={<Diagrams />} />
            <Route path="/diagrams/:diagramId" element={<Diagrams />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  )
}

export default App
