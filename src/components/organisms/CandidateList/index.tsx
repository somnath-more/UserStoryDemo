import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, styled } from '@mui/material';
import TypograpyComponent from '../../atoms/Typograpy';
import Button from '../../atoms/Button';

export interface Candidate {
    id: number;
    name: string;
    position: string;
    location: string;
    email: string;
    phone: string;
}

interface CandidateListProps {
    onSelectCandidate: (candidate: Candidate) => void;
}
const OuterGrid=styled(Grid)({
    height:'99vh',
    background:'blue',
    // width:'200px'
})

const CandidateList: React.FC<CandidateListProps> = ({ onSelectCandidate }) => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);

    useEffect(() => {
        axios.get<Candidate[]>('http://localhost:3000/candidates') // JSON Server URL
            .then(response => {
                setCandidates(response.data);
            })
            .catch(error => {
                console.log("Error: " + error);
            });
    }, []);

    return (
        <div>
        <TypograpyComponent variant='h4'  styles={{background:'lightblue'}} children={'Candidate List'}/>
            <OuterGrid container >
                {candidates.map(candidate => (
                                    <Grid item key={candidate.id} xs={12} style={{ marginBottom: '10px' }}>
                                    <div onClick={() => onSelectCandidate(candidate)}>
                                      <TypograpyComponent  variant="h4" children={candidate.name}/>
                                        <Button children={`View details ${candidate.name}`} buttonstyles={{ textTransform: 'none' ,color:'white',background:'black' }} />
                                    </div>
                                </Grid>
                ))}
            </OuterGrid>
        </div>
    );
};

export default CandidateList;
