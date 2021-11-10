import UserCards from "./UserCards";
const userList = [{
    id: '123',
    label: 'Khyati',
    image: "https://lh3.googleusercontent.com/a/AATXAJyhd7_EaxGbNMYtxrHYsVwhyOAWWj4FgKjB5mzv=s192-c-mo"

}, {
    id: '124',
    label: 'Arun',
    image: "https://lh3.googleusercontent.com/a/AATXAJyhd7_EaxGbNMYtxrHYsVwhyOAWWj4FgKjB5mzv=s192-c-mo"
}, {
    id: '125',
    label: 'Ankit',
    image: "https://lh3.googleusercontent.com/a/AATXAJyhd7_EaxGbNMYtxrHYsVwhyOAWWj4FgKjB5mzv=s192-c-mo"
}, {
    id: '126',
    label: 'Amit',
    image: "https://lh3.googleusercontent.com/a/AATXAJyhd7_EaxGbNMYtxrHYsVwhyOAWWj4FgKjB5mzv=s192-c-mo"
}, {
    id: '127',
    label: 'Shilpi',
    image: "https://lh3.googleusercontent.com/a/AATXAJyhd7_EaxGbNMYtxrHYsVwhyOAWWj4FgKjB5mzv=s192-c-mo"
},{
    id: '124',
    label: 'Arun',
    image: "https://lh3.googleusercontent.com/a/AATXAJyhd7_EaxGbNMYtxrHYsVwhyOAWWj4FgKjB5mzv=s192-c-mo"
}, {
    id: '124',
    label: 'Arun',
    image: "https://lh3.googleusercontent.com/a/AATXAJyhd7_EaxGbNMYtxrHYsVwhyOAWWj4FgKjB5mzv=s192-c-mo"
}, {
    id: '125',
    label: 'Ankit',
    image: "https://lh3.googleusercontent.com/a/AATXAJyhd7_EaxGbNMYtxrHYsVwhyOAWWj4FgKjB5mzv=s192-c-mo"
}, {
    id: '126',
    label: 'Amit',
    image: "https://lh3.googleusercontent.com/a/AATXAJyhd7_EaxGbNMYtxrHYsVwhyOAWWj4FgKjB5mzv=s192-c-mo"
}, ]


const Users = () => {
    const _renderList = () => {
        return userList.map((item, index) => {
            return <UserCards key={item.id} label={item.label} image={item.image}  />
        })
    }
    return (
        <>
            <div style={{ backgroundColor: 'black' }}>
            <div style={{ display: 'flex',flexWrap: 'wrap', backgroundColor: 'black', height: '100vh', width: '620px' }}>
                {_renderList()}
            </div></div>
        </>
    )
}


export default Users;
