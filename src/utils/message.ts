export const messages = {
  isEmpty: (field: string) => `${field} 입력해주세요.`,
  isString: (field: string) => `${field} 문자열로 입력해주세요.`,
  isPattern: (field: string) => `올바른 ${field} 형식이 아닙니다.`,
  minLength: (field: string, length: number) =>
    `${field} 최소 ${length}자리 이상이어야 합니다.`,
  maxLength: (field: string, length: number) =>
    `${field} 최대 ${length}자리까지 입력 가능합니다.`,
}
