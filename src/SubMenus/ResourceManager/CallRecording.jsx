import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";


import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CheckIcon from '@mui/icons-material/Check'; // Import the check icon
import ClearIcon from '@mui/icons-material/Clear';
import { CallAudit } from "../../dATAS/callAudit";
import MusicList from "../../MusicLists/Music";
import { useSubtitle } from "../../ContextFilter/Subtitlecontext";
import { summary } from "../../data/filename_call_summary";
import { ArrowBackIosRounded } from "@mui/icons-material";


const CallRecording = () => {
  const renderStatus = (value) => {
    if (value === 'Yes') {
      return <CheckIcon color="primary" />;
    } else {
      return <ClearIcon color="error" />;
    }
  };
  const location = useLocation();
  const rowData = location.state;
  const [tabValue, setTabValue] = React.useState(0);
  const navigate = useNavigate();
    const RunHistory =()=>{
        navigate('/callList')
        }
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const conversationMessages = [
    {
      role: "agent",
      message: "Welcome to Axis Bank. How may I assist you today?",
    },
    {
      role: "customer",
      message: "I would like to inquire about my savings account balance.",
    },
    {
      role: "agent",
      message: "Sure, could you please provide me with your account number?",
    },
    { role: "customer", message: "My account number is 123456789." },
    { role: "agent", message: "Thank you. Let me check your account balance." },
    { role: "agent", message: "Your current account balance is $5,000." },
    { role: "customer", message: "Great, thank you for the information." },
    { role: "agent", message: "Is there anything else I can assist you with?" },
    {
      role: "customer",
      message: "Yes, I have a question about transferring funds.",
    },
    { role: "agent", message: "Sure, go ahead and ask your question." },
    {
      role: "customer",
      message:
        "How can I transfer funds from my savings account to my checking account?",
    },
    {
      role: "agent",
      message:
        "You can easily transfer funds using our mobile banking app or online banking portal.",
    },
    {
      role: "agent",
      message:
        "Alternatively, you can visit any of our branch locations to initiate the transfer.",
    },
    {
      role: "customer",
      message:
        "Thank you for the information. I will use the mobile banking app for the transfer.",
    },
    {
      role: "agent",
      message:
        "You re welcome. If you have any further questions, feel free to ask.",
    },
    // Add more conversation messages related to banking
  ];

  const { subtitle } = useSubtitle();
  const fileName = rowData.file_name;
  const dataForFilename = CallAudit[fileName] || {};
  console.log(fileName + 'filename')
  return (
    <Box sx={{ padding: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box  sx={{ display: "flex", alignItems: "center" }}>
      <IconButton color="primary" aria-label="back" sx={{ marginRight: 1 }}>
        <ArrowBackIosRounded onClick={RunHistory} />
      </IconButton>
      <Typography
        fontWeight={"600"}
        fontFamily={"sans-serif"}
        variant="subtitle1"
        color={"primary"}
      >
        Back to Reports
      </Typography>
    </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            fontFamily={"sans-serif"}
            ml={1}
            variant="subtitle1"
            color={"primary"}
          >
            Run ID
          </Typography>
          <Typography
            fontFamily={"sans-serif"}
            ml={1}
            variant="subtitle1"
            color={"primary"}
          >
            Created
          </Typography>
          <Typography
            fontFamily={"sans-serif"}
            ml={1}
            variant="subtitle1"
            color={"primary"}
          >
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
              <MusicList fileName={rowData.file_name}/>
              {/* <img src='./images/dummyvoice.png' width={800} alt="Voice Recording" /> */}
            </Card>
          </Box>

          {/* Second card in left column */}
          <Box mt={3}>
            <Card sx={{ borderRadius: 3 }} elevation={0}>
              <CardContent>
                <Tabs value={tabValue} onChange={handleTabChange} >
                  <Tab
                    label={
                      <Typography fontSize={12} fontFamily={"poppins"}>
                        Overview
                      </Typography>
                    }
                  />
                  <Tab
                    label={
                      <Typography fontSize={12} fontFamily={"poppins"}>
                        Transcript
                      </Typography>
                    }
                  />
                  <Tab
                    label={
                      <Typography fontSize={12} fontFamily={"poppins"}>
                        Summary
                      </Typography>
                    }
                  />
                </Tabs>

                {/* Tab Content */}
                {tabValue === 0 && (
                  <Box sx={{ padding: 5 }}>
                    {/* Call Recording Details */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 1,
                      }}
                    >
                      <Typography fontWeight={700} variant="body1">
                        {rowData.file_name}{" "}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 1,
                        marginTop: 2,
                      }}
                    >
                      <AccessTimeIcon />
                      <Typography variant="body1" ml={1}>
                        {rowData.callDuration}
                      </Typography>
                    </Box>
                    <Typography mt={3}>
                      This call is between {rowData.customer_name} and{" "}
                      {rowData.agent_name} where the customer asks for a product
                      replacement for a damaged product delivery.
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 1,
                        marginTop: 2,
                      }}
                    >
                      <PeopleAltIcon />
                      <Typography fontWeight={700} variant="body1" ml={1}>
                        Participants
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 1,
                        marginTop: 2,
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 24,
                          height: 24,
                          backgroundColor: "#DCDC5B",
                          padding: 1,
                          fontSize: 14,
                        }}
                      >
                        {rowData.customer_name.charAt(0)}
                      </Avatar>
                      <Typography variant="body1" ml={1}>
                        {rowData.customer_name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 1,
                        marginTop: 2,
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 24,
                          height: 24,
                          backgroundColor: "#4BA2E2",
                          fontSize: 14,
                        }}
                      >
                        {rowData.agent_name.charAt(0)}
                      </Avatar>
                      <Typography variant="body1" ml={1}>
                        {rowData.agent_name}
                      </Typography>
                    </Box>
                  </Box>
                )}
                {tabValue === 1 && (
                  <Box p={2}>
                    <Typography fontWeight={700}>Call Transcription</Typography>
                    {/* Render conversation messages */}
                    <Box sx={{ maxHeight: "300px", overflowY: "auto" }}>
                      {conversationMessages.map((msg, index) => (
                        <Box>
                          <Box
                            key={index}
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              marginTop: 3,
                            }}
                          >
                            {msg.role === "agent" ? (
                              <Avatar
                                sx={{
                                  width: 32,
                                  height: 32,
                                  backgroundColor: "#DCDC5B",
                                  marginRight: 1,
                                }}
                              >
                                {rowData.agent_name.charAt(0)}
                              </Avatar>
                            ) : (
                              <Avatar
                                sx={{
                                  width: 32,
                                  height: 32,
                                  backgroundColor: "#4BA2E2",
                                  marginRight: 1,
                                }}
                              >
                                {rowData.customer_name.charAt(0)}
                              </Avatar>
                            )}
                            <Typography fontWeight={700} variant="subtitle1">
                              {msg.role === "agent"
                                ? rowData.agent_name
                                : rowData.customer_name}
                            </Typography>
                          </Box>
                          <Typography fontSize={12} ml={5} variant="body2">
                            {msg.message}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}

                {tabValue === 2 && (
                  <Box p={2}>
                    <Typography fontWeight={700}>Summary</Typography>
                    
                    <Typography mt={2} fontWeight={600}>
                      {summary[fileName]}
                    </Typography>
               
                  </Box>
                )}
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* Right column */}
        <Grid item xs={12} md={4}>
        <Box mt={3}>
      <Card sx={{ borderRadius: 3 }} elevation={0}>
        <CardContent>
          <Typography fontWeight={800} variant="h6">
            Call Audit
          </Typography>
          {/* Display property names and their values for the specified filename */}
          {Object.entries(dataForFilename).map(([key, value]) => (
            <Grid container key={key} alignItems="center" justifyContent="space-between">
              <Grid item py={1.5} xs={6}>
                <Typography variant="subtitle1" fontFamily={'sans-serif'} fontWeight={600} mt={1}>
                  {key}
                </Typography>
              </Grid>
              <Grid item md={3} xs={6}>
                <Typography variant="body1" fontFamily={'sans-serif'} fontWeight={600} mt={1}>
                  {renderStatus(value)}
                </Typography>
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
