import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ITenantsDetails, ITenant } from '../../common/types';
import { TENANTS_DETAILS } from '../../common/consts';
import ElectricBillForm from './electric-bill-from/ElectricBillForm';
import WaterBillForm from './water-bill-from/WaterBillForm';
import { FIXED_CHARGE, PRICE_PER_KW } from './electric-const';
import { BIG_RATE, NUM_OF_CHEAP_CM_PER_PERSON, SMALL_RATE } from './water-const';

const theme = createTheme();

type TOptions = "electric" | "water"

export default function HomePage() {
  const [option, setOption] = useState<TOptions>("electric");
  const [electricTenantsDetails, setElectricTenantsDetails] = useState<ITenantsDetails>(TENANTS_DETAILS);
  const [waterTenantsDetails, setWaterTenantsDetails] = useState<ITenantsDetails>(TENANTS_DETAILS);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: TOptions,
  ) => {
    setOption(newAlignment);
  };

  const calculateElectricPerPerson = (prevBill: number, currBill: number): number => {
    const tmp = currBill - prevBill 
    if (tmp <= 0) return 0
    return tmp * PRICE_PER_KW + FIXED_CHARGE
  }

  const calculateWaterPerPerson = (tenant: ITenant, prevBill: number, currBill: number): number => {
    let finalPayment: number = 0
    let sumCM: number = currBill - prevBill;

    if (sumCM <= 0) return 0;
    
    if (tenant.numOfPersons > 0) {
      const sumOfCheapCM = tenant.numOfPersons * NUM_OF_CHEAP_CM_PER_PERSON

      if (sumOfCheapCM >= sumCM) {
        return sumCM * SMALL_RATE;
      }

      finalPayment += sumOfCheapCM * SMALL_RATE
      sumCM -= sumOfCheapCM;
    }

    finalPayment += sumCM * BIG_RATE

    return finalPayment;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, billType: "water" | "electric") => {
    event.preventDefault();
    const tenantsDetails = billType === "electric" ? electricTenantsDetails : waterTenantsDetails;
    const data = new FormData(event.currentTarget);

    const newData: ITenantsDetails = {}

    for (let curr_tenant of Object.keys(tenantsDetails)) {
      const prevBill = data.get(tenantsDetails[curr_tenant].fields[0].name)
      const currBill = data.get(tenantsDetails[curr_tenant].fields[1].name)
  
      if (prevBill && currBill) {
        let result = 0;
        if (billType === "water") {
          result = parseFloat(calculateWaterPerPerson(
            tenantsDetails[curr_tenant], 
            parseInt(prevBill as string), 
            parseInt(currBill as string)).toFixed(2))
        } else {
          result = parseFloat(calculateElectricPerPerson(
            parseInt(prevBill as string), 
            parseInt(currBill as string)).toFixed(2))
        }

        console.log({ 
          name: curr_tenant,
          prev: prevBill,
          curr: currBill,
          result: result
        })
        
        newData[curr_tenant] = {
          ...tenantsDetails[curr_tenant],
          result, 
        }
      } else {
        newData[curr_tenant] = {
          ...tenantsDetails[curr_tenant],
        }
      }
    };

    billType === "electric" ? setElectricTenantsDetails(newData) : setWaterTenantsDetails(newData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Grid container direction={'column'} spacing={2}>
            <Grid item xs={2} textAlign={"center"}>
                <ToggleButtonGroup
                  sx={{ marginTop: '20px' }}
                  size="small"
                  color="primary"
                  value={option}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                >
                  <ToggleButton value="electric">חשמל</ToggleButton>
                  <ToggleButton value="water">מים</ToggleButton>
                </ToggleButtonGroup>
            </Grid>

            <Grid item xs={10}>
              {
                option == "electric" ?
                <ElectricBillForm 
                  tenantsDetails={electricTenantsDetails}
                  handleSubmit={handleSubmit}
                /> :
                <WaterBillForm 
                  tenantsDetails={waterTenantsDetails} 
                  handleSubmit={handleSubmit}
                />
              }

            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}