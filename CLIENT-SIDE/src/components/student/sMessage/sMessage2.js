import React from "react";
import { Form, Header, Dropdown } from "semantic-ui-react";

const options = [
  { key: "2", text: "2", value: "2" },
  { key: "4", text: "4", value: "4" },
  { key: "5", text: "5", value: "5" },
  { key: "6", text: "6", value: "6" },
  { key: "7", text: "7", value: "7" }
];

const options1 = [
  { key: "A", text: "A", value: "A" },
  { key: "B", text: "B", value: "B" },
  { key: "C", text: "C", value: "C" }
];

const options2 = [
  { key: "John Kennedy", text: "John Kennedy", value: "John Kennedy" },
  { key: "Martin Joseph", text: "Martin Joseph", value: "Martin Joseph" },
  { key: "Elizabeth Olsen", text: "Elizabeth Olsen", value: "Elizabeth Olsen" }
];

export default function SMessage2() {
  return (
    <div>
      <Header
        as="h2"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__IeTdC8eAVFmWMSIpf-3kqilO6CbV9ly5g&usqp=CAU"
        content="Send a Message"
      />
      <hr />
      <Form>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Teacher Name</label>
            <Dropdown
              placeholder="Select Teacher"
              fluid
              multiple
              selection
              options={options2}
            />
          </Form.Field>
        </Form.Group>
        <Form.TextArea label="Message" placeholder="Type your messsage..." />

        <Form.Button>Send</Form.Button>
      </Form>
    </div>
  );
}
