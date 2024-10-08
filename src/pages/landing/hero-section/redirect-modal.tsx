// import { useState } from "react"

export default function RedirectModal() {
  // const [isModalOpen, setIsModalOpen] = useState<Boolean>(true)


  const closeModal = () => {
  }
  return (
    <>
      <div className="fixed inset-0 z-10 bg-gray-800 bg-opacity-50" />
      <div>

        <h1>Your account is not linked with any Employers profile</h1>
        <p>Posting a job requires an Employers profile</p>
       <div>
       <button onClick={closeModal}>Cancel</button>
       <button onClick={closeModal}></button>
       </div>
      </div>
    </>
  )
}