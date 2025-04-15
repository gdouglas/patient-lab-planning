import React from 'react'
import { FiClipboard, FiSettings, FiUser } from 'react-icons/fi'

const PatientInterviewWireframe: React.FC = () => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">Case: John Doe</h2>
          <p className="text-sm text-muted-foreground">45-year-old male with chest pain</p>
        </div>
        <div className="space-x-2">
          <span className="inline-block h-8 w-16 bg-muted rounded flex items-center justify-center">
            <FiClipboard className="h-4 w-4 mr-1" />
            <span className="text-xs">Notes</span>
          </span>
          <span className="inline-block h-8 w-8 bg-muted rounded flex items-center justify-center">
            <FiSettings className="h-4 w-4" />
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-muted-foreground">Virtual Patient Video</div>
          </div>
          
          <div className="h-40 border rounded-lg p-4 bg-card overflow-y-auto">
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-muted flex-shrink-0 flex items-center justify-center">
                  <FiUser className="h-4 w-4" />
                </div>
                <div className="p-2 rounded-lg bg-muted max-w-[80%]">
                  <p className="text-sm">Hello doctor, I've been having this sharp pain in my chest...</p>
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="p-2 rounded-lg bg-primary/10 max-w-[80%]">
                  <p className="text-sm">When did the pain start? Can you describe the sensation?</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                  <FiUser className="h-4 w-4" />
                </div>
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
}

export default PatientInterviewWireframe 