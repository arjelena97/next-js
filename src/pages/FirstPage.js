import React from 'react';
import { Button, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export default function FirstPage() {
  return (
    <Box textAlign="center">
      <h1>First Page</h1>
      <p>Welcome to the first page.</p>
      <Link href="/">
        <Button variant="contained" color="primary">
          BACK TO WELCOME PAGE
        </Button>
      </Link>
      <Box sx={{ marginTop: "40px" }}>
      <Image
        src="/images/flowers.jpg"
        alt="flowers"
        width={800}
        height={400}
      />
      </Box>
    </Box>
  );
};
