export function reducer(state, action) {
  switch (action.type) {
    case "signup": {
      console.log(state);
      return [...state, action.payload];
    }
    case "signin": {
      const userToBeUpdated = action.payload;
      localStorage.setItem("user", userToBeUpdated);
      // return [...state].map(
      //   (user) =>
      //     (user.username = userToBeUpdated ? { isSignedIn: true } : false)
      // );
      return state.map((user) =>
        user.username === userToBeUpdated
          ? { ...user, isSignedIn: true }
          : { ...user, isSignedIn: false }
      );
    }

    case "signout": {
      const userToBeSignedOut = action.payload;
      return state.map((user) =>
        user.username === userToBeSignedOut
          ? { ...user, isSignedIn: false }
          : user
      );
    }

    default: {
      return state;
    }
  }
}

export const initialState = [
  {
    username: "abilash",
    password: "a",
    email: "abi2000@gmail.com",
    isSignedIn: false,
  },
];
