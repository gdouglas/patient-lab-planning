import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { encode } from 'plantuml-encoder'
import { useParams, useNavigate } from 'react-router-dom'
import { diagramItems, getDiagramById, DiagramItem } from '../lib/diagramService'

const Diagrams = () => {
  const { diagramId } = useParams<{ diagramId: string }>()
  const navigate = useNavigate()
  const [currentDiagram, setCurrentDiagram] = useState<DiagramItem | undefined>(undefined)
  const [diagramCode, setDiagramCode] = useState('')
  const [isEditorCollapsed, setIsEditorCollapsed] = useState(true)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  
  // Load the selected diagram or default to the first one
  useEffect(() => {
    let diagram: DiagramItem | undefined
    
    if (diagramId) {
      diagram = getDiagramById(diagramId)
    }
    
    if (!diagram && diagramItems.length > 0) {
      diagram = diagramItems[0]
      // Navigate to the first diagram if none specified
      navigate(`/diagrams/${diagram.id}`, { replace: true })
    }
    
    if (diagram) {
      setCurrentDiagram(diagram)
      setDiagramCode(diagram.code)
    }
  }, [diagramId, navigate])

  const getPlantUMLImage = (code: string) => {
    const encoded = encode(code)
    return `https://www.plantuml.com/plantuml/svg/${encoded}`
  }

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDiagramCode(e.target.value)
  }

  const toggleEditor = () => {
    setIsEditorCollapsed(!isEditorCollapsed)
  }

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3))
  }

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5))
  }

  const resetZoom = () => {
    setZoomLevel(1)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }
  
  const exitFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent event bubbling
    setIsFullscreen(false)
  }

  // Render zoom controls for reuse in both normal and fullscreen views
  const renderZoomControls = () => (
    <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-card/80 backdrop-blur-sm px-2 py-1 rounded-lg border shadow-sm">
      <button 
        onClick={zoomOut} 
        className="h-8 w-8 rounded-md flex items-center justify-center bg-secondary hover:bg-secondary/80"
        aria-label="Zoom out"
      >
        <span className="text-lg">-</span>
      </button>
      <span className="text-sm font-medium">{Math.round(zoomLevel * 100)}%</span>
      <button 
        onClick={zoomIn} 
        className="h-8 w-8 rounded-md flex items-center justify-center bg-secondary hover:bg-secondary/80"
        aria-label="Zoom in"
      >
        <span className="text-lg">+</span>
      </button>
      <button 
        onClick={resetZoom} 
        className="h-8 px-2 rounded-md flex items-center justify-center bg-secondary hover:bg-secondary/80 text-xs"
        aria-label="Reset zoom"
      >
        Reset
      </button>
    </div>
  )

  return (
    <div className="space-y-6">
      {isFullscreen && (
        <div className="fixed inset-0 bg-background z-50 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <div className="absolute top-4 right-4 flex space-x-2 z-10">
            <button 
              onClick={exitFullscreen}
              className="px-3 py-1.5 rounded-md bg-secondary hover:bg-secondary/80 shadow-md"
            >
              Exit Fullscreen
            </button>
          </div>
          <div className="relative w-full h-full p-8 overflow-auto flex items-center justify-center">
            <img
              src={getPlantUMLImage(diagramCode)}
              alt="PlantUML Diagram"
              style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease' }}
              className="max-w-full max-h-full"
            />
            {renderZoomControls()}
          </div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold">Diagrams</h1>
        <div className="flex space-x-2">
          <button 
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            onClick={() => {
              if (currentDiagram) {
                // Here you would typically save the diagram
                console.log('Saving diagram:', diagramCode)
              }
            }}
          >
            Save Diagram
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Diagrams Navigation Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-[280px] bg-card border rounded-lg p-4"
        >
          <h3 className="text-lg font-semibold mb-4">Diagrams</h3>
          <nav className="space-y-2">
            {diagramItems.map((diagram) => (
              <a
                key={diagram.id}
                href={`#/diagrams/${diagram.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/diagrams/${diagram.id}`);
                }}
                className={`block p-2 rounded-md transition-colors ${
                  currentDiagram?.id === diagram.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <div className="font-medium">{diagram.title}</div>
                  <div className="text-sm text-muted-foreground line-clamp-1">
                    {diagram.description}
                  </div>
                </motion.div>
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Diagram Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full space-y-6"
        >
          {currentDiagram && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-1">{currentDiagram.title}</h2>
              <p className="text-muted-foreground">{currentDiagram.description}</p>
            </div>
          )}

          <div className={`grid ${isEditorCollapsed ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'} gap-6`}>
            <motion.div 
              className="space-y-4"
              initial={{ width: "auto" }}
              animate={{ 
                width: isEditorCollapsed ? 0 : "auto", 
                opacity: isEditorCollapsed ? 0 : 1,
                margin: isEditorCollapsed ? 0 : undefined
              }}
              transition={{ duration: 0.3 }}
              style={{ display: isEditorCollapsed ? 'none' : undefined }}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">PlantUML Code</h2>
                <button 
                  onClick={toggleEditor}
                  className="text-sm px-2 py-1 rounded-md bg-secondary hover:bg-secondary/80 flex items-center"
                >
                  <span>Collapse</span>
                </button>
              </div>
              <textarea
                value={diagramCode}
                onChange={handleCodeChange}
                className="w-full h-[600px] p-4 rounded-lg border bg-background font-mono"
              />
            </motion.div>

            <div className="space-y-4 w-full">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Preview</h2>
                <div className="flex space-x-2">
                  {isEditorCollapsed && (
                    <button 
                      onClick={toggleEditor}
                      className="text-sm px-2 py-1 rounded-md bg-secondary hover:bg-secondary/80 flex items-center"
                    >
                      <span>Show Editor</span>
                    </button>
                  )}
                  <button 
                    onClick={toggleFullscreen}
                    className="text-sm px-2 py-1 rounded-md bg-secondary hover:bg-secondary/80 flex items-center"
                  >
                    <span>Fullscreen</span>
                  </button>
                </div>
              </div>
              <div className="relative w-full h-[600px] p-4 rounded-lg border bg-card overflow-auto flex items-center justify-center">
                <img
                  src={getPlantUMLImage(diagramCode)}
                  alt="PlantUML Diagram"
                  style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease' }}
                  className="max-w-full max-h-full"
                />
                {renderZoomControls()}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Diagrams 