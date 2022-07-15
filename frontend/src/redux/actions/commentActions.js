import axios from "axios";
import Swal from 'sweetalert2'
import toast from 'react-hot-toast';

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
        Swal.fire({
          icon: "success",
          title: res.data.message,
        });
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
/* 
  modifyComment: (comment) => {
    console.log(comment)
    const token = localStorage.getItem('token')
    return async (dispatch, getState) => {
        try{
      const res = await axios.put(
        `http://localhost:4000/api/tineraries/comment/`,{...comment},
       
        {
          headers: {
            'Authorization': 'Bearer '+token
        }
        }
      );
      toast.success(res.data.message)
  
      dispatch({
        type: 'message',
        payload: {
            view: true,
            message: res.data.message,
            success: res.data.success
        }
    })

    return res

}catch(err){
    console.log(err)
}

}
} , */


modifyComment: (id, value) => {
    
  const token = localStorage.getItem("token");
  return async (dispatch, getState) => {
      console.log(id);
  console.log(value);
    const res = await axios.put(
      `http://localhost:4000/api/tineraries/comment/${id}`,
      {value},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    console.log(res)
  Swal.fire({
    icon: "success",
    title: res.data.message,
  });
    // dispatch({
    //   type: 'MESSAGE',
    //   payload: {
    //     view: true,
    //     message: res.data.message,
    //     success: res.data.success,
    //   },
    // });

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
     /*  toast.success(res.data.message) */
      Swal.fire({
        icon: "success",
        title: res.data.message,
      });
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