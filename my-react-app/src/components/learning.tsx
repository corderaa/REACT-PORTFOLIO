import "./../index.css";

function learning() {
    return (
        <div className="flex flex-col h-fit mt-20 text-center">
            <div>
                <h1 id="arrow-animation" className="font-semibold text-4xl text-white">Learning</h1>
            </div>
            <div className="grid grid-cols-3 max-[1212px]:grid-cols-1 gap-20 justify-items-center mt-28 z-30">
                <div className="grid-container p-10">
                    <h1 className="text-2xl mb-3 font-light">DAM</h1> 
                    <p className="text-lg">Multiplataform Aplication Development</p>
                    <p className="text-sm font-thin mt-14">This is an Associate Degree or Grado Superior in spanish where I learn how to develop multiplataform apps as the name implies.</p>
                    <a href="https://www.elorrieta.eus/"><img src="https://www.elorrieta.eus/wp-content/uploads/2021/07/EEM-logo-color.svg" className="mt-12"/></a>
                </div>
                <div className="grid-container p-10 flex flex-col items-center">
                    <h1 className="text-2xl mb-3 font-light">REACT</h1>
                    <p className="text-lg">With typescript & Sass</p>
                    <p className="text-sm font-thin mt-20">I've been wanting to learn react for a long time, now that i have the oportunite I'am learning how to code in this amazing set of library</p>
                    <img className="w-28 mt-10" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/>
                </div>
                <div className="grid-container p-10 flex flex-col items-center">
                    <h1 className="text-2xl mb-3 font-light">Kotlin</h1>
                    <p className="text-lg">Coding with it on Android Studio</p>
                    <p className="text-sm font-thin mt-14 mb-14">Being the main Lenguaje we are using where we study, I'am putting almost all my eforts into learning how to code with it</p>
                    <img src="https://kotlinlang.org/docs/images/kotlin-logo.png"/>
                </div>
            </div>  
        </div>
    );
}

export default learning;