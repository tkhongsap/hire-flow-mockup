import { useState } from "react";
import { Handshake, File, Edit, Shield, Laptop, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockCandidates, mockOffers, mockOnboardingPlans } from "@/lib/mock-data";

export function OfferCraft() {
  const [candidate] = useState(mockCandidates[0]);
  const [offer] = useState(mockOffers[0]);
  const [onboardingPlan] = useState(mockOnboardingPlans[0]);

  const benefits = [
    { icon: Shield, title: "ประกันสุขภาพเบี้ยแพง", description: "ครอบคลุม 100% รวมครอบครัว", color: "text-blue-600" },
    { icon: Laptop, title: "ค่าน้ำมันรถยนต์", description: "฿60,000 ต่อปี", color: "text-purple-600" },
    { icon: GraduationCap, title: "งบพัฒนาบุคลากร", description: "฿90,000 ต่อปี", color: "text-green-600" },
  ];

  const onboardingPhases = [
    {
      title: "Week 1-2: Foundation",
      badge: "Setup",
      badgeColor: "bg-blue-100 text-blue-700",
      tasks: onboardingPlan.week1Tasks,
      color: "text-blue-500"
    },
    {
      title: "Week 3-6: Integration", 
      badge: "Learning",
      badgeColor: "bg-green-100 text-green-700",
      tasks: onboardingPlan.week3to6Tasks,
      color: "text-green-500"
    },
    {
      title: "Week 7-12: Ownership",
      badge: "Leadership", 
      badgeColor: "bg-purple-100 text-purple-700",
      tasks: onboardingPlan.week7to12Tasks,
      color: "text-purple-500"
    },
  ];

  const successMetrics = [
    { label: "Setup Completion", value: `${onboardingPlan.setupCompletion}%`, color: "text-primary" },
    { label: "Team Integration", value: `${onboardingPlan.teamIntegration}/5`, color: "text-accent" },
    { label: "Features Delivered", value: onboardingPlan.featuresDelivered, color: "text-orange-600" },
    { label: "Mentorship Sessions", value: onboardingPlan.mentorshipSessions, color: "text-purple-600" },
  ];

  return (
    <div id="offercraft" className="mb-20">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">OfferCraft + 90-Day Accelerator</h3>
              <p className="opacity-90">Personalized offers and comprehensive onboarding plans</p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <Handshake className="text-2xl w-8 h-8" />
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Offer Package */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Customized Offer Package</h4>
              
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="font-semibold text-slate-900">{candidate.name}</h5>
                  <Badge className="bg-orange-100 text-orange-700">Senior Level</Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">เงินเดือนพื้นฐาน</span>
                    <span className="font-semibold text-slate-900">฿{offer.baseSalary.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">โบนัสประจำปี</span>
                    <span className="font-semibold text-slate-900">฿{(offer.bonus || 0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">หุ้นบริษัท</span>
                    <span className="font-semibold text-slate-900">{offer.equity}% (4 ปี)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">โบนัสเซ็นสัญญา</span>
                    <span className="font-semibold text-slate-900">฿{(offer.signingBonus || 0).toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-900">มูลค่ารวมปีแรก</span>
                      <span className="text-xl font-bold text-orange-600">
                        ฿{(offer.baseSalary + (offer.bonus || 0) + (offer.signingBonus || 0)).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Benefits Highlights */}
              <div className="space-y-3">
                <h5 className="font-medium text-slate-900">Key Benefits & Perks</h5>
                <div className="grid grid-cols-1 gap-3">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Icon className={`${benefit.color} w-5 h-5`} />
                        <div>
                          <div className="font-medium text-sm">{benefit.title}</div>
                          <div className="text-xs text-secondary">{benefit.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* 90-Day Plan */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">90-Day Success Plan</h4>
              
              <div className="space-y-4">
                {onboardingPhases.map((phase, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-medium text-slate-900">{phase.title}</h5>
                      <Badge className={phase.badgeColor}>{phase.badge}</Badge>
                    </div>
                    <ul className="space-y-2 text-sm text-secondary">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-center">
                          <div className={`w-2 h-2 ${phase.color} rounded-full mr-2 flex-shrink-0`}></div>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* Success Metrics */}
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-slate-900 mb-3">Success Metrics</h5>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {successMetrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className={`font-semibold ${metric.color}`}>{metric.value}</div>
                      <div className="text-secondary">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button className="bg-orange-600 text-white hover:bg-orange-700 flex-1">
              <File className="mr-2 w-4 h-4" />
              Generate Offer Letter
            </Button>
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white flex-1">
              <Edit className="mr-2 w-4 h-4" />
              Customize Package
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
