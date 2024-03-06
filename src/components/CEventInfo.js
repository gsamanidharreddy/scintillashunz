import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import parse from 'html-react-parser';
  
  export function CEventInfo(clubEvent) {
    return (
     

<div style={{display:'inline-block', verticalAlign:'middle'}}>



     
      <Card className=' shadow ' style={{ margin:10,width:380,overflow:'hidden' }}>
        <Card.Img className='hoverImg' style={{ height:200 ,width:380}} variant="top" src={clubEvent.img}/>
        <Card.Body>
          <Card.Title style={{color:'black'}} >{clubEvent.name}</Card.Title>
          <Card.Text style={{color:'black',display:'flex',whiteSpace:'pre-wrap'}}>
            {clubEvent.desc}
          </Card.Text>
         <div style={{alignContent:'center', margin:'auto',left:"50%",height:clubEvent["1"]===null?0:null,overflow:'hidden'}}>

        
        
          <table  style={{alignContent:'center', margin:'auto',left:"50%",color:"black",}}>
          <tr style={{visibility:clubEvent["1"]===null?'hidden':'visible'}}>
          <th>1st Prize: </th>
          <th > ₹{clubEvent["1"]}</th>
          
        </tr>
         <tr style={{visibility:clubEvent["2"]===null?'hidden':'visible'}}>
          <th >2nd Prize: </th>
          <th> ₹{clubEvent["2"]}</th>
          
        </tr> 
        <tr style={{visibility:clubEvent["3"]===null?'hidden':'visible'}}>
          <th>3rd Prize: </th>
          <th > ₹{clubEvent["3"]}</th>
          
        </tr>
        
       
      </table>
      
      </div>

      <div style={{alignContent:'center', margin:'auto',left:"50%",visibility:clubEvent["ext1"]===null?'hidden':'visible', whiteSpace:'pre-wrap'}}>

        <p style={{color:'black'}}><b>{parse(clubEvent.ext1!=null?clubEvent.ext1:"")}</b></p>
      </div>


      <div style={{alignContent:'center', margin:'auto',left:"50%",visibility:clubEvent.reg1==null?'visible':'hidden'}}>

<p style={{color:'black'}}><b>{parse(clubEvent.indp!=null?clubEvent.indp:"")}</b></p>
</div>
      
      <div style={{alignContent:'center',justifyContent:'center', margin:'auto'}}>

       <Button  style={{marginLeft:"36%",marginRight:"50%",marginTop:10}} href={clubEvent.link} target='_blank' >Register</Button>
       </div>
    
        </Card.Body>
      </Card>
      </div>
    );

  }
  
  export default CEventInfo;