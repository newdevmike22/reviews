import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [person, setPerson] = useState(0);
  const { name, image, job, text } = people[person];

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
        <p className="text-[1rem] text-[#2d02c7] uppercase font-semibold mb-5 tracking-wide">{job}</p>
        <p className="text-[0.95rem] text-[#64748b] mb-3 leading-normal">{text}</p>
      </article>
    </main>
  )
};

export default App;