import { useRef } from 'react'
import { textInputProps } from "./props"

export const TextInput = (props: textInputProps): JSX.Element => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  
  const handleTab = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Tab') {
      e.preventDefault();
      
      if (textAreaRef.current) {
        const { selectionStart, selectionEnd } = textAreaRef.current;
        const text = textAreaRef.current.value;
        const newText = text.substring(0, selectionStart) + 
        '\t' + text.substring(selectionEnd);
        
        props.setData(newText);

        textAreaRef.current.value = newText;
        textAreaRef.current.setSelectionRange(selectionStart + 1, selectionEnd + 1)
      }
    } 
  }

  return (
    <textarea
      className="grow px-[16px] my-1 py-2 font-sans text-base" 
      ref={textAreaRef}
      onKeyDown={(e) => handleTab(e)}
      onChange={(e) => props.setData(e.target.value)}
    />
  )
}