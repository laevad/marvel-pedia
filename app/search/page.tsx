"use client";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {searchCharacterByName} from "@/app/utils/api";
import {Character} from "@/app/type/marvels";

interface SearchPageProps {

}

export default function SearchPage({}: SearchPageProps) {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");
    const router = useRouter();
    const [character, setCharacter] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchSearch = async () => {
            setLoading(true);
            try {
                const data = await searchCharacterByName(query);
                setCharacter(data.results);
            }
            catch (e) {
                console.log(e);
            }
            finally {
                setLoading(false);
            }
        }
        if (query) {
            fetchSearch().then(r => r);
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