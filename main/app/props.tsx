import { SetStateAction } from 'react';

export interface fileDropDownProps {
  data: string
}

export interface textInputProps {
  setData: React.Dispatch<SetStateAction<string>>
}