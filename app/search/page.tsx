"use client";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect} from "react";

interface SearchPageProps {

}

export default function SearchPage({}: SearchPageProps) {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");
    const router = useRouter();

    useEffect(() => {
        const fetchSearch = async () => {
            try {

            }
            catch (e) {

            }
        }

    }, [query]);


    return (
        <>
            <div className="container text-center mt-10">
                <h1 className={"text-3xl font-bold"}>Search for <span>&quot;{ query }&quot;</span></h1>
            </div>
        </>
    );
}