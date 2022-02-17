import React, {useState,useEffect} from 'react';
import EventList from"./EventList";
import myInitObject from './myInitObject'




const LAUNCHES_QUERY = `
query {
  sampleEvents {
    id
    name
    event_type
    permission
    start_time
    end_time
    description
    speakers {
      name
      profile_pic
    }
    public_url
    private_url
    related_events
  }
}
`


function DataFetching() {

    const [Events,setEvents] = useState(null);
  
  
    useEffect(() =>{
  
      fetch('https://api.hackthenorth.com/v3/graphql',{
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ query: LAUNCHES_QUERY})
      }).then(response => response.json()).then(data => {
          console.log(data);
          setEvents(data.data);  
        //   myInitObject = data;
        //   Object.freeze(myInitObject)
        })
    },[]);
  
    return (
      <div className="App">

        
          {/* {Events} */}
          {JSON.stringify(Events,null,2)}

      </div>
    );
  };
  

export default DataFetching;