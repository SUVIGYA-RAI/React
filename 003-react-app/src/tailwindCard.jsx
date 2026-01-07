// TailwindCard.jsx
function TailwindCard({ title, description }) {
    return (
      <div className="max-w-sm mx-auto mt-6 rounded-2xl shadow p-6 bg-white">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700">
          Learn more
        </button>
      </div>
    );
  }
  
  export default TailwindCard;  