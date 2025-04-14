/**
 * Diagram service for managing PlantUML diagrams
 */

export interface DiagramItem {
  id: string;
  title: string;
  description: string;
  code: string;
}

// System context diagram based on the patient-lab-product-description.md
const systemContextDiagram = `@startuml System Context Diagram
!define RECTANGLE class

' Use a more modern style
skinparam backgroundColor white
skinparam handwritten false
skinparam DefaultFontName "Arial"
skinparam ArrowColor #666666
skinparam shadowing false

skinparam rectangle {
  BorderColor #cccccc
  BackgroundColor #f8f8f8
}

skinparam actor {
  BorderColor #cccccc
  BackgroundColor #f8f8f8
}

skinparam cloud {
  BorderColor #cccccc
  BackgroundColor #f8f8f8
}

' Main components
rectangle "Patient Lab Application" as App #E8F5E9 {
}

' External Systems
cloud "OpenAI API" as OpenAI #EFF8FB
cloud "D-ID API" as DID #EFF8FB
rectangle "LMS\\nEntrada" as LMS #FFF9C4
rectangle "UBC CWL" as CWL #FFF9C4
rectangle "UBC AI Sandbox" as Sandbox #EFF8FB
rectangle "Learning Record Store" as LRS #FFF9C4
rectangle "Oracle APEX" as APEX #FFF9C4

' User types
actor "Students" as Students
actor "Faculty" as Faculty
actor "Administrators" as Admins

' Connections
Students --> App : Practice clinical interviews,\\nreceive feedback
Faculty --> App : Create cases, define rubrics,\\nshare customized cases
Admins --> App : Configure AI providers,\\nmonitor usage

App --> OpenAI : Natural language processing,\\nresponse generation
App --> DID : Avatar animation
App --> Sandbox : Alternative AI processing
App --> LMS : LTI integration 
App --> CWL : Authentication
App --> LRS : Log session data in xAPI format
App --> APEX : Log user interactions

note bottom of App
  Educational application for medical students
  to practice clinical interviews through
  AI-powered virtual patients and receive
  guidance from a virtual preceptor
end note

@enduml`;

// Technical architecture diagram
const technicalArchitectureDiagram = `@startuml Technical Architecture
!define RECTANGLE class

' Use a more modern style
skinparam backgroundColor white
skinparam handwritten false
skinparam DefaultFontName "Arial"
skinparam ArrowColor #666666
skinparam shadowing false

skinparam rectangle {
  BorderColor #cccccc
  BackgroundColor #f8f8f8
}

skinparam database {
  BorderColor #cccccc
  BackgroundColor #f8f8f8
}

skinparam cloud {
  BorderColor #cccccc
  BackgroundColor #f8f8f8
}

' Main components
package "Frontend" as Frontend #E8F5E9 {
  rectangle "React App" as ReactApp
  rectangle "Redux State" as Redux
  rectangle "Shad UI Components" as ShadUI
  rectangle "Tailwind CSS" as Tailwind
  rectangle "Framer Animations" as Framer
}

package "Backend" as Backend #DCEDC8 {
  rectangle "FastAPI Application" as FastAPI
  rectangle "Uvicorn Server" as Uvicorn
  rectangle "Prompt Management" as PromptMgmt
  rectangle "Error Handling" as ErrorHandling
  rectangle "AI Provider Selector" as ProviderSelector
}

package "Data Storage" as DataStorage #E1F5FE {
  database "PostgreSQL (RDS)" as PostgreSQL
  database "OpenSearch Vector Store" as OpenSearch
}

package "External APIs" as ExternalAPIs #FFECB3 {
  cloud "OpenAI API" as OpenAI
  cloud "D-ID API" as DID
  cloud "UBC AI Sandbox" as Sandbox
}

package "Auth & Integration" as AuthInt #F3E5F5 {
  rectangle "LTI Integration" as LTI
  rectangle "CWL Auth" as CWL
}

package "Logging & Monitoring" as LogMon #FAFAFA {
  rectangle "Graylog" as Graylog
  rectangle "Oracle APEX" as APEX
  rectangle "Learning Record Store" as LRS
}

actor "Users" as Users

' Connections
Users --> Frontend
Frontend --> Backend : REST API calls
Backend --> DataStorage : Data read/write
Backend --> ExternalAPIs : API integration
Backend --> AuthInt : Auth & session mgmt
Backend --> LogMon : Logging events

ReactApp --> Redux : State management
ReactApp --> ShadUI : UI components
ReactApp --> Tailwind : Styling
ReactApp --> Framer : Animations

FastAPI --> Uvicorn : Served by
FastAPI --> PromptMgmt : Manages
FastAPI --> ErrorHandling : Implements
FastAPI --> ProviderSelector : Configures

OpenSearch --> PostgreSQL : Indexes from

@enduml`;

// Data flow diagram
const dataFlowDiagram = `@startuml Data Flow
!define RECTANGLE class

' Use a more modern style
skinparam backgroundColor white
skinparam handwritten false
skinparam DefaultFontName "Arial"
skinparam ArrowColor #666666
skinparam shadowing false

' Main components
actor "Student" as Student
actor "Faculty" as Faculty
rectangle "Frontend Application" as Frontend
rectangle "Backend API" as Backend
rectangle "OpenAI API" as OpenAI
rectangle "D-ID API" as DID
database "PostgreSQL DB" as DB
database "OpenSearch Vector Store" as VectorStore
rectangle "LRS" as LRS

' Data flow
Student --> Frontend : 1. Student interacts with interface
Faculty --> Frontend : 1. Faculty creates cases
Frontend --> Backend : 2. Sends requests
Backend --> OpenAI : 3a. Sends prompts
OpenAI --> Backend : 4a. Returns AI responses
Backend --> DID : 3b. Requests avatar animation
DID --> Backend : 4b. Returns animated avatar response
Backend --> DB : 5. Logs interactions
Backend --> VectorStore : 6. Stores embeddings
Backend --> LRS : 7. Logs learning records
Backend --> Frontend : 8. Returns integrated response
Frontend --> Student : 9. Displays response to student

note right of Backend
  Responses include:
  - Virtual patient dialogue
  - Preceptor guidance
  - Clinical reasoning help
  - Differential diagnosis
end note

@enduml`;

// User journey diagram
const userJourneyDiagram = `@startuml User Journey
!define RECTANGLE class

' Use a more modern style
skinparam backgroundColor white
skinparam handwritten false
skinparam DefaultFontName "Arial"
skinparam ArrowColor #666666
skinparam shadowing false

' Main components
actor "Student" as Student
actor "Faculty" as Faculty
rectangle "LMS / Entrada" as LMS
rectangle "Patient Lab Application" as App
rectangle "OpenAI API" as OpenAI
rectangle "D-ID API" as DID
database "Database" as DB

' Student journey
Student -> LMS : 1. Log in to LMS
LMS -> App : 2. Launch via LTI
App -> Student : 3. Present patient cases
Student -> App : 4. Select a case
App -> DB : 5. Load case content
App -> Student : 6. Present simulated patient
Student -> App : 7. Interview virtual patient
App -> OpenAI : 8. Send user query
OpenAI -> App : 9. Generate patient response
App -> DID : 10. Generate avatar response
DID -> App : 11. Return animated avatar
App -> Student : 12. Display response
Student -> App : 13. Request guidance from preceptor
App -> OpenAI : 14. Generate preceptor response
App -> Student : 15. Provide clinical reasoning guidance
Student -> App : 16. Submit diagnosis and plan
App -> OpenAI : 17. Generate feedback
App -> Student : 18. Display graded feedback
Student -> App : 19. Export chat transcript

' Faculty journey (simplified)
Faculty -> LMS : A. Log in to LMS
LMS -> App : B. Launch author interface
App -> Faculty : C. Present case builder
Faculty -> App : D. Create/edit patient case
App -> DB : E. Save case data
Faculty -> App : F. Configure rubric
App -> DB : G. Save evaluation criteria
Faculty -> App : H. Share case URL with students
Faculty -> App : I. View analytics dashboard

note right of App
  Longitudinal care scenarios:
  Previous chat history is loaded if 
  enabled for this case
end note

@enduml`;

// List of available diagrams
export const diagramItems: DiagramItem[] = [
  {
    id: 'system-context',
    title: 'System Context Diagram',
    description: 'High-level view showing the Patient Lab application and its interactions with external systems',
    code: systemContextDiagram
  },
  {
    id: 'technical-architecture',
    title: 'Technical Architecture',
    description: 'Technical components and their relationships within the Patient Lab application',
    code: technicalArchitectureDiagram
  },
  {
    id: 'data-flow',
    title: 'Data Flow Diagram',
    description: 'How data flows through the system from user input to response',
    code: dataFlowDiagram
  },
  {
    id: 'user-journey',
    title: 'User Journey',
    description: 'Step-by-step user journey for students and faculty',
    code: userJourneyDiagram
  }
];

/**
 * Get a diagram by its ID
 */
export function getDiagramById(id: string): DiagramItem | undefined {
  return diagramItems.find(diagram => diagram.id === id);
}

/**
 * Get all available diagrams
 */
export function getAllDiagrams(): DiagramItem[] {
  return diagramItems;
} 