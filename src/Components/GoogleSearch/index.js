import { Component } from "react";
import './index.css'
import GoogleList from "./Search/search";

const SearchList=[
    {name:"Price of Ethereum",id:1},
       { name:"Occulus Quest 2specs",id:2},
       { name:"Tesla Share Price",id:3},
       { name:"Price of Ethereum today",id:4},
       { name:"Latest trends in Ai",id:5},
       { name:"Latest trends in ML",id:6}

    
]
class GSearch extends Component{
    state={searchInput:"", updatedList:SearchList}
   
     SearchHandler=(event)=>{
        this.setState({searchInput:event.target.value})
         
    }

    selected=(id)=>{
        const {updatedList,searchInput}=this.state
        const value=updatedList.find((each)=>(
         each.id===id     
         
           
        )
        
    )
    if(value){
            this.setState({searchInput:value.name})
        }
    
    }
   
    render(){
        const {updatedList,searchInput}=this.state
       const filteredList =updatedList.filter((each)=>(
            each.name.toLowerCase().includes(searchInput.toLowerCase())
        ))
        
        return (
            <div className="main-search-container">
                <div className="top-container">
                    <h2>Google</h2>
                </div>
                <div className="bottom-container">

                   <div className="search-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                      <input  type="search" placeholder="Search Google" onChange={this.SearchHandler}  value={searchInput}/>
                      
                    </div> 
                    <div>
                        <ul className="ul-container">
                            {filteredList.map((each)=>(
                                <GoogleList eachItem={each} SearchInpiut={this.SearchFunction} selection={this.selected}/>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        )
    }

}

export default GSearch