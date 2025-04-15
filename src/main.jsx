
import ReactDOM from "react-dom/client";
import './index.css'
import App from "./App";
let cardobj = [
  {
    NO:1,
   type:"FREE",
   value:"0",
   "features": [
    {
      "name": "Single User",
      "avaiable": true
    },
    {
      "name": "50 GB",
      "avaiable": true
    },
    {
      "name": "Unlimited Public Projects",
      "avaiable": true 
    },
    {
      "name": "Community Access",
      "avaiable": true 
    },
    {
      "name": "Unlimited Private Projects",
      "avaiable": false 
    },
    {
      "name": "Dedicated Phone Support",
      "avaiable": false 
    },
    {
      "name": "Free Subdomain",
      "avaiable": false 
    },
    {
      "name": "Monthly Status Reports",
      "avaiable": false 
    }
  ]
  },
  {
    NO:2,
   type:"PLUS",
   value:"9",
   "features": [
    {
      "name": "Single User",
      "avaiable": true
    },
    {
      "name": "50 GB",
      "avaiable": true
    },
    {
      "name": "Unlimited Public Projects",
      "avaiable": true 
    },
    {
      "name": "Community Access",
      "avaiable": true 
    },
    {
      "name": "Unlimited Private Projects",
      "avaiable": true 
    },
    {
      "name": "Dedicated Phone Support",
      "avaiable": true 
    },
    {
      "name": "Free Subdomain",
      "avaiable": true 
    },
    {
      "name": "Monthly Status Reports",
      "avaiable": false 
    }
  ]
  },
  {
    NO:3,
   type:"PRO",
   value:"49",
   "features": [
    {
      "name": "Single User",
      "avaiable": true
    },
    {
      "name": "50 GB",
      "avaiable": true
    },
    {
      "name": "Unlimited Public Projects",
      "avaiable": true 
    },
    {
      "name": "Community Access",
      "avaiable": true 
    },
    {
      "name": "Unlimited Private Projects",
      "avaiable": true 
    },
    {
      "name": "Dedicated Phone Support",
      "avaiable": true 
    },
    {
      "name": "Free Subdomain",
      "avaiable": true 
    },
    {
      "name": "Monthly Status Reports",
      "avaiable": true 
    }
  ]
  }
]
ReactDOM.createRoot(document.getElementById("root")).render(
 <div> 
{cardobj.map((cardname)=>(
  <App
  key={cardname.NO}
  type={cardname.type}
  value={cardname.value}
  features={cardname.features}
  />
))}
</div>
)

