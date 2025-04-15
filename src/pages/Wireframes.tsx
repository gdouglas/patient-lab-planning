import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { FiMaximize, FiMenu, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

// Import wireframe components
import LoginWireframe from '../components/wireframes/LoginWireframe'
import DashboardWireframe from '../components/wireframes/DashboardWireframe'
import PatientInterviewWireframe from '../components/wireframes/PatientInterviewWireframe'
import ClinicalPatientInteractionWireframe from '../components/wireframes/ClinicalPatientInteractionWireframe'
import CaseCreatorWireframe from '../components/wireframes/CaseCreatorWireframe'
import FacultyDashboardWireframe from '../components/wireframes/FacultyDashboardWireframe'

// Define wireframe data structure
interface Wireframe {
  id: string;
  title: string;
  description: string;
  component: React.ReactNode;
}

// List of available wireframes
const wireframes: Wireframe[] = [
  {
    id: 'login',
    title: 'Login Screen',
    description: 'Patient Lab login interface',
    component: <LoginWireframe />
  },
  {
    id: 'dashboard',
    title: 'Student Dashboard',
    description: 'Main dashboard for student users',
    component: <DashboardWireframe />
  },
  {
    id: 'faculty-dashboard',
    title: 'Faculty Dashboard',
    description: 'Dashboard interface for faculty members',
    component: <FacultyDashboardWireframe />
  },
  {
    id: 'patient-case',
    title: 'Patient Interview',
    description: 'Virtual patient interview interface',
    component: <PatientInterviewWireframe />
  },
  {
    id: 'patient-interaction',
    title: 'Clinical Patient Interaction',
    description: 'Comprehensive interface for medical students to practice clinical interviews with AI patients',
    component: <ClinicalPatientInteractionWireframe />
  },
  {
    id: 'case-creator',
    title: 'Case Creator',
    description: 'Interface for faculty to create and configure new patient cases',
    component: <CaseCreatorWireframe />
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsDrawerOpen(false);
      }
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

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

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
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

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={toggleDrawer}
            className="p-2 mr-2 rounded-md hover:bg-muted transition-colors lg:hidden"
            aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
          >
            {isDrawerOpen ? <FiX /> : <FiMenu />}
          </button>
          <h1 className="text-3xl font-bold">Wireframes</h1>
        </div>
      </div>

      <div className="relative flex">
        {/* Mobile drawer overlay */}
        {isMobile && isDrawerOpen && (
          <div 
            className="fixed inset-0 bg-black/40 z-20"
            onClick={toggleDrawer}
          ></div>
        )}
        
        {/* Wireframe Navigation Drawer */}
        <AnimatePresence initial={false}>
          {isDrawerOpen && (
            <motion.div
              initial={{ 
                x: isMobile ? "-100%" : "-20px",
                opacity: isMobile ? 0 : 1,
                width: isMobile ? "85%" : 280
              }}
              animate={{ 
                x: 0,
                opacity: 1,
                width: isMobile ? "85%" : 280
              }}
              exit={{ 
                x: isMobile ? "-100%" : "-20px",
                opacity: isMobile ? 0 : 0.8,
                width: isMobile ? "85%" : 0
              }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300 
              }}
              className={`
                ${isMobile ? "fixed left-0 top-0 h-full pt-16 z-30" : "relative"}
                bg-card border rounded-lg p-4 overflow-hidden
              `}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Screens</h3>
                {!isMobile && (
                  <button 
                    onClick={toggleDrawer}
                    className="p-2 rounded-md hover:bg-muted transition-colors"
                    aria-label="Toggle drawer"
                  >
                    <FiChevronLeft />
                  </button>
                )}
              </div>
              
              <nav className="space-y-2">
                {wireframes.map((wireframe) => (
                  <Link
                    key={wireframe.id}
                    to={`/wireframes/${wireframe.id}`}
                    onClick={() => isMobile && setIsDrawerOpen(false)}
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
          )}
        </AnimatePresence>
        
        {/* Collapsed drawer toggle for desktop */}
        {!isDrawerOpen && !isMobile && (
          <div className="w-10 relative">
            <button
              onClick={toggleDrawer}
              className="absolute left-0 top-4 h-20 w-6 bg-card border border-l-0 rounded-r-md flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Open drawer"
            >
              <FiChevronRight />
            </button>
          </div>
        )}

        {/* Wireframe Content */}
        <motion.div
          layout
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="w-full"
        >
          {currentWireframe && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{currentWireframe.title}</h2>
                  <p className="text-muted-foreground">{currentWireframe.description}</p>
                </div>
                <button 
                  onClick={toggleFullscreen}
                  className="text-sm px-3 py-1 rounded-md bg-secondary hover:bg-secondary/80 flex items-center gap-1"
                >
                  <FiMaximize className="h-4 w-4" />
                  <span>Fullscreen</span>
                </button>
              </div>

              <div className="relative w-full min-h-[600px] p-6 rounded-lg border bg-card overflow-auto flex items-center justify-center">
                {currentWireframe.component}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Wireframes 