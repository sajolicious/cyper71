// components/IconGrid.tsx
import React from 'react';

interface IconGridProps {
  icons: React.ReactNode[];
}

const IconGrid: React.FC<IconGridProps> = ({ icons }) => (
  <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-">
    {icons.map((icon, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center text-center bg-[#ED52CA] bg-gradient-to-r from-blue-500 to-purple-500  p-4 border border-gray-300 rounded-md text-white  font-bold mb-4"
      >
        {React.cloneElement(icon as React.ReactElement, { key: index })} {/* Clone element and add a key */}
        <p className="text-sm mt-2">{(icon as React.ReactElement).key}</p>
      </div>
    ))}
    {icons.length === 0 && <div className="text-center text-gray-500 col-span-full">No icons available for this category.</div>}
  </div>
);

export default IconGrid;
