/**
 * Diagram service for managing PlantUML diagrams
 */

// Export the DiagramItem interface
export interface DiagramItem {
  id: string;
  title: string;
  description: string;
  code: string;
}

// System Context Diagram
const systemContextDiagram = `@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Context.puml
!option handwritten false

title System Context Diagram - Patient Lab

Person(student, "Medical Student", "Uses the Patient Lab to practice clinical skills")
Person(faculty, "Faculty Member", "Creates and manages virtual patient cases")

System(patientLabApp, "Patient Lab Application", "Provides virtual patient interaction experience")

System_Ext(lms, "Learning Management System", "Entrada LMS for course management")
System_Ext(openaiApi, "OpenAI API", "Provides NLP capabilities")
System_Ext(didApi, "D-ID API", "Animated avatar generation")
System_Ext(cwl, "UBC CWL", "Campus-wide login authentication")

Rel(student, patientLabApp, "Interacts with virtual patients")
Rel(faculty, patientLabApp, "Creates and manages cases")
Rel(patientLabApp, openaiApi, "Generates responses")
Rel(patientLabApp, didApi, "Creates animated avatars")
Rel(patientLabApp, lms, "Authenticates via LTI")
Rel(patientLabApp, cwl, "Authenticates users")

@enduml`

// Technical Architecture Diagram
const technicalArchitectureDiagram = `@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml
!option handwritten false

title Technical Architecture - Patient Lab

Container_Boundary(frontend, "Frontend System") {
  Component(ui, "User Interface", "React, Shad UI, Tailwind CSS", "Provides user interface for interaction")
  Component(stateManagement, "State Management", "Redux", "Manages application state")
  Component(animation, "Animation", "Framer", "Handles animations and transitions")
}

Container_Boundary(backend, "Backend System") {
  Component(api, "API Gateway", "FastAPI", "Handles API requests")
  Component(business, "Business Logic", "Python", "Implements business rules")
  Component(integration, "External Integrations", "httpx", "Communicates with external APIs")
}

Container_Boundary(realtime, "Real-Time Communication") {
  Component(webrtc, "WebRTC", "Browser API", "Handles real-time audio transmission")
  Component(websocket, "WebSocket", "FastAPI", "Signaling for WebRTC")
}

Container_Boundary(storage, "Data Storage") {
  ComponentDb(database, "PostgreSQL", "RDS", "Stores user and session data")
  ComponentDb(vectorStore, "OpenSearch", "AWS", "Vector storage for RAG")
}

Container_Boundary(auth, "Authentication") {
  Component(ltiAuth, "LTI Authentication", "FastAPI", "Authenticates via LMS")
  Component(cwlAuth, "CWL Authentication", "FastAPI", "Authenticates via CWL")
}

System_Ext(openaiApi, "OpenAI API", "Provides NLP capabilities")
System_Ext(didApi, "D-ID API", "Animated avatar generation")

Rel(ui, stateManagement, "Uses")
Rel(ui, animation, "Uses")
Rel(ui, api, "Makes API calls", "HTTPS")
Rel(ui, webrtc, "Streams audio", "WebRTC")
Rel(webrtc, websocket, "Signaling")
Rel(api, business, "Invokes")
Rel(business, integration, "Uses")
Rel(integration, openaiApi, "Calls", "HTTPS")
Rel(integration, didApi, "Calls", "HTTPS")
Rel(business, database, "Reads/Writes")
Rel(business, vectorStore, "Queries")
Rel(api, ltiAuth, "Authenticates LTI")
Rel(api, cwlAuth, "Authenticates CWL")

@enduml`

// Data Flow Diagram
const dataFlowDiagram = `@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Dynamic.puml
!option handwritten false

title Data Flow Diagram - Patient Lab

Actor(student, "Medical Student")
Boundary(frontend, "Frontend")
Control(api, "API Gateway")
Control(nlp, "NLP Processing")
Control(avatar, "Avatar Generation")
Database(db, "Database")

student -> frontend : 1. Speaks or types query
frontend -> api : 2. Sends request
api -> db : 3. Logs interaction
api -> nlp : 4. Processes with OpenAI
nlp -> api : 5. Returns response
api -> avatar : 6. Generates avatar with D-ID
avatar -> api : 7. Returns animated response
api -> frontend : 8. Returns complete response
frontend -> student : 9. Displays avatar and plays audio

@enduml`

// User Journey Diagram
const userJourneyDiagram = `@startuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Dynamic.puml
!option handwritten false

title User Journey - Patient Lab

Actor(student, "Student")
Actor(faculty, "Faculty")
Boundary(lms, "LMS")
Boundary(patientLab, "Patient Lab")
Control(cases, "Case Management")
Control(interaction, "Patient Interaction")
Database(db, "Data Storage")

faculty -> cases : 1. Creates patient case
cases -> db : 2. Stores case data
student -> lms : 3. Accesses course
lms -> patientLab : 4. Launches via LTI
patientLab -> interaction : 5. Selects patient case
interaction -> student : 6. Interacts with virtual patient
student -> interaction : 7. Conducts interview
interaction -> db : 8. Records interaction
db -> faculty : 9. Provides data for assessment

@enduml`

// New AWS Architecture Diagram
const awsArchitectureDiagram = `@startuml
!option handwritten false
skinparam defaultFontName Arial
skinparam rectangleBorderColor #666666
skinparam componentBorderColor #666666
skinparam databaseBorderColor #666666
skinparam arrowColor #666666
skinparam BackgroundColor #FFFFFF

title AWS Architecture - Patient Lab Application

rectangle "End Users" {
  actor "Students" as students
  actor "Faculty" as faculty
}

rectangle "Content Delivery" {
  [CloudFront CDN] as cdn
  [S3 Static Website] as s3frontend
}

rectangle "Application Layer" {
  [Application Load Balancer] as alb
  
  rectangle "ECS Fargate Cluster" {
    [API Container (FastAPI)] as api
    [WebSocket Container] as websocket
  }
}

rectangle "Data Storage" {
  database "RDS PostgreSQL" as postgres
  database "OpenSearch Service" as opensearch
  [S3 Media Bucket] as s3media
}

rectangle "External Services" {
  [OpenAI API] as openai
  [D-ID API] as did
  
  rectangle "UBC Systems" {
    [CWL Authentication] as cwl
    [LMS (Entrada)] as lms
  }
}

' Connections
students --> cdn
faculty --> cdn
cdn --> s3frontend
s3frontend --> alb
alb --> api
alb --> websocket

api --> postgres : "User/Session Data"
api --> opensearch : "Vector Queries"
api --> s3media : "Media Storage"

api --> openai : "NLP Processing"
api --> did : "Avatar Generation"
api --> cwl : "Authentication"
api --> lms : "LTI Integration"

note bottom of api
  FastAPI application handling:
  - REST endpoints
  - Business logic
  - External integrations
end note

note bottom of postgres
  Stores:
  - User data
  - Session information
  - Case configurations
end note

note bottom of opensearch
  Vector database for:
  - RAG-powered recommendations
  - Semantic search
end note

@enduml`

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
  },
  {
    id: 'aws-architecture',
    title: 'AWS Architecture',
    description: 'Detailed AWS cloud architecture for hosting the Patient Lab application',
    code: awsArchitectureDiagram
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