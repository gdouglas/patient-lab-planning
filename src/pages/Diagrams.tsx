import { useState } from 'react'
import { motion } from 'framer-motion'
import { encode } from 'plantuml-encoder'

const Diagrams = () => {
  const [diagramCode, setDiagramCode] = useState(`@startuml
package "Frontend" {
  [React App]
  [Components]
  [Pages]
}

package "Backend" {
  [API]
  [Database]
}

[React App] --> [API]
[API] --> [Database]
@enduml`)

  const getPlantUMLImage = (code: string) => {
    const encoded = encode(code)
    return `https://www.plantuml.com/plantuml/svg/${encoded}`
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold">Diagrams</h1>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
          Save Diagram
        </button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold">PlantUML Code</h2>
          <textarea
            value={diagramCode}
            onChange={(e) => setDiagramCode(e.target.value)}
            className="w-full h-[600px] p-4 rounded-lg border bg-background font-mono"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold">Preview</h2>
          <div className="w-full h-[600px] p-4 rounded-lg border bg-card overflow-auto flex items-center justify-center">
            <img
              src={getPlantUMLImage(diagramCode)}
              alt="PlantUML Diagram"
              className="max-w-full max-h-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Diagrams 