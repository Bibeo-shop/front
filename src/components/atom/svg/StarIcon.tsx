import { DefaultSvgProps } from '.'

const StarIcon: React.FC<DefaultSvgProps> = ({
  size = 30,
  color = '#FFC52F',
  className,
}) => {
  return (
    <div className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.01769 5.38355L3.12706 7.2037L2.4844 9.92574C2.44895 10.0735 2.45808 10.2285 2.51064 10.371C2.56321 10.5136 2.65685 10.6374 2.77975 10.7268C2.90264 10.8162 3.04926 10.8672 3.2011 10.8732C3.35294 10.8793 3.50318 10.8403 3.63284 10.761L6.00003 9.30417L8.36862 10.761C8.49827 10.8398 8.64832 10.8785 8.7999 10.8722C8.95148 10.8659 9.0978 10.8148 9.22043 10.7255C9.34307 10.6362 9.43654 10.5126 9.48907 10.3703C9.54161 10.228 9.55086 10.0733 9.51565 9.92574L8.87065 7.2037L10.98 5.38355C11.0947 5.28441 11.1777 5.15368 11.2185 5.00768C11.2594 4.86168 11.2563 4.70688 11.2097 4.56261C11.1631 4.41834 11.075 4.29101 10.9565 4.1965C10.8379 4.10199 10.6942 4.0445 10.5432 4.0312L7.77753 3.80808L6.71065 1.2262C6.65291 1.08549 6.55462 0.965133 6.42829 0.880425C6.30196 0.795717 6.1533 0.750488 6.0012 0.750488C5.8491 0.750488 5.70044 0.795717 5.57411 0.880425C5.44778 0.965133 5.3495 1.08549 5.29175 1.2262L4.22534 3.80808L1.45972 4.0312C1.30839 4.044 1.16421 4.10117 1.04524 4.19555C0.92626 4.28993 0.837781 4.41732 0.790886 4.56176C0.74399 4.7062 0.740763 4.86127 0.781607 5.00754C0.822452 5.15381 0.905553 5.28477 1.0205 5.38402L1.01769 5.38355Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export default StarIcon
