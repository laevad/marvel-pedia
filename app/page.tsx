import Image from 'next/image'
import {CharacterCard} from "@/app/components/CharacterCard";

export default function Home() {
  return (
    <main>
      <div className={"container text-center"}>
          <h1 className={"text-3xl font-bold underline"}>Popular Character Marvels</h1>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <CharacterCard/>
              <CharacterCard/>
              <CharacterCard/>
              <CharacterCard/>
              <CharacterCard/>
              <CharacterCard/>
          </div>
      </div>
    </main>
  )
}
