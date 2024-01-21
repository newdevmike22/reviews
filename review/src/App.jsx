import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [person, setPerson] = useState(0);
  const { name, image, job, text } = people[person];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setPerson((currentPerson) => {
      const newPerson = currentPerson + 1;
      return checkNumber (newPerson);
    });  
  };

  const prevPerson = () => {
    setPerson((currentPerson) => {
      const newPerson = currentPerson - 1;
      return checkNumber (newPerson);
    });
  };


  return (
    <main className="min-h-[100vh] grid place-items-center">
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="w-[100%] h-[100%] block object-cover rounded-[50%] relative"/>
          <span className="absolute top-0 left-0 w-[2.5rem] h-[2.5rem] grid place-items-center rounded-[50%]
                         bg-[#2d02c7] text-white transform -translate-y-1/4"
          >
            <FaQuoteRight />
          </span>
        </div>
        <h1 className="text-[1.6rem] font-semibold capitalize mb-1">{name}</h1>
        <p className="text-[1rem] text-[#2d02c7] uppercase font-semibold mb-4 tracking-wide">{job}</p>
        <p className="text-[0.95rem] text-[#64748b] mb-3 leading-normal">{text}</p>
        <div className="mb-[1rem]">
          <button 
            className="text-[1.25rem] text-[#3c3799] bg-transparent border-transparent hover:text-[#fc0320] 
                       my-0 mx-2 cursor-pointer transition-all duration-300 ease-in-out h-full"
            onClick={prevPerson}
          >
            <FaChevronLeft />
          </button>
          <button 
            className="text-[1.25rem] text-[#3c3799] bg-transparent border-transparent hover:text-[#fc0320] 
                       my-0 mx-2 cursor-pointer transition-all duration-300 ease-in-out h-full"
            onClick={nextPerson}
          >
            <FaChevronRight />
          </button>
        </div>
      </article>
    </main>
  )
};

export default App;