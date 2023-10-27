import styles from './page.module.css'
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material';
import Link from 'next/link';

export default function Home() {

  return (
    <>
    <Box textAlign="center">
      <Typography variant="h3">
        WELCOME
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
    <Box className={styles.card} >
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </Box> 
    <Box className={styles.card}>
      <p><strong>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</strong></p>
    </Box> 
    </Box>
    <Link href="/FirstPage">
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" color="primary">
          NEXT PAGE
        </Button>
      </Box>
    </Link>
    </>
  )
}
