import { textInputProps } from "./props"

export const TextInput = (props: textInputProps): JSX.Element => {
  const handleTabs = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Tab') e.preventDefault();
  }

  return (
    <textarea 
      className="grow px-[16px] my-1 py-2 font-sans text-base" 
      onKeyDown={(e) => handleTabs(e)}
      onChange={(e) => props.setData(e.target.value)}    
    />
  )
}