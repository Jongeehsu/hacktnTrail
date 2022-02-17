import React,{Component}from 'react'
import {Container,Row,Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PeopleCard from './PeopleCard';



class GridAreaPublic extends Component {


  constructor() {
    super();
    this.state = {

      sort: 'asc',

      people : [
        {id:1,
        name:"VonageAPIWorkshop",
        event_type:"workshop",
        permission:"private",
        start_time:1610442000000,end_time:1610443800000,
        description:"ANaed",
        speakers:[{name:"Vonage",
        profile_pic:null}],
        public_url:"",
        private_url:"https://hopin.com/events/hack-the-north-2020",
        related_events:[2,3]},

        {id:2,
        name:"RapidPrototypingwithFlutterandFirebase",
        event_type:"tech_talk",permission:"public",
        start_time:1610442000000,
        end_time:1610447400000,
        description:"Ever need to make an app quickly,suchasforahackathonorprototype,butnotknowwheretostart?InthistalkyouwilllearnaboutFlutter,Google'scrossOSdevelopmentplatform,aswellasFirebase,Google'sBackendasaService(BaaS)platform,andhowtheycanbeusedtoquicklytakeyourideasandturnthemintobeautifulandfunctionalprototypes.Wewilldiscussmultipleusefulwidgets,thirdpartyplugins,andhowtoimplementvariousfeaturesofFirebasethatcansupportyourusers.Thistalkwillcovercodeimplementationsaswellastheory.",
        speakers:[{name:"Firebase",profile_pic:null}],
        public_url:"https://youtu.be/rgfezE92mog",
        private_url:"https://hopin.com/events/hack-the-north-2020",
        related_events:[1,3]},


        {id:3,
        name:"MicrosoftAPIWorkshop",
        event_type:"workshop",
        permission:"public",
        start_time:1610449200000,
        end_time:1610452800000,
        description:"The Azure prize is awarded to the team who makes the best use of Azure during this hackathon.TheprimaryrequirementisthatyourhackprojectincludesAzureinsomeway.",
        speakers:[{name:"Microsoft",profile_pic:null}],
        public_url:"https://youtu.be/M3GQs6fEjs4",
        private_url:"https://hopin.com/events/hack-thenorth-2020",
        related_events:[1,2,4]},

        {id:4,
        name:"HootsuiteAPIWorkshop",
        event_type:"workshop",
        permission:"public",
        start_time:1610449200000,
        end_time:1610451000000,
        description:"A RaspberryPi4 will be awarded to each member of the  winning team who makes the best use of the Hootsuite APItoimprovehowwecommunicateintoday'sconnectedworld.",
        speakers:[{name:"Hootsuite",profile_pic:null}],
        public_url:"https://youtu.be/lJ4uGA176HY",
        private_url:"https://hopin.com/events/hack-the-north-2020",
        related_events:[2,3,5]},

        {id:5,
        name:"VoiceflowAPIWorkshop",
        event_type:"workshop",
        permission:"private",
        start_time:1610526600000,
        end_time:1610530200000,
        description:
        "Submit a project that uses Voice flow–explain how Voice flow helped to achieve the goal of your project",
        speakers:[{name:"Voiceflow",profile_pic:null}],
        public_url:"",
        private_url:"https://hopin.com/events/hack-the-north-2020",
        related_events:[1,3,4]},

        {id:6,
          name:"IntrotoGraphQL",
          event_type:"tech_talk",
          permission:"public",
          start_time:1610526600000,
          end_time:1610530200000,
          description:"Youʼve been working with REST APIs for a while now,and youʼre sick of it.Datafetchingisdifficult,youcanʼtspecifywhatdatayouneed,addingonfeaturesfeelstacky…itfeelswrong.Thisiswherethefutureofnetworkingarchitecturelies:GraphQL!Inthisworkshop,youʼlllearnwhatallthehypesurroundingthisgraphbasedquerylanguageisabout,andevenhowtobuildhyperscalableAPIsusingitsawesomenewdataconstructs!",
          speakers:[{name:"RishiKothari",profile_pic:"https://hackthenorth.com/img/schedule/RishiKothari.png"}],
          public_url:"https://youtu.be/koxjhSHvnGo",
          private_url:"https://hopin.com/events/hack-thenorth-2020",
          related_events:[7,8,9,10]},
          
          
          {id:7,
          name:"DataScienceEthics",
          event_type:"tech_talk",
          permission:"public",
          start_time:1610530200000,
          end_time:1610537400000,
          description:"Intendedtoserveasabeginnerʼsguidetoethicalpracticesindatascience,thisworkshopwillexplorethedifferentusesofproxyvariablesinpredictivemodelling.Frombankingtopolicingtoemployment,oursocietyisbecomingincreasinglymetrified,relyingonpredictivemodellingtomakedecisions.Asdatascientistswemustensurethatthetoolswearecreatingworktobette societyratherthanexacerbateexistingschisms.Thisworkshopwillfocusonapproachingdataproblemsholistically,andwithjusticeasacentraltenet.",
          speakers:[{name:"KamilahEbrahim",profile_pic:"https://hackthenorth.com/img/schedule/KamilahEbrahimHeadshot.jpg"}],
          public_url:"https://youtu.be/61QHPlfMHJk",
          private_url:"https://hopin.com/events/hack-thenorth2020",
          related_events:[6,8,9,10]},
          
          
          
          {id:8,
          name:"Multithreading&IdiomaticAndroid",
          event_type:"tech_talk",
          permission:"public",
          start_time:1610526600000,
          end_time:1610535600000,
          description:"InthefinalAndroidworkshop,Iʼllshowyouhowtousebackgroundtasks.YouwilllearnhowtorunheavytaskslikemakinganAPIcallorqueryingadatabaseasabackgroundtaskusingKotlincoroutinesandlivedatas.Asabonus,IʼllsharesomeAndroidquirksandissuesthatIʼvelearnedwithexperience.",
          speakers:[{name:"BobbyWang)",profile_pic:"https://hackthenorth.com/img/schedule/BobbyWang.jpg"}],
          public_url:"https://youtu.be/yk5bt9aGjP8",
          private_url:"https://hopin.com/events/hack-the-north-2020",
          related_events:[6,7,9,10]},
          
        
          
          {id:9,
          name:"IntroToComputerVision",
          event_type:"tech_talk",
          permission:"public",
          start_time:1610456400000,
          end_time:1610460000000,
          description:"Everwonderhowcomputers'see'?Howcantheyextractmeaningfromimages?ComelearnaboutthegrowingfieldofComputerVisionandtinkerwithDetectron2tocreateanobjectdetectionproject.",
          speakers:[{
          name:"KristyGao",
          profile_pic:"https://hackthenorth.com/img/schedule/Kristy%20Gao.png"}],
          public_url:"https://youtu.be/EJcJuUMLNEs",
          private_url:"https://hopin.com/events/hack-the-north-2020",
          related_events:[6,7,8,10]},


          
          {id:10,
          name:"IntrotoSecurityEngineering",
          event_type:"workshop",
          permission:"private",
          start_time:1610456400000,
          end_time:1610461800000,
          description:"Everwantedtolearnhowcybercriminalshackintosystems?Bytheendofthisinteractiveworkshop,youwilldiscoverseveraldifferentvulnerabilitiesinoursystemandusethemtostealtop-secretinformation!Nopriorsecurityengineeringexperienceisrequired.",
          speakers:[{
          name:"KatyaPotapov",
          profile_pic:"https://hackthenorth.com/img/schedule/KatyaPotapov.png"}],
          public_url:"",
          private_url:"https://hopin.com/events/hack-the-north-2020",
          related_events:[6,7,8,9]},
          
          
          {id:11,
          name:"Data/MLMeet-Up",event_type:"activity",
          permission:"private",
          start_time:1610472600000,
          end_time:1610478000000,
          description:"OurData/MachineLearningMeet-UpwillbehappeninginMeetupRoom1andisopentoenthusiastsatalllevels",
          speakers:[],
          public_url:
          "",private_url:"https://hopin.com/events/hack-the-north-2020",
          related_events:[15]},
          
          
          
          {id:12,
          name:"BlackinTechMeet-Up",event_type:"activity",
          permission:"private",
          start_time:1638343800000,
          end_time:1638351000000,
          description:"OurBlackinTechMeet-UpishappeninginMeet-UpRoom3!Joinusforgames,goodvibes,greatconversation,andteaspilling.",
          speakers:[],
          public_url:"",
          private_url:"https://hopin.com/events/hack-the-north-2020",
          related_events:[13,14]},
          
          
          
          
          {id:13,
          name:"LGBTQ+HackersMeet-Up",event_type:"activity",
          permission:"private",
          start_time:1638390600000,
          end_time:1638394200000,
          description:"OurLGBTQ+HackersMeet-UpistakingplaceinMeetUpRoom3!AnyonefromtheLGBTQ+communityalongwithanyalliesarewelcome",
          speakers:[],
          public_url:"",
          private_url:"https://hopin.com/events/hack-the-north-2020",
          related_events:[12,14]},
          
          
          
          {id:14,
          name:"LadiesStormHackathonsMeet-Up",
          event_type:"activity",
          permission:"private",
          start_time:
          1638392400000,
          end_time:1638396000000,
          description:"TakeabreakfromhackinganddropintoourLadiesStormHackathonsMeet-Up=inMeet-UpRoom3!Opentoallwomen,non-binary people,transwomen,andallies",
          speakers:[],
          public_url:"",
          private_url:"https://hopin.com/events/hack-the-north-2020",
          related_events:[]},
          
          
          
          
          {id:15,
          name:"HighSchoolHackersMeet-Up",
          event_type:"activity",
          permission:"private",
          start_time:1638406800000,
          end_time:1638410400000,
          description:"Calling all highs choolers,our HighSchoolHackersMeet-UpishappeningonDiscordinMeet-UpRoom1!",
          speakers:[],
          public_url:"",
          private_url:"https://hopin.com/events/hack-the-north-2020",
          related_events:[11]},
          
      ]
      
    }
  }

render() {


  // let filteredCards = this.state.people.filter(x =>{
  //   return x.permission === "public"
  // })

  let peopleCards = this.state.people.map(person => {
    
    if(person.permission === "public"){
      return(
      <Col sm= "4">
          <PeopleCard person={person}/>
        </Col>
    
    )}else{
      ;
    }

    

  })

  return (
    <Container fluid>
      <Row>
       {peopleCards}
      </Row>
    </Container>

  )
}

}


export default GridAreaPublic;