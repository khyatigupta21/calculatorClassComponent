import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBox = (props: any) => {
    const[userData, setUserData] = React.useState([]);
    const [name, setName] = React.useState("");
    React.useEffect(() => {
        const data = [
            {name: "Khyati", age: "34"},
            {name: "Amit", age: "39"},
            {name: "Arun", age: "26"},
            {name: "Ankit", age: "29"},
            {name: "Shilpi", age: "36"}
        ];
        setUserData(data);
    })

    return (
        <>
        <Table>
                <tr>
                    <td>
                        <input type="text"
                        className="search" 
                        placeholder={props.placeholder}
                        onChange={props._handleChange} />
                    </td>
            </tr>
        </Table>
        <Table responsive size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    userData && userData.length > 0 ?
                        userData.map(item =>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                            </tr>
                        )
                        :"No Data"
                }
            </tbody>
        </Table>  </>
       
              
                
    )
}

export default SearchBox;
