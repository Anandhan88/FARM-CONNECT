import React, { useState } from 'react';

const CropSelector = ({ onCropSelect, selectedCrop, category }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Default crop data with actual generated images
  const cropData = {
    vegetable: [
      { id: 'tomato', name: 'Tomato', emoji: '🍅', image: '/crops/tomato.svg' },
      { id: 'potato', name: 'Potato', emoji: '🥔', image: '/crops/potato.svg' },
      { id: 'onion', name: 'Onion', emoji: '🧅', image: '/crops/onion.svg' },
      { id: 'carrot', name: 'Carrot', emoji: '🥕', image: '/crops/carrot.svg' },
      { id: 'cabbage', name: 'Cabbage', emoji: '🥬', image: '/crops/cabbage.svg' },
      { id: 'broccoli', name: 'Broccoli', emoji: '🥦', image: '/crops/broccoli.svg' },
      { id: 'spinach', name: 'Spinach', emoji: '🥬', image: '/crops/spinach.svg' },
      { id: 'lettuce', name: 'Lettuce', emoji: '🥗', image: '/crops/lettuce.svg' },
      { id: 'bell_pepper', name: 'Bell Pepper', emoji: '🫑', image: '/crops/bell_pepper.svg' },
      { id: 'cucumber', name: 'Cucumber', emoji: '🥒', image: '/crops/cucumber.svg' },
      { id: 'eggplant', name: 'Eggplant', emoji: '🍆', image: '/crops/eggplant.svg' },
      { id: 'cauliflower', name: 'Cauliflower', emoji: '🥦', image: '/crops/cauliflower.svg' },
      { id: 'green_beans', name: 'Green Beans', emoji: '🫘', image: '/crops/green_beans.svg' },
      { id: 'peas', name: 'Peas', emoji: '🟢', image: '/crops/peas.svg' },
      { id: 'beetroot', name: 'Beetroot', emoji: '🍠', image: '/crops/beetroot.svg' },
      { id: 'radish', name: 'Radish', emoji: '🌶️', image: '/crops/radish.svg' }
    ],
    fruit: [
      { id: 'apple', name: 'Apple', emoji: '🍎', image: '/crops/apple.svg' },
      { id: 'banana', name: 'Banana', emoji: '🍌', image: '/crops/banana.svg' },
      { id: 'orange', name: 'Orange', emoji: '🍊', image: '/crops/orange.svg' },
      { id: 'mango', name: 'Mango', emoji: '🥭', image: '/crops/mango.svg' },
      { id: 'grapes', name: 'Grapes', emoji: '🍇', image: '/crops/grapes.svg' },
      { id: 'strawberry', name: 'Strawberry', emoji: '🍓', image: '/crops/strawberry.svg' },
      { id: 'pineapple', name: 'Pineapple', emoji: '🍍', image: '/crops/pineapple.svg' },
      { id: 'watermelon', name: 'Watermelon', emoji: '🍉', image: '/crops/watermelon.svg' },
      { id: 'papaya', name: 'Papaya', emoji: '🧡', image: '/crops/papaya.svg' },
      { id: 'coconut', name: 'Coconut', emoji: '🥥', image: '/crops/coconut.svg' },
      { id: 'lemon', name: 'Lemon', emoji: '🍋', image: '/crops/lemon.svg' },
      { id: 'lime', name: 'Lime', emoji: '🟢', image: '/crops/lime.svg' },
      { id: 'pomegranate', name: 'Pomegranate', emoji: '🔴', image: '/crops/pomegranate.svg' },
      { id: 'guava', name: 'Guava', emoji: '🟡', image: '/crops/guava.svg' }
    ],
    grain: [
      { id: 'rice', name: 'Rice', emoji: '🌾', image: '/crops/rice.svg' },
      { id: 'wheat', name: 'Wheat', emoji: '🌾', image: '/crops/wheat.svg' },
      { id: 'corn', name: 'Corn', emoji: '🌽', image: '/crops/corn.svg' },
      { id: 'barley', name: 'Barley', emoji: '🌾', image: '/crops/barley.svg' },
      { id: 'oats', name: 'Oats', emoji: '🌾', image: '/crops/oats.svg' },
      { id: 'millet', name: 'Millet', emoji: '🌾', image: '/crops/millet.svg' },
      { id: 'quinoa', name: 'Quinoa', emoji: '🌾', image: '/crops/quinoa.svg' },
      { id: 'sorghum', name: 'Sorghum', emoji: '🌾', image: '/crops/sorghum.svg' }
    ],
    dairy: [
      { id: 'milk', name: 'Fresh Milk', emoji: '🥛', image: '/crops/milk.svg' },
      { id: 'cheese', name: 'Cheese', emoji: '🧀', image: '/crops/cheese.svg' },
      { id: 'yogurt', name: 'Yogurt', emoji: '🍶', image: '/crops/yogurt.svg' },
      { id: 'butter', name: 'Butter', emoji: '🧈', image: '/crops/butter.svg' },
      { id: 'cream', name: 'Cream', emoji: '🥛', image: '/crops/cream.svg' }
    ],
    herbs: [
      { id: 'basil', name: 'Basil', emoji: '🌿', image: '/crops/basil.svg' },
      { id: 'mint', name: 'Mint', emoji: '🌿', image: '/crops/mint.svg' },
      { id: 'cilantro', name: 'Cilantro', emoji: '🌿', image: '/crops/cilantro.svg' },
      { id: 'parsley', name: 'Parsley', emoji: '🌿', image: '/crops/parsley.svg' },
      { id: 'oregano', name: 'Oregano', emoji: '🌿', image: '/crops/oregano.svg' },
      { id: 'thyme', name: 'Thyme', emoji: '🌿', image: '/crops/thyme.svg' },
      { id: 'rosemary', name: 'Rosemary', emoji: '🌿', image: '/crops/rosemary.svg' },
      { id: 'sage', name: 'Sage', emoji: '🌿', image: '/crops/sage.svg' }
    ],
    nuts: [
      { id: 'almonds', name: 'Almonds', emoji: '🌰', image: '/crops/almonds.svg' },
      { id: 'walnuts', name: 'Walnuts', emoji: '🌰', image: '/crops/walnuts.svg' },
      { id: 'cashews', name: 'Cashews', emoji: '🌰', image: '/crops/cashews.svg' },
      { id: 'peanuts', name: 'Peanuts', emoji: '🥜', image: '/crops/peanuts.svg' },
      { id: 'pistachios', name: 'Pistachios', emoji: '🌰', image: '/crops/pistachios.svg' }
    ]
  };

  const crops = cropData[category] || [];
  
  const filteredCrops = crops.filter(crop =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCropClick = (crop) => {
    onCropSelect(crop);
  };

  return (
    <div className="space-y-4">
      {/* Search */}
      <div>
        <input
          type="text"
          placeholder={`Search ${category}s...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Crop Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-h-96 overflow-y-auto">
        {filteredCrops.map((crop) => (
          <button
            key={crop.id}
            type="button"
            onClick={() => handleCropClick(crop)}
            className={`
              relative p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105
              ${selectedCrop?.id === crop.id
                ? 'border-green-500 bg-green-500/20 ring-2 ring-green-500/50'
                : 'border-gray-600 bg-gray-700/50 hover:border-green-400 hover:bg-gray-600/50'
              }
            `}
          >
            {/* Crop Image */}
            <div className="w-full h-16 bg-gray-600 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
              <img 
                src={crop.image} 
                alt={crop.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to emoji if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `<span class="text-2xl">${crop.emoji}</span>`;
                }}
              />
            </div>
            
            <div className="text-center">
              <p className="text-white text-xs font-medium truncate">{crop.name}</p>
            </div>

            {/* Selected indicator */}
            {selectedCrop?.id === crop.id && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {filteredCrops.length === 0 && (
        <div className="text-center py-8 text-gray-400">
          <p>No {category}s found for "{searchTerm}"</p>
        </div>
      )}

      {/* Selected crop display */}
      {selectedCrop && (
        <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{selectedCrop.emoji}</span>
            <div>
              <p className="text-green-400 font-medium">Selected: {selectedCrop.name}</p>
              <p className="text-gray-400 text-sm">Default image will be used for this crop</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropSelector;
