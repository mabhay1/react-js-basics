import React, { useState } from 'react';
const items = [
    {
       title: "Section 1",
       content: "This is the content of section 1"
    },
    {
       title: "Section 2",
       content: "This is the content of section 2"
    },
    {
       title: "Section 3",
       content: "This is the content of section 3"
    }
 ]
function Accordion() {
   const [activeIndex, setActiveIndex] = useState(-1);
   const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? -1 : index);
   };
   return (
      <div>
         {items.map((item, index) => (
            <div key={item.title}>
               <button onClick={() =>handleClick(index)}>{item.title}</button>
               {index === activeIndex && <p>{item.content}</p>}
            </div>
         ))}
      </div>
   );
}
export default Accordion;