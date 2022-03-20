import React, { useState } from "react";
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

import {Button, Card, Container, ButtonWrapper, FormH1} from './styled';
function Index() {
  const [page, setPage] = useState(0);

  const FormTitles = ["Step1", "Step2", "Step3"];
  const [formData, setFormData] = useState({
    company: "Coca Cola",
    product_name: "",
    description:"",
  })
  const PageDisplay = () => {
    if (page === 0) {
      return <Step1 formData={formData} setFormData={setFormData}/>;
    }
    else if (page === 1){
      return <Step2 />;
    }
    else{
      return <Step3 />;
    }
  };

  return (
    <Container>
      <Card>
        <FormH1>{FormTitles[page]}</FormH1>
        {PageDisplay()}
        <ButtonWrapper>
          <Button 
          disabled={page === 0} 
          onClick={() => setPage(page - 1)}
          >Previous</Button>
          <Button 
          disabled={page === FormTitles.length - 1}
          onClick={() => setPage(page + 1)} 
          >Next</Button>
        </ButtonWrapper>
      </Card>
    </Container>
  );
}

export default Index;
