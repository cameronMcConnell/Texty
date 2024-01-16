import { fileDropdownProps, editDropdownProps, viewDropdownProps } from "./props"

const FileDropDown = (props: fileDropdownProps): JSX.Element => {
  return (
    <div className="absolute w-[210px] left-0 bg-neutral-100 p-1 rounded shadow">
      <table>
        <tr className="hover:bg-neutral-200">
          <td className="p-0.5 w-[50%] rounded-l text-left text-base">Save</td>
          <td className="p-0.5 w-[50%] rounded-r text-right text-sm">Ctrl + S</td>
        </tr>
        <tr className="hover:bg-neutral-200">
          <td className="p-0.5 w-[50%] rounded-l text-left text-base">Save As</td>
          <td className="p-0.5 w-[50%] rounded-r text-right text-sm">Ctrl + Shift + S</td>
        </tr>
      </table>
    </div>
  )
}

const EditDropDown = (props: editDropdownProps): JSX.Element => {
  return (
    <div className="absolute w-[120px] left-0 bg-neutral-100 p-1 rounded shadow">
      <table>
        <tr className="hover:bg-neutral-200">
          <td className="p-0.5 w-[50%] rounded-l text-left text-base">Copy</td>
          <td className="p-0.5 w-[50%] rounded-r text-right text-sm">Ctrl + C</td>
        </tr>
        <tr className="hover:bg-neutral-200">
          <td className="p-0.5 w-[50%] rounded-l text-left text-base">Paste</td>
          <td className="p-0.5 w-[50%] rounded-r text-right text-sm">Ctrl + V</td>
        </tr>
        <tr className="hover:bg-neutral-200">
          <td className="p-0.5 w-[50%] rounded-l text-left text-base">Cut</td>
          <td className="p-0.5 w-[50%] rounded-r text-right text-sm">Ctrl + X</td>
        </tr>
      </table>
    </div>
  )
}

const ViewDropDown = (props: viewDropdownProps): JSX.Element => {
  const handleZoomIn = (e: React.MouseEvent<HTMLTableRowElement>): void => {
    if (props.fontSize < 100) {
      props.setTextInputFontSize(props.fontSize + 4);
    }
  }

  const handleZoomOut = (e: React.MouseEvent<HTMLTableRowElement>): void => {
    if (props.fontSize > 4) {
      props.setTextInputFontSize(props.fontSize - 4);
    }
  }

  return (
    <div className="absolute w-[170px] left-0 bg-neutral-100 p-1 rounded shadow">
      <table>
        <tr className="hover:bg-neutral-200" onClick={(e) => handleZoomIn(e)}>
          <td className="p-0.5 w-[50%] rounded-l text-left text-base">Zoom In</td>
          <td className="p-0.5 w-[50%] rounded-r text-right text-sm">Ctrl +</td>
        </tr>
        <tr className="hover:bg-neutral-200" onClick={(e) => handleZoomOut(e)}>
          <td className="p-0.5 w-[50%] rounded-l text-left text-base">Zoom Out</td>
          <td className="p-0.5 w-[50%] rounded-r text-right text-sm">Ctrl -</td>
        </tr>
      </table>
    </div>
  )
}

export { FileDropDown, EditDropDown, ViewDropDown }