import React from 'react'

const UseCallback = () => {
  return (
    <div>

    </div>
  )
}

export default UseCallback

// useCallback - It is used to memoize functions which can help in optimizing the performance of your application
// , especially in cases involving the child components that relay on reference to prevent 
// unnecessary re-renders. It is similar to useMemo, this is used for functions. 