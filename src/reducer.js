export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,

  // ******REMOVE after finished developing*******
  // token:
  //   "BQCO5d6ZaRGi8pFkimCP2e96CP32FGm8SPjjHuodOOtgnKW180uZ0tX_KLWFy86fJokZ1XKVNlBW7Sy3in6WZX4sJtIccfPTSo9-rsww_ztK5q1qa2P8PXmnCc6DCRodqENiznJDwNUI4_7UPvvqZ_wg4-htph6yRH_Sp5pRROKjwVKZtdBRp-g2W5oNaUHQmf_nINIELig2_GN4",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        artists: action.artists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
