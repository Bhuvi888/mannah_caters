import React from "react";

import SelectedMenu from "../components/SelectedMenu";
import QuoteForm from "../components/QuoteForm";

const Quote = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#013220]">
      <main className="flex-1 flex flex-col items-center pb-20 px-4 sm:px-10 lg:px-40 pt-10">
        <div className="w-full max-w-[1200px] flex flex-col gap-10">
          {/* Hero Section */}
          <div className="text-center py-6 border-b border-[#d4af37]/20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              Request a Quote
            </h1>
            <p className="text-[#94a3b8] max-w-2xl mx-auto text-lg font-light">
              Review your selected menu items and provide your event details
              below. We’ll craft a custom proposal for your special occasion.
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-12">
            <SelectedMenu />
            <QuoteForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quote;
