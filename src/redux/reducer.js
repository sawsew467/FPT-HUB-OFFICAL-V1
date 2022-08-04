import DEMO_POSTS from "../data/listDemo";
import DEMO_USERS from "../data/usersDemo";

const initState = {
  darkmode: false,
  postList: DEMO_POSTS,
  userList: DEMO_USERS,
  moblieMenu: false,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "darkmode/switchDarkMode":
      return {
        ...state,
        darkmode: action.payload,
      };

    case "postList/updatePostList":
      return {
        ...state,
        postList: action.payload,
      };

    case "postList/addSeed":
      // console.log("redux: ", action.payload);
      return {
        ...state,
        postList: action.payload,
      };

    case "postList/incFlag":
      // console.log("redux: ", action.payload);
      return {
        ...state,
        postList: action.payload,
      };

    case "userList/handleSeed":
      return {
        ...state,
        userList: action.payload,
      };

    case "userList/handleFlag":
      return {
        ...state,
        userList: action.payload,
      };

    case "userList/handleMarkPost":
      return {
        ...state,
        userList: action.payload,
      };

    case "moblieMenu/handleMoblieMenu":
      console.log("!!!");
      return {
        ...state,
        moblieMenu: action.payload,
      }

    default:
      return state;
  }
};

export default rootReducer;
