import React from "react";

// Input    : liked: boolean
// Output   : onClick event

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";

  return (
    <i
      className={classes}
      area-hidden="true"
      onClick={props.onClick}
      // onClick durumunda parent'a onClick event'i raise ediyor.
      // onClick yerine onToggleLike da mesela kullanılabilirdi.
      style={{ cursor: "pointer" }}
      // kalp simgesi üstine gelince cursor el şeklini alır
    ></i>
  );
};

// class Like extends Component {
//   render() {
//     let classes = "fa fa-heart";
//     if (!this.props.liked) classes += "-o";

//     return (
//       <i
//         className={classes}
//         area-hidden="true"
//         onClick={this.props.onClick}
//         // onClick durumunda parent'a onClick event'i raise ediyor.
//         // onClick yerine onToggleLike da mesela kullanılabilirdi.
//         style={{ cursor: "pointer" }}
//         // kalp simgesi üstine gelince cursor el şeklini alır
//       ></i>
//     );
//   }
// }

export default Like;
