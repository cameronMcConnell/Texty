import { fileDropdownProps, editDropdownProps, viewDropdownProps } from "./props"
import { readText, writeText } from '@tauri-apps/api/clipboard'
import { WebviewWindow } from '@tauri-apps/api/window'

const FileDropDown = (props: fileDropdownProps): JSX.Element => {
  const handleSave = (e: React.MouseEvent<HTMLTableRowElement>): void => {

  }

  const handleSaveAs = (e: React.MouseEvent<HTMLTableRowElement>): void => {

  }

  const handleNewWindow = async (e: React.MouseEvent<HTMLTableRowElement>): Promise<void> => {

  }

  const tableRows: any[] = [["Save", "Ctrl + S", handleSave], ["Save As", "Ctrl + Shift + S", handleSaveAs], ["Open New Window", "Ctrl + O", handleNewWindow]];

  return (
    <div className="absolute w-[310px] left-0 bg-neutral-100 p-1 rounded shadow">
      <table>
        {tableRows.map((row) => (
          <tr className="hover:bg-neutral-200" onClick={row[2]}>
            <td className="p-0.5 w-[50%] rounded-l text-left text-base">{row[0]}</td>
            <td className="p-0.5 w-[50%] rounded-r text-right text-sm">{row[1]}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

const EditDropDown = (props: editDropdownProps): JSX.Element => {
  const handleCopy = async (e: React.MouseEvent<HTMLTableRowElement>) => {
    if (props.textareaRef.current) {
      const { selectionStart, selectionEnd} = props.textareaRef.current;
      const text = props.textareaRef.current.value.substring(selectionStart, selectionEnd);

      await writeText(text);
    }
  }

  const handlePaste = async (e: React.MouseEvent<HTMLTableRowElement>) => {    
    if (props.textareaRef.current) {
      const clipboardText = await readText();

      const { selectionStart, selectionEnd } = props.textareaRef.current;
      const textinputText = props.textareaRef.current.value;

      const newText = textinputText.substring(0, selectionStart) +
      clipboardText + textinputText.substring(selectionEnd);

      props.setData(newText);

      props.textareaRef.current.value = newText;
      props.textareaRef.current.setSelectionRange(selectionEnd + clipboardText!.length, selectionEnd + clipboardText!.length);
    }
  }

  const handleCut = async (e: React.MouseEvent<HTMLTableRowElement>) => {
    if (props.textareaRef.current) {
      const { selectionStart, selectionEnd } = props.textareaRef.current;
      const textinputText = props.textareaRef.current.value;

      await writeText(textinputText.substring(selectionStart, selectionEnd));

      const newText = textinputText.substring(0, selectionStart) + textinputText.substring(selectionEnd);

      props.setData(newText);

      props.textareaRef.current.value = newText;
      props.textareaRef.current.setSelectionRange(selectionStart, selectionStart);
    }
  }

  const tableRows: any[] = [["Copy", "Ctrl + C", handleCopy], ["Paste", "Ctrl + V", handlePaste], ["Cut", "Ctrl + X", handleCut]];

  return (
    <div className="absolute w-[120px] left-0 bg-neutral-100 p-1 rounded shadow">
      <table>
        {tableRows.map((row) => (
          <tr className="hover:bg-neutral-200" onClick={row[2]}>
            <td className="p-0.5 w-[50%] rounded-l text-left text-base">{row[0]}</td>
            <td className="p-0.5 w-[50%] rounded-r text-right text-sm">{row[1]}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

const ViewDropDown = (props: viewDropdownProps): JSX.Element => {
  const handleZoomIn = (e: React.MouseEvent<HTMLTableRowElement>): void => {
    if (props.fontSize < 80) {
      props.setTextInputFontSize(props.fontSize + 4);
    }
  }

  const handleZoomOut = (e: React.MouseEvent<HTMLTableRowElement>): void => {
    if (props.fontSize > 8) {
      props.setTextInputFontSize(props.fontSize - 4);
    }
  }

  const tableRows: any[] = [["Zoom In", "Ctrl +", handleZoomIn], ["Zoom Out", "Ctrl -", handleZoomOut]];

  return (
    <div className="absolute w-[170px] left-0 bg-neutral-100 p-1 rounded shadow">
      <table>
        {tableRows.map((row) => (
          <tr className="hover:bg-neutral-200" onClick={row[2]}>
            <td className="p-0.5 w-[50%] rounded-l text-left text-base">{row[0]}</td>
            <td className="p-0.5 w-[50%] rounded-r text-right text-sm">{row[1]}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export { FileDropDown, EditDropDown, ViewDropDown }