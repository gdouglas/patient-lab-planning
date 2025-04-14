import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate, Link } from 'react-router-dom'

// Define wireframe data structure
interface Wireframe {
  id: string;
  title: string;
  description: string;
  component: React.ReactNode;
}

// Sample wireframes with HTML content
const wireframes: Wireframe[] = [
  {
    id: 'login',
    title: 'Login Screen',
    description: 'Patient Lab login interface',
    component: (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary">Patient Lab</h2>
          <p className="text-sm text-muted-foreground">UBC Faculty of Medicine</p>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Username</label>
            <div className="h-10 px-3 py-2 border rounded-md bg-muted/50"></div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <div className="h-10 px-3 py-2 border rounded-md bg-muted/50"></div>
          </div>
          
          <div className="pt-2">
            <div className="w-full h-10 bg-primary rounded-md"></div>
          </div>
          
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">Need help? Contact support</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'dashboard',
    title: 'Student Dashboard',
    description: 'Main dashboard for student users',
    component: (
      <div className="w-full p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Patient Lab Dashboard</h2>
          <div className="h-10 w-10 rounded-full bg-muted"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 border rounded-lg bg-card">
            <h3 className="font-medium mb-2">Active Cases</h3>
            <div className="text-2xl font-bold">4</div>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h3 className="font-medium mb-2">Completed Cases</h3>
            <div className="text-2xl font-bold">12</div>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h3 className="font-medium mb-2">Average Score</h3>
            <div className="text-2xl font-bold">87%</div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium mb-3">Recent Cases</h3>
          <div className="space-y-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-3 border rounded-lg flex justify-between items-center">
                <div>
                  <div className="font-medium">Case Study #{i}</div>
                  <div className="text-sm text-muted-foreground">Completed on Feb {i + 10}, 2023</div>
                </div>
                <div className="h-6 w-24 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'patient-case',
    title: 'Patient Interview',
    description: 'Virtual patient interview interface',
    component: (
      <div className="w-full p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">Case: John Doe</h2>
            <p className="text-sm text-muted-foreground">45-year-old male with chest pain</p>
          </div>
          <div className="space-x-2">
            <span className="inline-block h-8 w-16 bg-muted rounded"></span>
            <span className="inline-block h-8 w-8 bg-muted rounded"></span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          <div className="space-y-4">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-muted-foreground">Virtual Patient Video</div>
            </div>
            
            <div className="h-40 border rounded-lg p-4 bg-card overflow-y-auto">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-muted flex-shrink-0"></div>
                  <div className="p-2 rounded-lg bg-muted max-w-[80%]">
                    <p className="text-sm">Hello doctor, I've been having this sharp pain in my chest...</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="p-2 rounded-lg bg-primary/10 max-w-[80%]">
                    <p className="text-sm">When did the pain start? Can you describe the sensation?</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex-shrink-0"></div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <div className="flex-1 h-10 border rounded-lg"></div>
              <div className="h-10 w-10 bg-primary rounded-lg flex-shrink-0"></div>
            </div>
          </div>
          
          <div className="space-y-4 border-l pl-6">
            <h3 className="font-medium">Preceptor Guidance</h3>
            <div className="space-y-2">
              <div className="p-3 border rounded-lg bg-card">
                <p className="text-sm">Consider asking about family history of heart disease.</p>
              </div>
              <div className="p-3 border rounded-lg bg-card">
                <p className="text-sm">Important to rule out acute coronary syndrome.</p>
              </div>
            </div>
            
            <h3 className="font-medium pt-4">Suggested Questions</h3>
            <div className="space-y-2">
              {["Duration of symptoms?", "Radiation of pain?", "Associated symptoms?"].map((q, i) => (
                <div key={i} className="p-2 border rounded-lg bg-muted/50 text-sm cursor-pointer hover:bg-muted">
                  {q}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'patient-interaction',
    title: 'Clinical Patient Interaction',
    description: 'Comprehensive interface for medical students to practice clinical interviews with AI patients',
    component: (
      <div className="w-full p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">Case: Sarah Chen</h2>
            <p className="text-sm text-muted-foreground">32-year-old female with recurring headaches</p>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm">Create DDx</button>
            <button className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm">PEP Notes</button>
            <button className="p-1.5 rounded-md bg-secondary text-secondary-foreground">
              <span className="sr-only">Settings</span>
              <div className="w-5 h-5 rounded-full bg-muted"></div>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
          {/* Left panel - Patient interaction */}
          <div className="space-y-5">
            {/* Avatar video display */}
            <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center border">
              <div className="text-muted-foreground">Virtual Patient Video Avatar (D-ID)</div>
              
              {/* Voice/Video controls */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
                <button className="h-10 w-10 rounded-full bg-card border shadow-sm flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-muted"></div>
                </button>
                <button className="h-10 w-10 rounded-full bg-card border shadow-sm flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-muted"></div>
                </button>
                <button className="h-10 w-10 rounded-full bg-card border shadow-sm flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-muted"></div>
                </button>
              </div>
            </div>
            
            {/* Chat history */}
            <div className="border rounded-lg bg-card h-64 overflow-y-auto p-4">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-muted flex-shrink-0"></div>
                  <div className="p-3 rounded-lg bg-muted max-w-[80%]">
                    <p className="text-sm">Hello doctor, I've been experiencing these headaches for about three weeks now. They seem to be getting worse.</p>
                    <div className="mt-2 flex justify-end space-x-2">
                      <button className="h-6 w-6 rounded-full bg-card border shadow-sm flex items-center justify-center">
                        <span className="text-xs">👍</span>
                      </button>
                      <button className="h-6 w-6 rounded-full bg-card border shadow-sm flex items-center justify-center">
                        <span className="text-xs">👎</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 justify-end">
                  <div className="p-3 rounded-lg bg-primary/10 max-w-[80%]">
                    <p className="text-sm">I'm sorry to hear that. Can you describe the headaches? Where is the pain located and how would you rate it on a scale of 1-10?</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex-shrink-0"></div>
                </div>
                
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-muted flex-shrink-0"></div>
                  <div className="p-3 rounded-lg bg-muted max-w-[80%]">
                    <p className="text-sm">It's mostly on the right side of my head, behind my eye. I'd say it's about a 7 out of 10 when it's at its worst. Sometimes I get nauseous too.</p>
                    <div className="mt-2 flex justify-end space-x-2">
                      <button className="h-6 w-6 rounded-full bg-card border shadow-sm flex items-center justify-center">
                        <span className="text-xs">👍</span>
                      </button>
                      <button className="h-6 w-6 rounded-full bg-card border shadow-sm flex items-center justify-center">
                        <span className="text-xs">👎</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Input area with speech/text toggle */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <button className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-xs flex items-center space-x-1">
                    <span className="w-3 h-3 rounded-full bg-muted"></span>
                    <span>Voice Input</span>
                  </button>
                  <button className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs flex items-center space-x-1">
                    <span className="w-3 h-3 rounded-full bg-muted"></span>
                    <span>Text Input</span>
                  </button>
                </div>
                <button className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-xs">
                  Export Transcript
                </button>
              </div>
              
              <div className="flex gap-2">
                <div className="flex-1 h-14 border rounded-lg p-2 bg-background">
                  <p className="text-sm text-muted-foreground">Press and hold to speak or type your question...</p>
                </div>
                <button className="h-14 w-14 bg-primary rounded-lg flex-shrink-0 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white"></div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right panel - Preceptor guidance */}
          <div className="space-y-6 border-l pl-5">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center">
                <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>
                Virtual Preceptor
              </h3>
              
              <div className="p-3 border rounded-lg bg-card">
                <p className="text-sm">Consider asking about family history of migraines or cluster headaches.</p>
                <p className="text-sm mt-1">The unilateral nature and associated nausea suggests migraine.</p>
              </div>
              
              <div className="p-3 border rounded-lg bg-card">
                <p className="text-sm">Important to rule out:</p>
                <ul className="text-sm list-disc pl-5 mt-1">
                  <li>Tension headache</li>
                  <li>Cluster headache</li>
                  <li>Intracranial mass</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold">Suggested Questions</h3>
              <div className="space-y-2">
                {[
                  "Any visual changes or aura before headaches?",
                  "What makes the headaches better or worse?",
                  "Any family history of migraines?",
                  "Any recent trauma to the head?"
                ].map((q, i) => (
                  <div key={i} className="p-2 border rounded-lg bg-muted/50 text-sm cursor-pointer hover:bg-muted transition-colors">
                    {q}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold">Curricular References</h3>
              <div className="space-y-2">
                {[
                  "Headache Differential Diagnosis - Module 4",
                  "Clinical Assessment of Migraine - Case Study"
                ].map((q, i) => (
                  <div key={i} className="p-2 border rounded-lg bg-blue-50 text-sm cursor-pointer hover:bg-blue-100 text-blue-700 transition-colors">
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

// Helper function to get wireframe by ID
const getWireframeById = (id: string): Wireframe | undefined => {
  return wireframes.find(wireframe => wireframe.id === id);
};

const Wireframes = () => {
  const { wireframeId } = useParams<{ wireframeId: string }>();
  const navigate = useNavigate();
  const [currentWireframe, setCurrentWireframe] = useState<Wireframe | undefined>(undefined);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Load the selected wireframe or default to the first one
  useEffect(() => {
    let wireframe: Wireframe | undefined;
    
    if (wireframeId) {
      wireframe = getWireframeById(wireframeId);
    }
    
    if (!wireframe && wireframes.length > 0) {
      wireframe = wireframes[0];
      // Navigate to the first wireframe if none specified
      navigate(`/wireframes/${wireframe.id}`, { replace: true });
    }
    
    if (wireframe) {
      setCurrentWireframe(wireframe);
    }
  }, [wireframeId, navigate]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const exitFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFullscreen(false);
  };

  return (
    <div className="space-y-6">
      {isFullscreen && currentWireframe && (
        <div className="fixed inset-0 bg-background z-50 flex items-center justify-center p-8">
          <div className="absolute top-4 right-4 flex space-x-2">
            <button 
              onClick={exitFullscreen}
              className="px-3 py-1 rounded-md bg-secondary hover:bg-secondary/80"
            >
              Exit Fullscreen
            </button>
          </div>
          <div className="w-full h-full overflow-auto flex items-center justify-center">
            {currentWireframe.component}
          </div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold">Wireframes</h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Wireframe Navigation Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-[280px] bg-card border rounded-lg p-4"
        >
          <h3 className="text-lg font-semibold mb-4">Screens</h3>
          <nav className="space-y-2">
            {wireframes.map((wireframe) => (
              <Link
                key={wireframe.id}
                to={`/wireframes/${wireframe.id}`}
                className={`block p-2 rounded-md transition-colors ${
                  currentWireframe?.id === wireframe.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <div className="font-medium">{wireframe.title}</div>
                  <div className="text-sm text-muted-foreground line-clamp-1">
                    {wireframe.description}
                  </div>
                </motion.div>
              </Link>
            ))}
          </nav>
        </motion.div>

        {/* Wireframe Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full space-y-6"
        >
          {currentWireframe && (
            <>
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{currentWireframe.title}</h2>
                  <p className="text-muted-foreground">{currentWireframe.description}</p>
                </div>
                <button 
                  onClick={toggleFullscreen}
                  className="text-sm px-3 py-1 rounded-md bg-secondary hover:bg-secondary/80"
                >
                  Fullscreen
                </button>
              </div>

              <div className="relative w-full min-h-[600px] p-6 rounded-lg border bg-card overflow-auto flex items-center justify-center">
                {currentWireframe.component}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Wireframes 