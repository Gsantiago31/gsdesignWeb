import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startNewCard } from "../../store/dashboard";
import { DashboardLayout } from "../layout/DashboardLayout";
import { CardView, NothingSelectedView } from "../views";

export const DashboardPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.dashboard );

  const onCLickNewCard = () => {
    dispatch( startNewCard() )
  }

  return (
    <DashboardLayout>

      {
        (!!active)
        ? <CardView />
        : <NothingSelectedView />
      }

      <IconButton
      disabled={ isSaving }
      onClick={ onCLickNewCard }
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'secondary.main',
        ':hover': { backgroundColor: 'secondary.main', opacity: 0.9},
        position: 'fixed',
        right: 50,
        bottom: 50,
      }}>
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </DashboardLayout>
  );
};
