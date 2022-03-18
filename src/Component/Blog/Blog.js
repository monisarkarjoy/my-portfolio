// import React from "react"
// import "../Portfolio/Portfolio.css"
// import "../Blog/Blog.css"
// import Card from "./Card"
// import BlogApi from "./BlogApi"

// const Blog = () => {
//   return (
//     <>
//       <section className='portfolio blog' id='blog'>
//         <div className='container'>
//           <div className='heading text-center'> 
//             <h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
//             <h1>My Blog</h1>
//           </div>

//           <div className='content grid'>
//             {BlogApi.map((value, index) => {
//               return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} />
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Blog

import React from 'react';
import Card from './Card';
import './Blog.css';
import BlogApi from './BlogApi';
import '../Portfolio/Portfolio.css';

const Blog = () => {
  return (
    <>
       <section className='portfolio blog' id='blog'>
           <div className='container'>
               <div className='heading text-center'>
                   <h4> VISIT MY BLOG AND KEEP YOUR FEEDBACK </h4>
                   <h1>My Blog</h1>
               </div>

               <div className='content grid'>
                   {BlogApi.map((val, index) => {
                       return <Card key={index} image={val.image} date={val.date} title_one={val.title_one} desc_one={val.desc_one} title_two={val.title_two} desc_two={val.desc_two} title_three={val.title_three} desc_three={val.desc_three} />
                   })}
               </div>
           </div>
       </section>
    </>
  )
}

export default Blog