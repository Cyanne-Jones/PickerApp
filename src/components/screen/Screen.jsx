import './Screen.css'

export const Screen = () => {
  return (
    <div className='screen'>
      <h1>Who is here today?</h1>
      <div className='inputContainer'>
      <label className='inputLabel'>
          <input 
            className='checkbox' 
            type='checkbox' 
            id='reece' 
            name='name' 
            value='Reece'/>
          Reece
        </label>
        <label className='inputLabel'>
          <input 
            className='checkbox' 
            type='checkbox' 
            id='mike' 
            name='name' 
            value='Mike'/>
          Mike
        </label>
        <label className='inputLabel'>
          <input 
            className='checkbox' 
            type='checkbox' 
            id='cam' 
            name='name' 
            value='Cam'/>
          Cam
        </label>
        <label className='inputLabel'>
          <input 
            className='checkbox' 
            type='checkbox' 
            id='cyanne' 
            name='name' 
            value='Cyanne'/>
          Cyanne
        </label>
      </div>
    </div>
  )
}