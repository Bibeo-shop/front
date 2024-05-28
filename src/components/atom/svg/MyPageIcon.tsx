import { DefaultSvgProps } from '.'

const MyPageIcon: React.FC<DefaultSvgProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.6875 9.375C9.6875 8.67735 9.82491 7.98654 10.0919 7.34199C10.3589 6.69745 10.7502 6.11181 11.2435 5.6185C11.7368 5.12518 12.3225 4.73387 12.967 4.46689C13.6115 4.19991 14.3024 4.0625 15 4.0625C15.6976 4.0625 16.3885 4.19991 17.033 4.46689C17.6775 4.73387 18.2632 5.12518 18.7565 5.6185C19.2498 6.11181 19.6411 6.69745 19.9081 7.34199C20.1751 7.98654 20.3125 8.67735 20.3125 9.375C20.3125 10.784 19.7528 12.1352 18.7565 13.1315C17.7602 14.1278 16.409 14.6875 15 14.6875C13.591 14.6875 12.2398 14.1278 11.2435 13.1315C10.2472 12.1352 9.6875 10.784 9.6875 9.375ZM15 5.9375C14.0883 5.9375 13.214 6.29966 12.5693 6.94432C11.9247 7.58898 11.5625 8.46332 11.5625 9.375C11.5625 10.2867 11.9247 11.161 12.5693 11.8057C13.214 12.4503 14.0883 12.8125 15 12.8125C15.9117 12.8125 16.786 12.4503 17.4307 11.8057C18.0753 11.161 18.4375 10.2867 18.4375 9.375C18.4375 8.46332 18.0753 7.58898 17.4307 6.94432C16.786 6.29966 15.9117 5.9375 15 5.9375ZM10 18.4375C9.25408 18.4375 8.53871 18.7338 8.01126 19.2613C7.48382 19.7887 7.1875 20.5041 7.1875 21.25V22.735C7.1875 22.7575 7.20375 22.7775 7.22625 22.7812C12.375 23.6213 17.6262 23.6213 22.7738 22.7812C22.7847 22.7795 22.7946 22.7738 22.8017 22.7653C22.8088 22.7568 22.8126 22.7461 22.8125 22.735V21.25C22.8125 20.5041 22.5162 19.7887 21.9887 19.2613C21.4613 18.7338 20.7459 18.4375 20 18.4375H19.575C19.5415 18.4372 19.5082 18.4423 19.4763 18.4525L18.395 18.8062C16.189 19.5265 13.811 19.5265 11.605 18.8062L10.5225 18.4525C10.4914 18.4425 10.4589 18.4375 10.4262 18.4375H10ZM5.3125 21.25C5.3125 20.0068 5.80636 18.8145 6.68544 17.9354C7.56451 17.0564 8.7568 16.5625 10 16.5625H10.425C10.6562 16.5625 10.8863 16.6 11.105 16.67L12.1875 17.0238C14.0151 17.6203 15.9849 17.6203 17.8125 17.0238L18.895 16.67C19.1138 16.5988 19.3438 16.5625 19.5738 16.5625H20C21.2432 16.5625 22.4355 17.0564 23.3146 17.9354C24.1936 18.8145 24.6875 20.0068 24.6875 21.25V22.735C24.6875 23.6775 24.005 24.48 23.075 24.6313C17.7271 25.5043 12.2729 25.5043 6.925 24.6313C6.4749 24.558 6.06555 24.327 5.77014 23.9796C5.47472 23.6322 5.31251 23.191 5.3125 22.735V21.25Z"
        fill={color}
      />
    </svg>
  )
}

export default MyPageIcon
