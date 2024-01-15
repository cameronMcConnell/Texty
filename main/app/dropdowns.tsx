import { fileDropDownProps } from "./props"

const FileDropDown = (props: fileDropDownProps): JSX.Element => {
  const tableRows = [["Save", "Ctrl + S"], ["Save As", "Ctrl + Shift + S"]];
  
  return (
    <div className="absolute w-[210px] left-0 bg-neutral-100 p-1 rounded shadow">
      <table className="border-collapse">
        {tableRows.map((row: string[]) => (
          <tr className="hover:bg-neutral-200">
            <td className="p-0.5 w-[50%] rounded-l text-left text-base">{row[0]}</td>
            <td className="p-0.5 w-[50%] rounded-r text-right text-sm">{row[1]}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

const EditDropDown = (): JSX.Element => {
  const tableRows = [["Copy", "Ctrl + C"], ["Paste", "Ctrl + V"], ["Cut", ]]

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