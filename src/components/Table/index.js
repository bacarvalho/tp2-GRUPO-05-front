import React from 'react';


export default function Table({theaders, tbody}) {
console.log(theaders);
    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                    {theaders.map(heading => {
                        return <th key={heading}>{heading}</th>
                    })}
                    </tr>
                </thead>
                <tbody>
                    {tbody.map((row, index) => {
                    return <tr key={index}>
                        {theaders.map((key, index) => {
                                return <td key={row[key]}>{row[key]}</td>
                        })}
                    </tr>;
                })}
                </tbody>
            </table>
        </div>
    );
}

