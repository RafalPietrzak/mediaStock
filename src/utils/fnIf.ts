const fnIf = (Fn: Function): Function => (expression: Boolean): any =>
  expression ? Fn() : null;
export default fnIf;
