import { mockData } from "../../__mocks__/mockData";

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  const { pizzas } = mockData;

  const result =
    pizzas
      .filter(item => category === null ? item : item.category === category)
      .sort((a, b) =>
        sortBy.order === "desc" ?
          a[sortBy.type] < b[sortBy.type] :
          a[sortBy.type] > b[sortBy.type]);


  dispatch(setPizzas(result));
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
