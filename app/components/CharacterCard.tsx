import {Character} from "@/app/type/marvels";
import Link from "next/link";

interface CharacterCardProps {
	character: Character;
}

export const CharacterCard = ({character}: CharacterCardProps) => {
	return (
		<>
			<div className="card card-compact w-full bg-base-100 shadow-xl">
				<figure>
					<img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} className="object-cover w-full h-48" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{character.name}</h2>
					<div className="card-actions justify-end">
						<Link href={`/character/${character.id}`} className="btn btn-primary">Detail { character.name }</Link>
					</div>
				</div>
			</div>
		</>
	)
}