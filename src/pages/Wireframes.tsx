import { useState } from 'react'
import { motion } from 'framer-motion'

const Wireframes = () => {
  const [selectedTool, setSelectedTool] = useState<'rectangle' | 'text'>('rectangle')
  const [elements, setElements] = useState<Array<{
    type: 'rectangle' | 'text'
    x: number
    y: number
    width: number
    height: number
    content?: string
  }>>([])

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setElements([
      ...elements,
      {
        type: selectedTool,
        x,
        y,
        width: selectedTool === 'rectangle' ? 100 : 200,
        height: selectedTool === 'rectangle' ? 100 : 30,
        content: selectedTool === 'text' ? 'Text' : undefined,
      },
    ])
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold">Wireframes</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedTool('rectangle')}
            className={`px-4 py-2 rounded-md ${
              selectedTool === 'rectangle'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            Rectangle
          </button>
          <button
            onClick={() => setSelectedTool('text')}
            className={`px-4 py-2 rounded-md ${
              selectedTool === 'text'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            Text
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-full h-[600px] border rounded-lg bg-card overflow-hidden"
        onClick={handleCanvasClick}
      >
        {elements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`absolute ${
              element.type === 'rectangle'
                ? 'border-2 border-primary'
                : 'text-primary'
            }`}
            style={{
              left: element.x,
              top: element.y,
              width: element.width,
              height: element.height,
            }}
          >
            {element.content}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Wireframes 