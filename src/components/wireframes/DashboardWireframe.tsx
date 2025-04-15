import React from 'react'
import { FiUser } from 'react-icons/fi'

const DashboardWireframe: React.FC = () => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Patient Lab Dashboard</h2>
        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
          <FiUser className="h-5 w-5 text-muted-foreground" />
        </div>
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
}

export default DashboardWireframe 