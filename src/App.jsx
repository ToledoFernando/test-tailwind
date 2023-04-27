import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-950 w-screen h-screen p-10">
        <h1 className="text-4xl text-slate-400 opacity-70 transition-all hover:text-slate-300 hover:bg-slate-800 hover:cursor-pointer font-medium text-center bg-slate-100 dark:bg-slate-900 w-5/6 mr-auto ml-auto h-36 rounded-lg flex flex-auto justify-center items-center">
          Ejemplo usando Tailwind CSS
        </h1>

        <div className="container w-5/6 h-4/6 m-auto pl-10 pr-10 mt-5 bg-gray-900 flex justify-center rounded-lg items-center max-md:flex-col">
          <div className="h-5/6 flex flex-col flex-1 max-md:w-full max-md:mt-6 max-md:mb-6">
            <div className=" bg-slate-700 flex justify-center items-center text-3xl text-slate-500 cursor-pointer mb-5 rounded-lg p-3 flex-1 transition-all hover:-translate-y-1 hover:shadow-2xl hover:text-slate-300 max-md:w-full">
              <h1>cuadro 1</h1>
            </div>
            <div className="flex-1 bg-gray-800 flex justify-center items-center text-3xl text-slate-500 cursor-pointer p-3 rounded-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:text-slate-300">
              <h1>cuadro 2</h1>
            </div>
          </div>
          <div className="bg-slate-800 justify-center text-5xl font-semibold cursor-pointer text-slate-500 flex items-center ml-10 flex-1 h-5/6 rounded-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:text-slate-300 max-md:w-full max-md:m-auto max-md:mb-6">
            <h1>cuadro 3</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
