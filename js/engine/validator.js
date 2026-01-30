function validate(code, expected) {
  return expected.every(item => code.includes(item));
}
