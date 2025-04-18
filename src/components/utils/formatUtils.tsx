export const formatPhone = (digits: string): string => {
  if (digits.startsWith('02')) {
    if (digits.length === 9) {
      return digits.replace(/(02)(\d{3})(\d{4})/, '$1-$2-$3');
    }
    if (digits.length === 10) {
      // 02-XXXX-XXXX
      return digits.replace(/(02)(\d{4})(\d{4})/, '$1-$2-$3');
    }
  }

  // 2) 기타 지역번호 0NZ (N=3~6, Z=1~5)
  if (/^0[3-6][1-5]/.test(digits)) {
    if (digits.length === 10) {
      // 0NZ-XXX-XXXX
      return digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
    if (digits.length === 11) {
      // 0NZ-XXXX-XXXX
      return digits.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }
  }

  // 3) 모바일 01x
  if (/^01[016789]/.test(digits)) {
    if (digits.length === 10) {
      // e.g. 011-XXX-XXXX
      return digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
    if (digits.length === 11) {
      // 010-XXXX-XXXX
      return digits.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }
  }

  // 4) 그 외: 숫자만 리턴
  return digits;
};
