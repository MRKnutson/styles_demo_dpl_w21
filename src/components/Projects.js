import axios from "axios";
import React from "react"
import { Button, Grid } from "semantic-ui-react";
import Project from "./Project";

class Projects extends React.Component {

  state = { repos: [], error: null };

  // this function will run after component mounts to DOM
  componentDidMount(){
    // hot reloading will cause our component to keep on rendering
    // api limits might create issues
    // this.getRepos()  
  };

  getRepos = () => {
      // old way of doing an axios (without async await)
    axios.get('https://api.github.com/users/mrknutson/repos?sort=created').then((res)=>{
      // successful
      this.setState({repos: res.data})
    }).catch((err)=>{
      // error handling
      this.setState({error: "Error Occured"})
    })

    // new way
    // try {
    //   let res = await axios.get(url);
    //   this.setState({repos: res.data})
    // }catch (err) {
    //   this.setState({error: "Error Occured"})
    // }
  }

  renderRepos = () => {
    return this.state.repos.map((repo) => {
      return (
        <Grid.Column width={4} style={{ border: "1px solid red" }}>
          <Project {...repo} />
        </Grid.Column>
      );
    });
  };

  render() {
    return(
      <div>
        <h1>Projects List</h1>
        <Button onClick={this.getRepos}>get repos</Button>
        <Grid padded stackable>
          <Grid.Row>
            {this.renderRepos()}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
};

export default Projects;

// import axios from "axios";
// import React from "react";
// import { Button, Grid, GridRow } from "semantic-ui-react";
// import Project from "./Project";

// class Projects extends React.Component {
//   state = { repos: [], error: null };
//   // this function will after component mounts to DOM
//   componentDidMount() {
//     console.log("mounted");
//     // old way of doing an axios (without async await)
//     // hot reloading is cause our component to keep on getting render
//     // api limit (~60 request in a hour)
//     // hot reloading and api limits not a good combo
//     // this.getRepos();
//   }
//   getRepos = () => {
//     axios
//       .get("https://api.github.com/users/mrknutson/repos?sort=created")
//       .then((res) => {
//         // succesfull
//         this.setState({ repos: res.data });
//       })
//       .catch((err) => {
//         this.setState({ error: "Error Occured" });
//       });

//     // try {
//     //   let res = await axios.get(url);
//     //   this.setState({ repos: res.data });
//     // } catch (err) {
//     //   this.setState({ error: "Error Occured" });
//     // }
//   };
//   renderRepos = () => {
//     return this.state.repos.map((r) => {
//       return (
//         <Grid.Column width={4} style={{ border: "1px solid red" }}>
//           <Project {...r} />
//         </Grid.Column>
//       );
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Projects list</h1>
//         <Button onClick={this.getRepos}>get repos</Button>
//         <Grid padded stackable>
//           <Grid.Row style={{ border: "1px solid green" }}>
//             {this.renderRepos()}
//           </Grid.Row>
//         </Grid>
//       </div>
//     );
//   }
// }
// export default Projects;