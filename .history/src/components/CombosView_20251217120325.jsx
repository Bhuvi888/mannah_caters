import React, { useState } from "react";
import { PACKAGES } from "../constants";
import PackageCard from "./PackageCard";

const CombosView = ({ onCustomize }) => {
  // Default open state is 'gold' which is the second item usually
  const [openPackageId, setOpenPackageId] = useState("gold");

  const handleToggle = (id) => {
    setOpenPackageId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-6 animate-fade-in max-w-4xl mx-auto w-full">
      <div className="text-center py-6">
        <h2 className="text-white text-4xl font-bold mb-3">
          Signature Packages
        </h2>
        <p className="text-[#94a3b8] max-w-2xl mx-auto">
          Select a package to view offerings. Customize any selection to suit
          your unique preferences.
        </p>
      </div>

      {PACKAGES.map((pkg) => (
        <PackageCard
          key={pkg.id}
          pkg={pkg}
          isOpen={openPackageId === pkg.id}
          onToggle={() => handleToggle(pkg.id)}
          onCustomize={onCustomize}
        />
      ))}
    </div>
  );
};

export default CombosView;
