const storage = window.localStorage;

const Storage = {
  /**
   * FE-CORE-309
   * supported
   *
   * @returns boolean
   */
  isSupported() {
    const testKey = "test";
    try {
      storage.setItem(testKey, "1");
      storage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  },

  /**
   * FE-CORE-310
   * clear storage
   */
  clear() {
    // const url = storage.getItem("api_end_point");
    // const industry = storage.getItem("industry");
    const sessionExpireFlat = storage.getItem("sessionAutoExpireMsg");
    storage.clear();
    // storage.setItem("api_end_point", url);
    storage.setItem("sessionAutoExpireMsg", sessionExpireFlat || "");
  },

  /**
   * FE-CORE-311
   * save user
   *
   * @param {object} user
   * @returns {any}
   */
  saveUser(user: any) {
    try {
      storage.setItem("user", JSON.stringify(user));
    } catch (error) {
      return null;
    }
  },

  /**
   * FE-CORE-312
   * load user
   *
   * @returns {any}
   */
  loadUser() {
    try {
      return JSON.parse(storage.getItem("user") || "");
    } catch (error) {
      return null;
    }
  },

  /**
   * FE-CORE-313
   * Delete the user
   *
   * @returns {any}
   */
  deleteUser() {
    try {
      storage.removeItem("user");
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-314
   * save token
   * @param {string} token
   * @returns {any}
   */
  saveToken(token: string) {
    try {
      storage.setItem("token", token);
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-315
   * load token
   *
   * @returns {any}
   */
  loadToken() {
    try {
      return storage.getItem("token");
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-316
   * Delete the token
   *
   * @returns {any}
   */
  deleteToken() {
    try {
      storage.removeItem("token");
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-317
   * Save store
   * @param {string} storeId
   * @returns {any}
   */
  saveStore(storeId: any) {
    try {
      storage.setItem("storeId", storeId);
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-318
   * load store
   *
   * @returns {any}
   */
  loadStore() {
    try {
      return storage.getItem("storeId");
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-319
   * Delete the store
   *
   * @returns {any}
   */
  deleteStore() {
    try {
      storage.removeItem("storeId");
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-320
   * Save cash ragister
   * @param {integer} cashRegisterId
   * @returns {any}
   */
  saveCashRegister(cashRegisterId: any) {
    try {
      storage.setItem("cashRegisterId", cashRegisterId);
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-321
   * load cash register
   * @returns {any}
   */
  loadCashRegister() {
    try {
      return storage.getItem("cashRegisterId");
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-322
   * Delete cash register
   * @returns {any}
   */
  deleteCashRegister() {
    try {
      storage.removeItem("cashRegisterId");
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-325
   * get remember
   *
   * @returns {any}
   */
  getRemember() {
    return storage.getItem("remember");
  },
  /**
   * FE-CORE-326
   * Remove remember token
   * @returns {any}
   */
  removeRemember() {
    storage.removeItem("token");
  },
  /**
   * FE-CORE-327
   * get user view
   *
   * @returns {any}
   */
  getUserView() {
    let data = storage.getItem("pos_view_options");
    return JSON.parse(data || "");
  },
  /**
   * FE-CORE-328
   * save user view
   *
   * @param {object} data
   * @returns {any}
   */
  saveUserView(data: any) {
    return storage.setItem("pos_view_options", JSON.stringify(data));
  },
  /**
   * FE-CORE-329
   * Delete user view
   */
  deleteUserView() {
    storage.removeItem("pos_view_options");
  },
  saveUserTimeLog(data: any) {
    try {
      storage.setItem("user_time_log", JSON.stringify(data));
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-330
   * load user time log
   * @returns {any}
   */
  loadUserTimeLog() {
    try {
      return storage.getItem("user_time_log");
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-331
   * delete user time log
   * @returns {any}
   */
  deleteUserTimeLog() {
    try {
      storage.removeItem("user_time_log");
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-334
   * Delete default terminal
   */
  deleteDefaultTerminal() {
    storage.removeItem("pos_default_terminal");
  },
  /**
   * FE-CORE-335
   * save domain end point
   * @returns {any}
   */
  saveDomainEndpoint(url: string) {
    try {
      storage.setItem("api_end_point", url);
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-336
   * load domain end point
   * @returns {any}
   */
  loadDomainEndpoint() {
    try {
      return storage.getItem("api_end_point");
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-337
   * Save domain industry
   *
   * @param {string} industry
   * @returns {any}
   */
  saveDomainIndustry(industry: string) {
    try {
      storage.setItem("industry", industry);
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-338
   * load domain industry
   * @returns {any}
   */
  loadDomainIndustry() {
    try {
      return storage.getItem("industry");
    } catch (error) {
      return "";
    }
  },
  /**
   * FE-CORE-347
   * store change password token
   *
   * @param {string} token
   * @returns {boolean}
   */
  storeChangePasswordToken(token: string) {
    try {
      storage.setItem("cpToken", token);
      return true;
    } catch (error) {
      return false;
    }
  },
  /**
   * FE-CORE-348
   * fetch change password token
   * @returns {any}
   */
  fetchChangePasswordToken() {
    try {
      return storage.getItem("cpToken") || "";
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-349
   * remove change password token
   *
   * @returns {any}
   */
  removeChangePasswordToken() {
    try {
      storage.removeItem("cpToken");
    } catch (error) {
      return null;
    }
  },

  /**
   * FE-CORE-350
   * set login message flag
   *
   * @param {boolean} flag
   * @returns {any}
   */
  setLoginMsgFlag(flag: any) {
    try {
      storage.setItem("sessionAutoExpireMsg", flag);
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-351
   * get login message flag
   *
   * @returns {any}
   */
  getLoginMsgFlag() {
    try {
      return storage.getItem("sessionAutoExpireMsg") || "";
    } catch (error) {
      return null;
    }
  },
  /**
   * FE-CORE-352
   * Set autologin flag
   *
   * @param {boolean} flag
   * @returns {any}
   */
  setAutoLoginFlag(flag: any) {
    try {
      storage.setItem("sessionAutoExpire", flag);
    } catch (error) {
      return null;
    }
  },

  /**
   * FE-CORE-353
   * get autologin flag
   * @returns {any}
   */
  getAutoLoginFlag() {
    try {
      return storage.getItem("sessionAutoExpire") || "";
    } catch (error) {
      return null;
    }
  },
};

if (!Storage.isSupported()) {
  console.log(
    "Your browser does not support sessionStorage. Don't worry. The app can work without it."
  );
}

export default Storage;
