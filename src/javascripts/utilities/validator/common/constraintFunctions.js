import {
  EMAIL_PATTERN,
} from '@/javascripts/modules/validator/common/constants';

export default {
  // text, tel, email, password などの文字入力フィールド用
  exclusionBlankTypeBasic: (label) => {
    return {
      presence: {
        allowEmpty: false,
        message: `^${label}を入力してください。`,
      },
    };
  },
  // select, radioなどの複数から一つ選択するフィールド用
  exclusionBlankTypeSelect: (label) => {
    return {
      exclusion: {
        within: [''],
        message: `^${label}を選択してください。`,
      },
    };
  },
  // 基本的なcheckbox
  typeCheckbox: (message = '') => {
    return {
      inclusion: {
        within: [true],
        message: `^${message}`,
      },
    };
  },
  // 電話番号  
  phoneNumberFull: (label, isRequired = true) => {
    const constraints = {
      phoneNumberFull: {},
    };

    if (isRequired) {
      return {
        ...constraints,
        presence: {
          allowEmpty: false,
          message: `^${label}を入力してください。`,
        },
      };
    } else {
      return constraints;
    }
  },
};



