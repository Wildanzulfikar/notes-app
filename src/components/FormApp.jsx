import React from "react";

function FormApp() {
    return (
        <div className="note-input">
            <h2>Buat Catatan</h2>
            <form>
                <p className="note-input__title__char-limit">Sisa Karakter : 50</p>
                <input className="note-input__title" type="text" placeholder="ini adalah judul ..."/>
                <textarea className="note-input__body" placeholder="Buat catatanmu disini ..."></textarea>
                <button type="submit">Buat</button>
            </form>
        </div>
    )
}

export default FormApp;