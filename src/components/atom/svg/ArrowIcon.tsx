import { DefaultSvgProps } from './types'

const ArrowIcon: React.FC<DefaultSvgProps> = ({
  size = '24',
  color = '#0000FF',
  className,
}) => {
  return (
    <div className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_160_2137)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"
            fill="#E5E5E5"
          />
          <g clipPath="url(#clip1_160_2137)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.0302 11.47C14.1706 11.6106 14.2495 11.8012 14.2495 12C14.2495 12.1987 14.1706 12.3893 14.0302 12.53L11.2022 15.359C11.0615 15.4996 10.8707 15.5786 10.6718 15.5785C10.4728 15.5785 10.2821 15.4994 10.1414 15.3587C10.0008 15.218 9.92183 15.0272 9.92188 14.8283C9.92192 14.6293 10.001 14.4386 10.1417 14.298L12.4397 12L10.1417 9.70196C10.005 9.56057 9.92932 9.37115 9.93093 9.1745C9.93255 8.97785 10.0113 8.78971 10.1503 8.65058C10.2893 8.51146 10.4774 8.4325 10.674 8.4307C10.8707 8.42889 11.0602 8.5044 11.2017 8.64096L14.0307 11.4695L14.0302 11.47Z"
              fill={color}
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_160_2137">
            <rect width={size} height={size} fill="white" />
          </clipPath>
          <clipPath id="clip1_160_2137">
            <rect
              width="12"
              height="12"
              fill="white"
              transform="translate(6 6)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default ArrowIcon
