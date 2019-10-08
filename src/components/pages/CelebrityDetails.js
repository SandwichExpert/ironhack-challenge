import React from 'react';
import Celebrities from './Celebrities'

export default function CelebrityDetails(props){
  const id = props.match.params.id;
  console.log(id)
  console.log(props.celebrities)
  // const celebrity = props.celebrities.filter
  return(
    <div>
        <h1>HELLO</h1>
    </div>
  )
}