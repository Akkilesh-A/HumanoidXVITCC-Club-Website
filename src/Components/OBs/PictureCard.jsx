import React,{ useState }  from 'react'
import pictures from './Pictures.jsx'

//The menu items
const MenuItems=["All","Faculty","Club Advisories","Cabinet Leads","Project Heads","Management Heads"];

const PictureCard = () => {
  

  const[activeMenu, setActiveMenu] = useState("All");




 //Creates the Menu above the gallery
  function createPictureMenu(text) {

    function handleClick(e) {
      setActiveMenu(e.target.innerText);
    }

    return (
      <div onClick={handleClick} className={activeMenu==text?"bg-[#178376] text-white rounded hover:duration-300 hover:ease-in-out hover:cursor-pointer hover:bg-stone-700  text-[white] px-4 py-2":"hover:duration-300 hover:ease-in-out hover:cursor-pointer hover:bg-[#6C6C6C] hover:text-white hover:rounded text-[#6C6C6C] px-4 py-2"}  key={text}>
        <p>{text}</p>
      </div>
    )
  }





  //Creates each picture card in the gallery
  function createPictureCard(image) {

    const [moused, setMoused] = useState(false)

    function mousedOver() {
      setMoused(!moused)
    }

    return (
      <div key={image.id} className={activeMenu==image.text || activeMenu=="All" ?"flex justify-center items-center text-center p-8 relative":"hidden"}>
          <img
          className="md:w-[80vw] w-[20vw] hover:opacity-20 hover:scale-125 hover:duration-500 duration-500 rounded-2xl"
            onMouseOver={mousedOver}
            onMouseOut={mousedOver}
            src={activeMenu==image.text || activeMenu=="All" ?image.imgURL:null}
            alt={activeMenu==image.text|| activeMenu=="All" ?image.text:null}
          />
        {moused && (
          <p className="pointer-events-none text-center text-white font-bold transform-150 absolute ">
            {activeMenu==image.text || activeMenu=="All" ?image.dept:null}
          </p>
        )}
      </div>
    )
  }



  
  //Rendering both the menu and the gallery
  return (
    <div className="flex flex-col mr-20 ml-20 items-center">
      <div className="flex justify-around text-center flex-wrap w-[80vw] mb-10">
        {MenuItems.map(createPictureMenu)}
      </div>
      <div className="flex flex-wrap text-center justify-center ">
        {pictures.map(createPictureCard)}
      </div>
    </div>
  )

}

export default PictureCard
export { pictures }
