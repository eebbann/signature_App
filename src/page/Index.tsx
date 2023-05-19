import React, { useState } from "react";
import SideBar from "../components/SideBar";

type values = { 
	value: string,
	name?:string
};

export const Index : React.FC= () => {
	const [name, setName] = useState ("Enter Title");
	const [date, setDate] = useState ( "Enter Date: yyy-d-m");


	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName (e.target.value);
	};
	const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDate (e.target.value);
	};
	return (
		<div className="w-full h-screen flex flex-cols text-center">
			<SideBar />
			<div className="grid grid-cols-1 gap-3 w-1/2 mx-auto h-1/2">
				<div className="text-4xl pt-10">{name}</div>
				<div className="text-2xl pt-1">{date}</div>
				<div className="text-1xl pt-10">HELLO WORLD</div>
				<div className="flex justify-between align-middle pt-20">
					<input
						type="date"
						value={!date ?  "insert date" : date}
						onChange={handleDate}
						className="outline-none border-0 border-b-2 border-b-gray-500 border-dotted bg-slate-200  px-4 py-3"
					/>
					<input
						value={name}
						onChange={handleChange}
						className="outline-none border-0 border-b-2 border-b-gray-500 border-dotted  bg-slate-200  px-4 py-3"
					/>
				</div>
			</div>
		</div>
	);
};
