import React, {useState} from 'react';

export default function CustomizeImage(){
  const [url, setUrl] = useState('')
  const [size, setSize] = useState('');

  function handleInputChange(e){
    const value = e.target.value
    setUrl(value)
  }

  function handleRangeChange(e){
    const value = e.target.value
    setSize(value)
  }

  function customize(){

    if (url && size){
      return(
        <>
      <img src={url} width={size} height={size}/>
      </>
      )
    }
  }
  
  return(
    <div className='container'>
      <h1>Customize Image</h1>
      <input type="text" name="url" onChange={handleInputChange}/>
      <input type="range" name="size" min='0' max = '200' onChange={handleRangeChange}/>
      <p>{size}x{size}</p>
      {customize(url)}
    </div>
  )
}
