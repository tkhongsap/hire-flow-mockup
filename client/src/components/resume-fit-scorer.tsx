import { useState } from "react";
import { Search, Upload, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { mockCandidates } from "@/lib/mock-data";

export function ResumeFitScorer() {
  const [candidates] = useState(mockCandidates);

  const jobRequirements = [
    "7+ years marketing experience in F&B/FMCG",
    "Digital marketing and social media expertise", 
    "Brand management and campaign development",
    "Thai market knowledge and cultural understanding"
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-accent";
    if (score >= 80) return "text-primary";
    if (score >= 70) return "text-orange-600";
    return "text-red-600";
  };

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 90) return "default";
    if (score >= 80) return "secondary";
    return "outline";
  };

  return (
    <div id="resume-scorer" className="mb-20">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Resume-Fit Scorer</h3>
              <p className="opacity-90">AI-powered candidate screening and ranking</p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <Search className="text-2xl w-8 h-8" />
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Job Requirements */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Job Requirements</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h5 className="font-medium mb-2">Senior Digital Marketing Manager</h5>
                <div className="space-y-2 text-sm text-secondary">
                  {jobRequirements.map((req, index) => (
                    <div key={index}>• {req}</div>
                  ))}
                </div>
              </div>
              
              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="mx-auto text-3xl text-gray-400 mb-4 w-12 h-12" />
                <p className="text-secondary mb-2">Drop resumes here or click to upload</p>
                <Button variant="ghost" className="text-primary hover:text-blue-700">
                  Browse Files
                </Button>
              </div>
            </div>
            
            {/* Candidate Scores */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Candidate Rankings</h4>
              <div className="space-y-4">
                {candidates.map((candidate) => (
                  <div key={candidate.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h5 className="font-medium text-slate-900">{candidate.name}</h5>
                        <p className="text-sm text-secondary">{candidate.title}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${getScoreColor(candidate.overallScore || 0)}`}>
                          {candidate.overallScore}%
                        </div>
                        <div className="text-xs text-secondary">Match Score</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {candidate.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant={getScoreBadgeVariant(candidate.overallScore || 0)}>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Progress value={candidate.overallScore || 0} className="h-2" />
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-6 bg-primary text-white hover:bg-blue-700">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Detailed Analysis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
