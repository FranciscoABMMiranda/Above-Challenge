import React from 'react'

export const DetailsSkeleton: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 w-full">
        <div className="flex flex-col flex-grow gap-y-4 w-full">
          <div className="m-w-full h-12 rounded-md bg-slate-600" />
          <div className="m-w-full h-12 rounded-md bg-slate-600" />
        </div>
        <div className="w-full md:w-[40%] h-full min-h-52 md:min-h-28 rounded-md bg-slate-600" />
      </div>
      <div className="w-full h-12 rounded-md bg-slate-600" />
      <div className="w-full h-48 rounded-md bg-slate-600" />
    </div>
  )
}
