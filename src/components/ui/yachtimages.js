import { Image, Tabs, Tab, Card, CardBody } from "@nextui-org/react"
import yachtsDb from "@/components/api/database.json"


export default function YachtImages({ name, imageH, imageW }) {
  const imagesRef = `/images/yachts` 
  const yachts = Object.entries(yachtsDb.yachts)
  const yachtsObj = yachts.map(([key,val])=>{
    return {id:key,yacht:val}
  })
  const selectedYacht = yachtsObj.find(yacht=>{
    return yacht.yacht.name===name
  })
  const urlsLinkExterior = selectedYacht.yacht.images.exterior
  const urlsLinkInterior = selectedYacht.yacht.images.interior


      return (
      <div className="flex w-full flex-col mt-6">
      <Tabs aria-label="Options" color="primary">
        <Tab key="Exterior" title="Exterior photos">
          <Card>
            <CardBody>
              <div className="grid grid-cols-4 gap-4 mt-4">
              {urlsLinkExterior.map((url, index) => (    
                  <Image
                  key={index}
                  src={imagesRef+url}
                  width={imageW}
                  height={imageH}
                  alt={`Image ${name}`}
                  //className="w-full object-cover mb-4 rounded-md"
                  className="w-full object-cover"
                  /> 
                ))};
            </div>            
          </CardBody>
          </Card>  
        </Tab>
        <Tab key="Interior" title="Interior photos">
          <Card>
            <CardBody>
            <div className="grid grid-cols-4 gap-4 mt-4">
            {urlsLinkInterior.map((url, index) => (    
                <Image
                key={index}
                src={imagesRef+url}
                width={imageW}
                height={imageH}
                alt={`Image ${name}`}
                //className="w-full object-cover mb-4 rounded-md"
                className="w-full object-cover"
                /> 
              ))};
          </div>            
          </CardBody>
          </Card>  
        </Tab>
      </Tabs>
      </div>
    );
  }