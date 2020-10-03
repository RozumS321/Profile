import initialState from "./initialState";
import * as constants from "../constants";

export default function reducersProfile(state = initialState, action) {
  switch (action.type) {
    case constants.PROFILE_CHANGE_EDIT:
      return {
        ...state,
        edit: action.stateEdit,
      };
    case constants.PROFILE_SAVE:
      return {
        ...state,
        profile: action.dataEdit,
      };
    default:
      return state;
  }
}
