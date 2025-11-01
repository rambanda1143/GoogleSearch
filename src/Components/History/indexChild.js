
const History=(props)=>{
    const {eachItem,deleteUser}=props
    const {timeAccessed,title,logoUrl,domainUrl,id}=eachItem

       const onDelete = () => {
                deleteUser(id)
                }
      
        return(
            <li className="list-container">
                <div className='listContainer'>

                     <div className='timer'>
                      <p className='time'>{timeAccessed}</p>

                    </div>
                    <div className='app-details'>
                            <img className='logo' src={logoUrl} alt="logo"/>
                            <h6 className='title'>{title}</h6>
                            <p className='domain'>{domainUrl}</p>
                    </div>
                    
                    <button className='delete-container' onClick={onDelete}>
                            <img  src="https://assets.ccbp.in/frontend/react-js/delete-img.png"/>    
                    </button>

                    </div>
                
            </li>
        )
    

}

export default History