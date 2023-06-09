'use client'

import { useState } from 'react'

export default function CreateNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const create = async() => {
        await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        })
        setContent('');
        setTitle('');

    }


    return (
        <form onSubmit={create}>
            <h3>Create notes</h3>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            <button type="submit">Create</button>
        </form>
    )
}