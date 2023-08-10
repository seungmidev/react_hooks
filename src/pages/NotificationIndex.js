import React from 'react'
import useNotification from '../hooks/useNotification';

export default function NotificationIndex() {
  const triggerNotif = useNotification("Can I have an iced americano?", {body: "I love americano don't you?"});

  return (
    <div>
      <button onClick={triggerNotif}>Notification</button>
    </div>
  )
}
