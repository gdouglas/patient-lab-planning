import React from 'react'
import { 
  FiUsers, 
  FiFolder, 
  FiCalendar, 
  FiPieChart, 
  FiPlus, 
  FiEdit, 
  FiEye, 
  FiSearch, 
  FiAlertCircle,
  FiClock,
  FiMessageSquare,
  FiAward,
  FiBell
} from 'react-icons/fi'

const FacultyDashboardWireframe: React.FC = () => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md max-w-6xl mx-auto">
      {/* Header with welcome message and notifications */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Faculty Dashboard</h2>
          <p className="text-muted-foreground">Welcome back, Dr. Miller</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <FiBell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">3</span>
          </div>
          <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
            DM
          </div>
        </div>
      </div>
      
      {/* Stats overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { title: "Active Cases", value: "12", icon: <FiFolder />, change: "+2" },
          { title: "Enrolled Students", value: "86", icon: <FiUsers />, change: "+5" },
          { title: "Avg. Case Completion", value: "78%", icon: <FiPieChart />, change: "+3%" },
          { title: "Scheduled Activities", value: "4", icon: <FiCalendar />, change: "Today" }
        ].map((stat, i) => (
          <div key={i} className="p-4 bg-card rounded-lg border flex items-start">
            <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center text-primary mr-3">
              {stat.icon}
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className="ml-2 text-xs text-green-500">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        {/* Left column - case management */}
        <div className="space-y-6">
          {/* My Cases section */}
          <div className="border rounded-lg p-5 bg-card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold flex items-center">
                <FiFolder className="mr-2 text-primary" />
                My Patient Cases
              </h3>
              <div className="flex gap-2">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Search cases" 
                    className="pl-9 pr-3 py-1.5 text-sm border rounded-md w-40 bg-background"
                  />
                </div>
                <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-sm flex items-center">
                  <FiPlus className="h-4 w-4 mr-1" />
                  New Case
                </button>
              </div>
            </div>
            
            <div className="space-y-1">
              {[
                { title: "Chronic Kidney Disease - John Wong", status: "Published", students: 24, date: "Mar 15" },
                { title: "Migraine with Aura - Sarah Chen", status: "Published", students: 32, date: "Mar 12" },
                { title: "Diabetes Management - Michael Lee", status: "Draft", students: 0, date: "Mar 10" },
                { title: "Asthma Exacerbation - Priya Patel", status: "Published", students: 18, date: "Mar 5" },
                { title: "Depression Screening - Alex Johnson", status: "Review", students: 0, date: "Mar 2" }
              ].map((caseItem, i) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-muted rounded-md">
                  <div className="flex items-center">
                    <div className={`h-2 w-2 rounded-full mr-3 ${
                      caseItem.status === "Published" ? "bg-green-500" : 
                      caseItem.status === "Draft" ? "bg-amber-500" : "bg-blue-500"
                    }`}></div>
                    <span className="font-medium">{caseItem.title}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-muted-foreground">{caseItem.students} students</span>
                    <span className="text-sm text-muted-foreground">{caseItem.date}</span>
                    <div className="flex gap-2">
                      <button className="p-1.5 rounded-md hover:bg-secondary">
                        <FiEye className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-secondary">
                        <FiEdit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Student Performance */}
          <div className="border rounded-lg p-5 bg-card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold flex items-center">
                <FiPieChart className="mr-2 text-primary" />
                Student Performance Insights
              </h3>
              <button className="text-sm text-primary">View all</button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: "Average Completion Time", value: "16.2 min", change: "-1.4 min" },
                  { label: "Diagnostic Accuracy", value: "73%", change: "+5%" },
                  { label: "Questions Asked", value: "8.3 avg", change: "+0.5" }
                ].map((metric, i) => (
                  <div key={i} className="p-3 bg-muted rounded-md">
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                    <div className="flex items-baseline mt-1">
                      <div className="text-xl font-bold">{metric.value}</div>
                      <div className="text-xs ml-2 text-green-500">{metric.change}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-muted p-4 rounded-md flex justify-center items-center">
                <div className="text-center text-sm text-muted-foreground">
                  Performance graph visualization <br />
                  (Line chart: Students progress over time)
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 p-3 rounded-md flex items-start">
                <FiAlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-800">Attention Required</p>
                  <p className="text-xs text-amber-700">5 students are struggling with the Migraine with Aura case. Consider providing additional resources.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right column - activities & notifications */}
        <div className="space-y-6">
          {/* Calendar & schedule */}
          <div className="border rounded-lg p-5 bg-card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold flex items-center">
                <FiCalendar className="mr-2 text-primary" />
                Upcoming Activities
              </h3>
              <button className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm flex items-center">
                <FiPlus className="h-4 w-4 mr-1" />
                Add
              </button>
            </div>
            
            <div className="space-y-3">
              {[
                { time: "1:00 PM", title: "Clinical Skills Review Session", type: "Meeting" },
                { time: "3:30 PM", title: "New Case Release: Pediatric Asthma", type: "Task" },
                { time: "Tomorrow", title: "Faculty Development Workshop", type: "Event" },
                { time: "Friday", title: "End of Module Assessment", type: "Deadline" }
              ].map((event, i) => (
                <div key={i} className="flex items-center p-2 hover:bg-muted rounded-md">
                  <div className={`h-8 w-1 rounded mr-3 ${
                    event.type === "Meeting" ? "bg-blue-500" :
                    event.type === "Task" ? "bg-purple-500" :
                    event.type === "Event" ? "bg-green-500" : "bg-red-500"
                  }`}></div>
                  <div className="flex flex-col">
                    <span className="font-medium">{event.title}</span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <FiClock className="h-3 w-3 mr-1" />
                      {event.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Student Support */}
          <div className="border rounded-lg p-5 bg-card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold flex items-center">
                <FiMessageSquare className="mr-2 text-primary" />
                Student Support
              </h3>
              <button className="text-sm text-primary">View all</button>
            </div>
            
            <div className="space-y-3">
              {[
                { student: "Jordan Lee", message: "Question about case diagnostic criteria", time: "1h ago", unread: true },
                { student: "Samantha Wong", message: "Request for extension on assessment", time: "3h ago", unread: true },
                { student: "David Kim", message: "Feedback on case difficulty level", time: "Yesterday", unread: false }
              ].map((item, i) => (
                <div key={i} className="flex items-start p-3 hover:bg-muted rounded-md">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-primary-foreground font-bold text-xs mr-3">
                    {item.student.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.student}</span>
                      <span className="text-xs text-muted-foreground">{item.time}</span>
                    </div>
                    <p className="text-sm mt-1 text-muted-foreground line-clamp-1">{item.message}</p>
                  </div>
                  {item.unread && <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>}
                </div>
              ))}
              <button className="w-full p-2 bg-secondary text-secondary-foreground rounded-md text-sm mt-2">
                Compose Message
              </button>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="border rounded-lg p-5 bg-card">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <FiPlus />, label: "New Case" },
                { icon: <FiUsers />, label: "Manage Students" },
                { icon: <FiAward />, label: "Grade Assessments" },
                { icon: <FiPieChart />, label: "View Reports" }
              ].map((action, i) => (
                <button key={i} className="p-3 bg-muted hover:bg-secondary rounded-md flex flex-col items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-background flex items-center justify-center mb-1">
                    {action.icon}
                  </div>
                  <span className="text-xs">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FacultyDashboardWireframe 