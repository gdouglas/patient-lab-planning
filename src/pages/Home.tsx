import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
        >
          Product Documentation & Planning Tool
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          A comprehensive tool for managing product documentation, wireframes, and architecture diagrams.
          Streamline your product planning process with our intuitive interface.
        </motion.p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Documentation"
          description="Comprehensive product documentation with markdown support and version control."
          link="/documentation"
          delay={0.3}
        />
        <FeatureCard
          title="Wireframes"
          description="Interactive wireframes for visualizing user interfaces and user flows."
          link="/wireframes"
          delay={0.4}
        />
        <FeatureCard
          title="Diagrams"
          description="Create and manage architecture diagrams using PlantUML."
          link="/diagrams"
          delay={0.5}
        />
      </section>
    </div>
  )
}

const FeatureCard = ({
  title,
  description,
  link,
  delay,
}: {
  title: string
  description: string
  link: string
  delay: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link
        to={link}
        className="text-primary hover:underline inline-flex items-center"
      >
        Learn more →
      </Link>
    </motion.div>
  )
}

export default Home 