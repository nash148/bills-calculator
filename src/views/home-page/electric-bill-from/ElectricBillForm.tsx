import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import GenericForm from '../../../components/GenericForm';
import { ITenantsDetails } from '../../../common/types';


interface IProps {
  tenantsDetails: ITenantsDetails;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>, billType: "water" | "electric") => void;
}

export default function ElectricBillForm(props: IProps) {
  const {
    tenantsDetails,
    handleSubmit,
  } = props;
  // const [tenantsDetails, setTenantsDetails] = useState<ITenantsDetails>(TENANTS_DETAILS)
  // const [totalFieldData, setTotalFieldData] = useState<IField>({
  //   label: 'סכום חיוב כללי',
  //   name: 'totalPayment',
  //   value: 0,
  // })

  // const calculatePerTenant = (prevBill: number, currBill: number): number => {
  //   const tmp = currBill - prevBill 
  //   if (tmp <= 0) return 0
  //   return tmp * PRICE_PER_KW + FIXED_CHARGE
  // }

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);

  //   const newData: ITenantsDetails = {}

  //   for (let curr_tenant of Object.keys(tenantsDetails)) {
  //     const prevBill = data.get(tenantsDetails[curr_tenant].fields[0].name)
  //     const currBill = data.get(tenantsDetails[curr_tenant].fields[1].name)
  
  //     if (prevBill && currBill) {
  //       const result = calculatePerTenant(parseInt(prevBill as string), parseInt(currBill as string))
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
        <ElectricBoltIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        חשבון חשמל
      </Typography>
      <Box 
        component="form" 
        noValidate 
        onSubmit={(e) => handleSubmit(e, "electric")} 
        sx={{ mt: 1 }}>
        <GenericForm 
          formDetails={tenantsDetails} 
          // extraField={totalFieldData} 
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