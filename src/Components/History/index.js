import {Component} from 'react'
import './index.css'
import History from './indexChild'
// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class HistoryPage extends Component {
  state={searchInput:"",usersDetailsList:initialHistoryList}
  

  handleChange=(event)=>{
    this.setState({searchInput:event.target.value})
  }
  onDelete=(id)=>{
    const usersDetailsList=this.state
    const filterList=usersDetailsList.filter((each)=>
    each.id!==id)
    console.log(id)
    this.setState({usersDetailsList:filterList})
  }

  render() {
    const {searchInput,usersDetailsList}=this.state
   
    const searchResults =usersDetailsList.filter((eachitem)=>
      eachitem.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    )
    
    return (
      <div className='main-container'>
        <div className='header'>
          <div className='header-image'>
             <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"/>
        
               </div>
               <div className='searchContainer'>
                 <img className='searchIcon' src="https://assets.ccbp.in/frontend/react-js/search-img.png"/>
                  <input className='input' type="search" value={searchInput} onChange={this.handleChange}/>
               </div>
             
        
        </div>
        <div className='bottom-container'>
          <p>{searchInput}</p>
          <ul>
          {searchResults.map(each => (
            <History eachItem={each} key={each.id} deleteUser={this.onDelete}/>
          ))}
        </ul>

        </div>
        
      </div>
    )
  }

  // state = {
  //   searchInput: '',
  //   latestHistoryList: initialHistoryList,
  //   isTrue: false,
  // }
  // FillFunction = value => {
  //   const {latestHistoryList} = this.state
  //   const newHistoryList = latestHistoryList.filter(
  //     eachValue => eachValue.id !== value,
  //   )
  //   if (newHistoryList.length === 0) {
  //     this.setState({latestHistoryList: newHistoryList, isTrue: true})
  //   } else {
  //     this.setState({latestHistoryList: newHistoryList})
  //   }
  // }
  // ChangeFunction = e => {
  //   this.setState({searchInput: e.target.value})
  // }
  // render() {
  //   const {searchInput, latestHistoryList} = this.state
  //   let {isTrue} = this.state
  //   const newHistoryList = latestHistoryList.filter(eachValue =>
  //     eachValue.title.toLowerCase().includes(searchInput.toLowerCase()),
  //   )
  //   if (newHistoryList.length === 0) {
  //     isTrue = true
  //   }
  //   return (
  //     <div className="main-container">
  //       <div className="top-holder">
  //         <img
  //           className="image"
  //           alt="app logo"
  //           src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
  //         />
  //         <div className="search-holder">
  //           <img
  //             src="https://assets.ccbp.in/frontend/react-js/search-img.png"
  //             className="search-icon"
  //             alt="search"
  //           />
  //           <input
  //             type="search"
  //             placeholder="Search history"
  //             className="input-element"
  //             value={searchInput}
  //             onChange={this.ChangeFunction}
  //           />
  //         </div>
  //       </div>
  //       <div className="content-holder">
  //         {!isTrue && (
  //           <ul className="inner-holder">
  //             {newHistoryList.map(eachObject => (
  //               <li key={eachObject.id} className="items-holder">
  //                 <p className="time">{eachObject.timeAccessed}</p>
  //                 <div className="icon-holder">
  //                   <img
  //                     src={eachObject.logoUrl}
  //                     className="logo-element"
  //                     alt="domain logo"
  //                   />
  //                   <div className="logo-content">
  //                     <p className="name">{eachObject.title}</p>
  //                     <p className="website">{eachObject.domainUrl}</p>
  //                   </div>
  //                 </div>
  //                 <button
  //                   className="delete-button"
  //                   data-testid="delete"
  //                   type="button"
  //                   onClick={() => this.FillFunction(eachObject.id)}
  //                 >
  //                   <img
  //                     className="delete-icon"
  //                     src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
  //                     alt="delete"
  //                   />
  //                 </button>
  //               </li>
  //             ))}
  //           </ul>
  //         )}
  //         {isTrue && (
  //           <div className="empty-container">
  //             <p className="empty-element">There is no history to show</p>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   )
  // }
}

export default HistoryPage
