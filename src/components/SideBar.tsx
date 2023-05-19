 
export default function SideBar( ) {
	return (
		<div className="w-1/8 bg-slate-200 h-full p-4 hidden md:flex flex-col">
          <div className="px-4"> 
          </div>
          <div className="justify-stretch py-5 grid grid-cols-1 gap-3 my-auto">
            <div className="bg-slate-100 shadow-md rounded-md px-4 py-3">
              About 
            </div>
            <div className="bg-slate-100 shadow-md rounded-md px-4 py-3">
              Add Image
            </div>
            <div className="bg-slate-100 shadow-md rounded-md px-4 py-3">
              Contact
            </div>
          </div>
          <div>
            Developed by eban emmanuel 2023
          </div>
        </div>
	)
}
