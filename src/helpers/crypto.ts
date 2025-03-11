import AES from "crypto-js/aes";
import encutf8 from "crypto-js/enc-utf8";
import CryptoJS from "crypto-js";

//@ts-ignore
const key: string = process.env.REACT_APP_CRYPTO_KEY;
/**
 * Encrypt the data
 *
 * @param {string} data
 * @returns {string}
 */
export const Encrypt = (data: any) => {
  return AES.encrypt(data, key).toString();
};

/**
 * Encrypt query string
 *
 * @param {string} data
 * @returns {string}
 */
export const EncryptQueryString = (data: any) => {
  let secreteKey = CryptoJS.enc.Hex.parse("63726573746966793234343436363636");
  let iv = CryptoJS.enc.Hex.parse("69763132333563726573743234343436");
  let encrypted = CryptoJS.AES.encrypt(data, secreteKey, {
    iv,
    padding: CryptoJS.pad.ZeroPadding,
  });
  return encrypted.toString();
};

/**
 * Decrypt string
 *
 * @param {string} data
 * @returns {string}
 */
export const Decrypt = (data: any) => {
  const bytes = AES.decrypt(data, key);
  return JSON.parse(bytes.toString(encutf8));
};

/**
 * Decrypt string
 *
 * @param {string} data
 * @returns {string}
 */
export const DecryptString = (data: any) => {
  const bytes = AES.decrypt(data, key);
  return bytes.toString(encutf8);
};

/**
 * decypt query string
 *
 * @param {string} data
 * @returns {string}
 */
export const decryptQueryString = (data: any) => {
  let secreteKey = CryptoJS.enc.Hex.parse("63726573746966793234343436363636");
  let iv = CryptoJS.enc.Hex.parse("69763132333563726573743234343436");
  let decrypted = CryptoJS.AES.decrypt(data, secreteKey, {
    iv,
    padding: CryptoJS.pad.ZeroPadding,
  });

  return decrypted.toString(CryptoJS.enc.Utf8);

};

/**
 * parse query string
 *
 * @param {string} queryString
 * @returns {string}
 */
export const parseQueryString = (queryString: string) => {
  var query = {};
  var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    //@ts-ignore
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

export default {
  Encrypt,
  Decrypt,
  DecryptString,
  EncryptQueryString,
  decryptQueryString,
  parseQueryString
};
