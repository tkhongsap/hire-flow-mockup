import { useState } from "react";
import { BarChart3, Lightbulb, AlertTriangle, UserCheck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { mockCandidates } from "@/lib/mock-data";

export function DecisionAssistant() {
  const [candidates] = useState(mockCandidates);

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-accent";
    if (score >= 80) return "text-primary";
    return "text-orange-600";
  };

  const getRecommendationBadge = (score: number) => {
    if (score >= 90) return { label: "Hire", variant: "default" as const, color: "bg-green-100 text-green-700" };
    if (score >= 80) return { label: "Consider", variant: "secondary" as const, color: "bg-yellow-100 text-yellow-700" };
    return { label: "Pass", variant: "outline" as const, color: "bg-red-100 text-red-700" };
  };

  return (
    <div id="decision-assistant" className="mb-20">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Decision Assistant</h3>
              <p className="opacity-90">Data-driven candidate comparison and selection</p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <BarChart3 className="text-2xl w-8 h-8" />
            </div>
          </div>
        </div>
        
        <div className="p-6">
          {/* Comparison Table */}
          <div className="mb-6">
            <h4 className="font-semibold text-slate-900 mb-4">Top 3 Candidates Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-medium text-slate-700">Candidate</th>
                    <th className="text-left p-4 font-medium text-slate-700">Overall Score</th>
                    <th className="text-left p-4 font-medium text-slate-700">Technical Skills</th>
                    <th className="text-left p-4 font-medium text-slate-700">Experience</th>
                    <th className="text-left p-4 font-medium text-slate-700">Culture Fit</th>
                    <th className="text-left p-4 font-medium text-slate-700">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {candidates.map((candidate, index) => {
                    const recommendation = getRecommendationBadge(candidate.overallScore || 0);
                    return (
                      <tr key={candidate.id} className="border-t border-gray-200">
                        <td className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                              {candidate.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="font-medium text-slate-900">{candidate.name}</div>
                              <div className="text-sm text-secondary">{candidate.title.split(' ').slice(0, 2).join(' ')}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className={`text-xl font-bold ${getScoreColor(candidate.overallScore || 0)}`}>
                            {candidate.overallScore}%
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <Progress value={candidate.technicalScore || 0} className="w-16 h-2" />
                            <span className="text-sm">{candidate.technicalScore}%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <Progress value={candidate.experienceScore || 0} className="w-16 h-2" />
                            <span className="text-sm">{candidate.experienceScore}%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <Progress value={candidate.cultureFitScore || 0} className="w-16 h-2" />
                            <span className="text-sm">{candidate.cultureFitScore}%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`px-3 py-1 text-sm rounded-full ${recommendation.color}`}>
                            {recommendation.label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* AI Insights */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h5 className="font-semibold text-blue-900 mb-3">
                <Lightbulb className="inline mr-2 w-5 h-5" />
                AI Recommendation
              </h5>
              <p className="text-blue-800 mb-4">
                Siriporn Rattanakul emerges as the strongest candidate with exceptional marketing expertise and deep understanding of Thai beverage market. Her Chang Beer campaign experience makes her ideal for this senior marketing role.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-blue-700">
                  <UserCheck className="mr-2 w-4 h-4" />
                  Exceeds marketing experience requirements
                </div>
                <div className="flex items-center text-blue-700">
                  <UserCheck className="mr-2 w-4 h-4" />
                  Proven beverage industry background
                </div>
                <div className="flex items-center text-blue-700">
                  <UserCheck className="mr-2 w-4 h-4" />
                  Excellent cultural fit for Thai market
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h5 className="font-semibold text-amber-900 mb-3">
                <AlertTriangle className="inline mr-2 w-5 h-5" />
                Key Considerations
              </h5>
              <div className="space-y-3 text-sm">
                <div className="text-amber-800">
                  <strong>Salary Expectations:</strong> Siriporn's expectations align with ThaiBev's senior manager range
                </div>
                <div className="text-amber-800">
                  <strong>Start Date:</strong> Nattapong available immediately, Siriporn needs 6-week notice
                </div>
                <div className="text-amber-800">
                  <strong>Alternative:</strong> Nattapong shows strong sales potential but needs brand marketing training
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button className="bg-accent text-white hover:bg-green-700 flex-1">
              <UserCheck className="mr-2 w-4 h-4" />
              Select Siriporn Rattanakul
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white flex-1">
              <FileText className="mr-2 w-4 h-4" />
              Generate Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
