import React from 'react';
import styled from 'styled-components'

const Head = styled.div`
    margin-left: 13.5%;
    font-size: 20px;
    color:grey;
    font-family: 'Varta', sans-serif;
`

const Para = styled.div`
    margin: 50px;
`

const Text = styled.p`
    color: grey;
    font-weight: 30px;
    font-family: 'Varta', sans-serif;
    text-decoration: none;
`

const Main = () => (
    <div>
        <div class="parallax"></div>
        <div style={{width: '70%'}}>
        <Head><h1> Behind the Lens </h1></Head>
        </div>

        <div class="parallax1"> </div>
        <Para>
            <Text>
                Dawei Liu is a natural world photographer based in the Bay Area, CA.
            </Text>
        </Para>

    </div>

)

export default Main
