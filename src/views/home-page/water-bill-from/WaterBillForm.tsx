import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ShowerIcon from '@mui/icons-material/Shower';
import GenericForm from '../../../components/GenericForm';
import { TENANTS_DETAILS } from '../../../common/consts';
import { ITenantsDetails, ITenant } from '../../../common/types';
import { BIG_RATE, SMALL_RATE, NUM_OF_CHEAP_CM_PER_PERSON } from './consts';


interface IProps {
  tenantsDetails: ITenantsDetails;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>, billType: "water" | "electric") => void;
}

export default function WaterBillForm(props: IProps) {
  const {
    tenantsDetails,
    handleSubmit,
  } = props;
  // const [tenantsDetails, setTenantsDetails] = useState<ITenantsDetails>(TENANTS_DETAILS)

  // const calculatePerTenant = (tenant: ITenant, prevBill: number, currBill: number): number => {
  //   let finalPayment: number = 0
  //   let sumCM: number = currBill - prevBill;

  //   if (sumCM <= 0) return 0;
    
  //   if (tenant.numOfPersons > 0) {
  //     const sumOfCheapCM = tenant.numOfPersons * NUM_OF_CHEAP_CM_PER_PERSON

  //     if (sumOfCheapCM >= sumCM) {
  //       return sumOfCheapCM * SMALL_RATE;
  //     }

  //     finalPayment += sumOfCheapCM * SMALL_RATE
  //     sumCM -= sumOfCheapCM;
  //   }

  //   finalPayment += sumCM * BIG_RATE

  //   return finalPayment;
  // }

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);

  //   const newData: ITenantsDetails = {}

  //   for (let curr_tenant of Object.keys(tenantsDetails)) {
  //     const prevBill = data.get(tenantsDetails[curr_tenant].fields[0].name)
  //     const currBill = data.get(tenantsDetails[curr_tenant].fields[1].name)
  
  //     if (prevBill && currBill) {
  //       const result = parseInt(calculatePerTenant(
  //         tenantsDetails[curr_tenant], 
  //         parseInt(prevBill as string), 
  //         parseInt(currBill as string)).toFixed(2))

  //       console.log({ 
  //         name: curr_tenant,
  //         prev: prevBill,
  //         curr: currBill,
  //         result: result
  //       })
        
  //       newData[curr_tenant] = {
  //         ...tenantsDetails[curr_tenant],
  //         result, 
  //       }
  //     } else {
  //       newData[curr_tenant] = {
  //         ...tenantsDetails[curr_tenant],
  //       }
  //     }
  //   };

  //   setTenantsDetails(newData)
  // };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        marginTop: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <ShowerIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        חשבון מים
      </Typography>
      <Box 
        component="form" 
        noValidate 
        onSubmit={(e) => handleSubmit(e, "water")} 
        sx={{ mt: 1 }}>
        <GenericForm 
          formDetails={tenantsDetails}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          חשב
        </Button>
      </Box>
    </Box>
  );
}