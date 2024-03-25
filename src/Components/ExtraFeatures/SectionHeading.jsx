import React from 'react'

const SectionHeading = (props) => {
  return (
    <section className="flex flex-col justify-center text-center p-4 ">
      <h1 className="font-bold text-5xl text-[#178376] mb-[2.5vh]">
        <span className="text-white">{props.text1}</span> {props.text2}
      </h1>
      <p className={props.ptext.length>0?"p-4 text-s text-[white] mb-[2.5vh] sm:mb-[0]":"h-[0]"}>
      {props.ptext}
        
      </p>
    </section>
  )
}

export default SectionHeading