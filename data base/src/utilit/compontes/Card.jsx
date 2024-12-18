import React from 'react'
import contacts from './../Data';

function Card({contacts}) {
  return (
    <div className='flex '>
      {
       contacts.map((items)=>(
        <div className="w-56 h-[390px] bg-red-500 m-10 rounded-2xl overflow-hidden">
        <img
          className="rounded-full w-24 h-24 mx-auto relative top-6 bg-contain brightness-110 contrast-125 backdrop-brightness-95"
          src={items.photos}
          alt="profile.jpg"
        />
        <h1 className="text-white relative top-10  text-xl text-center">
         {items.username}
        </h1>
        <div className="bg-indigo-700 relative top-14 rounded-3xl h-10 flex m-3">
          <div>
            <img
              className="rounded-full w-10 h-10 mx-auto bg-contain brightness-110 contrast-125 backdrop-brightness-95"
              src={items.photos}
              alt="profile.jpg"
            />
          </div>
          <div className="relative left-6 top-2 text-white uppercase">
            <h3>{items.password}</h3>
          </div>
        </div>
        <div className="bg-indigo-700 relative top-14 rounded-3xl h-10 flex m-3">
          <div>
            <img
              className="rounded-full w-10 h-10 mx-auto bg-contain brightness-110 contrast-125 backdrop-brightness-95"
              src={items.photos}
              alt="profile.jpg"
            />
          </div>
          <div className="relative left-6 top-2 text-white uppercase">
            <h3>{items.email}</h3>
          </div>
        </div>
        <div className="bg-indigo-700 relative top-14 rounded-3xl h-10 flex m-3">
          <div>
            <img
              className="rounded-full w-10 h-10 mx-auto bg-contain brightness-110 contrast-125 backdrop-brightness-95"
              src={items.photos}
              alt="profile.jpg"
            />
          </div>
          <div className="relative left-6 top-2 text-white uppercase">
            <h3>{items.city}</h3>
          </div>
        </div>
       <div className=' relative top-14 bg-slate-500  left-11 w-32 rounded-lg  h-[30px]'>
        <button className='pl-11 pt-1 uppercase'>add</button>
       </div>
      </div>
       ))
      }
    </div>
  )
}

export default Card
