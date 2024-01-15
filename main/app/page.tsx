"use client"
import { useState } from 'react'
import { FileDropDown, ViewDropDown, EditDropDown } from './dropdowns'
import { TextInput } from './textinput'

export default function Home(): JSX.Element {
  let [fileMenu, setFileMenu] = useState<boolean>(false);
  let [editMenu, setEditMenu] = useState<boolean>(false);
  let [viewMenu, setViewMenu] = useState<boolean>(false);

  let [textInputData, setTextInputData] = useState<string>("");

  const fileDropdownProps = {data: textInputData};
  const textInputProps = {setData: setTextInputData};

  const clearMenus = (): void => {
    if (fileMenu) setFileMenu(false);
    if (editMenu) setEditMenu(false);
    if (viewMenu) setViewMenu(false);
  }

  const handleHotKeys = (e: React.KeyboardEvent<HTMLDivElement>) => {

  }

  return (
    <div 
      className="flex flex-col w-screen h-screen"
      onClick={() => clearMenus()}
      onKeyDown={(e) => handleHotKeys(e)}
      >
      <header className="shadow p-3 bg-neutral-100">
        <div className="flex flex-row grow-0 gap-x-5 p-0 text-lg">
          <div 
            className="relative hover:bg-neutral-200 hover:cursor-pointer p-1 rounded"
            onClick={() => setFileMenu(!fileMenu)}
          > File {fileMenu ? <FileDropDown {...fileDropdownProps} /> : ''} </div>
          <div 
            className="relative hover:bg-neutral-200 hover:cursor-pointer p-1 rounded"
            onClick={() => setEditMenu(!editMenu)}
          > Edit {editMenu ? <EditDropDown /> : ''} </div>
          <div 
            className="relative hover:bg-neutral-200 hover:cursor-pointer p-1 rounded"
            onClick={() => setViewMenu(!viewMenu)}
          > View {viewMenu ? <ViewDropDown /> : ''} </div>
        </div>
      </header>
      <TextInput {...textInputProps} />
    </div>
  )
}
