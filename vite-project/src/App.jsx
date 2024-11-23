import { useEffect, useState } from 'react';
import './App.css';
import Header from './comp/header'; // Importing Header component
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome icons
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

function App() {
  // State to manage the list of habits
  const [habits, setHabits] = useState([]);
  const [val, setVal] = useState(""); // Input value for a new habit

  // Log habits state changes
  // useEffect(() => {
  //   console.log("Current Habits:", habits);
  // }, [habits]);

  // Handle input changes
  const handleChange = (e) => setVal(e.target.value);

  // Add a new habit
  const addHabit = () => {
    if (val.trim() !== "") {
      setHabits([...habits, { habit: val, prog: 0 }]);
      setVal(""); // Clear the input
    } else {
      alert("Please enter a valid habit!");
    }
  };

  // Delete a habit
  const deleteHabit = (index) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure you want to delete this habit?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            const updatedHabits = habits.filter((_, i) => i !== index);
            setHabits(updatedHabits);
          },
        },
        {
          label: 'No',
        },
      ],
    });
  };

  // Handle checkbox progress
  const handleCheck = (index, checked) => {
    const updatedHabits = habits.map((item, i) => {
      if (i === index) {
        const updatedProgress = Math.min(Math.max(checked ? item.prog + 14 : item.prog - 14, 0), 100);
        return { ...item, prog: updatedProgress };
      }
      return item;
    });
    setHabits(updatedHabits);
  };

  return (
    <>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Header />
      </div>

      {/* Main Content */}
      <div className="p-5 flex flex-col lg:flex-row gap-10 mt-[90px]">
        {/* Left Section: Habits */}
        <div className="w-full lg:w-[60%]  p-1 mb-5 lg:mb-0">
          {habits.length > 0 ? (
            habits.map((hab, index) => (
              <div
                key={index}
                className="bg-green-50 p-2 h-96 lg:w-[500px] sm:w-full mx-auto relative mb-5"
              >
                {/* Habit Header */}
                <div className="m-2 p-3 bg-amber-300 flex justify-between items-center rounded-lg shadow-lg">
                  <h1 className="text-lg font-semibold text-gray-800">{hab.habit}</h1>
                  <p className="ml-3 text-3xl text-red-600 cursor-pointer">
                    <i
                      className="fa fa-times"
                      onClick={() => deleteHabit(index)}
                    ></i>
                  </p>
                </div>

                {/* Habit Checkboxes */}
                <div className="gap-2 ml-3 flex flex-col mt-4">
                  {[...Array(7).keys()].map((day) => (
                    <label key={day}>
                      <input
                        type="checkbox"
                        onChange={(e) => handleCheck(index, e.target.checked)}
                      />{" "}
                      Day {day + 1}
                    </label>
                  ))}
                </div>

                {/* Completed Button */}

               {/* Completed Button */}
{/* Completed Button */}
<button
  className={`flex items-center text-white rounded-full py-2 px-6 mt-4 ${
    hab.prog === 98 ? "bg-green-500 hover:bg-green-600" : "bg-orange-500 hover:bg-orange-600"
  }`}
>
  <i
    className={`fa mr-2 ${
      hab.prog === 98 ? "fa-check-circle" : "fa-exclamation-circle"
    }`}
  ></i>
  {hab.prog === 98 ? "Completed" : "Not Completed"}
</button>




              {/* Progress Bar */}
                <div className="absolute bottom-28 right-12 flex flex-col gap-2 rounded-full">
                  <progress
                    className="w-32 h-7 bg-gray-200 rounded-full"
                    value={hab.prog}
                    max="98"
                  ></progress>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center text-gray-600 text-xl font-medium">
              No Habit Added Yet
            </h1>
          )}
        </div>

        {/* Right Section: Add Habits */}
        <div className="lg:flex flex-col gap-5 sm:mb-20 lg:w-[40%] w-full lg:fixed lg:top-[90px] lg:right-0 sm:w-full sm:relative justify-center items-center">
  {/* Input for Adding New Habit */}
  <div className="p-6 h-auto bg-gradient-to-r from-orange-400 to-yellow-500 rounded-xl shadow-lg flex items-center justify-center flex-wrap sm:w-full sm:max-w-md lg:w-[320px] lg:max-w-none space-y-5 sm:space-y-5">
    <input
      type="text"
      placeholder="Enter Your Habit"
      value={val}
      onChange={handleChange}
      className="w-full sm:w-[250px] md:w-[300px] lg:w-[320px] p-3 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300"
    />
    <button
      className="bg-orange-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300 shadow-lg mt-4 sm:mt-0 sm:ml-4"
      onClick={addHabit}
    >
      Add
    </button>
  </div>

  {/* Instructions */}
  <div className="p-6 h-auto bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 rounded-lg shadow-xl text-white mt-5 sm:w-full sm:max-w-md lg:w-[320px] lg:max-w-none">
    <h2 className="text-3xl font-semibold mb-4">Instruction Box</h2>
    <ul className="space-y-3">
      <li className="flex items-center space-x-2 text-lg">
        <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
        <span>Enter Your Habit</span>
      </li>
      <li className="flex items-center space-x-2 text-lg">
        <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
        <span>After Performing Each, check the checkbox</span>
      </li>
      <li className="flex items-center space-x-2 text-lg">
        <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
        <span>See progress in the progress bar</span>
      </li>
    </ul>
  </div>
</div>




      </div>
    </>
  );
}

export default App;
