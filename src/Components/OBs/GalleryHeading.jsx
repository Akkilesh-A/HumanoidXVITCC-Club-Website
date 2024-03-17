import React from 'react'

const GalleryHeading = (props) => {
  return (
    <section className="flex flex-col justify-center text-center p-8">
      <h1 className="font-bold text-5xl text-[#178376]">
        <span className="text-white">{props.text1}</span> {props.text2}
      </h1>
      <p className=" p-4 text-s text-[white]">
      {props.ptext}
        
      </p>
    </section>
  )
}

export default GalleryHeading