import {getCharacterById} from "@/app/utils/api";

interface CharacterPageProps {
    params: {
        id: number;
    }
}

export default async function page({params}: CharacterPageProps) {
    const {id} = params;
    const character = await getCharacterById(id);
    const {thumbnail, name, description} = character.results[0];
    return (
        <>
            <div className="container flex flx-col gap-5 items-center">
                <div className="card shadow-xl w-full">
                    <figure>
                        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name}
                             className="object-contain w-10/12 h-96" loading={"lazy"}
                        />
                    </figure>
                    <div className="card-body mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-4">{name}</h2>
                        <p className="text-sm font-light">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}