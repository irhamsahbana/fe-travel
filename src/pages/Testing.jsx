import React from 'react'

const Testing = () => {
  return (
    <div className="bg-rose-100 min-h-screen flex items-center justify-center">
      <div className="flex items-center gap-x-2 flex-col">
        {/* give margin */}
        <div className="mb-5">
          <input type="checkbox" id='checkbox' className="accent-cyan-500" />
          <label htmlFor="checkbox">Remember me</label>
        </div>

        <div className="mb-5">
          <input type='file' id='file' className="accent-cyan-500" />
          <label htmlFor="file">Upload file</label>
        </div>

      </div>
    </div>
  )
}

export default Testing