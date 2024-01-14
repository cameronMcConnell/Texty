import { fileDropDownProps } from "./props"

const FileDropDown = (props: fileDropDownProps): JSX.Element => {
  return (
    <div className="absolute w-20 left-0 bg-neutral-100 p-1 rounded shadow">
      <p className='hover:bg-neutral-200 p-0.5 rounded'>Save</p>
      <p className='hover:bg-neutral-200 p-0.5 rounded'>Save As</p>
    </div>
  )
}

const EditDropDown = (): JSX.Element => {
  return (
    <div className="absolute w-20 left-0 bg-neutral-100 p-1 rounded shadow">
      <p className='hover:bg-neutral-200 p-0.5 rounded'>Edit</p>
      <p className='hover:bg-neutral-200 p-0.5 rounded'>Edit As</p>
    </div>
  )
}

const ViewDropDown = (): JSX.Element => {
  return (
    <div className="absolute w-20 left-0 bg-neutral-100 p-1 rounded shadow">
      <p className='hover:bg-neutral-200 p-0.5 rounded'>View</p>
      <p className='hover:bg-neutral-200 p-0.5 rounded'>View As</p>
    </div>
  )
}

export { FileDropDown, EditDropDown, ViewDropDown }