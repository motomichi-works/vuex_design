// validate.jsで使用する定数を定義するファイルです。

// 正規表現パターン
export const FIXED_LINE_PHONE_NUMBER_PATTERN = '^[0-9]{10}$';
export const MOBILE_PHONE_NUMBER_PATTERN = '^(050|070|080|090)[0-9]{8}$';
export const EMAIL_PATTERN = '(^[^-/|][a-zA-Z0-9.!#$&\'*+/=^_`{|}~-]+@([a-zA-Z0-9-.]+)*?.[a-zA-Z0-9-]{1,3}$)*';
