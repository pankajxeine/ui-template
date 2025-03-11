
import { isUndefined } from "lodash";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import isNumber from "lodash/isNumber";
import numeral from "numeral";
import APPCONFIG from "config/appConfig";
import store from "store";
const _ = {
  get,
  isEmpty,
  isUndefined,
  isNumber
};

/**
 * formate currency
 *
 * @param {any} value
 * @param {any} symbol
 * @returns {any}
 */
export const formatCurrencyWrapper = (value: any, symbol = null) => {
  const state = store.getState();
  const decimalValue = _.get(state, "company.subDetails.decimalValue", 2);
  const locale = _.get(
    state,
    "user.userDetails.language.code",
    "en-US"
  ).replace("_", "-");
  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimalValue,
  });

  const crr_state = _.get(state, "company.companyBasicDetails.currency", {
    symbol_left: "",
    symbol_right: "",
  });
  symbol = !_.isEmpty(symbol)
    ? symbol
    : !_.isEmpty(crr_state.symbol_left)
      ? crr_state.symbol_left
      : crr_state.symbol_right;
  let signOfVal = Math.sign(value) === -1 ? "-" : "";
  value = Math.abs(value);
  if (_.isNumber(value) && !isNaN(value)) {
    value = formatter.format(value);

    if (!_.isEmpty(symbol) && !_.isUndefined(symbol)) {
      if (value === undefined || value === null || value === "") {
        value = APPCONFIG.DECIMAL_DEFAULT_VALUE;
      }
      let currency_sym_left = crr_state.symbol_left ? symbol : "";
      let currency_sym_right = crr_state.symbol_right ? symbol : "";
      if (!_.isEmpty(currency_sym_left)) {
        return signOfVal + currency_sym_left + value;
      } else {
        return signOfVal + value + currency_sym_right;
      }
    } else {
      if (!_.isEmpty(crr_state.symbol_left)) {
        return signOfVal + crr_state.symbol_left + value;
      } else {
        return signOfVal + value + crr_state.symbol_right;
      }
    }
  } else {
    if (!_.isEmpty(crr_state.symbol_left)) {
      return (
        signOfVal +
        crr_state.symbol_left +
        numeral(0).format(APPCONFIG.MONETORY_FORMAT)
      );
    } else {
      return (
        signOfVal +
        numeral(0).format(APPCONFIG.MONETORY_FORMAT) +
        crr_state.symbol_right
      );
    }
  }
};

export default {
  formatCurrencyWrapper
};
