import React, { useState, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Hidden } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function Resume() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(numPages: number) {
    setNumPages(numPages);
  }

  return (
    <Fragment>
      <Grid container style={{ marginTop: 35 }}>
     <Grid item sm={2} md={2}>&nbsp;</Grid>
            <Grid item sm={8} md={8}>
                <Typography variant="h4" style={{ marginLeft:10, color: 'navy' }}>Resume</Typography>
                </Grid>
                <Grid item sm={2} md={2}>&nbsp;</Grid>
                </Grid>      
      <Grid container style={{alignItems:'center', justifyContent:'center', marginTop:20}}>
      <a href='./vineeth_resume_jan2021.docx' download><Button color="primary"><CloudDownloadIcon/>&nbsp;&nbsp;Download</Button></a>
      </Grid>
      <Hidden only="xs">
      <Grid container style={{ marginTop: 35 }}>
        <Grid item  sm={3} md={3}>&nbsp;</Grid>
        <Grid item sm={6} md={6} style={{ alignContent: 'center', justifyContent: 'center' }}>
          <Document
            file={{ url: './vineeth_resume_jan2021.pdf' }}
            options={{ workerSrc: "/pdf.worker.js" }}
          >
            <Page pageNumber={1} />
          </Document>
          <Document
            file={{ url: './vineeth_resume_jan2021.pdf' }}
            options={{ workerSrc: "/pdf.worker.js" }}
          >
            <Page pageNumber={2}></Page>
          </Document>
        </Grid>
        <Grid item sm={3} md={3}>&nbsp;</Grid>
      </Grid>
      </Hidden>
    </Fragment>
  )
}

export default Resume
