export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_ODD = "INCREMENT_ODD";

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
  return {
    type: INCREMENT,
    payload: "plus"
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
    payload: "minus"
  };
};

export const incrementOdd = () => {
  return {
    type: INCREMENT_ODD,
    payload: "plus"
  };
};
