import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
  return (
    <div>
        <header className='flex items-center justify-between gap-4 p-4'>
          <a href="/">
          <h1>Tran<span className='text-blue-400'>Scribe</span></h1></a>
          <button className='cursor-pointer addBtn text-blue-500 rounded-xl px-4'>
            <AddIcon titleAccess='Add' />
          </button>
        </header>
    </div>
  )
}

export default Header