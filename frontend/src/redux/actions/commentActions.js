import axios from "axios";
import Swal from 'sweetalert2'

const commentsActions = {
  addComment: (comments) => {
    
    const token = localStorage.getItem("token");
    return async (dispatch, getState) => {
      if (comments.comment !== "") {
      /*   console.log(comment) */
        const res = await axios.post(
          `http://localhost:4000/api/tineraries/comment`,
          {comments},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch({
          type: 'MESSAGE',
          payload: {
            view: true,
            message: res.data.message,
            success: res.data.success,
          },
        });
        return res;
      } else {
        dispatch({
          type: 'MESSAGE',
          payload: {
            view: true,
            message: "ingresa un comentario para guardarlo",
            success: false,
          },
        });
      }
    };
  },

  modifiComment: (id,comment) => {
    console.log(comment)
    const token = localStorage.getItem("token");
    return async (dispatch, getState) => {
      const res = await axios.put(
        `http://localhost:4000/api/tineraries/comment/${id}`,
        {comment},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: 'MESSAGE',
        payload: {
          view: true,
          message: res.data.message,
          success: res.data.success,
        },
      });

      return res;
    };
  },
  deleteComment: (id) => {
    const token = localStorage.getItem("token");
    return async (dispatch, getState) => {
      const res = await axios.post(
        `http://localhost:4000/api/tineraries/comment/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: 'MESSAGE',
        payload: {
          view: true,
          message: res.data.message,
          success: res.data.success,
        },
      });
      return res;
    };
  },
};

export default commentsActions;