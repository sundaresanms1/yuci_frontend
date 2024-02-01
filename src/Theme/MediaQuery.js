import { useMediaQuery } from "@mui/material";

export const useIsLargeScreen = () => {
  return useMediaQuery((theme) => theme.breakpoints.up('md'));
};
