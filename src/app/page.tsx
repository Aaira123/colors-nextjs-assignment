

export default function Home() {
  return (
<header>
  <nav className=" flex w-full bg-black h-12 items-center">
    <div className="bg-purple-500 h-8 w-44 "></div>

    <div className="flex justify-end w-4/5 items-center gap-2">

    <div className="bg-red-400 h-8 w-32"></div>
    <div className="bg-yellow-400 h-8 w-32"></div>
    <div className="bg-green-400 h-8 w-32"></div>

    </div>
  </nav>

  <nav className=" flex justify-center h-8 mt-40 font-extrabold bg-slate-600 text-yellow-400 ">
        <h1><b>project</b></h1>
  </nav>

  <nav className=" flex justify-center mt-10 h-96 bg-slate-400 gap-3"> 

    <div className="bg-red-900 h-2/3 w-96 mt-16 "></div>
    <div className="bg-green-800 h-2/3 w-96 mt-16 "></div>
    <div className="bg-orange-700 h-2/3 w-96 mt-16 "></div>

  </nav>
  <nav className=" flex justify-center h-96 bg-slate-400 gap-3">
    <div className="bg-orange-300 h-2/3 w-5/12"></div>
    <div className="bg-lime-600 h-2/3 w-5/12"></div>
  </nav>

  <nav className=" flex justify-center bg-teal-900 h-36 mt-5">
    <div className="bg-pink-300 h-14 w-60 mt-10 flex justify-center font-extrabold">Footer</div>

  </nav>
  
 
</header>

  );
}
