async function getNote(noteId: string) {
    const response = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`, { next: { revalidate: 10 } });
    const data = await response.json()
    return data;
}

export default async function NotePage({ params }: any) {
    const note = await getNote(params.id);
    return (
        <main>
            <h1>Notes/{note.id}</h1>
            <div>
                <h2>{note.title}</h2>
                <h3>{note.content}</h3>
                <p>{note.created}</p>
            </div>
        </main>
    )
}