// components/CategoryButton.tsx
import React from 'react';

interface CategoryButtonProps {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ name, isSelected, onClick }) => (
  <button
    className={`px-4 py-2 text-lg font-semibold ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} rounded mb-4 md:mb-0 md:mr-4`}
    onClick={onClick}
  >
    {name}
  </button>
);

export default CategoryButton;
