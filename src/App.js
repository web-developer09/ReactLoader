import React from "react";

export default class App extends React.Component{
    
   constructor(props){

   super();
   this.state={
      name:'Abdunabi',
      age:16,
      job:'Programmer',
      loading:true
   } 
 }

//  getInfo=()=>{
//     this.setState({name:'Shoxbaht', age:'15', job:"MERN stack Developer"})
//  }


 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => response.json())
   .then(()=> this.setState({work:'no',name:'Shoxbaht', age:'15', job:"MERN stack Developer", loading:false }))

    console.log('componentDidMount')
   //  this.getInfo();
}

componentDidUpdate(){
console.log('componentDidUpdate');
}
  

 

 render(){
    console.log('render')
    return(
       <div className="card">
  
          {this.state.loading? 
          <div className="load">


<div class="loadingio-spinner-spinner-2xg9rwealxp"><div class="ldio-r07as6jfuaj">
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div></div>


          </div>:  
          <ul className="list"> 

      <li>{this.state.name}</li>       
      <li>{this.state.age}</li>       
      <li>{this.state.job}</li>       
             
      </ul>
 }
       </div>
    )
 }


}