import React from 'react'
import { FiLock, FiUser, FiHelpCircle } from 'react-icons/fi'

const LoginWireframe: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* UBC Header */}
      <div className="bg-[#002145] text-white p-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">The University of British Columbia</div>
          <div className="text-2xl font-bold">UBC</div>
        </div>
      </div>
      
      {/* Login Form */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6 text-[#002145]">CWL Login</h2>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center">
              <FiUser className="mr-2 text-[#0055b7]" />
              CWL Username
            </label>
            <div className="h-10 px-3 py-2 border rounded-md bg-white"></div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center">
              <FiLock className="mr-2 text-[#0055b7]" />
              Password
            </label>
            <div className="h-10 px-3 py-2 border rounded-md bg-white"></div>
          </div>
          
          <div className="pt-2">
            <button className="w-full h-10 bg-[#0055b7] text-white rounded-md hover:bg-[#002145] transition-colors">
              Sign In
            </button>
          </div>
          
          <div className="text-center pt-3">
            <button className="text-sm text-[#0055b7] hover:underline">
              I forgot my CWL login information
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="border-t p-4">
        <ul className="flex flex-wrap text-xs text-[#0055b7] gap-x-4 gap-y-2">
          <li>
            <a href="#" className="hover:underline">Terms of Use</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Copyright</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Accessibility</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Create CWL Account</a>
          </li>
          <li className="flex items-center">
            <FiHelpCircle className="mr-1" />
            <a href="#" className="hover:underline">Need Help?</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LoginWireframe 