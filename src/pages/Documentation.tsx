import { useState } from 'react'
import { motion } from 'framer-motion'

const Documentation = () => {
  const [content, setContent] = useState(`# Project Documentation

## Overview
This is a placeholder for your project documentation. You can edit this content using the editor below.

## Features
- Feature 1
- Feature 2
- Feature 3

## Getting Started
1. Step 1
2. Step 2
3. Step 3

## Architecture
\`\`\`plantuml
@startuml
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
@enduml
\`\`\`
`)

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold">Documentation</h1>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
          Save Changes
        </button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold">Editor</h2>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
          <div className="w-full h-[600px] p-4 rounded-lg border bg-card overflow-auto">
            <pre className="whitespace-pre-wrap font-mono">{content}</pre>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Documentation 