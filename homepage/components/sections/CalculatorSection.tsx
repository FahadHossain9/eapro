'use client';

import { useState } from 'react';

export default function CalculatorSection() {
  const [bill, setBill] = useState('');
  const [results, setResults] = useState<{
    monthly: number;
    annual: number;
    trees: number;
  } | null>(null);

  const calculate = () => {
    if (!bill) return;
    const monthlyBill = parseFloat(bill);
    const monthlySavings = monthlyBill * 0.65;
    const annualSavings = monthlySavings * 12;
    const trees = Math.round(annualSavings / 1000 * 2);
    
    setResults({
      monthly: monthlySavings,
      annual: annualSavings,
      trees: trees
    });
  };

  return (
    <section className="py-24 bg-[#fdfcf8]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#d4a039]/10 text-[#d4a039] rounded-full text-sm font-semibold mb-4">
              Savings Calculator
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d3b1a] mb-6">
              See How Much
              <br />
              <span className="text-[#d4a039]">You Could Save</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left - Calculator */}
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-[#0d3b1a] mb-6">
                  Enter Your Monthly Bill
                </h3>
                
                <div className="mb-8">
                  <label className="block text-gray-600 mb-2 text-sm">
                    Current Electricity Bill (₹/month)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">₹</span>
                    <input
                      type="number"
                      value={bill}
                      onChange={(e) => setBill(e.target.value)}
                      placeholder="5000"
                      className="w-full pl-10 pr-4 py-4 text-2xl font-semibold border-2 border-gray-200 rounded-xl focus:border-[#d4a039] focus:outline-none transition"
                    />
                  </div>
                </div>

                <button
                  onClick={calculate}
                  className="w-full py-4 bg-[#0d3b1a] text-white rounded-xl font-semibold text-lg hover:bg-[#1a5c2e] transition-all hover:shadow-lg"
                >
                  Calculate My Savings
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Based on average solar installation performance
                </p>
              </div>

              {/* Right - Results */}
              <div className={`p-8 md:p-12 transition-all duration-500 ${results ? 'bg-gradient-to-br from-[#0d3b1a] to-[#1a5c2e]' : 'bg-gray-100'}`}>
                {results ? (
                  <div className="text-white h-full flex flex-col justify-center">
                    <div className="text-center mb-8">
                      <p className="text-white/60 text-sm uppercase tracking-widest mb-2">You Could Save</p>
                      <div className="text-5xl md:text-6xl font-bold text-[#d4a039]">
                        ₹{results.monthly.toLocaleString('en-IN')}
                      </div>
                      <p className="text-white/80 mt-2">per month</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                        <div className="text-2xl font-bold text-[#d4a039]">
                          ₹{results.annual.toLocaleString('en-IN')}
                        </div>
                        <p className="text-white/60 text-sm mt-1">Yearly Savings</p>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                        <div className="text-2xl font-bold text-[#d4a039]">
                          {results.trees} 🌳
                        </div>
                        <p className="text-white/60 text-sm mt-1">Trees Equivalent</p>
                      </div>
                    </div>

                    <a
                      href="/get-started"
                      className="mt-8 block w-full py-4 bg-[#d4a039] text-[#0d3b1a] rounded-xl font-semibold text-center hover:bg-[#e8b54d] transition-all"
                    >
                      Get Free Consultation
                    </a>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-center text-gray-400">
                    <div>
                      <div className="text-6xl mb-4">💡</div>
                      <p>Enter your bill to see<br />your potential savings</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
