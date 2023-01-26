import React from "react";
// import ShowRecord from "./Showrecord";

class Form extends React.Component {
  constructor() {
    super();
    this.state = { name: "" };
    this.state = { department: "" };
    this.state = { toggle: false };
    this.state = { rating: "" };
    this.state = { record: [] };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.submitButton = this.submitButton.bind(this);
  }

  
  handleOnSubmit(event) {
    let name = event.target.name;
    switch (name) {
      case "name": {
        console.log("name is ", event.target.value);
        this.setState({
          name: event.target.value,
        });
        break;
      }
      case "department": {
        this.setState({
          department: event.target.value,
        });
        break;
      }
      case "rating": {
        this.setState({
          rating: event.target.value,
        });
        break;
      }
      default: {
        return;
      }
    }
  }

  submitButton(eve) {
    eve.preventDefault();

    const newrecord = this.state.name;
    // console.log("newrecord is" , this.state.name );
    const newrecord1 = this.state.department;
    const newrecord2 = this.state.rating;

    const result = {
      newrecord,
      newrecord1,
      newrecord2,
      id: new Date().getTime.toString(),
    };
    console.log("result", result);

    const arr = this.state.record;
    arr.push(result);

    // if (arr.length > 0) {

    this.setState({
      record: arr,
      name: "",
      department: "",
      rating: "",
      toggle : true
    });
  }

  
  render() {
    if(!this.state.toggle){
    return(

    
      <div>
       
        <form onSubmit={this.submitButton}>
          <div>
            <label>
              Name : &nbsp; &nbsp;
              <input
                className="input1"
                type={"text"}
                placeholder="type your name"
                value={this.state.name}
                onChange={this.handleOnSubmit}
                name="name"
              />
            </label>
          </div>

          <br /> <br />
          <div>
            <label>
              department : &nbsp; &nbsp;
              <input
                className="input1"
                type={"text"}
                placeholder="type your field"
                value={this.state.department}
                onChange={this.handleOnSubmit}
                name="department"
              />
            </label>
            </div >

            <br /> <br />
            <div>
              <label>
                Rating : &nbsp; &nbsp;
                <input
                  className="input1"
                  type={"number"}
                  placeholder="give rating"
                  value={this.state.rating}
                  onChange={this.handleOnSubmit}
                  name="rating"
                />
              </label>
            </div>
            <br /> <br /> <br />

            <button type="submit" className="submit"> Submit </button>

            
        </form>
        <br /> <br /> <br />
        </div>
    );}
    else
    return(
      <>
        <div className="freshRecord-div">
        {
          this.state.record.map((item) => {
             const {newrecord ,  newrecord1 , newrecord2 } = item

             
              return(
                <>
                  <div className="show">
                      <p>Name : {newrecord} | Department : {newrecord1} | Rating : {newrecord2}</p>
                  </div>

                 
                </>
              )
          })
        }
        </div>
        
         <div>
         <button className ="back" type="button" onClick={() => {this.setState({toggle:false})}}> Go back </button>
         </div>
        </>
     );

  }
}
export default Form;
