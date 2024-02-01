
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Avatar, Box, Card, CardContent, Grid, Tab, Tabs, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CheckIcon from '@mui/icons-material/Check';
import { CallAudit } from '../../dATAS/callAudit';
import MusicList from '../../MusicLists/Music';
import { useSubtitle } from '../../ContextFilter/Subtitlecontext';


const CallRecording = () => {
  const location = useLocation();
  const rowData = location.state;
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const { subtitle } = useSubtitle();
  return (
    <Box sx={{ padding: 5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box  sx={{ display: 'flex', alignItems: 'center' }}>
              <img src='./images/back.png' className='w-7' alt="Back Icon" />
              <Typography fontWeight={"600"} fontFamily={'sans-serif'} ml={1} variant='subtitle1' color={'primary'}>
                Back to Reports
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end',justifyContent:'flex-end' }}>
              <Typography fontFamily={'sans-serif'} ml={1} variant='subtitle1' color={'primary'}>
                Run ID
              </Typography>
              <Typography fontFamily={'sans-serif'} ml={1} variant='subtitle1' color={'primary'}>
                Created
              </Typography>
              <Typography fontFamily={'sans-serif'} ml={1} variant='subtitle1' color={'primary'}>
                First Name
              </Typography>
            </Box>
            </Box>
            
      <Grid container spacing={3}>
        {/* Left column */}
        <Grid item xs={12} md={8}>
          {/* First card in left column */}
          <Box mt={3}>
            <Card sx={{ borderRadius: 3 }} elevation={0}>
              <MusicList/>
            {/* <img src='./images/dummyvoice.png' width={800} alt="Voice Recording" /> */}
            </Card>
          </Box>

          {/* Second card in left column */}
          <Box mt={3}>
            <Card sx={{ borderRadius: 3 }} elevation={0}>
              <CardContent>              
                <Tabs value={tabValue} onChange={handleTabChange} centered>
                   <Tab label={(<Typography fontSize={12} fontFamily={"poppins"}>Overview</Typography>)} />
                   <Tab label={(<Typography fontSize={12} fontFamily={"poppins"}>Transcript</Typography>)} />
                   <Tab label={(<Typography fontSize={12} fontFamily={"poppins"}>Summary</Typography>)} />
                 </Tabs>

                 {/* Tab Content */}
                 {tabValue === 0 && (
                  <Box sx={{ padding: 5 }}>
                    {/* Call Recording Details */}
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                      <Typography fontWeight={700} variant="body1">{rowData.sno}.mp3 </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1, marginTop: 2 }}>
                      <AccessTimeIcon />
                      <Typography variant="body1" ml={1}>{rowData.callDuration}</Typography>
                    </Box>
                    <Typography mt={3}>
                      This call is between {rowData.customerName} and {rowData.agentName} where the customer asks for a product replacement for a damaged product delivery.
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1, marginTop: 2 }}>
                      <PeopleAltIcon />
                      <Typography fontWeight={700} variant="body1" ml={1}>Participants</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1, marginTop: 2 }}>
                      <Avatar sx={{ width: 24, height: 24, backgroundColor: '#DCDC5B', padding: 1, fontSize: 14 }}>{rowData.customerName.charAt(0)}</Avatar>
                      <Typography variant="body1" ml={1}>{rowData.customerName}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1, marginTop: 2 }}>
                      <Avatar sx={{ width: 24, height: 24, backgroundColor: '#4BA2E2', fontSize: 14 }}>{rowData.agentName.charAt(0)}</Avatar>
                      <Typography variant="body1" ml={1}>{rowData.agentName}</Typography>
                    </Box>
                  </Box>
                )}
                {/* Content for other tabs */}
                {tabValue === 1 && <Box p={2}>
                  <Typography>{subtitle}</Typography>
                  </Box>}
                {tabValue === 2 && <Box p={2}>
                  <Typography fontWeight={700}>Summary</Typography>
                  <Typography mt={2} fontWeight={600}>Topics Detected : 1. call quality and training purpose 2. recording of call 3. payment issues 4. Account status 5. hospital visit 6.documents 7.Illness 8. operations 9. phone number call analysis: the call started with the agent greeting the customer and the customer responding. The agent the customer that the call is being recorded for training purposes. The customer replied that he had already informed the agent the recording was of his madam. The  agent then inquired about the customer’s payment status and the customer replied that he is making payments but is facing some issues. The agent informed the customer that his total outstanding amount is one lakh seven thousand seven hundred rupees and if he does not pay, his account will become legal. The customer asked for tam (a document) from the agent to send to him.The  agent politely declined and ended the call. the customer was cooperative and polite throughout the call.He mentioned that he is undergoing a bypass surgery and has a heart problem.The agent was professional and empathetic in addressing the customer’s concerns.</Typography>
</Box>}
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* Right column */}
        <Grid item xs={12} md={4}>
        
        <Box mt={3}>
       
                <Card sx={{ borderRadius: 3 }} elevation={0}>
                  <CardContent>
                    <Typography fontWeight={900} variant="body1">Call Audit</Typography>
                    {Object.entries(CallAudit).map(([key, value]) => (
                      <Grid container key={key} alignItems="center" justifyContent="space-between">
                        <Grid item py={2} xs={10}>
                          <Typography variant="subtitle1" fontFamily={'sans-serif'} fontWeight={600} mt={1}>
                            {value}
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <CheckIcon color="primary" />
                        </Grid>
                      </Grid>
                    ))}
                  </CardContent>
                </Card>
              </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CallRecording;
