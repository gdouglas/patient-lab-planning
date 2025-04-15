import React from 'react'
import { FiSave, FiSettings, FiUser, FiEdit, FiPlus, FiCheckSquare, FiMessageSquare, FiClock, FiAlertCircle, FiList, FiUpload, FiImage, FiChevronDown, FiChevronUp, FiTrash2, FiZap, FiCpu } from 'react-icons/fi'

const CaseCreatorWireframe: React.FC = () => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">Create New Patient Case</h2>
          <p className="text-sm text-muted-foreground">Configure all aspects of the virtual patient case</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm flex items-center">
            <FiSave className="h-4 w-4 mr-1" />
            Save Case
          </button>
          <button className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm flex items-center">
            <FiSettings className="h-4 w-4 mr-1" />
            Settings
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        {/* Left panel - Case configuration */}
        <div className="space-y-6">
          {/* AI Assistant Banner */}
          <div className="border border-purple-200 bg-purple-50 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                <FiCpu className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-purple-800">AI Case Assistant</h3>
                <p className="text-sm text-purple-700">Generate case content with AI or get suggestions for any field</p>
              </div>
            </div>
            <button className="px-3 py-1.5 bg-purple-600 text-white rounded-md text-sm flex items-center">
              <FiZap className="h-4 w-4 mr-1" />
              Generate Full Case
            </button>
          </div>

          {/* Case metadata */}
          <div className="border rounded-lg p-5 bg-card space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <FiEdit className="mr-2 text-primary" />
              Case Details
            </h3>
            
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-sm font-medium">Case Title</label>
                <div className="relative">
                  <div className="h-10 px-3 py-2 border rounded-md bg-background flex items-center">
                    <input 
                      className="flex-grow bg-transparent outline-none" 
                      defaultValue="Recurring Headaches - Sarah Chen"
                    />
                    <button className="ml-2 p-1 rounded-md text-muted-foreground hover:text-purple-600 hover:bg-purple-50 transition-colors" title="Generate with AI">
                      <FiZap className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Chief Complaint</label>
                  <div className="relative">
                    <div className="h-10 px-3 py-2 border rounded-md bg-background flex items-center">
                      <input 
                        className="flex-grow bg-transparent outline-none" 
                        defaultValue="Recurring headaches"
                      />
                      <button className="ml-2 p-1 rounded-md text-muted-foreground hover:text-purple-600 hover:bg-purple-50 transition-colors" title="Generate with AI">
                        <FiZap className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium">Must-Not-Miss Diagnosis</label>
                  <div className="relative">
                    <div className="h-10 px-3 py-2 border rounded-md bg-background flex items-center">
                      <input 
                        className="flex-grow bg-transparent outline-none" 
                        defaultValue="Migraine with aura"
                      />
                      <button className="ml-2 p-1 rounded-md text-muted-foreground hover:text-purple-600 hover:bg-purple-50 transition-colors" title="Generate with AI">
                        <FiZap className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">Case Description</label>
                  <button className="text-xs flex items-center text-purple-600 hover:text-purple-700">
                    <FiZap className="h-3.5 w-3.5 mr-1" />
                    Generate Description
                  </button>
                </div>
                <textarea 
                  className="w-full h-24 px-3 py-2 border rounded-md bg-background resize-none"
                  placeholder="Enter a detailed description of the case..."
                ></textarea>
              </div>
            </div>
          </div>
          
          {/* Patient details */}
          <div className="border rounded-lg p-5 bg-card space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <FiUser className="mr-2 text-primary" />
              Patient Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-sm font-medium">Patient Name</label>
                <div className="relative">
                  <div className="h-10 px-3 py-2 border rounded-md bg-background flex items-center">
                    <input 
                      className="flex-grow bg-transparent outline-none" 
                      defaultValue="Sarah Chen"
                    />
                    <button className="ml-2 p-1 rounded-md text-muted-foreground hover:text-purple-600 hover:bg-purple-50 transition-colors" title="Generate with AI">
                      <FiZap className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium">Age</label>
                <div className="relative">
                  <div className="h-10 px-3 py-2 border rounded-md bg-background flex items-center">
                    <input 
                      className="flex-grow bg-transparent outline-none" 
                      defaultValue="32"
                      type="number"
                    />
                    <button className="ml-2 p-1 rounded-md text-muted-foreground hover:text-purple-600 hover:bg-purple-50 transition-colors" title="Generate with AI">
                      <FiZap className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium">Gender</label>
                <div className="relative">
                  <div className="h-10 px-3 py-2 border rounded-md bg-background flex items-center">
                    <select className="flex-grow bg-transparent outline-none">
                      <option>Female</option>
                      <option>Male</option>
                      <option>Non-binary</option>
                      <option>Other</option>
                    </select>
                    <button className="ml-2 p-1 rounded-md text-muted-foreground hover:text-purple-600 hover:bg-purple-50 transition-colors" title="Generate with AI">
                      <FiZap className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-24 h-24 bg-muted rounded-md flex items-center justify-center flex-shrink-0 relative group">
                <FiImage className="h-8 w-8 text-muted-foreground" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                  <button className="p-1.5 bg-white rounded-md text-purple-600">
                    <FiZap className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3 flex-grow">
                <div className="space-y-1">
                  <label className="text-sm font-medium flex items-center">
                    <FiImage className="mr-1" />
                    Avatar Selection
                  </label>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs">
                      Choose Avatar
                    </button>
                    <button className="px-3 py-1 rounded-md bg-muted text-muted-foreground text-xs">
                      Upload Custom
                    </button>
                    <button className="px-3 py-1 rounded-md bg-purple-100 text-purple-600 text-xs flex items-center">
                      <FiZap className="h-3 w-3 mr-1" />
                      Generate
                    </button>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Medical History</label>
                    <button className="text-xs flex items-center text-purple-600 hover:text-purple-700">
                      <FiZap className="h-3.5 w-3.5 mr-1" />
                      Generate History
                    </button>
                  </div>
                  <textarea 
                    className="w-full h-12 px-3 py-2 border rounded-md bg-background resize-none"
                    placeholder="Enter patient's relevant medical history..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          
          {/* Suggested questions */}
          <div className="border rounded-lg p-5 bg-card space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold flex items-center">
                <FiMessageSquare className="mr-2 text-primary" />
                Suggested Questions
              </h3>
              <div className="flex space-x-2">
                <button className="p-1 rounded-md bg-secondary text-secondary-foreground flex items-center justify-center">
                  <FiPlus className="h-4 w-4" />
                </button>
                <button className="px-2.5 py-1 rounded-md bg-purple-100 text-purple-600 text-xs flex items-center">
                  <FiZap className="h-3.5 w-3.5 mr-1" />
                  Generate Questions
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              {[
                "Any visual changes or aura before headaches?", 
                "What makes the headaches better or worse?", 
                "Any family history of migraines?", 
                "Any recent trauma to the head?"
              ].map((q, i) => (
                <div key={i} className="flex items-center p-2 border rounded-md bg-background">
                  <input type="text" defaultValue={q} className="flex-grow bg-transparent outline-none" />
                  <button className="p-1 text-muted-foreground hover:text-purple-600 transition-colors mr-1">
                    <FiZap className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-muted-foreground hover:text-destructive">
                    <span className="sr-only">Remove</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right panel - Additional settings */}
        <div className="space-y-6">
          {/* Configuration options */}
          <div className="border rounded-lg p-5 bg-card space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <FiSettings className="mr-2 text-primary" />
              Configuration
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium flex items-center">
                  <FiClock className="mr-1" />
                  Longitudinal Care (Memory)
                </label>
                <div className="h-6 w-10 bg-primary rounded-full flex items-center p-1">
                  <div className="h-4 w-4 bg-white rounded-full ml-auto"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium flex items-center">
                  <FiAlertCircle className="mr-1" />
                  Include Must-Not-Miss Criteria
                </label>
                <div className="h-6 w-10 bg-primary rounded-full flex items-center p-1">
                  <div className="h-4 w-4 bg-white rounded-full ml-auto"></div>
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium">Difficulty Level</label>
                <select className="w-full h-10 px-3 py-2 border rounded-md bg-background">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option selected>Advanced</option>
                </select>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">AI Response Personality</label>
                  <button className="text-xs flex items-center text-purple-600 hover:text-purple-700">
                    <FiZap className="h-3.5 w-3.5 mr-1" />
                    Suggest
                  </button>
                </div>
                <select className="w-full h-10 px-3 py-2 border rounded-md bg-background">
                  <option>Anxious Patient</option>
                  <option>Detailed Communicator</option>
                  <option>Brief Responder</option>
                  <option>Confused Patient</option>
                  <option>Concerned Parent</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Evaluation rubrics */}
          <div className="border rounded-lg p-5 bg-card space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold flex items-center">
                <FiCheckSquare className="mr-2 text-primary" />
                Evaluation Rubrics
              </h3>
              <div className="flex space-x-2">
                <button className="p-1 rounded-md bg-secondary text-secondary-foreground flex items-center justify-center">
                  <FiPlus className="h-4 w-4" />
                </button>
                <button className="px-2.5 py-1 rounded-md bg-purple-100 text-purple-600 text-xs flex items-center">
                  <FiZap className="h-3.5 w-3.5 mr-1" />
                  Generate
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { 
                  title: "History taking skills", 
                  weight: "30%",
                  expanded: true,
                  items: [
                    "Student asks appropriate questions about the onset and nature of symptoms",
                    "Student explores impact of headaches on daily life",
                    "Student asks about relevant past medical history",
                    "Student collects family history relevant to the diagnosis"
                  ]
                }, 
                { 
                  title: "Identification of key symptoms", 
                  weight: "40%",
                  expanded: false,
                  items: [
                    "Student identifies visual aura preceding headaches",
                    "Student recognizes pattern of unilateral throbbing pain",
                    "Student identifies triggers such as stress or specific foods",
                    "Student explores severity and duration of symptoms"
                  ]
                }, 
                { 
                  title: "Differential diagnosis", 
                  weight: "30%",
                  expanded: false,
                  items: [
                    "Student correctly identifies migraine with aura as primary diagnosis",
                    "Student considers tension headache in differential",
                    "Student appropriately rules out more serious conditions",
                    "Student justifies diagnosis based on clinical presentation"
                  ]
                }
              ].map((rubric, i) => (
                <div key={i} className="border rounded-md bg-background overflow-hidden">
                  <div className="p-3 flex justify-between items-center">
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <span className="font-medium">{rubric.title}</span>
                        <span className="text-sm">{rubric.weight}</span>
                      </div>
                      <div className="w-full h-1.5 bg-muted-foreground/20 rounded-full mt-2">
                        <div className="h-full bg-primary rounded-full" style={{width: rubric.weight}}></div>
                      </div>
                    </div>
                    <button className="ml-2 p-1.5 rounded-md hover:bg-muted">
                      {rubric.expanded ? <FiChevronUp className="h-4 w-4" /> : <FiChevronDown className="h-4 w-4" />}
                    </button>
                  </div>
                  
                  {rubric.expanded && (
                    <div className="px-3 pb-3 pt-1 border-t space-y-3">
                      <div className="flex justify-between items-center text-xs mb-2">
                        <span className="text-muted-foreground">Evaluation Items:</span>
                        <button className="text-purple-600 hover:text-purple-700 flex items-center">
                          <FiZap className="h-3 w-3 mr-1" />
                          Generate Items
                        </button>
                      </div>
                      
                      {rubric.items.map((item, j) => (
                        <div key={j} className="flex items-start group">
                          <input 
                            type="text" 
                            defaultValue={item}
                            className="flex-grow px-3 py-2 text-sm border rounded-md bg-background"
                          />
                          <button className="ml-2 p-1.5 rounded-md text-muted-foreground hover:text-purple-600 transition-colors group-hover:opacity-100 opacity-0">
                            <FiZap className="h-4 w-4" />
                          </button>
                          <button className="ml-1 p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity">
                            <FiTrash2 className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                      
                      <button className="w-full mt-2 py-1.5 border border-dashed rounded-md text-sm text-muted-foreground hover:bg-muted flex items-center justify-center">
                        <FiPlus className="h-3.5 w-3.5 mr-1" />
                        Add Evaluation Item
                      </button>
                    </div>
                  )}
                </div>
              ))}
              
              <button className="w-full py-2 border border-dashed rounded-md text-sm text-muted-foreground hover:bg-muted flex items-center justify-center">
                <FiPlus className="h-4 w-4 mr-1" />
                Add New Rubric Domain
              </button>
            </div>
          </div>
          
          {/* Access Control */}
          <div className="border rounded-lg p-5 bg-card space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <FiList className="mr-2 text-primary" />
              Access Controls
            </h3>
            
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-sm font-medium">Case Visibility</label>
                <select className="w-full h-10 px-3 py-2 border rounded-md bg-background">
                  <option>Private (Instructor Only)</option>
                  <option selected>Course Participants</option>
                  <option>Public</option>
                </select>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-medium flex items-center">
                  <FiUpload className="mr-1" />
                  Shareable URL
                </label>
                <div className="h-10 flex">
                  <div className="flex-grow px-3 py-2 border rounded-l-md bg-background text-muted-foreground text-sm overflow-hidden overflow-ellipsis whitespace-nowrap">
                    https://patient-lab.med.ubc.ca/cases/sarah-chen-headaches-2023
                  </div>
                  <button className="px-3 py-2 border border-l-0 rounded-r-md bg-secondary text-secondary-foreground text-sm">
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseCreatorWireframe 