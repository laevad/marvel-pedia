interface CharacterPageProps {
    params: {
        id: string;
    }
}

export default function page({params}: CharacterPageProps) {
    const {id} = params;
    console.log(id);
    return(
        <>
            <div className="">Page!</div>
        </>
    );
}