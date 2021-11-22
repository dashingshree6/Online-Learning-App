import React from  'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';

export default function TAssignment2() {
  return (
    <div>
             <Grid centered verticalAlign='middle' className='panel3'>
    <Grid.Column style={{ maxWidth : 450 }}>
    <Icon name='paper plane' color='green' />
      <Header as='h3' icon color='black'>
        Add Assignment
      </Header>
      <Form size='large' textAlign='left'>
        <Segment>    

      
          <Form.Field>
            <label>Class Name:</label>
            <input name='class' placeholder='Type your class name' onChange={(event) => setEmail(event.target.value)} type='text' />
          </Form.Field>

          <Form.Field>
            <label>Subject</label>
            <input name='subject' placeholder='Type your subject' onChange={(event) => setPassword(event.target.value)} type='text' />
          </Form.Field>
          <Form.Field>
            <label>Google Drive Link</label>
            <input name='topic' placeholder='Copy & Paste Google drive link' onChange={(event) => setPassword(event.target.value)} type='text' />
          </Form.Field>

          <Button color='Gray' fluid size='large'>Create Assignment </Button>  
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
    </div>
  )
}