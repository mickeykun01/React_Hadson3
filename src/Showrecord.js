
import React from "react";

const ShowRecord = (props)=>{
    // props.preventDefault();
    console.log(props.data);
    return(
        <div>
        {
           props.data.map((item) => {
            const { newrecord, newrecord1, newrecord2 } = item;

            return (
              <div className="show">
                <p>
                  Name : {newrecord} | Department : {newrecord1} | Rating :{newrecord2}
                  
                </p>
              </div>
            );
           
            
          })
       }
        </div>
    )
}

export default ShowRecord




















// import React from "react";

// class ShowRecord extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log(props);
//   }
//   render() {
//     return (
//       <div>
//         <div>
//           {props.map((item) => {
//             const { newrecord, newrecord1, newrecord2 } = item;

//             return (
//               <div className="show">
//                 <p>
//                   Name : {newrecord} | Department : {newrecord1} | Rating :{newrecord2}
                  
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default ShowRecord;
