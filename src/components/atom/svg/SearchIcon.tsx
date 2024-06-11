import { DefaultSvgProps } from '.'

const SearchIcon: React.FC<DefaultSvgProps> = ({
  size = '30',
  color = '#0000FF',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.375 17.4998H18.3875L18.0375 17.1623C18.8187 16.2548 19.3896 15.1858 19.7094 14.0319C20.0293 12.8779 20.0901 11.6675 19.8875 10.4873C19.3 7.01235 16.4 4.23735 12.9 3.81235C11.6695 3.65668 10.4197 3.78456 9.24628 4.18621C8.07283 4.58785 7.0068 5.25262 6.12979 6.12964C5.25277 7.00665 4.58801 8.07267 4.18636 9.24613C3.78471 10.4196 3.65683 11.6694 3.8125 12.8998C4.2375 16.3998 7.0125 19.2998 10.4875 19.8873C11.6677 20.0899 12.8781 20.0291 14.032 19.7093C15.186 19.3895 16.255 18.8185 17.1625 18.0373L17.5 18.3873V19.3748L22.8125 24.6873C23.325 25.1998 24.1625 25.1998 24.675 24.6873C25.1875 24.1748 25.1875 23.3373 24.675 22.8248L19.375 17.4998ZM11.875 17.4998C8.7625 17.4998 6.25 14.9873 6.25 11.8748C6.25 8.76235 8.7625 6.24985 11.875 6.24985C14.9875 6.24985 17.5 8.76235 17.5 11.8748C17.5 14.9873 14.9875 17.4998 11.875 17.4998Z"
        fill={color}
      />
    </svg>
  )
}

export default SearchIcon
