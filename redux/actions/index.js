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
export const editData = (profileData) => {
  return async (dispatch) => {
    localStorage.setItem('user', JSON.stringify(profileData))

    await fetch('http://localhost:3000/json_auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-token-access': 'random',
      },
      body: JSON.stringify(profileData)
    })

    dispatch({
      type: constants.PROFILE_SAVE,
      dataEdit: profileData,
    });
  };
};
