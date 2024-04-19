import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import DeliveryAddressForm from "./DeliveryAddressForm";
import PaymentMethod from "../Payment/PaymentMethod";
import OrderPlaced from "../Order/OrderPlaced";

const steps = ["Login", "Address", "Payment", "Order Placed"];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(1);
  const location = useLocation();
    // console.log(location.search);
  const querySearch = new URLSearchParams(location.search);
  const step = querySearch.get("step");

  //   console.log(step);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className="px-10 lg:px-28 mt-12 mb-8">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={Number(step)}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 1}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            </Box> */}

            <div className="mt-8">
              {step == 1 && <DeliveryAddressForm />}
              {step == 2 && <PaymentMethod />}
              {step == 3 && <OrderPlaced />}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
