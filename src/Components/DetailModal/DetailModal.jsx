import { Cancel } from '@mui/icons-material'
import React from 'react'
import Modal from '@mui/material/Modal';

const DetailModal = ({children , open , setOpen}) => {
  return (
    <Modal
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <div className="absolute top-1/2 left-0 right-0 outline-none bg-gray-800 rounded-lg mx-auto -transform-x-1/2 -transform-y-1/2 w-[450px] border border-gray-600 shadow-ring">
        <div className='flex-center border-b border-slate-600 p-2'>
              <p className='flex flex-1 justify-center font-DanaBold text-xl'>Details</p>
              <button onClick={() => setOpen(false)}>
              <Cancel className='text-red-500'/>
              </button>
        </div>
        <div className='p-5'>
     {children}
        </div>
    </div>
  </Modal>
  )
}

export default DetailModal