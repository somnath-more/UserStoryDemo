import React from 'react';
import TypograpyComponent from '../../atoms/Typograpy';
import { Grid } from '@mui/material';

interface Candidate {
    id: number;
    name: string;
    position: string;
    location: string;
    email: string;
    phone: string;
}

interface CandidateDetailsProps {
    candidate: Candidate;
}

const CandidateDetails: React.FC<CandidateDetailsProps> = ({ candidate }) => {
    return (
       <Grid style={{paddingLeft:'300px' ,paddingTop:'10px',marginTop:'35px' ,background:'grey' ,height:'99vh'}}>
            <TypograpyComponent variant='h4' children={`Name: ${candidate.name}`}></TypograpyComponent>
            <TypograpyComponent variant='c1' children={`Email: ${candidate.email}`}></TypograpyComponent>
            <TypograpyComponent variant='c2' children={`Phone No: ${candidate.phone}`}></TypograpyComponent>
            <TypograpyComponent variant='c2' children={`candidate.${candidate.position}`}></TypograpyComponent>
            <TypograpyComponent variant='c2' children={`Location ${candidate.location}`}></TypograpyComponent>
        </Grid>
    );
};

export default CandidateDetails;
