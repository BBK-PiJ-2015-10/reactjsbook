import './BooksList.css';

 function BooksList(){
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>JavaScript - The Killer guide</td>
                    <td>Ackermann</td>
                    <td>978-dfasds</td>
                    <td>****</td>
                </tr>
                <tr>
                    <td>React - The Killer guide</td>
                    <td>Ackermann</td>
                    <td>979-dfasds</td>
                    <td>****</td>
                </tr>
            </tbody>
        </table>
    );
 }

 export default BooksList;