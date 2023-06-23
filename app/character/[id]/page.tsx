import {getCharacterById} from "@/app/utils/api";

interface CharacterPageProps {
    params: {
        id: number;
    }
}

export default async function page({params}: CharacterPageProps) {
    const {id} = params;
    const character = await getCharacterById(id);
    console.log(character);
    return (
        <>
            <div className="">Page!</div>
        </>
    );
}