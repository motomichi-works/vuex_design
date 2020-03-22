import validate from 'validate.js';
import validators from '@/javascripts/modules/validator/common/validators.js';
import constraintFunctions from '@/javascripts/modules/validator/common/constraint_functions';
import {
  MAX_FULL_NAME_KANA_LENGTH,
} from '@/javascripts/modules/validator/common/constants';
validate.validators = { ...validate.validators, ...validators };

export default {
  // NOTE:
  // 初期値が無いラジオボタンなど、サーバーサイドのバリデーションに引っかかった後、
  // ラジオボタン選択によってエラーメッセージを非表示にしたいときにno_validationのキーを使用します。
  noValidation: {},
  selectFieldSample: constraintFunctions.exclusionBlankTypeSelect('テキストフィールドサンプル'),
  textFieldSample: constraintFunctions.exclusionBlankTypeBasic('テキストフィールドサンプル'),
  numberFieldSample: constraintFunctions.exclusionBlankTypeBasic('テキストフィールドサンプル'),
};
