## Application Planning Document

### 1. Project Overview

A resilient, low-latency educational application enabling medical students to practice clinical interviews through AI-powered virtual patients and receive guidance from a virtual preceptor. Faculty can create, name, and share customized cases and define evaluation rubrics. Learners can export and share conversations, create differential diagnoses (DDx), patient encounter plans (PEP notes), receive graded feedback, and interact with the system in compliance with FIPPA data privacy standards and UBC's AI usage policies. Comprehensive error handling and reporting mechanisms ensure reliability and user confidence.

### 2. Technical Stack

- **Frontend:** React with Redux for state management, Shad UI components, Tailwind CSS for styling, and Framer for animations
- **Backend:** FastAPI served by Uvicorn
- **TLS** encryption
- **Avatar Animation:** D-ID (real-time video avatars)
- **Hosting:** AWS (Canadian Data Centre)
- **Authentication:** LTI (Entrada LMS) with individual CWL access available
- **AI Integration:** 
  - Multiple provider support (OpenAI, UBC AI Sandbox, others)
  - Model configuration interface for each API endpoint
  - Fallback mechanisms between providers
- **DB:** PostgreSQL (Amazon RDS)
- **Vector Store:** OpenSearch Service for RAG-powered preceptor resource recommendations

### 3. Features

#### 3.1 Chatbot Interaction

- Voice-to-voice conversational AI
- Natural language understanding (OpenAI API)
- Text-to-speech output
- Speech-to-text input
- Real-time avatar response via D-ID
- Progressive enhancement from text messaging to realtime video chat
- Chats can be configured to access previous chats, allowing for longitudinal patient care. This is configured in the individual patient lab.

#### 3.2 Virtual Preceptor

- Available for support and clarification
- Responds with clinical reasoning guidance
- Uses RAG (retrieval-augmented generation) to reference course material
- Designed to help users "think like a doctor"

#### 3.3 Faculty Case Authoring

Faculty can:

- Create and name new patient interaction cases
- Specify avatar from a predefined gallery
- Add structured case metadata (e.g., chief complaint, must-not-miss diagnosis)
- Define and edit customized evaluation rubrics
- Configure suggested messages/questions for students to use during the interview
- Generate a shareable URL for student access
- Case access controlled by LTI (Entrada) or CWL login
- Specify if the lab has longitudinal care (memory)
- Choose an avatar from pre-generated options

#### 3.4 System Prompts

Structured to define model behavior:

- Patient role (naturalistic responses)
- Preceptor role (clinical reasoning and references)
- Feedback prompt at end of session (evaluation and graded marks with qualifying feedback)

#### 3.5 Context Prompts

Response prompts are dynamically generated.

- If longitudinal chat is enabled in the lab, the previous chat will be added in the context. 
- If the context window gets long, summaries will be generated, and the conversation will be stored as a vector for RAG

#### 3.6 User Feedback and Interaction

- Learners can rate individual responses as good or bad
- Users can leave qualitative feedback
- Learners can export chat interactions as PDF or CSV
- Learners can share their chat interactions with peers or instructors
- Email notifications to users for important updates or session completions
- Learners can create and export differential diagnoses (DDx)
- Learners can create and export patient encounter plans (PEP notes)
- Suggested message options provide guidance during interviews
  - Faculty can configure suggested messages for each case
  - Context-sensitive suggestions appear based on the current conversation state
  - Helps students learn proper clinical questioning techniques
  - Students can click to use suggestions or type their own questions

#### 3.7 Analytics and Dashboards

- Students have access to analytics on their performance
- Faculty have access to analytics for their created cases
- Users can be added to other dashboards for broader analytics access

#### 3.8 Curricular Material Recommender

- The preceptor chatbot recommends material for learner
- Curricular material is scraped from the LMS

#### 3.9 AI Provider Configuration

- Dynamic switching between multiple AI providers (OpenAI, UBC AI Sandbox, others)
- Per-endpoint model configuration:
  - Configure specific models for patient role, preceptor role, and feedback
  - Adjust temperature, max tokens, and other model parameters
  - Set provider priorities and fallback sequences
- Provider health monitoring and automatic failover
- Cost optimization through intelligent routing
- Admin dashboard for monitoring usage across providers

### 4. Performance, Security, Error Management & Compliance

- Max 200 concurrent users expected
- Low latency goal (<1.5 seconds total loop)
- Strong API security (API key/tokens)
- Budget controls and usage monitoring (AWS free tier adherence)
- Optional WebSockets for future streaming use
- Compliance with FIPPA data privacy standards:
  - Data encrypted at rest and in transit (TLS 1.2+)
  - Data residency maintained in Canadian AWS data centre
  - Transparent privacy notices and consent mechanisms for data handling
- Adherence to UBC AI usage policy:
  - Conducted and approved Privacy Impact Assessment (PIA)
  - Ethical AI oversight and bias management
- Application registered as an LTI provider in the LMS Entrada enabling single sign-on
- UBC Campus Wide Login (CWL) used for direct sign-in
- Performance monitoring configured with Graylog
- Comprehensive error handling: Clear user-facing error messages specifying the issue and providing actionable follow-up, including a contact support email address for further assistance

### 5. Data Management

- Users can delete and export their data.
- Previous session data can be used by chatbots.
- Data retention and disposal policies clearly defined and documented

### 6. Logging & Analytics

- Log user interactions (messages) to an Oracle APEX application
- Log session data to a to-be-determined Learning Record Store (LRS) in xAPI format
- Support for dashboard views for faculty and student insights
- Comprehensive audit logging for all administrative and user actions

### 7. Known Constraints

- Voice latency needs continued optimization
- Shareable URL and LTI integration need close coordination with Entrada
- Faculty authoring workflow and UI in early planning phase
- Dashboard for learners and faculty is in early planning phase

