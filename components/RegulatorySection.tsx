
'use client';

import Link from 'next/link';

export default function RegulatorySection() {
  return (
    <section className="py-12 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-file-shield-line text-2xl text-white w-6 h-6 flex items-center justify-center"></i>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Registered as an Exempt Reporting Adviser (ERA)
          </h2>
          <h3 className="text-lg text-blue-200 mb-4">
            with the U.S. SEC
          </h3>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto mb-6">
            <p className="text-blue-100 text-base mb-2">
              <strong>CRD Number:</strong>
            </p>
            <p className="text-blue-200 leading-relaxed text-sm">
              Our SEC registration demonstrates our commitment to regulatory compliance, 
              transparency, and professional standards in investment management.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="https://adviserinfo.sec.gov/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              SEC IAPD Profile
              <i className="ri-external-link-line ml-2 w-4 h-4 flex items-center justify-center"></i>
            </a>
            <Link 
              href="/disclosures"
              className="inline-flex items-center bg-transparent border border-white text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              View Our Disclosures
              <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
