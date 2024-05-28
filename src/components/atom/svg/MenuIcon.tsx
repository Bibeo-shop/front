import { DefaultSvgProps } from '.'

const MenuIcon: React.FC<DefaultSvgProps> = ({
  size = '40',
  color = '#0000FF',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill={color} />
      <path
        d="M11.25 11.25H20H28.75"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.25 20H28.75"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.25 28.75H20H28.75"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default MenuIcon
