import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Product Planner
          </Link>
          <div className="flex space-x-4">
            <NavLink to="/documentation">Documentation</NavLink>
            <NavLink to="/wireframes">Wireframes</NavLink>
            <NavLink to="/diagrams">Diagrams</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.span>
    </Link>
  )
}

export default Navbar 