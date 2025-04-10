import freddy from "../images/freddy prof.png"

const AboutParagraph = () => {
    let paragraph = "I am a passionate full stack developer with a degree in Business Management and Computer Science with 1 year of web development training in front end and backend. My expertise lies in leveraging cutting edge technologies such as React JS, node js and various UI frameworks including, Tailwind css, Chachra UI and antdesign. My ability also lies in designing seamless UIs and components that align perfectly with the desired aesthetics, creating responsive websites that gracefully adapt to any device. My skills also extend to creating the data in the competent database. ensuring the seamless flow of data between the front-end and the back-end. Moreover, I write the code in a clean and well-structured manner that not only works flawlessly but also improves the overall maintainability of the projects."

    return (

        <div>
            <h1 className=' text-[#ff3f34] sm:text-start text-center text-2xl font-[sofia] font-bold uppercase py-4  '>About</h1>
            <div className="max-w-4xl mx-auto  rounded-2xl border-2 border-r-b-none border-gray-400 bg-gray-900">
                <div className="relative my-4-">
                    <div className="relative  rounded-[24px] px-10 py-6  ">

                        <div className="absolute -top-6 -left-6 w-16 h-16  rounded-full  flex items-center justify-center ">
                            <img
                                src={freddy}
                                alt="icon"
                                className="w-10- h-10- rounded-full  w-full  h-full"
                            />
                        </div>


                        <p className=" text-md font-medium">
                            {paragraph}
                        </p>
                    </div>
                </div>

            </div>





        </div>
    )
}

export default AboutParagraph