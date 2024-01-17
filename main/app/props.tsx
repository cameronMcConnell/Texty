import { SetStateAction } from 'react';

export interface fileDropdownProps {
  data: string
}

export interface editDropdownProps {
  setData: React.Dispatch<SetStateAction<string>>,
  textareaRef: React.RefObject<HTMLTextAreaElement>
}

export interface viewDropdownProps {
  textareaRef: React.RefObject<HTMLTextAreaElement>,
  fontSize: number,
  setTextInputFontSize: React.Dispatch<SetStateAction<number>>
}

export interface textInputProps {
  setData: React.Dispatch<SetStateAction<string>>,
  fontSize: number,
  textareaRef: React.RefObject<HTMLTextAreaElement>
}