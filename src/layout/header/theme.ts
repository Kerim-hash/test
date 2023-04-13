import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStylesHeader = makeStyles((theme: Theme) => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
       
    },
    logo: {
       width: 17,
       height: 17
    },
    about: {
        maxWidth: 450
    }
}));