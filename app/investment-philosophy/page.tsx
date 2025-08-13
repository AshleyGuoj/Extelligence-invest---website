import type { Metadata } from 'next'
import InvestmentPhilosophyHero from '@/components/InvestmentPhilosophyHero'
import InvestmentSection from '@/components/InvestmentSection'

export const metadata: Metadata = {
  title: 'Investment Philosophy',
  description: 'Empower the next generation of AI ventures by connecting top-tier global talent with strategic capital from emerging markets.',
}

export default function InvestmentPhilosophyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <InvestmentPhilosophyHero />
      
      <main className="max-w-7xl mx-auto">
        {/* Core Mission */}
        <InvestmentSection
          title="Core Mission"
          className="section-padding"
        >
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
              <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                Empower the next generation of AI ventures by connecting top-tier global talent with strategic capital from emerging markets.
              </p>
            </div>
          </div>
        </InvestmentSection>

        {/* Investment Thesis */}
        <InvestmentSection
          title="Investment Thesis"
          className="section-padding bg-white/50"
        >
          <div className="space-y-12">
            {/* Global Strategic Triangle */}
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v6l7 5 7-5V7l-7-5z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">1. Global Strategic Triangle</h3>
              </div>
              <p className="text-xl text-center text-gray-700 mb-8 font-medium">Talent – Capital – Opportunity</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-blue-800 mb-3">Talent</h4>
                  <p className="text-gray-700 leading-relaxed">The U.S. and China continue to be among the most active hubs for frontier AI talent. We maintain privileged access to both ecosystems through deep academic and institutional relationships.</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6 shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-purple-800 mb-3">Capital</h4>
                  <p className="text-gray-700 leading-relaxed">Emerging markets, including but not limited to the Middle East and Southeast Asia, are increasingly eager to deploy capital into frontier technologies. We are well-connected with these regions' sovereign and family office investors.</p>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-6 shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-amber-800 mb-3">Markets</h4>
                  <p className="text-gray-700 leading-relaxed">While the U.S. remains a dominant tech ecosystem, Asia and other emerging innovation markets are rapidly opening up. Our team has deep networks across both, enabling strategic deployment and local partnerships.</p>
                </div>
              </div>
              
              <div className="text-center mt-12 space-y-4">
                <div className="bg-gradient-to-r from-slate-100 to-gray-100 p-6 rounded-xl border border-gray-200">
                  <p className="text-lg text-gray-800 font-semibold">We are uniquely positioned at the intersection of global capital, deep talent networks, and cross-border market access.</p>
                  <p className="text-lg text-gray-800 font-semibold mt-2">We serve as the bridge between capital, talent, and opportunity.</p>
                </div>
              </div>
            </div>

            {/* Dual Investment Tracks */}
            <div className="space-y-8">
              <div className="flex items-center justify-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">2. Dual Investment Tracks</h3>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-lg border border-green-200">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <h4 className="text-xl font-bold text-green-800">Venture Creation: Incubating Frontier AI Startups</h4>
                  </div>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Partner with world-class technical founders to launch transformative AI companies.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Provide not just capital, but complete enablement:</span>
                    </li>
                  </ul>
                  <div className="ml-8 mt-4 space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">Founding CTO and product teams</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">Sales and ops infrastructure</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">Legal support and IPO/SPAC readiness</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-6 italic font-medium">Inspired by models like AI Fund and Pioneer Square Labs.</p>
                </div>

                <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl p-8 shadow-lg border border-violet-200">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">B</span>
                    </div>
                    <h4 className="text-xl font-bold text-violet-800">AI Transformation of Traditional Businesses</h4>
                  </div>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Acquire legacy businesses in logistics, healthcare, B2B services, and infuse proprietary AI to drive efficiency;</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Create vertical-specific platforms through roll-up or targeted transformation;</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Unlock value through restructuring, automation, and scale.</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-violet-100 rounded-lg border border-violet-300">
                    <p className="text-violet-800 font-bold">Goal: Become the leading AI-powered private equity arm.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InvestmentSection>

        {/* End-to-End Value Creation Capabilities */}
        <InvestmentSection
          title="3. End-to-End Value Creation Capabilities"
          className="section-padding bg-gradient-to-r from-cyan-50 to-blue-50"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-cyan-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                    <th className="text-left py-6 px-8 font-bold text-lg">Capability</th>
                    <th className="text-left py-6 px-8 font-bold text-lg">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-cyan-50 transition-colors duration-200">
                    <td className="py-6 px-8 font-bold text-cyan-800 bg-cyan-50">Early Access</td>
                    <td className="py-6 px-8 text-gray-700">We are in close contact with top-tier AI founders and researchers from the ideation stage; often involved before a company is incorporated. Example: Arklex.ai (Zhou Yu) in the agentic AI space.</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors duration-200">
                    <td className="py-6 px-8 font-bold text-blue-800 bg-blue-50">Founder-Driven</td>
                    <td className="py-6 px-8 text-gray-700">Our platform enables talent to launch with immediate operational support — from GTM to data to productization.</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors duration-200">
                    <td className="py-6 px-8 font-bold text-indigo-800 bg-indigo-50">Global Talent Insight</td>
                    <td className="py-6 px-8 text-gray-700">We track emerging founders, lab spinouts, and research developments across U.S., Asia, and open-source ecosystems.</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-colors duration-200">
                    <td className="py-6 px-8 font-bold text-purple-800 bg-purple-50">Strategic Capital Planning</td>
                    <td className="py-6 px-8 text-gray-700">We assist with cross-border structuring, governance, and long-term fundraising planning aligned with global capital flows.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </InvestmentSection>

        {/* Competitive Edge */}
        <InvestmentSection
          title="4. Competitive Edge"
          className="section-padding"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                    <th className="text-left py-6 px-8 font-bold text-lg">Asset</th>
                    <th className="text-left py-6 px-8 font-bold text-lg">Differentiator</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-6 px-8 font-bold text-emerald-800 bg-emerald-50">Talent</td>
                    <td className="py-6 px-8 text-gray-700">Global access to top-tier AI and tech talent across continents, supported by strong ties to the open-source AI ecosystem and leading academic institutions. We maintain close relationships with frontier researchers and contributors, including distinguished advisors such as Turing Award winner Professor Yao Qizhi, Fields Medalist Professor Shing-Tung Yau, and U.S. Math icon Terrence Tao, who was recruited by our board member Tony Chan, ensuring early insight into breakthroughs shaping the future of AI.</td>
                  </tr>
                  <tr className="hover:bg-teal-50 transition-colors duration-200">
                    <td className="py-6 px-8 font-bold text-teal-800 bg-teal-50">Track Record</td>
                    <td className="py-6 px-8 text-gray-700">Team members have collectively built, advised, or exited 30+ ventures across the U.S., Asia, and MENA.</td>
                  </tr>
                  <tr className="hover:bg-cyan-50 transition-colors duration-200">
                    <td className="py-6 px-8 font-bold text-cyan-800 bg-cyan-50">Capital Connectivity</td>
                    <td className="py-6 px-8 text-gray-700">Long-standing ties with LPs in emerging markets, particularly in the Middle East and Southeast Asia.</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors duration-200">
                    <td className="py-6 px-8 font-bold text-blue-800 bg-blue-50">Strategic Reach</td>
                    <td className="py-6 px-8 text-gray-700">Deep operational and founder-side experience across the U.S. and Asia — enabling us to source, scale, and exit across regions.</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors duration-200">
                    <td className="py-6 px-8 font-bold text-indigo-800 bg-indigo-50">Leadership</td>
                    <td className="py-6 px-8 text-gray-700">Advisors include former BlackRock executives (e.g., James Kong) and operators from SPAC, private equity, and sovereign backgrounds.</td>
                  </tr>
                  <tr className="hover:bg-purple-50 transition-colors duration-200">
                    <td className="py-6 px-8 font-bold text-purple-800 bg-purple-50">Exit Strategy</td>
                    <td className="py-6 px-8 text-gray-700">Proven access to IPO, SPAC, and strategic acquisition routes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </InvestmentSection>

        {/* Investment Style */}
        <InvestmentSection
          title="5. Investment Style"
          className="section-padding bg-gradient-to-r from-rose-50 to-pink-50"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-rose-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-rose-500 to-pink-600 text-white">
                    <th className="text-left py-6 px-8 font-bold text-lg">Trait</th>
                    <th className="text-left py-6 px-8 font-bold text-lg">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-rose-50 transition-colors duration-200">
                    <td className="py-6 px-8 font-bold text-rose-800 bg-rose-50">Focused</td>
                    <td className="py-6 px-8 text-gray-700">No spray-and-pray — targeted bets where we can add value</td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-colors duration-200">
                    <td className="py-6 px-8 font-bold text-pink-800 bg-pink-50">End to end value creation</td>
                    <td className="py-6 px-8 text-gray-700">Deploy capital and team, tech, data, GTM support</td>
                  </tr>
                  <tr className="hover:bg-red-50 transition-colors duration-200">
                    <td className="py-6 px-8 font-bold text-red-800 bg-red-50">Accelerated Exit</td>
                    <td className="py-6 px-8 text-gray-700">Target 2–4 year value creation cycle</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors duration-200">
                    <td className="py-6 px-8 font-bold text-orange-800 bg-orange-50">Control-focused</td>
                    <td className="py-6 px-8 text-gray-700">Prefer majority or strong influence in AI PE deal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </InvestmentSection>
      </main>
    </div>
  )
}