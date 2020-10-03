import * as constants from "../constants";

export const editProfile = () => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch({
      type: constants.PROFILE_CHANGE_EDIT,
      stateEdit: !state.edit,
    });
  };
};
export const editData = (state) => {
  return (dispatch) => {
    dispatch({
      type: constants.PROFILE_SAVE,
      dataEdit: state,
    });
  };
};
