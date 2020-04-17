import validate from 'validate.js';
import validators from '@/javascripts/utilities/validator/common/customValidators';
import constraintFunctions from '@/javascripts/utilities/validator/common/constraintFunctions';
// import {
//   MAX_FULL_NAME_KANA_LENGTH,
// } from '@/javascripts/utilities/validator/common/constants';
validate.validators = { ...validate.validators, ...validators };

export default {
  // NOTE:
  // 初期値が無いラジオボタンなど、サーバーサイドのバリデーションに引っかかった後、
  // ラジオボタン選択によってエラーメッセージを非表示にしたいときにno_validationのキーを使用します。
  noValidation: {},
  email: constraintFunctions.formatEmail('メールアドレス'),
  selectFieldSample: constraintFunctions.exclusionBlankTypeSelect('テキストフィールドサンプル'),
  textFieldSample: constraintFunctions.exclusionBlankTypeBasic('テキストフィールドサンプル'),
  numberFieldSample: constraintFunctions.exclusionBlankTypeBasic('テキストフィールドサンプル'),
};
