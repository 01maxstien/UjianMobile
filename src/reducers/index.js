import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EditProfileReducer from './EditProfileReducer';
import PostReducer from './PostReducer';
import EditPostReducer from './EditPostReducer';

export default combineReducers({
   auth: AuthReducer,
   editProfile: EditProfileReducer,
   post: PostReducer,
   editPost:EditPostReducer
});
