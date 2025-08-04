
'use client';

export default function InvestmentPhilosophy() {
  const focusAreas = [
    {
      title: "Artificial Intelligence & Data Infrastructure",
      icon: "ri-robot-line",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Healthcare Technologies & Human Longevity",
      icon: "ri-heart-pulse-line",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Cross-border Consumer Platforms",
      icon: "ri-global-line",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Frontier DeepTech (robotics, new mobility, compute)",
      icon: "ri-rocket-line",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-lightbulb-line text-2xl text-purple-600 w-6 h-6 flex items-center justify-center"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Investment Philosophy
          </h2>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
            We are a thesis-led venture capital firm investing in early-stage companies across:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className={`w-10 h-10 ${area.color} rounded-lg flex items-center justify-center mr-4`}>
                    <i className={`${area.icon} text-lg w-5 h-5 flex items-center justify-center`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{area.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
            <p className="text-gray-700 leading-relaxed">
              We focus on companies led by technical founders, building defensible IP, and positioned to scale globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
