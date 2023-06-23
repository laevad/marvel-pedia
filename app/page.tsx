import Image from 'next/image'
import {CharacterCard} from "@/app/components/CharacterCard";

export default function Home() {
  return (
    <main>
      <div className={"container text-center"}>
          <h1 className={"text-3xl font-bold underline"}>Popular Character Marvels</h1>
          <div className="grid gap-4">
              <CharacterCard/>
          </div>
      </div>
    </main>
  )
}
