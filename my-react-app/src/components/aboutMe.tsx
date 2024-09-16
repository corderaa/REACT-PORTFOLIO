import "./../index.css";

function aboutMe(){
    return (
        <div className="flex flex-col items-center h-fit w-full text-center">
            <header className="flex flex-col items-center size-fit w-full mt-64 mb-8">
                <h1 className="font-bold text-5xl mb-4">Hi there, my name is</h1>
                <p className="font-semibold text-3xl">Ugaitz Cordero Sanchez</p>
            </header>
            <div className="mb-72">
                <p>I'm a DAM / Multiplataform Aplication Development student from Bilbao, Spain</p>
                <p>Currently chasing my studies to be a great developer</p>
            </div>
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="40" height="40" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><g transform="matrix(1,0,0,1,0,0)"><path d="M12,23c-.4,0-.777-.156-1.061-.439L.112,11.733l.707-.707,10.827,10.827c.189,.189,.518,.189,.707,0l10.827-10.827,.707,.707-10.827,10.827c-.283,.283-.66,.439-1.061,.439Zm.471-9.229L23.888,2.354l-.707-.707L12,12.827,.819,1.646,.112,2.354,11.53,13.771c.129,.129,.299,.193,.469,.193s.341-.064,.472-.194Z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/></g></svg></a>
        </div>
    );
}

export default aboutMe;