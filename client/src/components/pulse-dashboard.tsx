import { useState } from "react";
import { Heart, TrendingUp, Bell, AlertTriangle, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { mockEmployees, engagementFactors } from "@/lib/mock-data";

export function PulseDashboard() {
  const [employees] = useState(mockEmployees);

  const metrics = [
    { label: "ความพึงพอใจโดยรวม", value: "8.4/10", change: "↑ 0.3 จากเดือนที่แล้ว", color: "text-green-600", bgColor: "bg-green-50 border-green-200" },
    { label: "คะแนนการมีส่วนร่วม", value: "87%", change: "↑ 5% จากเดือนที่แล้ว", color: "text-blue-600", bgColor: "bg-blue-50 border-blue-200" },
    { label: "ความเสี่ยงลาออกสูง", value: "12%", change: "↓ 3% จากเดือนที่แล้ว", color: "text-amber-600", bgColor: "bg-amber-50 border-amber-200" },
    { label: "การคงอยู่ 90 วัน", value: "94%", change: "↑ 2% จากไตรมาสที่แล้ว", color: "text-purple-600", bgColor: "bg-purple-50 border-purple-200" },
  ];

  const getRiskColor = (score: number) => {
    if (score <= 25) return { color: "text-green-700", bgColor: "bg-green-500", label: "ความเสี่ยงต่ำ" };
    if (score <= 50) return { color: "text-yellow-700", bgColor: "bg-yellow-500", label: "ความเสี่ยงปานกลาง" };
    return { color: "text-red-700", bgColor: "bg-red-500", label: "ความเสี่ยงสูง" };
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-blue-500"; 
    if (score >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div id="pulse-dashboard" className="mb-20">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-teal-700 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Pulse + Flight-Risk Dashboard</h3>
              <p className="opacity-90">Real-time employee engagement and retention insights</p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <Heart className="text-2xl w-8 h-8" />
            </div>
          </div>
        </div>
        
        <div className="p-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className={`${metric.bgColor} border rounded-lg p-4 text-center`}>
                <div className={`text-2xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                <div className={`text-sm ${metric.color.replace('600', '700')}`}>{metric.label}</div>
                <div className={`text-xs ${metric.color} mt-1`}>{metric.change}</div>
              </div>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Employee List with Risk Scores */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Recent Hires - Risk Assessment</h4>
              <div className="space-y-4">
                {employees.map((employee) => {
                  const riskInfo = getRiskColor(employee.flightRiskScore || 0);
                  
                  return (
                    <div key={employee.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h5 className="font-medium text-slate-900">{employee.name}</h5>
                            <p className="text-sm text-secondary">{employee.role}</p>
                            <p className="text-xs text-secondary">Day {employee.tenure} of 90</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className={`w-3 h-3 ${riskInfo.bgColor} rounded-full`}></span>
                            <span className={`text-sm font-medium ${riskInfo.color}`}>{riskInfo.label}</span>
                          </div>
                          <div className="text-xs text-secondary">Risk Score: {employee.flightRiskScore}%</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-medium text-green-600">{employee.satisfactionScore}</div>
                          <div className="text-secondary">Satisfaction</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium text-blue-600">{employee.productivityScore}%</div>
                          <div className="text-secondary">Productivity</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium text-purple-600">{employee.integrationScore}%</div>
                          <div className="text-secondary">Team Integration</div>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex flex-wrap gap-1">
                        {(employee.tags || []).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Action Items & Insights */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">AI-Powered Insights & Actions</h4>
              
              {/* Critical Actions */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <h5 className="font-semibold text-red-900 mb-3">
                  <AlertTriangle className="inline mr-2 w-5 h-5" />
                  Immediate Actions Required
                </h5>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-medium text-red-800">Marcus Rodriguez - Integration Support</div>
                    <div className="text-red-700">Schedule 1:1 with team lead, consider peer buddy program</div>
                    <Button size="sm" className="mt-2 bg-red-100 text-red-700 hover:bg-red-200 h-6 text-xs">
                      Schedule Meeting
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Positive Trends */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h5 className="font-semibold text-green-900 mb-3">
                  <ThumbsUp className="inline mr-2 w-5 h-5" />
                  Positive Trends
                </h5>
                <div className="space-y-2 text-sm">
                  <div className="text-green-800">• Overall satisfaction up 8% this quarter</div>
                  <div className="text-green-800">• 90-day retention improved significantly</div>
                  <div className="text-green-800">• Sarah and Lisa showing exceptional progress</div>
                </div>
              </div>
              
              {/* Engagement Analytics */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h5 className="font-medium text-slate-900 mb-3">Engagement Factors</h5>
                <div className="space-y-3">
                  {engagementFactors.map((factor, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-secondary">{factor.name}</span>
                        <span className="font-medium">{factor.score}/10</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getProgressColor(factor.score)}`}
                          style={{ width: `${factor.score * 10}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button className="bg-accent text-white hover:bg-green-700 flex-1">
              <TrendingUp className="mr-2 w-4 h-4" />
              View Full Analytics
            </Button>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white flex-1">
              <Bell className="mr-2 w-4 h-4" />
              Set Alert Thresholds
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
