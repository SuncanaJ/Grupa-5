import { Link  } from 'react-router-dom';
import { useEffect } from "react";

const Users = () => {
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10").then((res)
    res.json()
        ); 
    }, []);    

    const contacts = [
        {id: 1, title: 'delectus aut autem'},
        {id: 2, title: 'quis ut nam facilis et officia qui'}, 
        {id: 3, title: 'fugiat veniam minus'},
        {id: 4, title: 'et porro tempora'},
        {id: 5, title: 'laboriosam mollitia et enim quasi adipisci quia provident illum'},
        {id: 6, title: 'qui ullam ratione quibusdam voluptatem quia omnis'},
        {id: 7, title: 'illo expedita consequatur quia in'},
        {id: 8, title: 'quo adipisci enim quam ut ab'},
        {id: 9, title: 'molestiae perspiciatis ipsa'},
        {id: 10, title: 'illo est ratione doloremque quia maiores aut'},
    ];

const Names = [
        {userid: 1, name: 'Suncana'},
        {userid: 2, name: 'Maria'}, 
        {userid: 3, name: 'Niko'},
        {userid: 4, name: 'Marko'},
        {userid: 5, name: 'Daniel'},
        {userid: 6, name: 'Lana'},
        {userid: 7, name: 'Janko'},
        {userid: 8, name: 'Mia'},
        {userid: 9, name: 'Valentina'},
        {userid: 10, name: 'Ana'},

    ];

    return (
        <>
        {Titles.map((con)  => (
            <div key={con.id}>
                <p>{con.title}</p>
                <Link to={'/</Titles/${con.id}'}>View details</Link>
            </div>
        ))}
        </>
    );
};

export default Titles; 
        