export const initialState = {
  items: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const item = [...state.items, action.items];
      return {
        ...state,
        items: item,
      };
  }
  return state;
};
