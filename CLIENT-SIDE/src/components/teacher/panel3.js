import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function Panel3() {
  return (
    <div><br/>
       <Grid centered verticalAlign='middle' className='panel3'>
    <Grid.Column style={{ maxWidth : 450 }}>
    <Icon name='paper plane' color='green' />
      <Header as='h3' icon color='black'>
        Add Class
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
            <label>Topic</label>
            <input name='topic' placeholder='Type your topic' onChange={(event) => setPassword(event.target.value)} type='text' />
          </Form.Field>
          <Form.Field>
            <label>Zoom Link</label>
            <input name='topic' placeholder='Paste your zoom meeting link' onChange={(event) => setPassword(event.target.value)} type='text' />
          </Form.Field>

          <Button color='Gray' fluid size='large'>Create Class</Button>  
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
    </div>
  )
}