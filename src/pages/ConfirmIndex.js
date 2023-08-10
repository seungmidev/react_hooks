import React from 'react'
import useConfirm from '../hooks/useConfirm';

export default function ConfirmIndex() {
  const deleteWorld = () => console.log("deleting the world....");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld);

  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  )
}
