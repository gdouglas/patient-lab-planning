import React from 'react'
import { FiClipboard, FiSettings, FiUser, FiMessageSquare, FiMic, FiType, FiDownload, FiSend, FiChevronRight, FiFileText, FiBookOpen, FiThumbsUp, FiThumbsDown } from 'react-icons/fi'
import { MdOutlineHealthAndSafety } from 'react-icons/md'

const ClinicalPatientInteractionWireframe: React.FC = () => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">Case: Sarah Chen</h2>
          <p className="text-sm text-muted-foreground">32-year-old female with recurring headaches</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm flex items-center">
            <FiClipboard className="h-4 w-4 mr-1" />
            Create DDx
          </button>
          <button className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm flex items-center">
            <FiFileText className="h-4 w-4 mr-1" />
            PEP Notes
          </button>
          <button className="p-1.5 rounded-md bg-secondary text-secondary-foreground">
            <span className="sr-only">Settings</span>
            <FiSettings className="h-5 w-5" />
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
                <FiMic className="h-5 w-5" />
              </button>
              <button className="h-10 w-10 rounded-full bg-card border shadow-sm flex items-center justify-center">
                <FiMessageSquare className="h-5 w-5" />
              </button>
              <button className="h-10 w-10 rounded-full bg-card border shadow-sm flex items-center justify-center">
                <FiSettings className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Chat history */}
          <div className="border rounded-lg bg-card h-64 overflow-y-auto p-4">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-muted flex-shrink-0 flex items-center justify-center">
                  <FiUser className="h-4 w-4" />
                </div>
                <div className="p-3 rounded-lg bg-muted max-w-[80%]">
                  <p className="text-sm">Hello doctor, I've been experiencing these headaches for about three weeks now. They seem to be getting worse.</p>
                  <div className="mt-2 flex justify-end space-x-2">
                    <button className="h-6 w-6 rounded-full bg-card border shadow-sm flex items-center justify-center">
                      <FiThumbsUp className="h-3 w-3" />
                    </button>
                    <button className="h-6 w-6 rounded-full bg-card border shadow-sm flex items-center justify-center">
                      <FiThumbsDown className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 justify-end">
                <div className="p-3 rounded-lg bg-primary/10 max-w-[80%]">
                  <p className="text-sm">I'm sorry to hear that. Can you describe the headaches? Where is the pain located and how would you rate it on a scale of 1-10?</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                  <FiUser className="h-4 w-4" />
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-muted flex-shrink-0 flex items-center justify-center">
                  <FiUser className="h-4 w-4" />
                </div>
                <div className="p-3 rounded-lg bg-muted max-w-[80%]">
                  <p className="text-sm">It's mostly on the right side of my head, behind my eye. I'd say it's about a 7 out of 10 when it's at its worst. Sometimes I get nauseous too.</p>
                  <div className="mt-2 flex justify-end space-x-2">
                    <button className="h-6 w-6 rounded-full bg-card border shadow-sm flex items-center justify-center">
                      <FiThumbsUp className="h-3 w-3" />
                    </button>
                    <button className="h-6 w-6 rounded-full bg-card border shadow-sm flex items-center justify-center">
                      <FiThumbsDown className="h-3 w-3" />
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
                  <FiMic className="h-3 w-3" />
                  <span>Voice Input</span>
                </button>
                <button className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs flex items-center space-x-1">
                  <FiType className="h-3 w-3" />
                  <span>Text Input</span>
                </button>
              </div>
              <button className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-xs flex items-center space-x-1">
                <FiDownload className="h-3 w-3" />
                <span>Export Transcript</span>
              </button>
            </div>
            
            <div className="flex gap-2">
              <div className="flex-1 h-14 border rounded-lg p-2 bg-background">
                <p className="text-sm text-muted-foreground">Press and hold to speak or type your question...</p>
              </div>
              <button className="h-14 w-14 bg-primary rounded-lg flex-shrink-0 flex items-center justify-center">
                <FiSend className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Right panel - Preceptor guidance */}
        <div className="space-y-6 border-l pl-5">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg flex items-center">
              <MdOutlineHealthAndSafety className="h-5 w-5 text-green-500 mr-2" />
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
                <div key={i} className="p-2 border rounded-lg bg-muted/50 text-sm cursor-pointer hover:bg-muted transition-colors flex items-center">
                  <FiChevronRight className="h-3 w-3 mr-1 flex-shrink-0" />
                  <span>{q}</span>
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
                <div key={i} className="p-2 border rounded-lg bg-blue-50 text-sm cursor-pointer hover:bg-blue-100 text-blue-700 transition-colors flex items-center">
                  <FiBookOpen className="h-3 w-3 mr-1 flex-shrink-0" />
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClinicalPatientInteractionWireframe 