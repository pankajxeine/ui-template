import axios from "../../helpers/api";
import API_URLS from "../../constants/apiEndpoints";
import get from "lodash/get";
import AppUtils from '../../utils';
import { jwtDecode } from 'jwt-decode';
import { LoginCredential } from "../../models/LoginCredential";
/**
 * authentication
 * @param {object} payload
 * @returns {object}
 */
// export function authentication(payload) {
//   const url = `/${API_URLS.login}`;
//   return axios.post(url, { user: { ...payload } }).then(response => {
//     if (response.status === 200) {
//       return {
//         message: "Success",
//         success: true,
//         data: response.data
//       };
//     } else {
//       return {
//         success: false,
//         message: ERR_MSG_SOMETHING_WENT_WRONG,
//         data: "",
//         error: ""
//       };
//     }
//   });
// }


/* eslint-disable camelcase */

class JwtService extends AppUtils.EventEmitter {
  init() {
    this.handleAuthentication();
  }

  handleAuthentication = () => {
    const access_token = this.getAccessToken();

    if (!access_token) {
      this.emit('onNoAccessToken');
      return;
    }

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token);
      this.emit('onAutoLogin', true);
    } else {
      //@ts-ignore
      this.setSession(null);
      this.emit('onAutoLogout', 'access_token expired');
    }
  };

  createUser = (data: any) => {
    return new Promise((resolve, reject) => {
      axios.post('/api/auth/register', data).then((response) => {
        if (response.data.user) {
          this.setSession(response.data.access_token);
          resolve(response);
        } else {
          reject(response.data.error);
        }
      });
    });
  };

  signInWithCredentail = ({ username, password, source }: LoginCredential) => {
    return new Promise((resolve, reject) => {
      axios
        .post(API_URLS.login, {
          user: {
            username,
            password,
            source
          },
        })
        .then((response: any) => {
          if (!response.error) {
            const access_token = get(response, "data.data.user.token", null)
            this.setSession(access_token);
            resolve(response);
          } else {
            reject(response);
          }
        });
    });
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/auth/access-token', {
          data: {
            access_token: this.getAccessToken(),
          },
        })
        .then((response) => {
          if (response.data.user) {
            this.setSession(response.data.access_token);
            resolve(response.data.user);
          } else {
            this.logout();
            reject(new Error('Failed to login with token.'));
          }
        })
        .catch((error) => {
          this.logout();
          reject(new Error('Failed to login with token.'));
        });
    });
  };

  // updateUserData = (user: any) => {
  //   const tokenData = this.getTokenData();
  //   return axios.patch('/api/auth/user/update', {
  //     user,
  //   });
  // };

  setSession = (access_token: string) => {
    if (access_token) {
      localStorage.setItem('token', access_token);
      axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
      localStorage.removeItem('token');
      delete axios.defaults.headers.common.Authorization;
    }
  };

  logout = () => {
    //@ts-ignore
    this.setSession(null);
  };

  isAuthTokenValid = (access_token: any) => {
    if (!access_token) {
      return false;
    }
    const decoded = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    //@ts-ignore
    if (decoded.exp < currentTime) {
      console.warn('access token expired');
      return false;
    }

    return true;
  };

  getAccessToken = () => {
    return window.localStorage.getItem('jwt_access_token');
  };
}

const instance = new JwtService();

export default instance;

