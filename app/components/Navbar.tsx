"use client";
import Link from "next/link";
import {useState} from "react";

export const Navbar = () => {
	const [querySearch, setQuerySearch] = useState<string>("");
	return (
		<>
			<header>
				<div className="navbar bg-base-100 container">
					<div className="flex-1">
						<Link href={"/"} className="btn btn-ghost normal-case text-xl">
							Marvel-Pedia
						</Link>
					</div>
					<div className="flex-none gap-2">
						<div className="form-control">
							<input
								value={""}
								type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
						</div>
					</div>
				</div>
			</header>
		</>
	)
}