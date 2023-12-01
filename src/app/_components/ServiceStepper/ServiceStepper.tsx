// Produced by Duong Trung Nguyen

'use client'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { TourSchedule } from '@/app/_types';
import { Skeleton } from '..';


const ServiceStepper = ( { steps } : { steps : TourSchedule[] | undefined } ) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }} className="mt-3">
        <Typography variant='h5' className='py-3'>
            <b>Lịch trình</b>
        </Typography>
        
      {
        steps ?
        <Stepper activeStep={activeStep} orientation="vertical">
        {
        steps?.map((step, index) => (
            <Step key={step.id}>
              <StepLabel
                optional={
                  index === steps.length - 1 ? (
                    <Typography variant="caption">Ngày cuối cùng</Typography>
                  ) : null
                }
              >
                <b style={{fontSize: "1rem"}}>{step.time}</b>
              </StepLabel>
              <StepContent>
                <Typography>{step.content}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <div className="button-group">
                      <button
                          disabled={index === 0}
                          onClick={handleBack}
                          className='btn btn-light mt-2'
                      >
                          Trở về
                      </button>
                      <button
                          onClick={handleNext}
                          className='btn btn-yellow mt-2'
                      >
                          { steps && index === steps.length - 1 ? 'Kết thúc' : 'Tiếp tục'}
                      </button>
                    </div>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))
        }
        </Stepper> :
        <>
          <div>
            <div className='d-flex gap-1'>
              <Skeleton variant='round' width={30} height={30}/>
              <Skeleton variant='text' className='w-50'/>
            </div>
            <div className='d-flex flex-column gap-1 mt-3' style={{marginLeft: "38px"}}>
              <Skeleton variant='text'/>
              <Skeleton variant='text'/>
              <Skeleton variant='text'/>
              <Skeleton variant='text'/>
              <div className="flex-center gap-2 mt-3">
                <Skeleton variant='text' className='w-50 py-3'/>
                <Skeleton variant='text' className='w-50 py-3'/>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <div className='d-flex gap-1'>
              <Skeleton variant='round' width={30} height={30}/>
              <Skeleton variant='text' className='w-50'/>
            </div>
          </div>
          <div className='mt-5'>
            <div className='d-flex gap-1'>
              <Skeleton variant='round' width={30} height={30}/>
              <Skeleton variant='text' className='w-50'/>
            </div>
          </div>
          <div className='mt-5'>
            <div className='d-flex gap-1'>
              <Skeleton variant='round' width={30} height={30}/>
              <Skeleton variant='text' className='w-50'/>
            </div>
          </div>
        </>

      }
      { steps && activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Lịch trình hoàn tất - quay trở về điểm xuất phát</Typography>
          <button onClick={handleReset} className='btn btn-yellow mt-2'>
            Xem lại
          </button>
        </Paper>
      )}
    </Box>
  );
}
export default ServiceStepper;