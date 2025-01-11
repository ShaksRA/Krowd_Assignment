import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <header className="bg-gray-800 p-4 mb-8 flex items-center justify-center gap-3">
        <div className="w-8 h-8 bg-black flex items-center justify-center">
          <span className="text-white font-bold">H</span>
          <span className="bg-green-500 w-2 h-full"></span>
        </div>
        <h1 className="text-green-500 text-2xl">Item List Manager</h1>
      </header>

      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Item List</h2>
        
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item"
          className="w-full p-4 mb-4 bg-gray-100 border-none rounded"
        />

        <button
          onClick={handleAddItem}
          className="w-full p-4 bg-green-500 text-white rounded text-lg hover:bg-green-600 transition-colors"
        >
          Add Item
        </button>

        {items.length > 0 && (
          <ul className="mt-8 space-y-2">
            {items.map((item, index) => (
              <li
                key={index}
                className="p-4 bg-gray-100 rounded"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;