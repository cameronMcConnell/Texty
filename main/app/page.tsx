"use client"
import { useState, useRef, useEffect } from 'react'
import { FileDropDown, ViewDropDown, EditDropDown } from './dropdowns'
import { TextInput } from './textinput'

export default function Home(): JSX.Element {
  let [fileMenu, setFileMenu] = useState<boolean>(false);
  let [editMenu, setEditMenu] = useState<boolean>(false);
  let [viewMenu, setViewMenu] = useState<boolean>(false);

  let [textInputData, setTextInputData] = useState<string>("");
  let [textInputFontSize, setTextInputFontSize] = useState<number>(16);

  const textareaRef: React.RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);

  const fileDropdownProps = {data: textInputData};
  const editDropdownProps = {setData: setTextInputData, textareaRef: textareaRef};
  const viewDropdownProps = {textareaRef: textareaRef, fontSize: textInputFontSize, setTextInputFontSize: setTextInputFontSize};
  const textInputProps = {setData: setTextInputData, fontSize: textInputFontSize, textareaRef: textareaRef};

  const clearMenus = (): void => {
    if (fileMenu) setFileMenu(false);
    if (editMenu) setEditMenu(false);
    if (viewMenu) setViewMenu(false);
  }

  const handleHotkeys = (e: KeyboardEvent): void => {
    if (e.ctrlKey && (e.key === "+" || e.key === "=")) {
      if (textInputFontSize < 100) { 
        setTextInputFontSize((prevSize) => prevSize + 4);
      }
    }
    else if (e.ctrlKey && e.key === "-") {
      if (textInputFontSize > 4) {
        setTextInputFontSize((prevSize) => prevSize - 4);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleHotkeys, true);
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen" onClick={() => clearMenus()}>
      <header className="shadow p-3 bg-neutral-100">
        <div className="flex flex-row grow-0 gap-x-5 p-0 text-lg">
          <div
            key={0}
            className="relative hover:bg-neutral-200 hover:cursor-pointer p-1 rounded"
            onClick={() => setFileMenu(!fileMenu)}
          > File {fileMenu ? <FileDropDown {...fileDropdownProps} /> : ''} </div>
          <div
            key={1}
            className="relative hover:bg-neutral-200 hover:cursor-pointer p-1 rounded"
            onClick={() => setEditMenu(!editMenu)}
          > Edit {editMenu ? <EditDropDown {...editDropdownProps} /> : ''} </div>
          <div
            key={2}
            className="relative hover:bg-neutral-200 hover:cursor-pointer p-1 rounded"
            onClick={() => setViewMenu(!viewMenu)}
          > View {viewMenu ? <ViewDropDown {...viewDropdownProps} /> : ''} </div>
        </div>
      </header>
      <TextInput {...textInputProps} />
    </div>
  )
}
