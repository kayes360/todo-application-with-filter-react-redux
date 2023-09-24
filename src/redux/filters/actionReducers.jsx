import {
  FILTER_BY_STATUS,
  FILTER_BY_COLOR,
} from "src/redux/filters/actionTypes";

const initialState = {
  status: "All",
  color: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_STATUS:
      return {
        ...state,
        status: action.payload,
      };

    case FILTER_BY_COLOR:
      const { color, changeType } = action.payload;

      switch (changeType) {
        case "added":
          return {
            ...state,
            color: [...state.color, color],
          };
        case "removed":
          return {
            ...state,
            color: state.color.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }
    default:
      return state;
  }
};

export default filterReducer;
