import React from "react";
import ReactDOM from "react-dom";

const myelement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</td>
        </tr>
    </table>
);

ReactDOM.render(<h1>Hello Mohan Welcome and react is {5+5} times better</h1>,document.getElementById("root"));
// ReactDOM.render(<h1>Hello Mohan Welcome and react is {5+5} times better</h1>,document.getElementById("root"));
// ReactDOM.render(myelement,document.getElementById("root"));