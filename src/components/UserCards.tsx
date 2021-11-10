const UserCards = (data: any) => {
    const { image, link, label } = data;
    return (

        <div style={{ margin: '2px',backgroundColor:'grey',width:'250px', height:'160px',borderRadius:'6px' }}>
            <div style={{ textAlign:'center', marginTop:'50px'}}>
                <img style={{ width: '40px'}} src={image} alt={label} />
            </div>
            <div >
                <span style={{ position: 'relative', bottom:'-35px',left:'5px' }}>{label}</span>
            </div>
        </div>

    )
}

export default UserCards;