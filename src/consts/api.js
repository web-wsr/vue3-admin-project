

// 接口 API ，用于放置后端提供的 API ，因为环境不同需要在 env 获取 请求 hosts
const PREFIX = `${import.meta.env.VITE_APP_HOST}`;
const WEB_PREFIX = `${PREFIX}/api/web`;
const ADMIN_PREFIX = `${PREFIX}/api/admin`;

export default {
  // 获取用户信息
  userInfo: `${WEB_PREFIX}/users/user-info`,
  ossToken: `${PREFIX}/api/file/alioss-token`,
  ossStore: `${PREFIX}/api/file/alioss-store`,
  permissions: `${ADMIN_PREFIX}/api/permissions/permissions`,
  sendCode: `${ADMIN_PREFIX}/sendCode`,
  login: `${ADMIN_PREFIX}/login`,
  logout: `${ADMIN_PREFIX}/logout`,
  // 角色相关信息
  roleList: `${ADMIN_PREFIX}/role/list`,
  roleAdd: `${ADMIN_PREFIX}/role/add`,
  roleUpdate: `${ADMIN_PREFIX}/role/update`,
  roleDelete: `${ADMIN_PREFIX}/role/delete`,
  // 管理员相关信息
  managerList: `${ADMIN_PREFIX}/manager/list`,
  managerAdd: `${ADMIN_PREFIX}/manager/add`,
};
