// Wrapper -> Need to visit again 

import React from 'react'

const CardWrapper = ({innerComponent}) => {
  return (
    <div>
        {innerComponent}
    </div>
  )
}

const TextComponent = () => {
    return(
        <div>
            Hi There
        </div>
    )
}

export  { CardWrapper, TextComponent }