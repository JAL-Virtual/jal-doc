import React from "react";
import { Info, Clock, UserPlus, Repeat, Trash2 } from "lucide-react";

export default function ActivityRequirements() {
  return (
    <div className="max-w-2xl mx-auto px-2 py-8 space-y-8">

      {/* Card 1: Title & Info */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-100 to-blue-200 shadow-lg border border-blue-200">
        <div className="pt-6 px-6 pb-4">
          <div className="flex items-center gap-2 bg-blue-50 border border-blue-300 rounded-lg px-4 py-3 my-4 text-blue-900">
            <Info className="w-5 h-5" />
            <span>
              <span className="font-bold">Info:</span> To maintain an <span className="font-semibold">active, realistic roster</span>, all pilots must meet these minimum activity standards.
            </span>
          </div>
        </div>
      </div>

      {/* Card 2: New Pilot Onboarding */}
      <div className="rounded-2xl bg-gradient-to-r from-cyan-50 to-yellow-50 shadow-lg border border-cyan-100">
        <div className="pt-6 px-6 pb-4">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-cyan-700">
            <UserPlus className="w-5 h-5 text-cyan-600" /> 🆕 New Pilot Onboarding
          </h2>
          <ul className="ml-6 list-disc space-y-2 text-gray-800">
            <li>
              All new pilots must file <span className="font-bold">at least one PIREP (flight report) within 14 days</span> (2 weeks) of signup.
            </li>
            <li>
              If <span className="font-bold">no PIREP is filed within 14 days</span>, your account will be <span className="font-bold text-red-600">removed from the website</span>.
            </li>
          </ul>
        </div>
      </div>

      {/* Card 3: Ongoing Activity */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg border border-purple-100">
        <div className="pt-6 px-6 pb-4">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-purple-700">
            <Repeat className="w-5 h-5 text-purple-600" /> 🔄 Ongoing Activity (After First Flight)
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-center border rounded-lg shadow-sm bg-white/90">
              <thead>
                <tr className="bg-purple-100">
                  <th className="p-2">Period</th>
                  <th className="p-2">Requirement</th>
                  <th className="p-2">Status if Inactive</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">First 14 days</td>
                  <td className="p-2">File at least 1 PIREP</td>
                  <td className="p-2 text-red-700 font-medium">Account deleted if not met</td>
                </tr>
                <tr className="bg-purple-50">
                  <td className="p-2">Every 30 days</td>
                  <td className="p-2">File at least 1 PIREP every rolling 30 days</td>
                  <td className="p-2 text-yellow-700 font-medium">Placed in <span className="italic">Retired</span> status</td>
                </tr>
                <tr>
                  <td className="p-2">60+ days</td>
                  <td className="p-2">No flight for 60 days</td>
                  <td className="p-2 text-red-900 font-bold">Account permanently removed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="ml-6 mt-4 list-disc space-y-1 text-gray-800">
            <li>
              If your account is placed in <span className="font-semibold">Retired</span> status, you can <span className="underline">reactivate</span> it simply by filing a new PIREP.
            </li>
            <li>
              If you are <span className="font-semibold">inactive for 60 days or more</span> with no flights, your account will be <span className="font-bold text-red-600">permanently deleted</span>.
            </li>
          </ul>
        </div>
      </div>

      {/* Card 4: Timeline */}
      <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-indigo-50 shadow-lg border border-indigo-100">
        <div className="pt-6 px-6 pb-4">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-indigo-700">
            <Clock className="w-5 h-5 text-indigo-600" /> 📅 Activity Timeline
          </h2>
          <div className="rounded-lg bg-indigo-50 px-4 py-4 mb-3 border border-indigo-200">
            <pre className="whitespace-pre-wrap text-[16px] leading-tight font-mono text-indigo-900">
{`timeline
    title Account Activity and Status Changes
    Signup : Account Created
    14 Days : PIREP required, or account removed
    30 Days : Ongoing activity check; if no flight, status set to Retired
    60 Days : No activity, account permanently removed`}
            </pre>
            <div className="text-xs text-gray-500 mt-2">
              <span className="font-medium">Tip:</span> Copy this Mermaid code into your documentation site for a live timeline!
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8">
        <Trash2 className="inline w-4 h-4 mr-1" />
        Accounts inactive for 60+ days are removed to ensure roster quality.
      </div>
    </div>
  );
}
