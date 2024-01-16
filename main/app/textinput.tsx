import { textInputProps } from "./props"

export const TextInput = (props: textInputProps): JSX.Element => {
  const handleTab = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Tab') {
      e.preventDefault();
      
      if (props.textareaRef.current) {
        const { selectionStart, selectionEnd } = props.textareaRef.current;
        const text = props.textareaRef.current.value;
        const newText = text.substring(0, selectionStart) + 
        '\t' + text.substring(selectionEnd);
        
        props.setData(newText);

        props.textareaRef.current.value = newText;
        props.textareaRef.current.setSelectionRange(selectionStart + 1, selectionEnd + 1)
      }
    } 
  }

  return (
    <textarea
      style={{fontSize: props.fontSize}}
      className="grow px-[16px] my-1 py-2 font-sans" 
      ref={props.textareaRef}
      onKeyDown={(e) => handleTab(e)}
      onChange={(e) => props.setData(e.target.value)}
    />
  )
}