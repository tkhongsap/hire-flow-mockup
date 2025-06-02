import { useState } from "react";
import { MessageSquare, Star, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { mockCandidates, mockInterviews, interviewQuestions, followUpQuestions } from "@/lib/mock-data";

export function InterviewCopilot() {
  const [currentCandidate] = useState(mockCandidates[0]);
  const [currentInterview] = useState(mockInterviews[0]);
  const [currentQuestion] = useState(interviewQuestions[2]);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < fullStars ? 'fill-current' : i === fullStars && hasHalfStar ? 'fill-current opacity-50' : ''}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <div id="interview-copilot" className="mb-20">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Interview Copilot</h3>
              <p className="opacity-90">Real-time interview guidance and candidate evaluation</p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <MessageSquare className="text-2xl w-8 h-8" />
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Interview Script */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-slate-900">Live Interview Session</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse-slow"></div>
                  <span className="text-sm text-secondary">Recording</span>
                </div>
              </div>
              
              {/* Current Question */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h5 className="font-medium text-blue-900 mb-2">Suggested Question #{currentInterview.currentQuestion}</h5>
                <p className="text-blue-800">"{currentQuestion}"</p>
              </div>
              
              {/* Follow-up Suggestions */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h5 className="font-medium text-slate-900 mb-3">AI-Powered Follow-ups</h5>
                <div className="space-y-2">
                  {followUpQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full text-left p-3 h-auto hover:border-primary transition-colors text-sm justify-start"
                    >
                      "{question}"
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Response Analysis */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-medium text-slate-900 mb-3">Real-time Response Analysis</h5>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary">Technical Accuracy</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={currentInterview.technicalAccuracy || 0} className="w-20 h-2" />
                      <span className="text-sm font-medium">{currentInterview.technicalAccuracy}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary">Communication Clarity</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={currentInterview.communicationClarity || 0} className="w-20 h-2" />
                      <span className="text-sm font-medium">{currentInterview.communicationClarity}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary">Problem-Solving Approach</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={currentInterview.problemSolvingApproach || 0} className="w-20 h-2" />
                      <span className="text-sm font-medium">{currentInterview.problemSolvingApproach}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Candidate Profile */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Candidate Profile</h4>
              
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-slate-900">{currentCandidate.name}</h5>
                  <p className="text-sm text-secondary">{currentCandidate.title}</p>
                </div>
                
                <div className="border-t pt-3">
                  <h6 className="text-sm font-medium text-slate-900 mb-2">Key Skills</h6>
                  <div className="flex flex-wrap gap-1">
                    {currentCandidate.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-3">
                  <h6 className="text-sm font-medium text-slate-900 mb-2">Interview Progress</h6>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-secondary">Questions Completed</span>
                      <span className="font-medium">{currentInterview.currentQuestion}/{currentInterview.totalQuestions}</span>
                    </div>
                    <Progress value={(currentInterview.currentQuestion / currentInterview.totalQuestions) * 100} className="h-2" />
                  </div>
                </div>
                
                <div className="border-t pt-3">
                  <h6 className="text-sm font-medium text-slate-900 mb-2">Overall Rating</h6>
                  <div className="flex items-center space-x-2">
                    {renderStars(parseFloat(currentInterview.overallRating || "0"))}
                    <span className="text-sm text-secondary">{currentInterview.overallRating}/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
