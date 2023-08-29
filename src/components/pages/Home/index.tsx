
import  { useState } from 'react'
import { Grid } from '@mui/material'
import CandidateList, { Candidate } from '../../organisms/CandidateList';
import CandidateDetails from '../../organisms/CandidateItem';
import TypograpyComponent from '../../atoms/Typograpy';
const Home = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const handleSelectCandidate = (candidate: Candidate) => {
      setSelectedCandidate(candidate);
  };
  return (

    <Grid container>
            <Grid item xs={3}>
                <CandidateList onSelectCandidate={handleSelectCandidate} />
            </Grid>
            <Grid item xs={9}>
                {selectedCandidate ? (
                    <CandidateDetails candidate={selectedCandidate} />
                ) : (
                    <TypograpyComponent  variant={'h4'} styles={{background:'lightblue'}} children={'Select a candidate to view details'}/>
                )}
            </Grid>
        </Grid>

  
  )
}

export default Home