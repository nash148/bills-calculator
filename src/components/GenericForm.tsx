import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ITenantsDetails } from '../common/types';

interface IProps {
  formDetails: ITenantsDetails;
  // extraField: IField;
}

export default function GenericForm(props: IProps) {
  const { 
    formDetails,
    // extraField,
   } = props;

  return (
    <Grid container direction={"column"} spacing={2}>
    {
      Object.keys(formDetails).map(curr_tenant => (
        <Grid item key={curr_tenant}>
          <Grid container direction={'row'} spacing={2} alignItems="start">
            <Grid item xs={12}>
              <Typography 
                component="h5" 
                gutterBottom
                borderTop={"solid 1px rgb(192,192,192,192)"}
              >
                {formDetails[curr_tenant].result} - {curr_tenant}
              </Typography>
            </Grid>

            {
              formDetails[curr_tenant].fields.map(curr_field => (
                <Grid key={JSON.stringify(curr_field)} item xs={6}>
                  <TextField
                    required
                    fullWidth
                    type="number"
                    label={curr_field.label}
                    name={curr_field.name}
                    size='small'
                  />
                </Grid>
              ))
            }


          </Grid>
        </Grid>    
        ))
      }
        {/* <Grid item xs={12} marginTop={'10px'} borderTop={"solid 1px rgb(192,192,192,192)"}>
          <TextField
            required
            fullWidth
            type="number"
            label={extraField.label}
            name={extraField.name}
            size='small'
          />
        </Grid> */}
      </Grid>
  )
}