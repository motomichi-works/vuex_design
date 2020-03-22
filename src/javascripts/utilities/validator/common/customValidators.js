// patterns
import {
  FIXED_LINE_PHONE_NUMBER_PATTERN,
  MOBILE_PHONE_NUMBER_PATTERN,
} from '@/javascripts/modules/validator/common/constants';

export default {
  phoneNumberFull (value, options, key, attributes) {
    const errorMessage = ['固定電話は10桁、携帯電話は11桁で入力してください。'];
    let regexp;

    const firstChar = value.substr(0, 3);
    const firstCharsOfMobile = [
    '050',
    '070',
    '080',
    '090',
    ];

    if (firstCharsOfMobile.includes(firstChar)) {
      regexp = new RegExp(MOBILE_PHONE_NUMBER_PATTERN);
      if (!regexp.test(value)) {
        return errorMessage;
      }

      return;
    }

    regexp = new RegExp(FIXED_LINE_PHONE_NUMBER_PATTERN);
    if (!regexp.test(value)) {
      return errorMessage;
    }
  },
};
