"use client";
import Link from "next/link";
import React, {useState} from "react";
import {useRouter} from "next/navigation";

export const Navbar = () => {
	const [querySearch, setQuerySearch] = useState<string>("");
	const router = useRouter();

	const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && querySearch !== "") {
			setQuerySearch("");
			router.push(`/search?query=${querySearch}`);
		}
	}
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
								value={querySearch}
								type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"
								onChange={(e) => setQuerySearch(e.target.value)}
								onKeyDown={handleSearch}
							/>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}