import utils from '@/utils/request';
import API from '@/consts/api';

const roleService = {
    getRoleList(params) {
        return utils.get(API.roleList, params);
    },
};

export default roleService;