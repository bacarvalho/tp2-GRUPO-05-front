import React from "react";

//usar getDetailsBook();

const ViewBook = ({ book }) => {
    return (
        <div className="container">
            <div className="container-header">
                <div className="container-picture">
                    {book.picture}
                </div>
                <div className="container-info">
                    <span>{book.title}</span>
                    <span>{book.author}</span>
                    <span>{book.gender}</span>
                    <span>{book.isbn}</span>
                    <span>{book.dueño}</span>
                </div>
            </div>
            <div className="container-body">
                    {book.sinapsis}
            </div>
            <button>Devolver</button>
        </div>
    );
};

export default ViewBook;