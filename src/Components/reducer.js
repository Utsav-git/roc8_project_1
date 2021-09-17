export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Cant remove item (id: ${action.id}) as not in the cart.`);
      }
      return {
        ...state,
        cart: newCart,
      };

    case "EMPTY_CART":
      return { ...state, cart: [] };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
