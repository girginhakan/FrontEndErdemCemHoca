import React from 'react'

const Card = ({user,loading,error,getRandomUser}) => {
  return (
    <div className='container'>
        <button disabled={loading} onClick={getRandomUser}>{loading?"Loading...":"Get random User"}</button>
        {user?
        <div className="container-card">
        <img src={user.picture.large} alt="profil-photo" />
        <div className="container-card-body">
          <p>{user.name.title+". "+user.name.first+" "+user.name.last}</p>
          <p>{user.location.country}</p>
          <p>{user.email}</p>
        </div>
      </div>
      :<p className='errror'>{error}</p>
    }
    
  </div>
  )
}

export default Card