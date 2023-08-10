import React from 'react'
import useTitle from '../hooks/useTitle';

export default function TitleIndex() {
  const titleUpdater = useTitle("Loading....");
  setTimeout(() => titleUpdater("Home"), 5000);

  return (
    <div>TitleIndex</div>
  )
}
