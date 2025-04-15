/* eslint-disable react/prop-types */
import'./App.css'
const App=(props)=> {

  return (
    <>
          <div className="card card-name">
             <div className="card-header" style={{textAlign:'center'}}>
                <p style={{margin:10}}>{props.type}</p>
               <h2 style={{ fontSize: 50,margin:1 }}>${props.value}/month</h2>
             </div>
         <div className="card-body "style={{paddingLeft:20}}>
               <h6>✔    {props.features[0].name}</h6>
               <h6>✔    {props.features[1].name}</h6>
               <h6>✔    {props.features[2].name}</h6>
               <h6>✔    {props.features[3].name}</h6>
               {props.features[4].avaiable ? (<h6>✔     {props.features[4].name}</h6>) : (
               <h6 className='textinto'>❌     {props.features[4].name}</h6>)}
               {props.features[5].avaiable ? (<h6>✔     {props.features[5].name}</h6>) : (
               <h6 className='textinto'>❌     {props.features[5].name}</h6>)}
               {props.features[6].avaiable ? (<h6>✔     {props.features[6].name}</h6>) : (
               <h6 className='textinto'>❌     {props.features[6].name}</h6>)}
               {props.features[7].avaiable ? (<h6>✔     {props.features[7].name}</h6>) : (
               <h6 className='textinto'>❌     {props.features[7].name}</h6>)}
         </div>
         <button type="button" style={{background:'blue',color:'white',borderRadius:120,width:300,height:50,margin:5}}>BUTTON</button>
        </div>
    </>
  )
}

export default App;