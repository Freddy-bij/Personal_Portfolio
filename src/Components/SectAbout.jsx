import freddy from "../images/freddy prof.png"
const SectAbout = () => {
  return (
    <div className=" w-[70%]  font-[sofia] mx-auto">

      <div className="grid xl:grid-cols-2 mt-20">
        <div >
          <div >
            <h1 className="text-[#ff3f34] text-2xl uppercase font-bold  pb-3 md:text-start text-center " >About Me</h1>
            <p className=" text-xl ">I am a passionate full stack developer with a degree in Business Management and Computer Science with 1 year of web development training in front end and backend. My expertise lies in leveraging cutting edge technologies such as React JS, node js and various UI frameworks including, Tailwind css, Chachra UI and antdesign. My ability also lies in designing seamless UIs and components that align perfectly with the desired aesthetics, creating responsive websites that gracefully adapt to any device. My skills also extend to creating the data in the competent database. ensuring the seamless flow of data between the front-end and the back-end. Moreover, I write the code in a clean and well-structured manner that not only works flawlessly but also improves the overall maintainability of the projects..</p>
          </div>

        </div>

        <div className="flex justify-center">
          <div className="    md:w-90 md:h-90">
            <img src={freddy} alt={freddy} className="w-full h-full md:rounded-full" />
          </div>

        </div>

      </div>


    </div>
  )
}

export default SectAbout