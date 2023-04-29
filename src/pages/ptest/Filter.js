// import React, { useState } from 'react';

// const Filter = ({ data }) => {
//   const [category, setCategory] = useState('all');

//   const handleChange = (e) => {
//     setCategory(e.target.value);
//   };

//   const filteredData = data.filter((item) => {
//     if (category === 'all') return true;
//     return item.category === category;
//   });

//   return (
//     <div>
//       <select value={category} onChange={handleChange}>
//         <option value="all">All</option>
//         <option value="category1">Category 1</option>
//         <option value="category2">Category 2</option>
//         <option value="category3">Category 3</option>
//       </select>

//       {filteredData.map((item) => (
//         <div key={item.id}>
//           <h2>{item.title}</h2>
//           <p>{item.description}</p>
//         </div>
//       ))}

//     </div>
//   );
// };

// export default Filter;