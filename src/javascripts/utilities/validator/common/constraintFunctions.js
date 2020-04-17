import {
  EMAIL_PATTERN,
} from '@/javascripts/utilities/validator/common/constants';

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
  formatEmail: (label, isRequired = true) => {
    const constraints = {
      format: {
        pattern: EMAIL_PATTERN,
        message: `^${label}が正しく入力されているかご確認ください。`,
      },
      length: {
        maximum: 50,
        tooLong: `^${label}は%{count}文字以内で入力してください。`,
      },
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
