import './App.css';
import './index.css';

function Ums() {
  return (
    <div className="bg-gray-100 p-6">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center m-4 py-6 w-1/3 rounded-lg bg-white">
            <p className="text-orange-500 text-xl flex items-center">
              Upcoming Class <span className="text-4xl font-bold ml-4">3</span>
            </p>
          </div>
          <div className="flex justify-center items-center m-4 py-6 w-1/3 rounded-lg bg-white">
            <p className="text-green-500 text-xl flex items-center">
              Marked Attendance <span className="text-4xl font-bold ml-4">1</span>
            </p>
          </div>
          <div className="flex justify-center items-center m-4 py-6 w-1/3 rounded-lg bg-white">
            <p className="text-red-500 text-xl flex items-center">
              Missed Attendance <span className="text-4xl font-bold ml-4">0</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="h-80 w-1/4 m-4 rounded-lg bg-white p-4">
            <p className="text-center bg-gray-500 rounded-lg w-1/3 text-gray-300">09-10 AM</p>
          </div>
          <div className="h-80 w-1/4 m-4 rounded-lg bg-white"></div>
          <div className="h-80 w-1/4 m-4 rounded-lg bg-white"></div>
          <div className="h-80 w-1/4 m-4 rounded-lg bg-white"></div>
        </div>
      </div>
  );
}

export default Ums;