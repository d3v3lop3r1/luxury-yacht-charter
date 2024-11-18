import { Image, Link, Tabs, Tab, Card, CardBody, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react"
import yachtsDb from "@/components/api/database.json"
import { useState } from "react";


export default function YachtImages({ name, imageH, imageW }) {
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
  const [url, setUrl] = useState()
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

  const handleOpen = (url) => {
    setUrl(url)
    onOpen();
  }

      return (
      <div className="flex w-full flex-col mt-6">
      <Modal size="4xl" backdrop="blur" placement="center" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            
              <ModalBody>
              <Image
                key={url}
                src={imagesRef+url}
                width={800}
                
                radius="md"
                sizes=""
                alt={`Image ${name}`}
                
      
              /> 
              </ModalBody>
            
          )}
        </ModalContent>
      </Modal>

        <Tabs aria-label="Options" color="primary">
        <Tab key="Exterior" title="Exterior photos">
          <Card>
            <CardBody>
              <div className="grid grid-cols-4 gap-4 mt-4">
              {urlsLinkExterior.map((url, index) => (  
              <Link key={url} variant="flat" onPress={()=>{handleOpen(url)}} >
                  <Image
                  key={url}
                  src={imagesRef+url}
                  width={imageW}
                  height={imageH}
                  alt={`Image ${name}`}
                  //className="w-full object-cover mb-4 rounded-md"
                  className="w-full object-cover"
                  /> 
                  </Link>
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
              <Link key={url} variant="flat" onPress={()=>{handleOpen(url)}} >
                  <Image
                  key={url}
                  src={imagesRef+url}
                  width={imageW}
                  height={imageH}
                  alt={`Image ${name}`}
                  //className="w-full object-cover mb-4 rounded-md"
                  className="w-full object-cover"
                  /> 
                  </Link>
              ))};
          </div>            
          </CardBody>
          </Card>  
        </Tab>
      </Tabs>
      </div>
    );
  }